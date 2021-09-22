const DEV = 'development';
const SIT = 'staging';
const UAT = 'uat';
const ART = 'art';

const module2env = (module: string) => {
  const map: Obj = {
    'dev-meterial': DEV,
  };
  return map[module] ?? DEV;
};

const parseUrl = () => {
  const { hostname, pathname } = window.location;
  const [TLD, FLD, module] = hostname.split('.').reverse();
  return {
    hostname,
    pathname,
    TLD,
    FLD,
    module,
  };
};

const {
  hostname, pathname, TLD, FLD, module,
} = parseUrl();
const env = module2env(module);

const getCookieDomain = () => {
  // 暂时设置默认值true, 后续搞清楚VUE_APP_IS_REMOTE的作用和赋值
  const { VUE_APP_IS_REMOTE: isRemote = true } = process.env;
  let cookieDomain: string;
  if (isRemote) {
    cookieDomain = hostname.split('.').slice(-2).join('.');
  } else {
    cookieDomain = hostname;
  }
  return cookieDomain;
};

const getPolicyUrl = () => {
  // const policyEnv = env === SIT ? DEV : env;
  return `//sdtc-public-picture.4dshoetech.com/material-library/config/${process.env.VUE_APP_MODE}/privacy`;
};


const mode = process.env.VUE_APP_MODE ?? 'development';

const env2Mode = {
  sit: 'sit',
  uat: 'uat',
  staging: 'sit',
  development: 'dev',
  local: 'local',
  production: 'production',
};

export const _briefMode = env2Mode[mode as keyof typeof env2Mode];

const env2HostName = {
  local: '//localhost:9400',
  dev: '//usercenter.dev.4dstc.com',
  sit: '//usercenter.sit.4dstc.com',
  uat: '//usercenteruat.4dshoetech.com',
  production: '//usercenter.4dshoetech.com',
};

const userCenterHostUrl = env2HostName[_briefMode as keyof typeof env2HostName];

const getHelpCenterUrl = () => {
  const policyEnv = [DEV, SIT].includes(mode) ? 'sit' : mode;
  return `//sdtc-public-picture.4dshoetech.com/help-center/${policyEnv}/idealab`;
};

// 为了兼容poc环境,判断较为粗暴
const getApiDomain = () => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { hostname } = window.location;
  const isPoc = hostname.includes('poc');
  const POC_DOMAIN = 'poc.4dshoetech.com';
  if (isPoc) return POC_DOMAIN;
  return process.env.VUE_APP_REMOTE_DOMAIN;
};

export default {
  VUE_APP_OSS_SIGN: !!process.env.VUE_APP_OSS_SIGN,
  VUE_APP_API_DOMAIN: getApiDomain(),
  // VUE_APP_API_DOMAIN: mode2ApiDomain[mode],
  VUE_APP_MODE: mode,
  VUE_APP_BRIEF_MODE: _briefMode,
  VUE_APP_LOGIN_URL: '/login',
  VUE_APP_IS_REMOTE: process.env.VUE_APP_IS_REMOTE,
  VUE_APP_VERSION_HASH: process.env.VUE_APP_VERSION_HASH,
  VUE_APP_CAPTCHA_APP_ID: process.env.VUE_APP_CAPTCHA_APP_ID,
  VUE_APP_COOKIE_DOMAIN: getCookieDomain(),
  VUE_APP_POLICY_URL: getPolicyUrl(),
  VUE_APP_HELP_CENTER_URL: getHelpCenterUrl(),
  VUE_APP_REQUEST_APP_ID: '200',
  VUE_APP_USER_CENTER_HOST_NAME: userCenterHostUrl,
  VUE_APP_ORIGIN_TYPE: 'MATERIAL',
  VUE_APP_FREEZING_INDEX_URL: `${userCenterHostUrl}/logoff/cancel`, // 冻结状态下的跳转页面
  VUE_APP_DATAPIPE_ART_URL: process.env.VUE_APP_DATA_PIPE_ART_URL,
};
