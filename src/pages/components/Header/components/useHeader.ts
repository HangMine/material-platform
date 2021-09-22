
import { fetchChildCategory } from '@/api/material';
import routes from '@/router/routes';
import {
  reactive, toRefs, markRaw, ref, onMounted, watch, computed,
} from 'vue';
import { useRoute } from 'vue-router';
import { t } from '@/i18n/index';
import { getHomeRedirect, mainComponent } from '@/pages/login/utils/loginStore';
import { M } from 'ts-toolbelt';

type HeaderTab = '首页' | '材料库' | '颜色库' | '商家中心' | '';
type TabList = { id: string, name: string }[];
const headerTab = ref<HeaderTab>('首页');
const showSearch = ref(false);
const keywords = ref('');
const searchImageFile = ref<undefined | File>();
// const tabList = ref<TabList>();
const tabList = computed(() => {
  return [
    {
      id: '首页',
      name: t('buyer.home_page'),
      async path() {
        // const homeRoute = await getHomeRedirect();
        // return homeRoute;
        return '/buyer/home';
      },
    }, {
      id: '材料库',
      name: t('buyer.material_library'),
      path: '/search/base',
    }, {
      id: '颜色库',
      name: t('menu-management.color_card_management'),
      children: [
        {
          id: 'coloro',
          name: t('folder.coloro_color_library'),
          path: '/buyer/color/coloro-gradient',
        },
        {
          id: 'pantone',
          name: t('folder.pantone_color_library'),
          path: '/buyer/color/pantone-gradient',
        },
        {
          id: 'colorBook',
          name: t('folder.my_color_card'),
          path: '/buyer/color-card-book',
        },
      ],
    },
    {
      id: '商家中心',
      name: t('buyer.merchant_center'),
      path: '/merchant/home',
    },
    {
      id: '品牌推荐会',
      name: t('menu-management.brand_recommendation'),
      children: [
        {
          id: '总览',
          name: t('menu-management.brand_recommendation_overview'),
          path: '/buyer/brand-recommendation/overview',
        },
        {
          id: '推荐会列表',
          name: t('menu-management.brand_recommendation_list'),
          path: '/buyer/brand-recommendation/list',
        },
      ],
    },
  ];
});


/**
 *
 * 递归构建扁平映射
 * @param {*} list
 * @param {string} [val] 映射对象的值. level=1时取自身的name, 之后的级别都取父级的name
 * @return {*}
 */
export type tabItemInfo = { id: string, name: string, path?: string | ((...arg: any[]) => Promise<string>), children?: tabItemInfo[] };
const _generateRecursion = async (list: tabItemInfo[], val?: string) => {
  const res = await list.reduce(async (map, item) => {
    if (!item.children) {
      let _path = item.path;
      if (typeof _path === 'function') {
        _path = await _path();
      }
      const _map = await map;
      _map[_path] = val ?? item.name;
      return _map;
    }
    const _subMap = await _generateRecursion(item.children, val ?? item.name);
    return { ...(await map), ..._subMap };
  }, { });
  return res;
};

let flattenRouteMap = { };

(async () => {
  flattenRouteMap = await _generateRecursion(tabList.value);
  console.log(flattenRouteMap);
})();


const useHeader = () => {
  const route = useRoute();
  const state = reactive({
    keywords, // 头部的搜索关键字,用到的地方通过watch监听
    searchImageFile, // 头部以图搜图的图片,用到的地方通过watch监听
    tab: headerTab,
    showSearch,
    tabList,
  });

  // watch(headerTab, () => {
  //   if (!headerTab.value) return;
  //   keywords.value = '';
  // });
  // watch(keywords, () => {
  //   if (!keywords.value) return;
  //   headerTab.value = '';
  // });
  if (route) {
    watch(() => route.fullPath, async (fullPath) => {
      // 设置tabRoute的状态
      // const routeMap = {
      //   '/buyer/home': t('buyer.home_page'),
      //   '/merchant/home': t('buyer.merchant_center'),
      //   '/search/base': t('buyer.material_library'),
      // };
      // 首页或者商家中心路由
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(flattenRouteMap)) {
        if (fullPath.includes(key)) {
          headerTab.value = value as HeaderTab;
          return;
        }
      }
      // 颜色库路由
      // const colorLibaryRouteKeys = ['/color/coloro-gradient', '/buyer/color-card-book'];
      // if (colorLibaryRouteKeys.some(key => fullPath.includes(key))) {
      //   headerTab.value = t('menu-management.color_card_management');
      //   return;
      // }
      // 其他路由
      headerTab.value = '';
    }, { immediate: true });
  }


  return state;
};

export default useHeader;
