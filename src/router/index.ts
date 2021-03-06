import {
  createRouter, createWebHistory, RouteLocationNormalized, RouteRecordNormalized, RouteRecordRaw, RouteLocation,
} from 'vue-router';
import isNeedLogin from '@/router/utils/is-need-login';
import tokenUtils from '@/utils/token';
import { getContextUser, updateContext } from '@/loaders/context';
import AppError from '@/utils/error';
import axios from '@/utils/axios';
import errHandler, { isAuthError, isNeedLoginError } from '@/utils/error-handler';
import { getHomeRedirect } from '@/pages/login/utils/loginStore';
import { getApp, isMobile } from '@/utils/util';
import confirm from '@/utils/vue/dialog/confirm';
// import { isTokenEffective } from '@/api/account';
import history from '@/utils/history';
import envs from '@/utils/envs';
import { isTokenEffective } from '@/api/account';
import { fetchCategoryByLevel } from '@/api/material';
import usePermisson from '@/utils/uses/use-permisson';
import { ElMessageBox } from 'element-plus';
import { canEnterRoute, isSupplierSpecificRoute } from '@/utils/can';
import routes from './routes';
import { isMobileRoute, isMobileTip, mobileBeforeEach } from './utils/mobile';
import isNeedLoginByToken from './utils/is-need-login-by-token';

let cacheToken: string | undefined;


function getScrollCacheKey(route: RouteLocation) {
  const props = {
    ...route.query,
    ...route.params,
  };
  const cachePropKeys = route.meta.scrollCachePropKeys
    ?? Object.keys(props);
  return cachePropKeys.map((k: string) => {
    return JSON.stringify(props[k]);
  }).join('-');
}

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    const kFrom = getScrollCacheKey(from);
    const kTo = getScrollCacheKey(to);
    if (kFrom && kTo && kFrom === kTo) {
      return undefined;
    }
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash };
    }
    return { left: 0, top: 0 };
  },
});

const handleRootRoute = async () => {
  router.push(await getHomeRedirect());
};

const beforeEachUpdateContext = async (to: RouteLocationNormalized) => {
  const storageToken = tokenUtils.get();
  if (storageToken !== cacheToken) {
    // ??????'/'????????????????????????
    if (to.path === '/') {
      await handleRootRoute();
      return;
    }
    await updateContext();
    cacheToken = storageToken;
  }
};

router.beforeEach(async (to, from) => {
  // ???????????????
  if (!mobileBeforeEach(to)) return;
  // ???????????????token?????????????????????token????????????updateContext???????????????????????????????????????
  if (isNeedLoginByToken(to)) {
    // ???????????????????????????,???????????????????????????,???????????????needLogin??????????????????,???????????????
    const [tokenActive] = await Promise.all([isTokenEffective({ token: tokenUtils.get() }), fetchCategoryByLevel()]);
    if (tokenActive) await beforeEachUpdateContext(to);
    // ??????isNeedLoginByToken???????????????????????????
    if (!canEnterRoute(to.path)) {
      // eslint-disable-next-line consistent-return
      return {
        path: '/main/error/empty',
      };
    }
    return;
  }
  // ????????????
  if (!isNeedLogin(to)) {
    return;
  }
  await beforeEachUpdateContext(to);
  const user = getContextUser();
  if (!user) {
    throw AppError.needLogin;
  }
  console.log(to.path, from.path);
  // ?????????????????????????????????
  if (user.status === 5) {
    // ??????????????????
    if (to.path.includes(envs.VUE_APP_FREEZING_INDEX_URL)) {
      return;
    }
    history.replace({
      path: envs.VUE_APP_FREEZING_INDEX_URL,
    });
    // eslint-disable-next-line consistent-return
    // return {
    //   path: envs.VUE_APP_FREEZING_INDEX_URL,
    //   // replace: true,
    // };
  }
  if (!canEnterRoute(to.path)) {
    // eslint-disable-next-line consistent-return
    return {
      path: '/main/error/empty',
    };
  }

  // ???????????????????????????????????????
  if (isSupplierSpecificRoute(to.path)) {
    const { isBuyer } = usePermisson();
    if (isBuyer.value) {
      ElMessageBox.confirm('?????????????????????', '', {
        confirmButtonText: '??????',
        showCancelButton: false,
        showClose: false,
      }).then(() => {
        history.replace('/main/home');
      });
      // eslint-disable-next-line consistent-return
      return {
        path: '/main/error/empty',
        replace: true,
      };
    }
  }
});

const axiosUnbind = router.afterEach(async (to) => {
  axiosUnbind();
  axios.interceptors.response.use((a) => a, (err) => {
    setTimeout(() => {
      // ?????????handler????????????
      errHandler(err, isAuthError(err) && isNeedLogin(router.currentRoute));
    }, 0);
    return Promise.reject(err);
  });
});

router.onError((err) => {
  setTimeout(() => {
    // TODO  ???403???????????????????????????isNeedLoginError
    if (isAuthError(err)) {
      err.redirect = true;
    }
    errHandler(err);
  }, 0);
});

console.log('??????:\n', router.options.routes);
export default router;
