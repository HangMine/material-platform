import { ElMessageBox } from 'element-plus';
// import { useRouter } from 'vue-router';
import history from '@/utils/history';
import envs from '@/utils/envs';
import tokenUtils from '@/utils/token';
import {
  getContextCompany,
} from '@/loaders/context';
import i18n from '@/i18n/index';
import { can as validatorCan } from './validators/can';
import AppError from './error';
import { getMessage } from './error-handler';


// 升级弹框是否已显示.用于避免同时多重校验弹出多个弹框
// let isUpgradeModelVisible = false;

// 功能权限的校验提醒
export const can = (code: string | number | Record<string, string | number> | Boolean, allow = true) => {
  if (envs.VUE_APP_BRIEF_MODE === 'dev') return true; // 开发环境前端绕过权限
  let isValid;

  if (typeof code === 'boolean') {
    isValid = code;
  } else {
    if (typeof code === 'object' && code) {
      const currentPath = history.currentRoute.value.path;
      if (!currentPath) {
        return false;
      }
      code = code[currentPath];
    }
    try {
      validatorCan(code, allow);
      isValid = true;
    } catch (e) {
      isValid = false;
    }
  }

  if (!isValid) {
    // isUpgradeModelVisible = true;
    // ElMessageBox.confirm('您当前属于试用账号，升级为企业账号后获得此功能权限，请确认是否升级？', '', {
    //   confirmButtonText: '确定',
    // }).then(() => {
    //   isUpgradeModelVisible = false;
    //   history.push({ path: `${envs.VUE_APP_USER_CENTER_HOST_NAME || ''}/user-profile/authority`,
    // query: { originType: envs.VUE_APP_ORIGIN_TYPE } });
    // }).catch(() => {
    //   isUpgradeModelVisible = false;
    // });
    throw AppError.auth;
  }
  return isValid;
};

export default can;

// 需登录的校验提醒
export const needLogin = () => {
  const token = tokenUtils.get();
  if (!token) {
    ElMessageBox.confirm('当前处于未登录状态，请注册或登录，查看更多信息', '', {
      confirmButtonText: '前往注册登录页',
    }).then(() => {
      history.push({
        path: envs.VUE_APP_LOGIN_URL,
      });
    });
  }
  return token;
};

// 需填写公司信息的校验提醒
export const needFillInfo = () => {
  const company = getContextCompany();
  const isFilled = company?.isFilled ?? false;
  const isAdmin = company?.isAdmin ?? false;
  if (!isFilled) {
    if (isAdmin) {
      ElMessageBox.confirm('使用该功能需完善公司信息！', '', {
        confirmButtonText: '去完善',
        showClose: false,
      }).then(() => {
        history.push({
          path: `${envs.VUE_APP_USER_CENTER_HOST_NAME}/user-profile/info`,
        });
      });
    } else {
      // 子账户没有填写公司信息权限,直接报权限错误
      const _message = getMessage(AppError.Auth());
      ElMessageBox.alert(_message, i18n.t('public.dialog.notice'));
    }
    return false;
  }
  return true;
};

// 路由权限对照表
const routeCodeMap = new Map([
  [/main\/material-manage/, '0100'],
  [/main\/market/, '0200'],
  [/search\/base/, '0200'],
  [/merchant\/(home|list|detail)/, '0300'],
  [/(share|share-validation)/, '0400'],
  [/followed/, '0500'],
  [/user-center/, '0500'],
  [/news/, '0500'],
  [/help-center/, '0500'],
  [/(namecard)\/index$/, '0501'],
  [/mine-setting\/index$/, '0500'],
  [/collection/, '0600'],
  [/material-menu\/color-/, '0700'],
  [/buyer\/color\//, '0700'],
  [/material-menu\/material-/, '0800'],
  [/data-manage/, '0900'],
  [/applyRecordBuyer/, '1000'],
  [/apply-record/, '1000'],
]);

export const canEnterRoute = (path: string, allow = true) => {
  let isValid;
  const [, code] = [...routeCodeMap].find(([key, val]) => key.test(path)) || [];
  if (!code) {
    isValid = allow;
  }
  try {
    validatorCan(code, allow);
    isValid = true;
  } catch (e) {
    isValid = false;
  }

  // // TODO test code
  // if (path === '/share') {
  //   isValid = false;
  // }
  if (!isValid) {
    ElMessageBox.confirm('当前账号无此权限!', '', {
      confirmButtonText: '确定',
      showCancelButton: false,
      showClose: false,
    }).then(() => {
      // history.push();
    });
  }
  return isValid;
};

// 判断是否卖家专属路由
export const isSupplierSpecificRoute = (currentRoute) => {
  return !/^\/?main\/home/.test(currentRoute) && !/^\/?main\/error\/empty/.test(currentRoute) && /^\/?main\/.+/.test(currentRoute);
};
// export const needAuth = () => {
//   const company = getContextCompany();
//   const isAdmin = company?.isAdmin ?? false;

//   // 当为主账号, 有升级权限, 可跳转到权限表页进行升级. 当为子账号时, 只弹出一般提醒
//   if (isAdmin) {
//     return ElMessageBox.confirm('您当前属于普通账号，升级会员账号后获得此功能权限，请确认是否升级？', '', {
//       confirmButtonText: '确定',
//     }).then(() => {
//       history.push({ path: `${envs.VUE_APP_USER_CENTER_HOST_NAME || ''}/app-center/main`, query: { originType: envs.VUE_APP_ORIGIN_TYPE } });
//     });
//   }
//   const _message = getMessage(AppError.Auth());
//   return ElMessageBox.alert(_message, i18n.t('public.dialog.notice'));
// };

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $can: (
      // groupAppId: string,
      code: string | number | Record<string, string | number>,
      allow?: boolean,
    ) => boolean,
    $needFillInfo: (isMute?: boolean) => boolean,
    $needLogin: () => boolean,
  }
}
