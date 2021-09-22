/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { axiosEncrypt, DefaultResponse } from '@/utils/axios';
import { User } from '@/models/User';
import { Company, CompanyInfo } from '@/models/Company';
import tokenUtils from '@/utils/token';

import Cookies from 'js-cookie';

type Platform = '1' | '2'; // 1=ideation,2=材料平台
export type AccountType = 11 | 12;// 11=供应商,12=买家
type Channel = '0' | '1' | '2'; // 0=普通注册，1=微信公众号，2=微信小程序
export type CodeType = 'REGISTER' | 'LOGIN' | 'UPDATE_PASS';
type Terminal = 'WEB' | 'CLIENT' | 'SCANNER' | 'MOBILE';
export type QRcodeStatus = '1' | '2' | '3' | '4' | '5';// 1=待扫描，2=已扫描-未关注，3=已关注-待注册,4=已关注-已登录,5=已失效

const handleData = (data: Obj) => ({ platform: '2' as const, terminal: 'WEB', ...data });

// 检查token是否有效
export const isTokenEffective = async (data: { token?: string }) => {
  if (!data.token) return false; // 如果token为空，直接返回false
  const url = '/authcenter/mp/uc/token/effective';
  const res = (await axios.post<boolean>(url, handleData(data))).data;
  return res;
};

// 查重
export const duplicate = async (data: { account: string }) => {
  const url = '/authcenter/mp/uc/register/duplicate';
  const res = await axios.post(url, handleData(data));
  return res;
};

// 注册
export const register = async (data: {
  account: string,
  pw: string,
  code: string,
  type: AccountType,
  channel: Channel,
  scene?: string
}) => {
  const url = '/authcenter/mp/uc/register';
  const res = await axios.post(url, handleData(data));
  return res;
};

// 注册并登录
export const registerAndLogin = async (data: {
  account: string,
  pw: string,
  code: string,
  type: AccountType,
  channel: Channel,
  scene?: string
}) => {
  const url = '/authcenter/mp/uc/register/login';
  const res = await axios.post<string>(url, handleData(data));
  return res;
};

// 账号登录
export const accountLogin = async (data: {
  account: string,
  pw: string,
  scene?: string
}) => {
  const url = '/authcenter/mp/uc/login/pw';
  const res = await axios.post(url, handleData(data));
  return res;
};

// 验证码登录
export const codeLogin = async (data: {
  account: string,
  code: string,
  scene?: string
}) => {
  const url = '/authcenter/mp/uc/login/code';
  const res = await axios.post(url, handleData(data));
  return res;
};

// 重置密码
export const resetPassword = async (data: {
  account: string,
  pw: string,
  code: string,
}) => {
  const url = '/authcenter/mp/uc/login/reset';
  const res = await axios.post(url, handleData(data));
  return res;
};

// 获取验证码
export const fetchCode = async (data: {
  account: string,
  ticket: string,
  randstr: string,
  type: CodeType
}) => {
  const url = '/authcenter/v1.0/verify/code/send';
  const res = await axios.post(url, handleData(data));
  return res;
};

// 校验验证码
export const checkCode = async (data: {
  account: string,
  code: string,
  ticket: string,
  randstr: string,
  type: CodeType
}) => {
  const url = '/authcenter/mp/uc/verifycode/check';
  const res = await axios.post(url, handleData(data));
  return res;
};

// 微信扫码二维码获取
export const fetchQrcode = async () => {
  const url = '/authcenter/mp/uc/wx/qrcode';
  const res = await axios.post<{ scene: string, url: string }>(url, handleData({}));
  return res;
};

// 微信扫码状态查询
export const fetchQrcodeResult = async (data: {
  scene: string,
}) => {
  const url = '/authcenter/mp/uc/wx/qrcode/status';
  const res = await axios.post<{ status: QRcodeStatus, token: string }>(url, handleData(data));
  return res;
};

// 根据 token 获取账户信息
// export const fetchUserInfo = async () => {
//   const res = (await axios.post<User>('/authcenter/mp/uc/token/info', {
//     token: tokenUtils.get(),
//   })).data;
//   return res;
// };

// 根据 token 获取所以公司的信息
export const fetchUserCompany = async (id?: string) => {
  return id
    ? (await axios.get<Company>('/authcenter/v1.0/tenant/detail', { params: { companyId: id } })).data
    : (await axios.get<Company>('/authcenter/company/get/info', {
      params: {
        token: tokenUtils.get(),
      },
    })).data;
};

// 获取用户基础信息
export const fetchUserInfo = async () => {
  const res = (await axios.get<User>('/authcenter/user/info/get')).data;
  return res;
};

// 修改用户基础信息
export const updateUserInfo = async (data: Partial<User>) => {
  const res = (await axios.post<User>('/authcenter/user/account/update', data)).data;
  return res;
};

// 获取用户所属公司的信息
// export const fetchUserCompanyInfo = async () => {
//   const res = (await axios.get<Company>('/idealab-material/company/info')).data;
//   return res;
// };

// 修改用户所属公司的信息
export const updateUserCompanyInfo = async (data: Partial<Company>) => {
  const res = (await axios.post<Company>('/authcenter/company/update/info/v2', data)).data;
  return res;
};

// 修改用户密码
export const updatePassword = async (data: {
  pass: string,
  newPass: string,
}) => {
  const res = (await axios.post('/authcenter/user/pass/update', data)).data;
  return res;
};

// 修改绑定账号
export const updateAccount = async (data: {
  code: string,
  pw: string,
  newAccount: string,
  account: string,
  platform: string,
}) => {
  const res = (await axios.post('/authcenter/mp/uc/reset/account', data)).data;
  return res;
};

// 获取用户审核状态
// export const fetchUserAuditStatus = async () => {
//   const res = (await axios.get<number>('/authcenter/mp/cc/status/upgrade')).data;
//   return res;
// };

// 完善升级信息
interface ImproveAccountParams {
  addressCountry: string,
  addressProvince: string,
  addressCity: string,
  businessModel: string,
  leadingProduct: string,
  name: string,
  address?: string,
  city?: string,
  businessScope?: string,
  landline?: string,
}
export const improveAccount = async (params: ImproveAccountParams) => {
  const res = (await axios.post<boolean>('/authcenter/mp/cc/upgrade/improve', params));
  return res;
};

// 提交升级申请
export const submitImprove = async () => {
  const res = (await axios.post<boolean>('/authcenter/mp/cc/upgrade/submit'));
  return res;
};
interface BaseAddressItem {
  fullZhName: string,
  fullEnName: string,
  id: string,
}
export interface CountryItem extends BaseAddressItem {
  countryCode: string,
}
export interface ProvinceItem extends BaseAddressItem {
  provinceCode: string,
  countryId: string,
}
export interface CityItem extends BaseAddressItem {
  cityCode: string,
  provinceId: string,
}
export interface DistrictItem extends BaseAddressItem {
  districtCode: string,
  cityId: string,
}
export type AddressItem = CountryItem | ProvinceItem | CityItem | DistrictItem;
interface addressParams {
  ids?: string[],
  parentIds?: string[]
}
// 获取国家列表
export const fetchCountryList = async (params: addressParams) => {
  const res = (await axios.post<CountryItem[]>('/authcenter/mp/address/country', params)).data;
  return res;
};

// 获取省列表
export const fetchProvinceList = async (params: addressParams) => {
  const res = (await axios.post<ProvinceItem[]>('/authcenter/mp/address/province', params)).data;
  return res;
};

// 获取市区列表
export const fetchCityList = async (params: addressParams) => {
  const res = (await axios.post<CityItem[]>('/authcenter/mp/address/city', params)).data;
  return res;
};

// 获取县区列表
export const fetchDistrictList = async (params: addressParams) => {
  const res = (await axios.post<DistrictItem[]>('/authcenter/mp/address/district', params)).data;
  return res;
};

// 根据 ID 获取所以公司的信息
export const fetchUserCompanyID = async (companyId: string) => {
  const res = (await axios.get<CompanyInfo>('/authcenter/company/get/info/id', {
    params: {
      id: companyId,
    },
  })).data;
  return res;
};

/**
 * 获取用户关联的公司列表(根据token)
 * @param {Object} data 登录信息
 * @returns {Promise}
 */
export const fetchBelongCompaniesList = async () => {
  return (await axios.get<Company[]>('/authcenter/v1.0/account/tenant/relate')).data;
};

/**
 * 账户初始化
 * @param {Object} data 登录信息
 * @returns {Promise}
 */
export const initializeAccount = async (type: number) => {
  return (await axios.post('/authcenter/v1.0/account/init/material-platform', { type })).data;
};
