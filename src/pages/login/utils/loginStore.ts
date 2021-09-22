/* eslint-disable import/prefer-default-export */
import {
  reactive, toRefs, ref, markRaw,
} from 'vue';
import { AccountType } from '@/api/account';
import tokenUtils from '@/utils/token';
import history from '@/utils/history';
import qs from 'qs';
import { getContextUser, updateContextUser } from '@/loaders/context';
import router from '@/router';
import envs from '@/utils/envs';
import { t } from '@/i18n/index';

export const accountType = ref<AccountType>();
export const loading = ref(false);
export const qrcodeScene = ref('');

export const mainComponent = ref({
  name: 'login' as 'login' | 'qr-code' | 'role' | 'register' | 'reset-password' | 'success' | 'verify-code',
  props: {} as Obj,
});

export const getAccountTypeRedirect = async () => {
  let user = getContextUser();
  if (!user) {
    await updateContextUser();
    user = getContextUser();
    if (!user) throw new Error(t('error.get_account_error'));
  }
  // 判断当前是否为冻结状态
  // if (user.status !== 5) {
  //   history.replace({
  //     path: envs.VUE_APP_FREEZING_INDEX_URL,
  //   });
  //   return false;
  // }
  const accountTypeRedirect = '/main/home';
  return accountTypeRedirect;
};

const getUrlRedirect = async () => {
  const urlRedirectObj = qs.parse(window.location.search.match(/^\?(.*)/)?.[1] || '');
  let urlRedirect = (urlRedirectObj.redirect || '') as string;
  // 处理不能识别的路由,包括'/'
  const isUnkownRedirect = router.getRoutes().every(route => {
    return !urlRedirect.includes(route.path);
  });
  // 是否个人中心URL
  const isUserCenterUrl = new RegExp(`https?:${envs.VUE_APP_USER_CENTER_HOST_NAME}`).test(urlRedirect);
  if (!isUserCenterUrl && isUnkownRedirect) {
    urlRedirect = await getAccountTypeRedirect();
  }
  return urlRedirect;
};


export const getHomeRedirect = async () => {
  const accountTypeRedirect = await getAccountTypeRedirect();
  const urlRedirect = await getUrlRedirect();
  const redirect = urlRedirect || accountTypeRedirect;
  return redirect;
};

export const handleLogined = async (token: string) => {
  tokenUtils.set(token);
  const redirect = await getHomeRedirect();
  // if (!redirect) {
  //   return;
  // }
  const parsedHistory = history.parse(redirect);
  history.replace(parsedHistory.fullPathWithDomain);
  accountType.value = undefined;
  qrcodeScene.value = '';
};
