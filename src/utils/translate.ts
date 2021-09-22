// 翻译字段:根据id转换成中文

import * as dictionaryApi from '@/api/dictionary';
import { getMatchedAddressCnText } from '@/utils/format-address';


// 这里做缓存 方便多次调用
const cacheMap = {
  leadingProduct: {}, // 主营产品
  businessModel: {}, // 经营模式
};

type TranslateKey = keyof typeof cacheMap;

const clearCache = (key?: TranslateKey) => {
  if (key) {
    cacheMap[key] = {};
    return;
  }
  Object.keys(cacheMap).forEach(cacheKey => {
    cacheMap[cacheKey as TranslateKey] = {};
  });
};

const fetchDictionaryMap = async (key: TranslateKey): Promise<Obj> => {
  if (Object.keys(cacheMap[key]).length) return cacheMap[key];
  const list = (await dictionaryApi.getDictionaryByTypeCode(key)).data;
  cacheMap[key] = list.reduce((obj, item) => {
    obj[item.itemValue] = item.label;
    return obj;
  }, {} as Obj);
  return cacheMap[key];
};

type Ids = string | number | (string | number)[];

const formatIds = (ids: Ids = []) => {
  if (Array.isArray(ids)) return ids;
  return `${ids}`.split(',');
};

const ids2Names = async (key: TranslateKey, ids: Ids) => {
  const map = await fetchDictionaryMap(key);
  return formatIds(ids).map(item => map[+item]);
};

const names2Str = (names: string[]) => {
  return names.join();
};

const ids2NamesStr = async (key: TranslateKey, ids: Ids, isUpdateCache = false) => {
  if (isUpdateCache) clearCache(key);
  const names = await ids2Names(key, ids);
  const str = names2Str(names);
  return str;
};

export const translateLeadingProduct = async (ids: Ids, isUpdateCache = false) => {
  return ids2NamesStr('leadingProduct', ids, isUpdateCache);
};

export const translateBusinessModel = async (ids: Ids, isUpdateCache = false) => {
  return ids2NamesStr('businessModel', ids, isUpdateCache);
};


const translate = {
  clearCache,
  leadingProduct: translateLeadingProduct,
  businessModel: translateBusinessModel,
  address: getMatchedAddressCnText,
};

export default translate;
