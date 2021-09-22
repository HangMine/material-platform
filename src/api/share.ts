/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */

import { MaterialListItem } from '@/models/Material';
import axios from '@/utils/axios';
import { urlWithPass } from './utils';

export type shareOptions = { key: string, label: string }[];
// 生成分享链接
export interface ShareLinkParams {
  validityType: 1 | 2 | 3 | 4,
  code?: string,
  subject: string,
  isAgain: 1 | 0,
  type: 1 | 2,
  catalogIds: string[],
  isSync: 1 | 0,
  shareObject: [],
  shareObjectOptions: shareOptions,
  creatorIcon?: string,
  creatorName?: string,
}
export interface ShareFolderListType {
  validityType: 1 | 2 | 3 | 4,
  code?: string,
  subject: string,
  isAgain: 1 | 0,
  type: 1 | 2,
  catalogId: string,
  materialBookName: string,
  isSync: 1 | 0,
  shareObject: [],
  shareObjectOptions: shareOptions,
  creatorIcon?: string,
  creatorName?: string,
}
export interface ShareColorCardType {
  validityType: 1 | 2 | 3 | 4,
  code?: string,
  subject: string,
  type: 1 | 2,
  relateId: string,
}
export interface folderInfoType {
  catalogId: string,
  name: string,
  isShared: number,
  count: number,
  images: []
}
export const createShareLink = async (params: ShareLinkParams) => {
  type Response = { code: string, shareId: string };
  const res = (await axios.post<Response>('/idealab-material/share/url', params));
  return res;
};

// 读取链接对应的分享类型
export const fetchShareConfig = async (id: string) => {
  type Response = Omit<ShareLinkParams, 'catalogIds'>;
  const res = (await axios.get<Response>('/idealab-material/share/info', { params: { id } }));
  return res;
};

// 校验分享密码
export const checkShareCode = async (params: { id: string, code: string }) => {
  const res = (await axios.post<boolean>('/idealab-material/share/code/check', params));
  return res;
};

// 获取分享链接的面料列表
export const fetchShareMaterialList = async (id: string) => {
  const res = (await axios.get<TableData<MaterialListItem>>(urlWithPass('/idealab-material/share/relates'), { params: { id } })).data;
  return res;
};
// 获取分享对象
export const getShareObj = async () => {
  const res = (await axios.get('/idealab-material/apply/cooperator')).data;
  return res;
};
// 材料测生成分享链接
export const createMaterialShareUrl = async (params: ShareFolderListType) => {
  type Response = { code: string, shareId: string };
  const res = (await axios.post<Response>('/idealab-material/material/book/share/url', params));
  return res;
};
// 获取材料册分享内容
export const fetchMaterialShare = async (shareId: string) => {
  type Response = [{
    catalogId: string,
    name: string,
    isShared: number,
    count: number,
    images: []
  }];

  const res = (await axios.get<Response>('/idealab-material/material/book/share/info', { params: { shareId } })).data;
  return res;
};
// 生成色卡本分享链接
export const createColorCardShare = async (params: ShareColorCardType) => {
  const res = (await axios.post<{ shareId: string, code: string }>('/idealab-material/color/card/book/share/url', params));
  return res;
};
// 获取色卡本分享内容
export const fetchColorCardContent = async (shareId: string) => {
  const res = (await axios.get<{ id: string, name: string, count: string }>(
    '/idealab-material/color/card/book/share/info',
    { params: { shareId } },
  )).data;
  return res;
};
