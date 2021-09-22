import axios, { axiosEncrypt, DefaultResponse } from '@/utils/axios';
import Company from '@/models/Company';
import originalAxios from 'axios';
import envs from '@/utils/envs';
import tokenUtils from '@/utils/token';
import Cookies from 'js-cookie';

export type AccountItem = {
  userId: string
  account: string
  isOrgAdmin: number; // 是否为企业管理员
  name: string
  mobile: string
  organizeId: string
  organizeInfo?: { organizeId: string, organizeName: string }; // 所属组织信息
  roleIds: string[]; // 所属角色
  roleInfos?: { roleId: string, roleName: string }[]; // 所属角色信息
  isForbid?: 0 | 1; // 是否禁用, 0-否|1-是
};

/**
 * 获取管道图片的访问权限
 * @return {string}
 */
export const fetchPipeResourceAuth = async () => {
  const url = `//${envs.VUE_APP_API_DOMAIN}/metaData/storageService/getResourceAuth?t=${Date.now()}`;
  const apiRes = (await originalAxios.get<DefaultResponse<string>>(url,
    {
      withCredentials: true,
      headers: {
        token: tokenUtils.get(),
      },
    })).data;
  const authToken = apiRes.data;
  Cookies.set('rest', authToken); // 原本是服务端设置,需要跟服务端定好这个值
  return authToken;
};


/**
 * 获取当前企业管理员的功能列表（全量功能列表）
 * @return {*}
 */
export const fetchRoleAdminAuthFuns = async () => {
  return (await axios({
    method: 'get',
    url: '/authcenter/getRoleAdminAuthFuns',
    // params: { userId },
  })).data;
};

/**
  *
  * 获取当前认证状态(可用于判断是否提交过认证申请)
  * @return {*}
  */
export const fetchAuthentifyStatus = async () => {
  return (await axios({
    method: 'get',
    url: '/authcenter/v1.0/account/cert-info',
  })).data;
};

/**
  *
  * 获取当前升级信息(可用于判断是否提交过升级申请)
  * @return {*}
  */
export const fetchSubmitedUpgradeInfo = async () => {
  return (await axios({
    method: 'get',
    url: '/authcenter/v1.0/account/upgrade/info',
  })).data;
};
/**
  *
  *申请认证
  * @param {} data
  * @return {*}
  */
export const applyCertificate = async (data: { userId: string, companyAttachInfo: Partial<Company> }) => {
  return (await axios({
    method: 'post',
    url: '/authcenter/v1.0/account/authentication',
    data,
  })).data;
};


/**
  *
  *申请升级企业账号
  * @param {} data
  * @return {*}
  */
export const applyUpgrade = async (data: Partial<Company>) => {
  return (await axios({
    method: 'post',
    url: '/authcenter/v1.0/account/upgrade',
    data,
  })).data;
};

/**
 * 获取公司资源配置及使用量(进度条数据)
 * @return {*}
 */
export const fetchResourceUsageInfo = async () => {
  return (await axios({
    method: 'get',
    url: '/authcenter/v1.0/resource/used',
  })).data;
};

/**
 * 获取用户权限列表
 * @return {*}
 */
export const fetchUserOperationAuth = async () => {
  return (await axios({
    method: 'get',
    url: '/authcenter/operation/auth/user',
  })).data;
};

/* ===================================权限表展示====================================== */
export type ServiceConfig = {
  account: number, // FIM 账号数量
  allStorage: number, // 存储容量(全部账号)
  createProject: number, // 可建项目数
  everystorage: number, // 存储容量(每个账号)
  expireTime: number, // 有效期，天
  renderer: number, // 渲染次数
  materialUpload?: number, // 面料平台上传数量
};

export type PackageInfo = {
  id: string,
  name: string,
  appId: string,
  authStatus: number,
  businessType?: string,
  code: string,
  funcList: string[],
  serviceConfList: ServiceConfig,
  classCode?: string,
  nextClassName?: string,
};

export type OperationAuthority = {
  childAuthFuns?: OperationAuthority[] | [],
  description: string,
  id: string,
  name: string,
  treeCode: number,
};
/**
 * 获取平台及操作权限(全量权限表, 不含勾选)
 * @return {*}
 */
export const fetchPlatformAndOperationAuthority = async () => {
  return (await axios<OperationAuthority[]>({
    method: 'get',
    url: '/authcenter/getRoleAdminOperationAuthority',
  })).data;
};

/**
 * 获取所有套餐信息(勾选权限)
 * @return {*}
 */
export const fetchAllPackageAuthority = async () => {
  return (await axios<PackageInfo[]>({
    method: 'get',
    url: '/authcenter/v1.0/tenant/package/all',
  })).data;
};
/* ===================================end 权限表展示====================================== */


/* ===================================用户资源统计====================================== */
export enum AppStatusEnum {
  '未开通' = 0,
  '待审核' = 1,
  '已开通' = 2,
  '拒绝' = 3,
  '过期' = 4,
}

export type AppItem = {
  id: string,
  name: string,
  note: string,
  openExpireTime?: string, // 应用过期时间
  status: AppStatusEnum,
  price: {priceStr: string, price: number, days: number, oldPrice: number, funCode?: string},
  imgsJson?: string[],
  resourcesConf?: Record<string, number>
  // roleType: 11
};

/**
 * 获取功能应用列表
 * @return {*}
 */
export const fetchAppPayResourcesList = async (data: {
  appId?: '100' | '200',
  roleType: number,
  keyword?: string | null,
  pageNumber: number,
  pageSize: number,
}) => {
  data.appId = envs.VUE_APP_REQUEST_APP_ID;
  if (data.keyword === '') {
    data.keyword = null;
  }
  return (await axios.post<TableData<AppItem>>('/authcenter/appPayResources/getAppPayResourcesList', data)).data?.records ?? [];
};
// /**
//  * 获取已使用资源数量
//  * @return {*}
//  */
// export const fetchUserResourceUsageItem = async (type?: string) => {
//   return (await axios.get<PackageItem[]>('/idealab-material/resource/used', { params: { type } })).data;
// };

export type resourceType = 'STORAGE'|'PRINT'|'APPLY'|'COLOR_BOOK'|'MAT_BOOK';
/**
 * 获取已使用资源数量集合
 * @return {*}
 */
export const fetchUserResourceUsageList = async () => {
  return (await axios.get<{type: resourceType, count: number}[]>('/idealab-material/resource/list')).data;
};

/**
 * 增加统计数量
 * @return {*}
 */
export const increateUserResourceUsage = async (data: {
  type: string,
  num: number,
}) => {
  return (await axios.post('/idealab-material/resource/increase', data)).data;
};

/**
 * 减少统计数量
 * @return {*}
 */
export const reduceUserResourceUsage = async (data: {
  type: string,
  num: number,
}) => {
  return (await axios.post('/idealab-material/resource/depress', data)).data;
};

/* ===================================用户资源统计====================================== */
