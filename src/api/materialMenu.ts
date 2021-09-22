/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import axios from '@/utils/axios';
import Material, { MaterialDetail, MaterialListItem } from '@/models/Material';
import { NormalMaterialListSearchParams } from './material';
import { urlWithPass } from './utils';


export interface ColorLibraryItem {
  id: string,
  r: number,
  g: number,
  b: number,
  name: string, // ColorO名称
  colorFamily: string, // 色系
  page?: number,
  line?: number,
  row?: number,
}
export interface ColorLibrarySearchParams {
  keywords: string,
  fields: {
    id?: string,
    colorFamily?: string,
    type?: 1|2, // type:1-coloro|2-pantone
  },
  page: number,
  size: number
}
export interface materialListParams {
  keywords: string,
  fields: {
    id: string,

  },
  page: number,
  size: number
}

export interface ColorCardItem {
  id: string,
  name: string,
  count: number
  isShared: number,
  relateTop5Resps: ColorLibraryItem[]
}
export interface ColorCardSearchParams {
  keywords: string,

}
export interface MaterialBookItem {
  catalogId: string,
  name: string,
  isShared: number,
  count: number,
  images: [],
  isopmk: number,
}
// color颜色库列表(type:1-coloro|2-pantone)
export const fetchColorLibrary = async (params: ColorLibrarySearchParams) => {
  const res = (await axios.post<TableData<ColorLibraryItem>>('/idealab-material/coloro/list', params)).data;
  return res;
};
// 色卡本中的颜色列表
export const fetchColorList = async (params: ColorLibrarySearchParams) => {
  const res = (await axios.post<TableData<ColorLibraryItem>>('/idealab-material/color/card/book/color/list', params)).data;
  return res;
};
// 新增色卡本
export const addColorCard = async (params: { name: string, isShared: number }) => {
  const res = (await axios.post<null>('/idealab-material/color/card/book/add', params)).data;
  return res;
};
// 色卡本重命名
export const renameColorCard = async (params: { id: string, newName: string }) => {
  const res = (await axios.post<null>('/idealab-material/color/card/book/rename', params)).data;
  return res;
};
// 删除色卡本
export const deleteColorCard = async (id: string) => {
  const res = (await axios.get<null>('/idealab-material/color/card/book/delete', { params: { id } })).data;
  return res;
};
// 色卡本列表
export const fetchColorCard = async (keyword = '') => {
  const res = (await axios.get<ColorCardItem[]>('/idealab-material/color/card/book/list', { params: { keyword } })).data;
  return res;
};
// 添加到色卡本 colorOId//要关联/取消关联的颜色对应的colorOId,colorCardBookId色卡id
export const addToColorCard = async (params: { colorOId: string, colorCardBookId: string[] }) => {
  const res = (await axios.post<null>('/idealab-material/color/card/book/color/add', params)).data;
  return res;
};
// 移除色卡本
export const removeToColorCard = async (params: { colorOId: string, colorCardBookId: string[] }) => {
  const res = (await axios.post<null>('/idealab-material/color/card/book/color/remove', params)).data;
  return res;
};
// 材料册
// 新建材料册
export const addMaterialBook = async (params: { name: string, isShared: number }) => {
  const res = (await axios.post<null>('/idealab-material/material/book/add', params)).data;
  return res;
};
// 重命名材料册
export const renameMaterialBook = async (params: { folderId: string, newName: string, name: string }) => {
  const res = (await axios.post<null>('/idealab-material/material/book/rename', params)).data;
  return res;
};
// 获取材料册列表
export const fetchMaterialBook = async (keyword = '') => {
  const res = (await axios.get<MaterialBookItem[]>('/idealab-material/material/book/list', { params: { keyword } })).data;
  return res;
};
// 删除材料册

export const deleteMaterialBook = async (catalogId: string) => {
  const res = (await axios.get<null>('/idealab-material/material/book/remove', { params: { catalogId } })).data;
  return res;
};
// 收藏材料册
export const collectMaterialBook = async (params: { catalogId: string, folderName: string }) => {
  const res = (await axios.post<null>('/idealab-material/material/book/collect', params)).data;
  return res;
};
// 生成材料册分享链接url
export const createShareUrl = async (catalogId: string) => {
  const res = (await axios.post<null>('/idealab-material/material/book/share/url', catalogId)).data;
  return res;
};
// 添加到材料册
export const addToMaterialBook = async (params: { catalogIds: string[], materialBookCatalogId: string[] }) => {
  const res = (await axios.post<null>('/idealab-material/material/book/material/add', params)).data;
  return res;
};
// 移出材料册
export const removeToMaterialBook = async (params: { catalogIds: string[], materialBookId: string, originalCIds: string[] }) => {
  const res = (await axios.post<null>('/idealab-material/material/book/material/remove', params)).data;
  return res;
};
// 从材料管理移出材料册
export const removeFromMaterial = async (params: { materialBookId: string[], originalCId: string }) => {
  const res = (await axios.post<null>('/idealab-material/material/book/original/remove', params)).data;
  return res;
};
// 搜索材料册下的材料
export const fetchMaterialBookList = async (params: NormalMaterialListSearchParams) => {
  const res = (await axios.post<TableData<MaterialListItem>>(urlWithPass('/idealab-material/material/book/material/search'), params)).data;
  return res;
};

// 色卡归属色卡本
export const cardBelongs = async (params: string[]) => {
  const res = (await axios.post<string[]>('/idealab-material/color/card/book/belong', params)).data;
  return res;
};
// 材料归属材料册
export const materialBelongs = async (params: string[]) => {
  const res = (await axios.post<string[]>('/idealab-material/material/book/belong', params)).data;
  return res;
};
// 收藏色卡本
export const collectColorCardBook = async (params: [{ materialBookId: string, name: string }]) => {
  const res = (await axios.post<string[]>('/idealab-material/color/card/book/mark/add', params)).data;
  return res;
};
// 收藏夹中色卡本列表
export const collectColorCardBookList = async (params: { name?: string, page: string, size: string }) => {
  const res = (await axios.post<string[]>('/idealab-material/color/card/book/mark/list', params)).data;
  return res;
};
// 收藏夹中色卡本重命名
export const collectColorCardBookRename = async (params: { id: string, name: string }) => {
  const res = (await axios.post<string[]>('/idealab-material/color/card/book/mark/update', params)).data;
  return res;
};
// 收藏夹中色卡本删除
export const collectColorCardBookDelete = async (ids: string[]) => {
  const res = (await axios.post<string[]>(`/idealab-material/color/card/book/mark/delete?ids=${ids}`)).data;
  return res;
};

// 材料册上传至公开市场

export const uploadToMarket = async (params: string[]) => {
  const res = (await axios.post<string[]>('/idealab-material/open/market/materalbook/batch/on', params)).data;
  return res;
};
// 材料册取消上传至公开市场

export const cancelUploadToMarket = async (params: string[]) => {
  const res = (await axios.post<string[]>('/idealab-material/open/market/materalbook/batch/of', params)).data;
  return res;
};
// 公开市场的材料册列表
export const fetchMarketMaterialBook = async (orgId: string) => {
  const res = (await axios.get<MaterialBookItem[]>('/idealab-material/open/market/openmarket/MaterialBookList', { params: { orgId } })).data;
  return res;
};

