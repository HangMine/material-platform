import { MerchantItem } from '@/models/Merchant';
import { Sections } from '@/pages/components/merchant/components/Diy/utils';
import axios from '@/utils/axios';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';

// 批量处理url的域名
export const fetchBackendUrls = async (urls: string[]) => {
  const newUrls = (await axios.post<string[]>('/idealab-material/merchant/home/oss/util', urls)).data;
  return newUrls;
};

// 获取商家列表
export const fetchMerchantInfo = async (
  params: Partial<{ keywords: string, fields: {}, provinceId: string, products: string[], managements: string[] }>,
) => {
  const res = (await axios.post<MerchantItem[]>('/idealab-material/company/search/all', params)).data;
  return res;
};

// 获取某个商家信息
export const fetchMerchantInfoByOrgId = async (
  params: { orgId: string },
) => {
  const res = (await axios.get<MerchantItem>('/idealab-material/company/getcompanyinfo/orgid', { params })).data;
  return res;
};

// 关注商家
export const addFollowMerchant = async (params: { supplierId: string }) => {
  const res = (await axios.post<boolean>('/idealab-material/follow/add', params)).data;
  return res;
};


// 取消关注商家
export const removeFollowMerchant = async (params: { supplierId: string }) => {
  const res = (await axios.get<boolean>('/idealab-material/follow/remove', { params: { supplierId: params.supplierId } })).data;
  return res;
};

type submitApplyParams = {
  approver: string,
  applyType: 1 | 2, // （1-合作申请，2-样品申请）
  applyContent: {
    sampleId?: string, // 样品申请必填, 合作申请不填
    applyContent: string,
    originalCId?: string,
    sampleName?: string,
    categoryId?: string,
  }
  applicant: string,
  approverOrgId?: string
};

// 发起合作申请/样品申请
export const submitApply = async (params: submitApplyParams) => {
  const res = (await axios.post<boolean>('/idealab-material/apply/add', params)).data;
  return res;
};

// 获取我的关注商家列表
export const fetchFollowedMerchantInfo = async (params: { keywords: string, fields: {} }) => {
  const res = (await axios.post<MerchantItem[]>('/idealab-material/follow/search', params)).data;
  return res;
};

// 编辑商家主页
export const editMerchantHome = async (params: { sections: Sections }) => {
  const res = (await axios.post('/idealab-material/merchant/home/update', params)).data;
  return res;
};

// 获取商家主页
export const fetchMerchantHome = async (params: { orgId: string }) => {
  const res = (await axios.get<{ sections: Sections }>('/idealab-material/merchant/home/get', { params })).data;
  return res;
};
