import { getDictByType as _getDictByType } from '@/loaders/dictionary';
import axios from '@/utils/axios';

export interface DictionaryItem {
  itemValue: number,
  label: string
}

// 根据类型获取该字典数据
export const getDictByType = async (type: string) => {
  return {
    data: await _getDictByType({ type }),
  };
};

export const getDictionaryByTypeCode = async (typeCode) => {
  const res = (await axios.get<DictionaryItem[]>('/bff-center/showCommon/getDictionaryTypeItem', { params: { typeCode } }));
  return res;
};


export const getCountryList = async (keyword = '') => {
  const res = (await axios.get<DictionaryItem[]>('/show/dictionary/getCountry', { params: { keyword } }));
  return res;
};


export const getCityList = async (countryId: string, keyword = '') => {
  const res = (await axios.get<DictionaryItem[]>('/show/dictionary/getCity', { params: { countryId, keyword } }));
  return res;
};


export const getOSSAuth = async () => {
  const res = (await axios.get<DictionaryItem[]>('/show/dictionary/getOSSAuth'));
  return res;
};

export const getOSSUrl = async () => {
  const res = (await axios.get<DictionaryItem[]>('/show/dictionary/getOSSUrl'));
  return res;
};


/* ==================== 标签相关 ================== */
export const addTags = (data: { shareId: string, tags: string[], type: string }) => {
  return axios({
    method: 'post',
    url: '/bff-center/showCommon/addTags',
    data,
  });
};

export const removeTags = (tagIds: string[]) => {
  return axios({
    method: 'post',
    url: '/bff-center/showCommon/deleteTag',
    data: tagIds,
  });
};
