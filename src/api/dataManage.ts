// 数据管理

import axios from '@/utils/axios';
import { apiCache, asyncCacheable } from '@/utils/cache-controller';

const defaultParams = {
  page: 1,
  size: 99999,
  fields: {},
};

type ApiFirstCategory = {
  id: string,
  sourceId: string,
  sourceName: string,
  alias: string,
  status: 1 | 2,
  modifier: string,
  gmtModifyTime: string,
};
type ApiSecondCategory = {
  id: string,
  sourceId: string,
  sourceName: string,
  firstName: string, // 所属一级分类
  alias: string,
  status: 1 | 2,
  modifier: string,
  gmtModifyTime: string,
};
export type ApiField = {
  id: string,
  sourceId: string,
  sourceName: string,
  alias: string,
  status: 1 | 2,
  modifier: string,
  gmtModifyTime: string,
};
type ListItem = ApiFirstCategory | ApiSecondCategory | ApiField;
type List = ListItem[];
const list2map = (list: List) => {
  const map = list.reduce((obj: Obj, listItem: ListItem) => {
    obj[listItem.sourceId] = listItem.alias || listItem.sourceName;
    return obj;
  }, {} as Obj);
  return map;
};
const list2mapWithObj = (list: List) => {
  const map = list.reduce((obj: Record<string, ListItem>, listItem: ListItem) => {
    obj[listItem.sourceId] = listItem;
    return obj;
  }, {} as Record<string, ListItem>);
  return map;
};


// 一级分类列表
export const uncacheFetchFirstCategoryList = async (params: TableParams = defaultParams) => {
  type Res = TableData<ApiFirstCategory>;
  const res = (await axios.post<Res>('/idealab-material/alias/category/first', params)).data;
  return res;
};
export const fetchFirstCategoryList = asyncCacheable(uncacheFetchFirstCategoryList, 'category');

export const fetchFirstCategoryMap = async (params: TableParams) => {
  const firstCategoryList = (await fetchFirstCategoryList(params)).records;
  const map = list2mapWithObj(firstCategoryList);
  return map;
};

// 二级分类列表
export const uncacheFetchSecondCategoryList = async (params: TableParams = defaultParams) => {
  type Res = TableData<ApiFirstCategory>;
  const res = (await axios.post<Res>('/idealab-material/alias/category/second', params)).data;
  return res;
};
export const fetchSecondCategoryList = asyncCacheable(uncacheFetchSecondCategoryList, 'category');
export const fetchSecondCategoryMap = async (params: TableParams) => {
  const secondCategoryList = (await fetchSecondCategoryList(params)).records;
  const map = list2mapWithObj(secondCategoryList);
  return map;
};

// 字段管理列表
export const fetchFieldList = async (params: TableParams = defaultParams) => {
  type Res = TableData<ApiField>;
  const res = (await axios.post<Res>('/idealab-material/alias/field', params)).data;
  return res;
};
export const fetchFieldMap = async (params: TableParams) => {
  const fieldList = (await fetchFieldList(params)).records;
  const map = list2map(fieldList);
  return map;
};

// 修改别名
export const updateAlias = async (params: { id: string, alias: string }, isCategory = false) => {
  const res = await axios.post('/idealab-material/alias/update', params);
  if (isCategory) {
    // 更新分类映射的缓存标识
    apiCache.category = false;
  }
  return res;
};

// 禁用/启用
export const updateStatus = async (params: { id: string, status: 1 | 2 }, isCategory = false) => {
  const res = await axios.post('/idealab-material/alias/update/status', params);
  if (isCategory) {
    // 更新分类映射的缓存标识
    apiCache.category = false;
  }
  return res;
};
