/* eslint-disable import/prefer-default-export */
import {
  UploadItems, uploadItem2ApiEnclosureItems, FailUploadItem, FailUploadList, onUploadCallback,
} from '@/components/form/upload/utils';
import {
  EnclosureItem, MaterialAttr, MaterialDetail, MaterialListItem,
} from '@/models/Material';
import deepCopy, { getType } from '@/utils/deep-copy';
import { getRelativePathFromUrl } from '@/utils/normalize-component';
import originAxios, { AxiosResponse } from 'axios';
import { computed, Ref, ref } from 'vue';
import * as materialApi from '@/api/material';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import { getContextCompany, getContextUser } from '@/loaders/context';
import { getAuthConfig } from '@/loaders/dictionary';
import parseMaterialFile from '@/utils/materialFileLoader';
import { getParams, thumb } from '@/utils/oss/utils';
import router from '@/router';
import { ThumbOptions } from '@/typings/thumb-options.d';
import getExt from '_/get-ext';
import { fetchCategoryList } from '@/api/material';
import splitUnit from '_/split-unit';
import i18n from '@/i18n';
import envs from '@/utils/envs';
import useHeader from '../Header/components/useHeader';
import {
  Color, Colors, getDefaultColor, getColorSystem,
} from './components/ColorCard/utils';

export const loading = ref(false);
export const uploadedPercentage = ref('');
export const failList: FailUploadList = [];

export const getUploadSizeStat = (fileForm: string | File | UploadItems | { [key: string]: undefined | File | any }) => {
  const fileMap = { } as { [id: string]: number };
  let totalSize = 0;
  return {
    getTotalSize(files = fileForm) {
      // if (typeof files === 'string') {
      //   return;
      // }
      console.log(files);
      if (files instanceof File) {
        totalSize += files.size;
      } else if (Array.isArray(files)) {
        files.forEach((file) => {
          if (file.item) {
            this.getTotalSize(file.item);
          }
        });
      } else if (typeof files === 'object' && files) {
        Object.values(files).forEach(file => {
          if (file) {
            this.getTotalSize(file);
          }
        });
      }
      console.log(totalSize);
      // return totalSize;
    },
    addUploadedSize(uploadChunkStat: Parameters<onUploadCallback>) {
      console.log(uploadChunkStat);
      const { fileId } = uploadChunkStat[4];
      // if (!fileMap[uploadId]) {
      //   fileMap[uploadId] = 0;
      // }
      fileMap[fileId] = uploadChunkStat[1] || 0;
      this.getUploadedPercentage();
    },
    getTotalUploadedChunkSize() {
      console.log(fileMap, Object.values(fileMap));
      return Object.getOwnPropertySymbols(fileMap).reduce((sum, sblKey) => {
        // @ts-ignore
        return sum + fileMap[sblKey];
      }, 0);
    },
    getUploadedPercentage() {
      const uploadedChunkSize = this.getTotalUploadedChunkSize();
      console.log(uploadedChunkSize);
      uploadedPercentage.value = `${(uploadedChunkSize / totalSize * 100).toFixed(2)}%`;
      // return uploadedPercentage.value;
    },
  };
};

export const getEnclosureInfo = async (fileForm: {
  materialEnclosureItem?: EnclosureItem, imgList: UploadItems, videoList: UploadItems, fileList: UploadItems
}, onUpload?: onUploadCallback) => {
  const {
    imgList, videoList, fileList,
  } = fileForm;
  const uploadOssKeys = {
    images: [] as EnclosureItem[],
    videos: [] as EnclosureItem[],
    docs: [] as EnclosureItem[],
  };


  if (imgList.length) {
    try {
      uploadOssKeys.images = await uploadItem2ApiEnclosureItems(imgList, 'BINARY_FILE', 'img', onUpload);
    } catch (_failList) {
      failList.push(..._failList as FailUploadList);
    }
  }
  if (videoList.length) {
    try {
      uploadOssKeys.videos = await uploadItem2ApiEnclosureItems(videoList, 'BINARY_FILE', 'video', onUpload);
    } catch (_failList) {
      failList.push(..._failList as FailUploadList);
    }
  }
  if (fileList.length) {
    try {
      uploadOssKeys.docs = await uploadItem2ApiEnclosureItems(fileList, 'BINARY_FILE', 'file', onUpload);
    } catch (_failList) {
      failList.push(..._failList as FailUploadList);
    }
  }

  return uploadOssKeys;
};

type GetRenderingInfoParams = {
  colorInfos: Colors,
  onUpload?: onUploadCallback,
  materialEnclosureItem?: { url: string, admf: string, name: string, renderingInfo: Obj, imgInfo: Obj, changeColor: any },
  onParseStart?: () => void,
  onParseEnd?: () => void
};
export const getRenderingInfo = async ({
  colorInfos, onUpload, materialEnclosureItem, onParseStart, onParseEnd,
}: GetRenderingInfoParams) => {
  const bindSddatColor = colorInfos.find(item => item.isBindMaterialFile && item.materialFile);
  let sddatKey = materialEnclosureItem ? materialEnclosureItem.url : '';
  let admf = materialEnclosureItem ? materialEnclosureItem.admf : '';
  // hasFile两个条件对应上传和编辑
  const hasFile = !!(bindSddatColor && bindSddatColor.materialFile) || !!(materialEnclosureItem ? materialEnclosureItem.url : false);
  const originRenderingInfo = materialEnclosureItem ? materialEnclosureItem.renderingInfo : { };
  const originImgInfo = materialEnclosureItem ? materialEnclosureItem.imgInfo : { };
  const originChangeColor = materialEnclosureItem ? materialEnclosureItem.changeColor : { };
  const originTextureInfo = { } as any;
  const offlineImgReg = /^imgUrl_/;
  Object.keys(originImgInfo).filter((key) => key !== 'realTimePreviewImg' && !offlineImgReg.test(key)).forEach((key) => {
    originTextureInfo[key] = originImgInfo[key];
  });
  let parseADMFRes = {
    imgInfo: originTextureInfo,
    renderingInfo: originRenderingInfo,
    changeColor: originChangeColor,
  } as AsyncReturnType<typeof materialApi.parseADMF>;
  // const firstColor = colorInfos[0];
  // let parseADMFRes = (firstColor ? {
  //   imgInfo: {},
  //   renderingInfo: originRenderingInfo,
  // } : {} as Obj) as AsyncReturnType<typeof materialApi.parseADMF>;
  if (bindSddatColor && bindSddatColor.materialFile) {
    // try {
    //   sddatKey = await uploadToOSS(bindSddatColor.materialFile, '4DDAT', onUpload);
    // } catch (error) {
    //   failList.push({
    //     name: bindSddatColor!.materialFile!.name,
    //     type: '4ddat',
    //   });
    // }
    if (onParseStart) onParseStart();
    const getRg = async () => {
      const { cfgs, ossSTS } = await getAuthConfig();
      const { region, defaultRegion } = cfgs;
      return ossSTS[region].region || ossSTS[defaultRegion].region || '';
    };
    const sddatPath = (await getParams(bindSddatColor.materialFile)).path;
    parseADMFRes = await materialApi.parseADMF({
      sddatPath,
      sddatFile: bindSddatColor.materialFile,
      rg: await getRg(),
      companyId: getContextUser()?.companyId || '',
    });
    // 接入AMDF
    parseADMFRes.renderingInfo = {
      material: tryParseJson(parseADMFRes.material),
      geometry: tryParseJson(parseADMFRes.geometry),
      physics: tryParseJson(parseADMFRes.physics),
    };
    parseADMFRes.changeColor = tryParseJson(parseADMFRes.changeColor);
    sddatKey = parseADMFRes.uploadFilePath;
    admf = parseADMFRes.admfPath;
    if (onParseEnd) onParseEnd();
  }

  const renderingInfo = colorInfos.map((item, i) => {
    item.fileInfo.admf = getRelativePathFromUrl(item.fileInfo.admf || admf); // 设置admf
    item.fileInfo['4ddat'] = getRelativePathFromUrl(item.fileInfo['4ddat'] || sddatKey); // 设置4ddat
    const newImgInfo: Obj = { ...item.imgInfo, ...parseADMFRes.imgInfo };
    Object.entries(newImgInfo).forEach(([key, value]) => {
      newImgInfo[key] = getRelativePathFromUrl(value);
    });
    return {
      sort: i,
      name: item.name,
      colorInfo: item.value,
      isDefault: item.isDefault ? 1 : 0,
      colorFamily: item.system,
      fileInfo: item.fileInfo,
      isBan: item.isBindMaterialFile ? 1 : 0,
      imgInfo: hasFile ? newImgInfo : { },
      renderingInfo: hasFile ? parseADMFRes.renderingInfo : { },
      changeColor: hasFile ? parseADMFRes.changeColor : { },
    };
  });

  return renderingInfo;
};


export const addColor = (refColors: Ref<Colors>, color: Color | Colors, isUnshfit?: Boolean) => {
  const handleColor = (needHandleColor: Color) => {
    // 增加这个处理逻辑是因为其它地方有用到,在4ddatChange里面,处理的这些属性都会被清除
    const firstColor = refColors.value[0];
    const { renderingInfo, imgInfo = { } } = firstColor;
    const parse4ddatImgInfo = Object.entries(imgInfo).reduce((obj, [key, value]) => {
      if (/.PNG$/.test(key)) {
        obj[key] = getRelativePathFromUrl(value);
      }
      return obj;
    }, { } as Obj);
    needHandleColor.renderingInfo = renderingInfo;
    needHandleColor.imgInfo = parse4ddatImgInfo;
  };

  const getAddColors = () => {
    const addColors = Array.isArray(color) ? color : [color];
    if (refColors.value.length > 0) {
      addColors.forEach(_addColor => handleColor(_addColor));
    }
    return addColors;
  };

  const add = () => {
    if (isUnshfit) {
      // getAddColors().reverse().forEach(item => {
      //   refColors.value.unshift(item);
      // });
      refColors.value = [...getAddColors(), ...refColors.value];
    } else {
      // getAddColors().forEach(item => {
      //   refColors.value.push(item);
      // });
      refColors.value = [...refColors.value, ...getAddColors()];
    }
  };
  add();
};

export const handle4ddatChage = async (materialFile: File | undefined, refColorInfos: Ref<Colors>) => {
  const clear4ddat = () => {
    refColorInfos.value = refColorInfos.value.map(item => {
      return {
        ...item,
        fileInfo: {
          ...item.fileInfo,
          '4ddat': '',
          admf: '',
        },
        renderingInfo: { },
        changeColor: { },
      };
    });
  };
  const clearAllOld4ddatColorCard = () => {
    // 清空旧的材料文件解析出来的色卡
    refColorInfos.value = refColorInfos.value.filter(item => !item.isBindMaterialFile);
  };

  clearAllOld4ddatColorCard();

  if (materialFile) {
    // 新增4ddat或者编辑4ddat
    const cssRgbArr = await parseMaterialFile(materialFile);
    const addColors = cssRgbArr.map((cssRgb: string) => {
      const isOrigin = !cssRgb; // cssRgb为空时则为原色色卡
      const value = cssRgb;
      const system = isOrigin ? '' : getColorSystem(value);
      const fileName = materialFile.name.slice(0, 32);
      const name = cssRgbArr.length === 1 ? fileName : `${fileName}/${cssRgb || '原色色卡'}`;
      const sddatColor: Color = {
        ...getDefaultColor(),
        value,
        name,
        temName: name,
        system,
        isBindMaterialFile: true,
        materialFile,
        isOrigin,
      };
      return sddatColor;
    });
    addColor(refColorInfos, addColors, true);
  }
  clear4ddat();
};

async function getFileSize(url: string) {
  const res: AxiosResponse = await originAxios.head(url, {
    withCredentials: true,
    baseURL: `//${envs.VUE_APP_API_DOMAIN}`,
  });
  const size = Number(res.headers['content-length']);
  return size;
}

export const validateFiles = ({ limit }: { limit: number } = { limit: 1024 * 1024 * 1024 }) => {
  return async (files: File[], existedItems: UploadItems) => {
    const _files: File[] = [...files];
    const urls: string[] = [];
    existedItems.forEach(uploadItem => {
      if (uploadItem.item instanceof File) {
        _files.push(uploadItem.item);
      } else {
        const url = uploadItem.url || uploadItem.item; // item不是file的情况下,url就是资源的地址,兼容Item也可能是资源地址的情况
        if (url) urls.push(url);
      }
    });
    const allFileSize = _files.reduce((total, file) => total + file.size, 0);
    const allUrlSizes = await Promise.all(urls.map(async url => {
      const dataPipeUrl = `datapipe/repository/${getRelativePathFromUrl(url)}`; // 静明接口
      const size = await getFileSize(dataPipeUrl);
      return size;
    }));
    const allUrlSize = allUrlSizes.reduce((total, size) => total + size, 0);
    if (allFileSize + allUrlSize > limit) {
      const [num, unit] = splitUnit(limit);
      throw new Error(i18n.t('material-manage.upload.all_file_limit', { limit: `${num}${unit}` }));
    }
  };
};

export const getDisplayImgItem = (row: MaterialListItem) => {
  const { renderingInfo } = row;
  const diaplayImgItem = renderingInfo.find(item => item.isDefault) || renderingInfo[0] || { } as Obj;
  return diaplayImgItem;
};
const isMaterialDetail = (material: MaterialDetail | MaterialListItem): material is MaterialDetail => {
  return !!(material as MaterialDetail).attributeInfo;
};

// 获取图片逻辑
// eslint-disable-next-line @typescript-eslint/no-var-requires
const DEFAULT_IMG = require('@/assets/img/public/default-image.png');

export const getMaterialImg = (row: MaterialListItem | MaterialDetail, imgUrlKey = 'imgUrl_crease') => {
  const renderingInfo = row.renderingInfo || [];
  const images = (isMaterialDetail(row) ? row.enclosureInfo.images : row.images) || [];
  const diaplayImgItem = renderingInfo.find(item => item.isDefault) || renderingInfo[0] || { imgInfo: { [imgUrlKey]: '' } };
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  let displayImg = DEFAULT_IMG;
  // if (diaplayImgItem.imgInfo) {
  const cloudImg = diaplayImgItem.imgInfo?.[imgUrlKey];
  const enclousureImg = images[0]; //  如果没有渲染图片,显示附件缩略图第一个
  displayImg = cloudImg || enclousureImg || DEFAULT_IMG;
  // }
  return displayImg;
};

// 手动thumb
export const getDiyThumb = (src: string, options: ThumbOptions = { }) => {
  // src = src.replace(/:\/\/(?:dev|sit)\.4dshoetech\.local\/datapipe/, `s://${envs.VUE_APP_API_DOMAIN}/datapipe`); // 小程序才做这个处理
  src = thumb(src, { outType: 'image/jpg', ...options });
  return src;
};

// 获取base64图片
export const getMaterialImgWithBase64 = async (row: MaterialListItem, imgUrlKey = 'imgUrl_crease') => {
  const materialImg = getMaterialImg(row, imgUrlKey);
  if (materialImg === DEFAULT_IMG) {
    return '';
  }

  const imgUrl = getDiyThumb(materialImg, { width: 512, height: 512 }); // TODO: 先写死512吧
  const img = (await originAxios.get<any, any>(imgUrl, { withCredentials: true, responseType: 'arraybuffer' })).data;
  // const base64 = `data:image/png;base64,${img}`;
  const base64 = Buffer.from(img, 'binary').toString('base64');
  return `data:image/png;base64,${base64}`;
};


// 校验是否有4ddat文件
export const has4ddat = (material: MaterialDetail | MaterialListItem) => {
  if (isMaterialDetail(material)) {
    return !!material.attributeInfo.hasFile;
  }
  return !!material.hasFile;
};
export const useHas4ddat = (material: MaterialDetail | MaterialListItem) => {
  return computed(() => has4ddat(material));
};

// 获取价格逻辑
export const getDisplayPrice = (
  material: MaterialDetail | MaterialListItem,
  priceKey: keyof MaterialAttr = 'samplePrice',
  priceUnitKey: keyof MaterialAttr = 'samplePriceUnit',
) => {
  const atrr: MaterialAttr = isMaterialDetail(material) ? material.attributeInfo : material;
  const currentcy = atrr.samplePriceCurrency === '美元' ? '$' : '¥';
  const price = atrr[priceKey as 'samplePrice'] || 0;
  const unit = atrr?.[priceUnitKey || `${priceKey}Unit`] || '' as string;
  const resUnit = unit ? `/${unit}` : '';
  return `${currentcy}${price}${resUnit}`;
};

// 拼接单位逻辑
export const addDisplayUnit = (material: MaterialDetail | MaterialListItem, priceKey: keyof MaterialAttr, priceUnitKey?: keyof MaterialAttr) => {
  const atrr: MaterialAttr = isMaterialDetail(material) ? material.attributeInfo : material;
  const price = atrr[priceKey];
  // @ts-ignore
  const unit = atrr?.[priceUnitKey || `${priceKey}Unit`] || '' as string;
  return `${price}${unit}`;
};

// 以图搜图逻辑
export const searchBaseImage = (imageFile: File) => {
  const header = useHeader();
  header.searchImageFile = imageFile;
  router.push({
    path: '/search/same',
  });
};

// 判断是否是admf的逻辑
export const isAdmf = (file: File) => {
  return getExt(file).toLowerCase() === 'admf';
};

// 获取材料分类的展示
export const getMaterialCategoryDisplay = async (material: MaterialDetail | MaterialListItem) => {
  const atrr: MaterialAttr = isMaterialDetail(material) ? material.attributeInfo : material;
  const categoryList = await fetchCategoryList(atrr.categoryId);
  return categoryList.map(item => item.name).join('-');
};


