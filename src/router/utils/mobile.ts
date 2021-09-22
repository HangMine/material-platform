
import { isMini } from '@/mobile/utils/util';
import AppError from '@/utils/error';
import { isMobile } from '@/utils/util';
import { RouteLocation } from 'vue-router';
import router from '..';

export const MOBILE_TIP_ROUTE = '/mobile/tip';
export const isMobileRoute = (to?: RouteLocation): boolean => (to?.path || window.location.pathname).startsWith('/mobile');
export const isMobileTip = (to?: RouteLocation): boolean => (to?.path || window.location.pathname).startsWith(MOBILE_TIP_ROUTE);
export const isMobilePreview = (to?: RouteLocation): boolean => (to?.path || window.location.pathname).startsWith('/mobile/preview');


export const mobileBeforeEach = (to: RouteLocation): boolean => {
  if (isMobileTip(to)) {
    return false;
  }
  if (isMobile() && !isMobileRoute(to)) {
    router.push(MOBILE_TIP_ROUTE);
    return false;
  }
  return true;
};

export const getMobileLoginRedirect = () => {
  const route = router.currentRoute;
  if (isMobileTip(route.value)) return false;
  // if (isMobilePreview(route.value)) {
  //   // 如果是手机端的3D渲染,不跳转登录页,提示token过期,返回小程序
  //   return {
  //     path: MOBILE_TIP_ROUTE,
  //     query: {
  //       encodeMessage: encodeURIComponent('token过期,请返回小程序重新登录'),
  //     },
  //   };
  // }
  return false;
};
