import {
  RouteRecordRaw,
} from 'vue-router';
import { withProps } from '@/public-utils/router/props';
import Header from '@/pages/components/Header/index.vue';
import { generateAutoRoute } from '../public-utils/router/generate-auto-route';

const login = generateAutoRoute({
  path: '/login',
  name: 'login',
  requireContext: require.context('@/pages/login', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];

const buyer = generateAutoRoute({
  path: '/buyer',
  name: 'buyer',
  requireContext: require.context('@/pages/buyer', true, /\.(vue|[jt]sx?)$/, 'lazy'),
  components: {
    header: Header,
  },
}) as RouteRecordRaw[];


const search = generateAutoRoute({
  path: '/search',
  name: 'search',
  requireContext: require.context('@/pages/search', true, /\.(vue|[jt]sx?)$/, 'lazy'),
  components: {
    header: Header,
  },
}) as RouteRecordRaw[];

const merchant = generateAutoRoute({
  path: '/merchant',
  name: 'merchant',
  requireContext: require.context('@/pages/merchant', true, /\.(vue|[jt]sx?)$/, 'lazy'),
  components: {
    header: Header,
  },
}) as RouteRecordRaw[];

const news = generateAutoRoute({
  path: '/news',
  name: 'news',
  requireContext: require.context('@/pages/news', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];

const policy = generateAutoRoute({
  path: '/policy',
  name: 'policy',
  requireContext: require.context('@/pages/policy', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];

const profile = generateAutoRoute({
  path: '/profile',
  name: 'profile',
  requireContext: require.context('@/pages/profile', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];

const test = generateAutoRoute({
  path: '/test',
  name: 'test',
  requireContext: require.context('@/pages/test', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];
const applyRecordBuyer = generateAutoRoute({
  path: '/applyRecordBuyer',
  name: 'applyRecordBuyer',
  requireContext: require.context('@/pages/applyRecordBuyer', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];


const helpCenter = [{
  path: '/help-center',
  name: 'help-center',
  components: {
    header: Header,
    default: () => import('@/pages/help-center/index.vue'),
  },
  children: [
    {
      name: 'MainHelpCenterIndex',
      path: '', // vue-router3 是 '/'
      components: {
        default: () => import('@/pages/help-center/components/index.vue'),
      },
      meta: {
        title: 'Help Center',
      },
    },
    {
      name: 'MainHelpCenterArticle',
      path: 'article/:pathMatch(.*)', // vue-router3 是 '*'
      components: {
        default: () => import('@/pages/help-center/components/Article.vue'),
      },
      meta: {
        title: 'Help Center',
        scrollCachePropKeys: ['path', 'pathMatch'],
      },
      props: {
        default: withProps(),
      },
    },
  ],
}];


const share = generateAutoRoute({
  path: '/share',
  name: 'share',
  requireContext: require.context('@/pages/share', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];

const shareValidation = generateAutoRoute({
  path: '/share-validation',
  name: 'share-validation',
  requireContext: require.context('@/pages/share-validation', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];

// 临时增加一个空白页以容纳权限错误的跳转,后续如增加404页后替换
// const error = [
//   {
//     path: '/error/404',
//     name: 'error-page',
//     components: {
//       header: Header,
//       default: () => import('@/pages/error/404.vue'),
//     },
//   },
// ];

const main = [
  ...generateAutoRoute({
    path: '/main',
    name: 'main',
    requireContext: require.context('@/pages/main', true, /\.(vue|[jt]sx?)$/, 'lazy'),
    components: {
      header: Header,
    },

  }) as RouteRecordRaw[],
];


const pcPages = [
  ...login,
  ...buyer,
  ...search,
  ...merchant,
  ...news,
  ...policy,
  ...profile,
  ...helpCenter,
  ...share,
  ...shareValidation,
  ...test,
  ...main,
  ...applyRecordBuyer,
  // ...error,
] as RouteRecordRaw[];

// const pcPages = generateAutoRoute({
//   path: '',
//   name: '',
//   requireContext: require.context('@/pages', true, /\.(vue|[jt]sx?)$/, 'lazy'),
// }) as RouteRecordRaw[];

const mobilePages = generateAutoRoute({
  path: '/mobile',
  name: '',
  requireContext: require.context('@/mobile/pages', true, /\.(vue|[jt]sx?)$/, 'lazy'),
}) as RouteRecordRaw[];


const routes: Array<RouteRecordRaw> = [
  ...pcPages,
  ...mobilePages,
];

export default routes;
