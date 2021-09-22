import { RouteRecordRaw as RouteConfig, RouteRecord } from 'vue-router';
import { camelCase, hyphen } from '_/case';
import isFunction from '_/is-function';
import {
  BetterRouteConfig, defineBetterRoute, withProps,
} from './props';

// 材料平台的components文件夹默认不注入路由
const DEFAULT_EXCLUDE = /components/;

const rIndex = /^index\.(vue|jsx?|tsx?)$/;
const rFolder = /^[^/]*\//;
const rComponents = /^layout\/([^/]*)(?:\/index)?\.(vue|jsx?|tsx?)$/; // 材料平台注入route的components改为layout关键字
const rName = /^([^.]*)\.(vue|jsx?|tsx?)$/;
type ExcludePattern = RegExp | string | (RegExp | string)[] | ((key: string) => boolean) | undefined;

function excludeSource(keys: string[], pattern: ExcludePattern) {
  if (pattern === undefined) return keys;
  let fnPattern: (key: string) => boolean;
  if (typeof pattern === 'function') {
    fnPattern = pattern;
  } else {
    const arrPattern = Array.isArray(pattern) ? pattern : [pattern];
    fnPattern = (key) => arrPattern.some(p => {
      if (typeof p === 'string') {
        return key.includes(p);
      }
      return p.test(key);
    });
  }
  return keys.filter(item => !fnPattern(item));
}
function baseKeys(keys: string[], basePath: string) {
  return keys.filter(item => item.startsWith(basePath))
    .map(item => item.substr(basePath.length));
}


export function generateAutoRoute<M>(
  {
    path, requireContext, name,
    useComponents = true,
    exclude = DEFAULT_EXCLUDE,
    props = withProps(),
    meta,
    addRoutes,
    components,
  }: Omit<BetterRouteConfig, 'meta'> & {
    meta?: M
    requireContext: __WebpackModuleApi.RequireContext
    useComponents?: boolean,
    exclude?: ExcludePattern,
    addRoutes?: (path: string, routes: RouteConfig[]) => void // 提供一层回调在外面使用
    components?: RouteRecord['components']
  },
  basePath = './',
): (RouteConfig)[] {
  let keys = baseKeys(requireContext.keys(), basePath);
  if (exclude) {
    keys = excludeSource(keys, exclude);
  }
  // 通过文件夹生成的components
  const directComponents = {} as NonNullable<RouteRecord['components']>;
  const indexKeys: string[] = [];
  const folderKeys: { [basePath: string]: string[] } = {};
  const otherKeys: string[] = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (rIndex.test(key)) {
      indexKeys.push(key);
    } else {
      const mComponents = key.match(rComponents);
      if (useComponents && mComponents) {
        directComponents[camelCase(mComponents[1], false)] = () => requireContext(`${basePath}${key}`);
      } else {
        const folderMatch = key.match(rFolder);
        if (folderMatch) {
          folderKeys[folderMatch[0]] = folderKeys[folderMatch[0]] || [];
          folderKeys[folderMatch[0]].push(key);
        } else {
          otherKeys.push(key);
        }
      }
    }
  }
  // ./index
  // ./component
  const result: RouteConfig[] = [];
  let index: RouteConfig | undefined;

  if (indexKeys[0]) {
    const compOptions = requireContext(`${basePath}${indexKeys[0]}`);
    directComponents.default = () => compOptions;
    index = {
      path,
      name,
      props: Object.keys(directComponents).reduce((memo, k) => {
        memo[k] = props;
        return memo;
      }, {} as { [key: string]: RouteConfig['props'] }),
      components: {
        ...directComponents,
        ...components,
      },
      children: [],

    };
  }

  const children = Object.keys(folderKeys).reduce((memo, _basePath) => {
    const filename = _basePath.replace('/', '');
    const _path = hyphen(filename);
    const autoRoutePath = index ? _path : `${path}/${_path}`;
    const autoRoutes = generateAutoRoute({
      name: camelCase(`${name}-${filename}`, true),
      props,
      path: autoRoutePath,
      requireContext,
      useComponents,
      meta,
    }, `${basePath}${_basePath}`);
    const _children = [...memo, ...autoRoutes];
    addRoutes?.(autoRoutePath, autoRoutes);
    return _children;
  }, [] as BetterRouteConfig[]);

  otherKeys.forEach(key => {
    const m = key.match(rName);
    if (m) {
      const [, filename] = m;
      const _path = hyphen(filename);
      children.push({
        path: index ? _path : `${path}/${_path}`,
        name: camelCase(`${name}-${filename}`, true),
        props,
        component: () => requireContext(`${basePath}${key}`),
      });
    }
  });

  if (index) {
    index.children!.push(...children);
    result.push(index);
  } else {
    result.push(...children);
  }

  if (meta !== undefined) {
    result.forEach((it) => {
      if (isFunction(meta)) {
        it.meta = meta(it.path);
      } else {
        it.meta = meta;
      }
    });
  }

  // const listDefineBetterRoute = (routes: RouteConfig[] = result) => {
  //   return routes.map(item => {
  //     if (item.children) {
  //       item.children = listDefineBetterRoute(item.children);
  //     }
  //     return defineBetterRoute(item);
  //   });
  // };

  // return listDefineBetterRoute();

  return result.map(item => {
    return defineBetterRoute(item);
  });
}
export default generateAutoRoute;
