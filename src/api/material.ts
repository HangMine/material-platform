/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import i18n from '@/i18n';
import { getContextUser } from '@/loaders/context';
import Material, { MaterialDetail, MaterialListItem } from '@/models/Material';
import { isAdmf } from '@/pages/components/material/utils';
import axios from '@/utils/axios';
import { asyncCacheable, apiCache } from '@/utils/cache-controller';

import envs from '@/utils/envs';
import fieldMap from '@/utils/field-map';
import originAxios from 'axios';
import { fetchFirstCategoryMap, fetchSecondCategoryMap } from './dataManage';
import { urlWithPass } from './utils';
// import testModelListData from './mock/mockModelListData';

export interface CategoryItem {
  id: string,
  name: string, // 前端根据映射接口修改过
  originName: string, // 接口原本的name
  level: number,
  hasChild?: boolean,
  parentId?: string, // level的接口才有
  matchResult?: CategoryItem[]
}

interface ParentCategoryItem extends CategoryItem {
  pid: string,
  pname: string,
  plevel: number
}

export type Category = CategoryItem[];
type ParentCategory = ParentCategoryItem[];


const mapApiDefaultParams = {
  page: 1,
  size: 99999,
  fields: {},
};

// 映射分类name(会修改源数据)
const translateCategoryListName = async (category: Category, forceNoTranslate = false) => {
  if (!getContextUser()) {
    // 没登录的话,只翻译i18n
    forceNoTranslate = true;
  }
  const name2i18nName = (name: string) => i18n.t(`material.category.${name}`, undefined, name);
  const getAliasMap = async () => {
    const [firstMap, secondMap] = await Promise.all([fetchFirstCategoryMap(mapApiDefaultParams), fetchSecondCategoryMap(mapApiDefaultParams)]);
    const aliasMap: Obj = {
      ...firstMap,
      ...secondMap,
    };
    return aliasMap;
  };
  const isOnlyTranslateI18n = forceNoTranslate || !fieldMap.isTranslate;
  const aliasMap = isOnlyTranslateI18n ? {} : await getAliasMap();

  category.filter(Boolean).forEach(item => {
    if (isOnlyTranslateI18n) {
      if (!item.originName) item.originName = item.name;
      const name = name2i18nName(item.originName);
      item.name = name;
    } else {
      const mapItem = aliasMap[item.id];
      if (!mapItem) return;
      if (!item.originName) item.originName = mapItem.sourceName;
      const mapName = mapItem?.status === 1 ? mapItem.alias : mapItem.sourceName;
      const i18nMapName = name2i18nName(mapName);
      const name = i18nMapName || mapName;
      item.name = name;
    }
  });
};

// 获取子类目(第一层传'-1')
export const fetchChildCategory = async (params: { pId: string }, forceNoTranslate = false) => {
  const res = await axios.get<Category>('/idealab-material/category/child/node', { params });
  await translateCategoryListName(res.data, forceNoTranslate);
  return res;
};

// 获取父类目
// export const fetchParentCategory = async (id: string) => {
//   const res = await axios.get<CatergoryItem>('/idealab-material/category/parent', { params: { id } });
//   return res;
// };

// 获取类目(包含父类目信息)
export const fetchCategory = async (id: string) => {
  const res = await axios.get<ParentCategoryItem>('/idealab-material/category/parent', { params: { id } });
  await translateCategoryListName([res.data]);
  return res;
};


// 根据级别获取类目树
export const fetchCategoryByLevel = asyncCacheable(async (level = 1) => {
  const res = await axios.get<Category>('/idealab-material/category/level', { params: { level } });
  const translateCategoryName = () => {
    const loop = (category: Category) => {
      translateCategoryListName(category);
      category.forEach(categoryItem => {
        if (categoryItem.matchResult) {
          loop(categoryItem.matchResult);
        }
      });
    };
    loop(res.data || []);
  };

  translateCategoryName();

  return res.data;
});


// 根据最下级获取类目数组,业务需要显示每个材料的类目树,这里做一层缓存
export const fetchCategoryList = (() => {
  const cacheAllCategoryMap: Record<string, CategoryItem> = {};
  return async (id: string) => {
    const setAllCategoryMap = async () => {
      const categoryListByLevel = await fetchCategoryByLevel();
      const loop = (category: Category) => {
        category.forEach(categoryItem => {
          cacheAllCategoryMap[categoryItem.id] = categoryItem;
          if (categoryItem.matchResult) {
            loop(categoryItem.matchResult);
          }
        });
      };
      loop(categoryListByLevel || []);
    };
    const getCategoryList = () => {
      const categoryList: Category = [];
      const loop = (_id: string) => {
        const categoryItem = cacheAllCategoryMap[_id];
        categoryList.unshift(categoryItem);
        if (categoryItem.parentId) {
          loop(categoryItem.parentId);
        }
      };
      loop(id);
      return categoryList;
    };
    const isNeedFetch = !apiCache.category || !Object.keys(cacheAllCategoryMap).length;
    if (isNeedFetch) await setAllCategoryMap();
    apiCache.category = true;
    const categoryList = getCategoryList();
    await translateCategoryListName(categoryList);
    return categoryList;
  };
})();

// 上传面料
export const uploadMaterial = async (params: Material & { hasFile: 1 | 0 }) => {
  const res = await axios.post<string>('/idealab-material/material/upload', params);
  return res;
};

// 面料详情
export const fetchMaterial = async (catalogId: string) => {
  const res = await axios.get<MaterialDetail>(urlWithPass('/idealab-material/material/detail'), { params: { catalogId } });
  return res;
};

// 面料详情(3D渲染专用)
export const fetchMaterialForRender = async (catalogId: string) => {
  const res = await axios.get<MaterialDetail>('/idealab-material/material/detail/rendering', { params: { catalogId } });
  return res;
};

// 历史面料详情
export const fetchHistoryMaterial = async (relateId: string) => {
  const res = await axios.get<MaterialDetail>('/idealab-material/material/history/info', { params: { relateId } });
  return res;
};

// 编辑面料(会增加历史版本)
export const editMaterial = async (params: Material & { catalogId: string, hasFile: 1 | 0 }) => {
  const res = await axios.post<string>('/idealab-material/material/upgrade', params);
  return res;
};
// 编辑面料(不增加历史版本)
export const editMaterialNoHistory = async (params: Material & { catalogId: string, hasFile: 1 | 0 }) => {
  const res = await axios.post<string>('/idealab-material/material/update', params);
  return res;
};

// 删除面料
export const delMaterial = async (catalogIds: string[]) => {
  const res = await axios.post<null>('/idealab-material/material/delete', catalogIds);
  return res;
};

export interface MaterialSearchFields {
  categoryId: string[],
  tag: string,
  yearSeason: string[],
  applicableProduct: string[],
  colorFamily: string[],
  isInStock: string,
  sampleMoq: string[],
  sampleMoqUnit: string,
  moq: string[],
  moqUnit: string,
  price: string[],
  priceCurrency: string,
  leadTime: string[],
  leadTimeUnit: string,
  grammage: string[],
  grammageUnit: string,
  thickness: string[],
  thicknessUnit: string,
  width: string[],
  widthUnit: string,
  textureType: string,
  orgId: string,
  id?: string,
}

export type MaterialSortType = 1 | 2 | 3; // 浏览量/收藏量/分享量
export type MaterialSort = 1 | 2; // 正序/倒序
export type NormalMaterialListSearchParams = Partial<{ keywords: string, fields: Partial<MaterialSearchFields>, sortType: MaterialSortType, sort: MaterialSort, page: number, size: number }>;

// 材料列表
export const fetchMaterialList = async (params: NormalMaterialListSearchParams) => {
  const res = (await axios.post<TableData<MaterialListItem>>('/idealab-material/material/search', params)).data;
  return res;
};

// 以图搜图
export type MaterialListItemByImage = MaterialListItem;
export type MaterialListByImage = MaterialListItemByImage[];
export const searchByImage = async (img: File) => {
  const formData = new FormData();
  formData.append('file', img);
  const materialListByImage = (await axios.post<MaterialListByImage>('/idealab-material/material/search/pic', formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  })).data;

  return materialListByImage;
};

// 导出材料列表
// export const EXPORT_MATERIAL_LIST = '/idealab-material/material/export';
export const exportMaterialList = async (params: NormalMaterialListSearchParams) => {
  const res = (await axios.post<Blob>('/idealab-material/material/export', params, {
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })).data;
  return res;
};

// 某商家下的材料列表
export const fetchMerchantBelongMaterialList = async (params: NormalMaterialListSearchParams) => {
  const res = (await axios.post<TableData<MaterialListItem>>('/idealab-material/company/search/material', params)).data;
  return res;
};
// 获取商家下的材料上新列表
export const fetchMerchantBelongNewMaterialList = async (params: Partial<{ keywords: string, fields: Partial<MaterialSearchFields>, sortType: MaterialSortType, sort: MaterialSort, page: number, size: number }>) => {
  const res = (await axios.post('/idealab-material/company/search/material/new', params)).data;
  return res;
};

// 公开市场列表
export const fetchMarketMaterialList = async (params: NormalMaterialListSearchParams) => {
  const res = (await axios.post<TableData<MaterialListItem>>('/idealab-material/open/market/search', params)).data;
  return res;
};

// 上架市场
export const onMarket = async (catalogIds: string[]) => {
  const res = (await axios.post<null>('/idealab-material/open/market/on', catalogIds)).data;
  return res;
};

// 下架市场
export const downMarket = async (catalogIds: string[]) => {
  const res = (await axios.post<null>('/idealab-material/open/market/off', catalogIds)).data;
  return res;
};

/* ============================== 收藏 ============================== */
export interface collectFolderItem {
  catalogId: string
  name: string
  count: number
  images: string[]
  // fileType: number
}

// 收藏夹列表
export const fetchCollectFoldersList = async (keyword = '') => {
  console.log(typeof keyword);
  const res = (await axios.get<collectFolderItem[]>('/idealab-material/collect/folder/list', { params: { keyword } })).data;
  return res;
};

// 新建收藏夹
export const addCollectFolder = async (params: { name: string }) => {
  const res = (await axios.post<null>('/idealab-material/collect/folder/add', params)).data;
  return res;
};

// 删除收藏夹
export const deleteCollectFolder = async (params: { folderId: string, folderName: string }) => {
  const res = (await axios.get<null>('/idealab-material/collect/folder/remove', { params })).data;
  return res;
};

// 收藏夹重命名
export const renameCollectFolder = async (params: {
  folderId: string,
  name: string,
  newName: string,
}) => {
  const res = (await axios.post<null>('/idealab-material/collect/folder/rename', params)).data;
  return res;
};

/**
 * @deprecated
 * 收藏列表(他人分享)
 * @param {NormalMaterialListSearchParams} params
 * @return {*}
 */
export const fetchCollectList = async (params: NormalMaterialListSearchParams) => {
  const res = (await axios.post<TableData<Material>>('/idealab-material/collect/search', params)).data;
  return res;
};

interface addCollectParams {
  originalCIds: string[],
  type: 1 | 2, // 1：链接分享收藏，2：公开市场收藏
  targetCatalogId: string,
}

/**
 * @deprecated
 * 收藏(他人分享)
 * @param {addCollectParams} params
 * @return {*}
 */
export const collectMaterial = async (params: addCollectParams) => {
  const res = (await axios.post<null>('/idealab-material/collect/add', params)).data;
  return res;
};

/**
 * @deprecated
 * 取消收藏(他人分享)
 * @param {string[]} originalCIds
 * @return {*}
 */
export const cancelCollectMaterial = async (originalCIds: string[]) => {
  const res = (await axios.post<null>('/idealab-material/collect/remove', originalCIds)).data;
  return res;
};

/**
 * 材料存在于哪些收藏夹的列表
 * @param {string} id 目前一次只处理一个材料, 所以id为string(非数组)
 * @return {*}
 */
export const fetchMaterialBelongCollectFolderList = async (id: string) => {
  const res = (await axios.post<null>('/idealab-material/collect/belong', { data: [id] })).data;
  return res;
};

/**
 *
 * 更新材料归属的收藏夹列表, 可能包含从一些收藏夹中取消收藏,并收藏到另一些收藏夹中
 * @param {string} id
 * @return {*}
 */
export const updateMaterialBelongCollectFolders = async (data: {
  originalId: string,
  type: 1|2, // 1：链接分享收藏，2：公开市场收藏
  targetCatalogIds: string[],
}) => {
  const res = (await axios.post<null>('/idealab-material/collect/save', data)).data;
  return res;
};


/**
 *
 *收藏夹内取消收藏
 * @param {string} id
 * @return {*}
 */
export const removeMaterialFromCollectFolder = async (data: {
  originalId: string,
  collectFolderId: string,
}) => {
  const res = (await axios.post<null>('/idealab-material/collect/v1.4/remove', data)).data;
  return res;
};

/* ============================== end 收藏 ============================== */


// 历史版本
export interface HistoryVersion {
  relateId: string,
  isOm: string,
  gmtCreateTime: number,
  vCode: number,
  versionName: string,
  note: { [key: string]: 'UPDATE' | 'INSERT' | 'DELETE' }
}
export const fetchVersionList = async (catalogId: string) => {
  type Response = HistoryVersion[];
  const res = await axios.get<Response>('/idealab-material/material/history/version', { params: { catalogId } });
  return res;
};


export const resetVersion = async (params: {
  relateId: string,
  catalogId: string,
  isSync: boolean
}) => {
  const res = (await axios.post<string>('/idealab-material/material/history/revert', params));
  return res;
};

// 公模+部位列表
export type Part = {
  code: string,
  name: string,
  itemCode?: Part[]
};
export type Model = {
  id: string,
  name: string,
  img: string,
  isVip?: boolean,
  partProp: Part[]
};
export type ModelTypeItem = {
  id: string,
  name: string,
  modelProp: Model[]
};
export const fetchPublicModelList = async () => {
  const envMap = {
    development: 'dev',
    sit: 'sit',
    staging: 'sit',
    uat: 'uat',
    production: 'art',
  };
  const res = await originAxios.get<ModelTypeItem[]>(`https://sdtc-public-picture.4dshoetech.com/material-library/config/${envMap[envs.VUE_APP_MODE]}/model_config.json`, { params: { v: new Date().getTime() } });
  // 国际化转换
  res.data.forEach(model => {
    model.name = i18n.t(`material.options.applicableParts.${model.name}`, undefined, model.name);
    if (model.modelProp) {
      model.modelProp.forEach(modelProp => {
        modelProp.name = i18n.t(`material.options.applicableParts.${modelProp.name}`, undefined, modelProp.name);
        if (modelProp.partProp) {
          modelProp.partProp.forEach(part => {
            part.name = i18n.t(`material.options.applicableParts.${part.name}`, undefined, part.name);
          });
        }
      });
    }
  });
  return res;
};

// 上传并解析admf
export const parseADMF = async ({
  sddatPath, sddatFile, rg, companyId,
}: { sddatPath: string, sddatFile: File, rg: string, companyId: string }) => {
  type Response = {
    'uploadFilePath': string,
    'admfPath': string,
    imgInfo: {},
    custom: string,
    geometry: string,
    material: string,
    physics: string,
    changeColor: string,
    renderingInfo: {},
  };
  const formData = new FormData();
  formData.append('file', sddatFile);
  const _isAdMf = isAdmf(sddatFile);
  const fetchUrl = envs.VUE_APP_MODE === 'production' ? envs.VUE_APP_DATAPIPE_ART_URL : '';
  const res = (await originAxios.post<Response>(`${fetchUrl}/datapipe/parser/${sddatPath}`, formData, {
    baseURL: `//${envs.VUE_APP_API_DOMAIN}/`,
    headers: {
      'content-type': 'multipart/form-data',
    },
    params: {
      rg,
      companyId,
      args: _isAdMf ? '0' : '1', // 0:admf, 1:4ddat
      compressLevel: 6,
    },
  })).data;
  if (_isAdMf) {
    res.admfPath = res.uploadFilePath;
  }
  return res;
};


/**
 *   获取小程序码
 *   调用方法:
 *       const res = await getMiniProgramQrCodeData('pages/login/index', '123456abc', 300);
 *       console.log(res); //res 是一个base64的图片数据
 *
 *   page获取二维码中的自定义数据
 *   1. 使用小程序内的扫描接口扫描(此函数返回的小程序二维码)
 *      组件内定义名为qrcodeScene的props, 类型为string, 内容对应getMiniProgramQrCodeData函数的scene参数
 *      32个字符的字符串
 *
 *   2. 使用微信的扫一扫功能扫描(此函数返回的小程序二维码)
 *      在组件的export default里， setup()的同级位置，实现onLoad
 *      onLoad(query) {
 *         console.log(query.scene); //内容对应getMiniProgramQrCodeData函数的scene参数
 *       },
 */

// eslint-disable-next-line camelcase
export const getMiniProgramQrCodeData = async (page: string, scene = '', width = 200, is_hyaline = false): Promise<string> => {
  // eslint-disable-next-line camelcase
  const res = (await axios.post('/idealab-material/wechat/qrcode', {
    page, scene, width, is_hyaline,
  })).data;
  return res.qrcode;
};
