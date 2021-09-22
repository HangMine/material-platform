import axios from '@/utils/axios';
import { MaterialListItem } from '@/models/Material';
import { NormalMaterialListSearchParams } from './material';

// 合作列表
type CooperationListParams = {
  current: string,
  limit: string,
  keywords: string,
  condition: Partial<{
    name: string,
    abbreviation: string,
    brand: string,
    cooperationStatus: string,
  }>
};
export type CooperationListItem = {
  id: string,
  checkStatus: string,
  status: string,
  orgId: string,
  name: string,
  abbreviation: string,
  address: string,
  brand: string,
  businessScope: string,
  registeredCapital: string,
  email: string,
  phone: string,
  pictures: Obj,
  systemFieldsDisplayConfig: Obj,
  customFields: Obj,
  inviteDeadline: number,
  inviteExplain: string,
  inviteTime: number,
};
export const fetchCooperationList = async (params: CooperationListParams) => {
  // return {
  //   records: [{
  //     id: '1', status: 1,
  //   }],
  // };
  const res = (await axios.post<TableData<CooperationListItem>>('/idealab-material/recommend/meeting/material/cooperation/list', params)).data;
  return res;
};

// 合作详情
export type CooperationDocument = {
  docName: string,
  ossKey: string,
  ossKeyUrl?: string,
};
export type CooperationDocuments = CooperationDocument[];
export type CooperationDetail = {
  extraData: Obj,
  documents: CooperationDocuments,
  inviteMan: string,
  cooperationExplain: string,
  status: number,
  creator: string,
  modifier: string,
  isDelete: string,
  gmtCreateTime: number
};
export const fetchCooperationDetail = async (params: { ids: string[] }) => {
  const res = (await axios.post<CooperationDetail[]>('/idealab-material/recommend/meeting/material/cooperation/detail', params)).data;
  return res;
};

// 查询沟通记录
export type CommunicateListItem = {
  orgId: Obj,
  inviteId: Obj,
  messageContent: Obj,
  status: number,
  creator: string,
  modifier: string,
  gmtCreateTime: string,
  gmtModifyTime: string,
  isDelete: string,
};
export const fetchCommunicateList = async (inviteId: string) => {
  const res = (await axios.get<CommunicateListItem[]>(
    '/idealab-material/recommend/meeting/material/communicate/list',
    { params: { inviteId } },
  )).data;
  return res;
};

// 提交资料参数
export type CommitCooperationParams = {
  id: string,
  cooperationExplain: string,
  documents: CooperationDocuments,
};
// 提交准入资料
export const commitCooperation = async (parmas: CommitCooperationParams) => {
  const res = (await axios.post<null>('/idealab-material/recommend/meeting/material/cooperation/commit', parmas)).data;
  return res;
};
// 提交准入资料
export const updateCooperation = async (parmas: CommitCooperationParams) => {
  const res = (await axios.post<null>('/idealab-material/recommend/meeting/material/cooperation/update', parmas)).data;
  return res;
};

/* ============== (买家)推荐会管理 ============== */
export type RecommendationItem = {
  id: string,
  catalogId: string, // 目录id
  name: string,
  orgId: string,
  cover: string,
  startTime: string | number | null,
  endTime: string | number | null,
  count: number,
};
// 获取品牌推荐会列表
export const fetchBrandRecommendationList = async (keywords = '') => {
  const res = (await axios.post<TableData<RecommendationItem>>('/idealab-material/recommend/meeting/list', {
    keywords,
    fields: { },
    page: 1,
    size: 999,
  })).data?.records || [];
  return res;
};

// 新增牌推荐会
export const addBrandRecommendation = async (data: RecommendationItem) => {
  const res = (await axios.post<null>('/idealab-material/recommend/meeting/add', data)).data;
  return res;
};

// 编辑牌推荐会
export const editBrandRecommendation = async (data: RecommendationItem) => {
  const res = (await axios.post<null>('/idealab-material/recommend/meeting/update', data)).data;
  return res;
};

// 删除牌推荐会
export const deleteBrandRecommendation = async (id: string) => {
  const res = (await axios.get<null>('/idealab-material/recommend/meeting/remove', { params: { id } })).data;
  return res;
};


// 获取/筛选推荐会下的材料列表
export const fetchMaterialsFromBrandRecommendation = async (data: NormalMaterialListSearchParams & { parentId?: string }) => {
  const res = (await axios.post<TableData<MaterialListItem>>('/idealab-material/recommend/meeting/material', data)).data;
  return res;
};
// 导出推荐会材料
export const exportMaterialsFromBrandRecommendation = async (data: NormalMaterialListSearchParams & { parentId?: string }) => {
  const res = (await axios.post<Blob>('/idealab-material/recommend/meeting/export', data, {
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })).data;
  return res;
};

export type PickRemarkItem = {
  userName: string,
  avatar: string,
  userId: string,
  chooseTime: string | number,
  remarks: string,
};
// 选用备注列表
export const fetchPickRemarkList = async (originalId: string) => {
  const res = (await axios.get<PickRemarkItem[]>('/idealab-material/choose/list', { params: { originalId } })).data;
  return res;
};

export type PickRemarkParams = {
  originalId: string,
  catalogId: string,
  remarks: string,
};
// 选用
export const pickMaterialInRecommendation = async (data: PickRemarkParams) => {
  const res = (await axios.post<null>('/idealab-material/choose/add', data)).data;
  return res;
};

// 取消选用
export const unpickMaterialInRecommendation = async (params: { originalId: string }) => {
  const res = (await axios.get<null>('/idealab-material/choose/cancel', { params: { originalId: params.originalId } })).data;
  return res;
};

/* ============== end(买家)推荐会管理 ============== */


/* ============== (卖家)推荐材料给品牌 ============== */
export type CooperatedBrandRecommendationItem = {
  id: string,
  name: string,
  coopRecommendMeetingResps: RecommendationItem[];
};

/**
 * 获取合作的品牌推荐会列表(推荐给品牌弹框的tree列表等)
 * @param {(0|1)} isAll 0-全部推荐会|1-有效的推荐会
 * @return {*}
 */
export const fetchCooperatedBrandRecommendationList = async (isAll: 0|1 = 0) => {
  const res = (await axios.get<CooperatedBrandRecommendationItem[]>('/idealab-material/recommend/meeting/material/getcooperationlist',
    { params: { isAll } })).data;
  return res;
};

export type RecommendToBrandParams = {
  orgId: string,
  name: string, // 公司名称
  isSyn: 0 | 1, // 是否实时同步 0-否|1-是
  catalogId: string,
  originalId: string,
  recommendMeetingIds: string[], // 推荐会id
};
// 批量推送到推荐会
export const recommendToBrand = async (data: RecommendToBrandParams[]) => {
  const res = (await axios.post<null>('/idealab-material/recommend/meeting/material/savebatch/materialrecMeet', data)).data;
  return res;
};


// 获取已推荐给推荐会的材料列表
export const fetchAllMaterialsInRecommendation = async (data: NormalMaterialListSearchParams) => {
  const res = (await axios.post<TableData<MaterialListItem>>('/idealab-material/recommend/meeting/material/search', data)).data;
  return res;
};

type RemoveFromRecommendationParams = {
  catalogId: string,
  originalId: string,
  recommendMeetingId: string, // 推荐会id
};
// 批量删除已推荐给推荐会的材料
export const removeFromRecommendation = async (data: RemoveFromRecommendationParams[]) => {
  const res = (await axios.post<null>('/idealab-material/recommend/meeting/material/deletebatch/materialrecMeet', data)).data;
  return res;
};
/* ============== end (卖家)推荐材料给品牌 ============== */

// 总览 推荐会统计接口
// 推荐会材料统计
export const fetchMaterialStatistic = async (id:string) => {
  type resType = {
    latestMaterialCount: number,
    materialChooseCount: number,
    avgMaterialChooseCount: number,
    materialChooseRate: number,
  };
  const res = (await axios.get<resType>('/idealab-material/recommend/meeting/statistics/material/count',
    { params: { id } })).data;
  return res;
};
// 图表，选用分析统计材料统计
type echartParamsType={
  recommendMeetingId:string, // 推荐会id
  type:1|2|3|4, // 类型1.选用材料类型2.选用材料供应商 3.设计师选用数  4.选用材料次数
  state:1|2|3, // 状态 1 昨日 2近一周 3全部


};
export const fetchEchartData = async (data: echartParamsType) => {
  type resType={
    type:string,
    name:string,
    count:number
  };
  const res = (await axios.post<resType[]>('/idealab-material/recommend/meeting/statistics/choose/analysis/count', data)).data;
  return res;
};
