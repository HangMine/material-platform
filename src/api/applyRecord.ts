/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import dayjs from 'dayjs';
import axios from '@/utils/axios';
import delay from '@4dst-saas/public-utils/dist/delay';

// 我发起的申请列表
export interface ApplyItem {
  id: string,
  applicant: string,
  applyContent: {
    applyContent:string,
    sampleId?:string,
    sampleName?:string,
    categoryId?:string,
    originalCId?:string,
    name?:string,
    phone?:string,
    address?:string,
    addressDetail?:string


  },
  applyType:number,
  approvalStatus:number,
  applicantName?: string,
  applicantImg?: string,
  approvalStatusText?: string,
  applyCon?: string,
  gmtCreateTime?: string,
  sampleName?: string,
  sampleId?: string,
  orgId?: string,
}
export interface ApplyParams{
  keywords:string,
  page:number,
  size:number,
  receiveOrlaunch:string,
  fields:{
  },
}
export interface noticeParams{
  keywords:string,
  page:number,
  size:number,
  fields:{
    noticeType?:number
  },
}
export interface noticeItem{
  id:string,
  title:string,
  noticeStatus:number,
  orgId:string,
  noticeType:number, // 1-分享通知，2-账号审核结果，3-材料版本信息变更，4-合作申请结果，5-合作申请结果
  noticeContent:string,
  userId:string, // 归属用户id
  gmtCreateTime:string,
  noticeTypeText?:string,
  createTime?:string,
  noticeRelatedId?:string,
  noticeDetail: [
    {
      key: string,
      name: string,
      content: string,
      keyTitle: string
    }
  ],
}
// 跟据id获取公司信息
export const getComponyInfo = async (id:string | undefined) => {
  const res = (await axios.get('/authcenter/company/get/info/id', { params: { id } })).data;
  return res;
};
// 我发起或者收到的申请列表
export const applyReceiveOrLaunch = async (params:ApplyParams) => {
  let url;
  if (params.receiveOrlaunch === 'send') {
    url = '/idealab-material/apply/send/search';
  } else if (params.receiveOrlaunch === 'receive') {
    url = '/idealab-material/apply/receive/search';
  }

  const res = (await axios.post<TableData<ApplyItem>>(url as string, params)).data;
  await res.records.length > 0 && res.records.forEach(async item => {
    item.applyCon = item.applyContent.applyContent;
    item.sampleName = item.applyContent.sampleName;
    item.sampleId = item.applyContent.sampleId;
    item.gmtCreateTime = dayjs(item.gmtCreateTime).format('YYYY/MM/DD');
    switch (item.approvalStatus) {
      case 0:
        item.approvalStatusText = '待审核';
        break;
      case 1:
        item.approvalStatusText = '已通过';
        break;
      case 2:
        item.approvalStatusText = '已拒绝';
        break;
      case 3:
        item.approvalStatusText = '已取消';
        break;
      default:
        break;
    }
    item.applicantName = (await getComponyInfo(item.orgId)).name;
  });
  await delay(100);

  return res;
};

// 取消申请
export const applyCancel = async (id:string) => {
  const res = (await axios.get('/idealab-material/apply/cancel', { params: { id } })).data;
  return res;
};
// 申请详情
export const applyDetail = async (id:string) => {
  const res = (await axios.get('/idealab-material/apply/info', { params: { id } })).data;
  return res;
};
// 处理申请拒绝申请
export const handlerApply = async (params:{applyId:string, approvalStatus:number, approvalContent:{content:string}}) => {
  const res = await axios.post('/idealab-material/apply/handle', params);
  return res;
};
// 寄样品
export const sendSample = async (params:{applyId:string, number:string, logisticsNumber:string}) => {
  const res = await axios.post('/idealab-material/apply/send/sample', params);
  return res;
};
type submitApplyParams = {
  approver: string,
  applyType: 1 | 2, // （1-合作申请，2-样品申请）
  applyContent: {
    sampleId? : string, // 样品申请必填, 合作申请不填
    applyContent: string,
    originalCId?:string,
    sampleName?:string,
    categoryId?:string,
    name?:string,
    phone?:string,
    address?:string,
    addressDetail?:string
  }
  applicant: string,
};
// 发起合作申请/样品申请
export const submitApply = async (params: submitApplyParams) => {
  const res = (await axios.post<boolean>('/idealab-material/apply/add', params)).data;
  return res;
};

// 获取通知列表的接口
export const getNoticeList = async (params:noticeParams) => {
  const res = (await axios.post<TableData<noticeItem>>('/idealab-material/notice/list', params)).data;
  return res;
};
// 读取通知详情
export const getNoticeDetail = async (id:string | undefined) => {
  const res = (await axios.get<noticeItem>('/idealab-material/notice/info', { params: { id } })).data;
  return res;
};
// 删除通知
export const deleteNotice = async (id:number | undefined) => {
  const res = (await axios.get<null>('/idealab-material/notice/remove', { params: { id } })).data;
  return res;
};
// 标为已读
export const changeNoticeStatus = async (id:string | undefined) => {
  const res = (await axios.get<null>('/idealab-material/notice/read', { params: { id } })).data;
  return res;
};
// 删除全部消息接口
export const deleteNoticeAll = async () => {
  const res = (await axios.get<null>('/idealab-material/notice/all/remove')).data;
  return res;
};
// 根据消息类别删除
export const deleteNoticeByType = async (noticeType:number | undefined) => {
  const res = (await axios.get<null>('/idealab-material/notice/type/remove', { params: { noticeType } })).data;
  return res;
};
type sendParamsType={
  applyId:string,

  com:string,

  recManName:string,

  recManMobile:string,

  recManPrintAddr:string,

  sendManName:string,

  sendManMobile:string,

  sendManPrintAddr:string,

  cargo?:string,

  weight?:string,

  remark:string,

  payment?:string,

  dayType:string,

  pickupStartTime:string,

  pickupEndTime:string,

  salt?:string,
};
// 寄样品含有物流
export const sendSampleForLogistic = async (params:sendParamsType) => {
  const res = await axios.post('/idealab-material/apply/express/send', params);
  return res;
};
export const transList = [
  { value: 'zhongtong', label: '中通' },
  { value: 'yuantong', label: '圆通快递' },
  { value: 'shentong', label: '申通快递' },
  { value: 'yunda', label: '韵达快递' },
  { value: 'tiantian', label: '天天快递' },
  { value: 'huitongkuaidi', label: '百世（汇通）' },
  { value: 'zhaijisong', label: '宅急送' },
  { value: 'jtexpress', label: '极兔' },
  { value: 'shunfengkuaiyun', label: '顺丰快递' },
  { value: 'shunfeng', label: '顺丰' },
  { value: 'jd', label: '京东物流' },
  { value: 'debangkuaidi', label: '德邦快递' },
  { value: 'youshuwuliu', label: '优速快递' },
];
export type StatusType={
  context:string,
  status:string,
  time:string,
};
interface Respone{
  com:string,
  nu:string,
  hour:string,
  state:string,
  data:StatusType[]
}
// 根据位置查询物流
export const getTrans = async (params:{sendManPrintAddr:string, recManPrintAddr:string}) => {
  const res = await axios.post('/idealab-material/apply/express/trans', params);
  return res;
};
// 查询当前物流状态
export const getTransStatus = async (id:string) => {
  const res = (await axios.get<Respone>('/idealab-material/apply/express/query', { params: { id } })).data;
  return res;
};
// 快递100取消订单
export const cancelOrder = async (params:{applyId:string, cancelMsg:string}) => {
  const res = await axios.post<null>('/idealab-material/apply/express/cancel', params);
  return res;
};

