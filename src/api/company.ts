/** @typedef { import('@/models/Company').default } Company */
import Company from '@/models/Company';
import axios, { axiosEncrypt } from '@/utils/axios';

/**
 * 根据用户token获取所在公司的信息
 * @param {string} [id] 公司id
 * @returns {Promise<{data: Company}>}
 */
export const fetchCompanyInfo = async (id?: string) => {
  return id
    ? (await axios.get<Company>('authcenter/v1.0/tenant/detail', { params: { companyId: id } })).data
    : (await axios.get<Company>('authcenter/company/get/info')).data;
};


// 获取公司套餐信息
export const fetchCompanyPackageInfo = async () => {
  return (await axios.get('/authcenter/v1.0/tenant/package')).data;
};

/**
  *
  * 当前用户在该租户中是否为管理员
  * @return {*}
  */
export const fetchIsAdminInCurrentTenant = async () => {
  return (await axios.get<boolean>('/authcenter/v1.0/account/is-admin')).data;
};

export type VipInfo = {
  isVIP: boolean,
  packageName: string,
  expireTime: string,
};

/**
  *
  * 获取当前用户的会员套餐
  * @return {*}
  */
export const fetchCurrentVipInfo = async () => {
  return (await axios.post<VipInfo>('/authcenter/appPayPackage/getCurrentVIPPackage')).data;
};

/**
  *
  * 获取企业是否完善必填信息
  * @return {*}
  */
export const checkIsFillRequiredInfo = async () => {
  return (await axios.get<boolean>('/idealab-material/merchant/home/checkIsFinishInfo')).data;
};


/**
  *
  * 获取公司类型
  * note: 增加了套餐概念后, 公司信息通过fetchCompanyInfo的type并不准确,
  * 因为按后端设计, type是根据套餐的type确定的, 虽然目前材料平台项目已经没有套餐了,
  * 但FIM注册的用户仍需根据套餐的type来确认公司的type. 所以补充一个专门获取type的接口.返回值理论上应该与套餐接口的type是一样的
  * @return {*}
  */
export const fetchTenantType = async () => {
  return (await axios.get<number>('/authcenter/v1.0/tenant/type')).data;
};
