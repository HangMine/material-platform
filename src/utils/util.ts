/* eslint-disable import/prefer-default-export */
import { isMobileRoute } from '@/router/utils/mobile';
import extract from '@4dst-saas/public-utils/dist/extract';
import keys from '_/keys';
import { App } from 'vue';
import envs from './envs';
import isDataPipeUrl from './is-data-pipe-url';
import { isOssUrl, signUrl } from './oss/utils';

export const getPx = (target: string | number) => {
  return typeof target === 'number' ? `${target}px` : target;
};

type ElOrSelector = HTMLElement | string;
export const getEl = (elOrSelector: ElOrSelector) => {
  if (!elOrSelector) return undefined;
  if (elOrSelector instanceof HTMLElement) {
    return elOrSelector;
  }
  return document.documentElement.querySelector(elOrSelector) as HTMLElement;
};


export const objUtil = {
  keys,
  pick: extract,
  omit<O extends Obj, K extends keyof O>(obj: O, omitKeys: K[] = []) {
    const omitKeysMap = omitKeys.reduce((_obj, key) => {
      _obj[key] = true;
      return _obj;
    }, { } as Record<keyof O, true>);
    return keys(obj).reduce((_obj, key) => {
      if (!omitKeysMap[key]) _obj[key] = obj[key];
      return _obj;
    }, { } as O);
  },
};


export async function getDownloadUrl(url: string, name?: string) {
  const hasSearch = url.includes('?');
  const prefix = hasSearch ? '&' : '?';
  const contentDisposition = encodeURIComponent(`attachment${name ? `;filename=${name}` : ''}`);
  if (isDataPipeUrl(url)) {
    return `${url}${prefix}response-content-disposition=${contentDisposition}`;
  } if (isOssUrl(url)) {
    return signUrl(`${url}${prefix}response-content-disposition=${contentDisposition}`);
  }
  return url;
}

export const downloadByURL = async (url: string, name: string) => {
  url = await getDownloadUrl(url, name);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
};

export const download = async (url: string, name: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
};


export const isMobile = () => {
  const mobileKeys = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  const { userAgent } = navigator;
  return mobileKeys.some((key) => {
    return userAgent.includes(key);
  });
};

export const getApp = async () => {
  let app: App;
  let extendRootApp: (app: App) => void;
  if (isMobileRoute()) {
    console.log('手机');
    app = (await import('@/mobile/app')).default;
    extendRootApp = (await import('@/mobile/main')).extendRootApp;
  } else {
    console.log('PC');
    app = (await import('@/app')).default;
    extendRootApp = (await import('@/pc-main')).extendRootApp;
  }
  return { app, extendRootApp };
};

// 获取微信阿里云的静态图片
export const getAssetsImg = (relativePath: string, basePath = 'images/') => {
  relativePath = relativePath.replace(/^\//, '');
  basePath = basePath.replace(/^\//, '').replace(/\/$/, '');
  return `https://sdtc-frontend.oss-cn-shenzhen.aliyuncs.com/wxapp/idealab/${envs.VUE_APP_BRIEF_MODE}/${basePath}/${relativePath}`;
};

