/* eslint-disable*/
import { AdmfRenderingInfo, MaterialDetail, MaterialListItem, MaterialType, SddatRenderingInfo } from '@/models/Material';
import envs from './envs';
import isDataPipeUrl from './is-data-pipe-url';
import {
  isOssUrl, signUrl, isNeedSignOssUrl, getUrlPrefix, thumb,
} from './oss/utils';
import { t } from '@/i18n/index'
import { fetchMaterial } from '@/api/material';
export type Material = {
  materialID?: string,
  id?: string,
  materialName?: string
  imgJson?: { [x in PropertyKey]: any }
  imgInfo?: { [x in PropertyKey]: any }
  renderingInfo: any,
  renderArguments: any,
  renderingJson: any,
};

type Component = {
  modelId: string,
  ctmId: string,
  ctmName: string,
  ctmPath: string,
  mapSec: string,
  url: string,
  materialId: string | null,
  material: Material | null,
  additionalJson: any,
};

// 渲染数据结构调整适配Viewer
export async function normalizeComponent(component: Component, thumbOptions: any, urlPrefix?: string) {
  const result = await _normalizeComponent(component);
  if (result.material) {
    result.material = await normalizeIdeationMaterial(result.material, thumbOptions, urlPrefix);
  }
  return result;
}

async function _normalizeComponent(component: Component) {
  let { material, materialId } = component;
  if (component.materialId === 'basic' || component.materialId === '1') {
    materialId = null;
    material = null;
  }
  const result = {
    ...component,
    shoeId: component.modelId,
    material,
    componentID: component.ctmId,
    componentName: component.ctmName,
    materialId: material?.id ?? material?.materialID ?? materialId,
    url: component.ctmPath,
    withCredentials: false,
  };
  await Promise.all([
    (async () => {
      if (result.ctmPath) {
        const ctmPath = await normalizeRendererImgUrl(component.ctmPath);
        result.ctmPath = ctmPath;
        result.url = ctmPath;
        result.withCredentials = isDataPipeUrl(ctmPath);
      }
    })(),
  ]);
  return result;
}

export async function normalizeRendererImgUrl(imgPath: string, thumbOptions?: any, urlPrefix?: string) {
  if (imgPath.search(/https?:/) === -1) {
    urlPrefix = urlPrefix ?? await getUrlPrefix();
    imgPath = `${urlPrefix}${imgPath.replace(/^\.\/?/, '')}`;
  }
  const _isOssUrl = isOssUrl(imgPath);
  const _isDatapileUrl = isDataPipeUrl(imgPath);
  const _isNeedSign = isNeedSignOssUrl(imgPath);
  if ((_isOssUrl || _isDatapileUrl) && thumbOptions) {
    imgPath = thumb(imgPath, thumbOptions);
  }
  if (_isNeedSign) {
    imgPath = await signUrl(imgPath);
  }
  return imgPath;
}

export async function normalizeIdeationMaterial(material: Material, thumbOptions: any, urlPrefix?: string) {
  const id = material.materialID ?? material.id;
  const name = material.materialName;
  const parsedMaterial = {
    ...material,
    materialId: id,
    materialID: id,
    materialName: name,
    name,
  };
  const parsedRenderingJson = tryParseRenderingJson(material.renderArguments ?? material.renderingJson);
  const imgJson = parsedMaterial.imgJson || parsedMaterial.imgInfo || {};
  await Promise.all(Object.keys(parsedRenderingJson).map(async (k) => {
    if (k.endsWith('Map') && parsedRenderingJson[k]) {
      const kWithoutMap = k.substring(0, k.length - 3);
      const renderArgumentMapKey2imgJsonKey = {
        diffuse: 'color',
        glossiness: 'gloss',
      } as Record<string, string>;
      parsedRenderingJson[k] = imgJson[k]
        || imgJson[kWithoutMap]
        || imgJson[renderArgumentMapKey2imgJsonKey[kWithoutMap]]
        || parsedRenderingJson[k];
      parsedRenderingJson[k] = await normalizeRendererImgUrl(parsedRenderingJson[k], thumbOptions, urlPrefix);
      parsedRenderingJson[`${k}CrossOrigin`] ??= envs.VUE_APP_IS_REMOTE && isDataPipeUrl(parsedRenderingJson[k]) ? 'use-credentials' : 'anonymous';
    }
  }));
  parsedMaterial.renderArguments = parsedRenderingJson;
  return parsedMaterial;
}

export const getTextureKeyMaps = (type: MaterialType) => {
  const shareKeys = {
    normal: 'normal',
    specular: 'specular',
    roughness: 'roughness',
    alpha: 'alpha',
  }
  return type === '4ddat' ? {
    ...shareKeys,
    diffuse: 'color',
    glossiness: 'gloss',
    metallic: 'metallic',
  } : {
    ...shareKeys,
    diffuse: 'base',
    glossiness: 'glossiness',
    metallic: 'metalness',
    colorEmissive: 'emissive',
    anisotropy: 'anisotropy',
    anisotropyRotation: 'anisotropyrotation'
  }
}

export const isSddatRenderingInfo = (inRenderingInfo: AdmfRenderingInfo | SddatRenderingInfo): inRenderingInfo is SddatRenderingInfo => {
  return !!(inRenderingInfo as SddatRenderingInfo)?.materials?.length
}

// 获取材质贴图
export const getMaterialChartlet = async (material: MaterialListItem) => {
  const outRenderingInfoItem = (await fetchMaterial(material.catalogId)).data.renderingInfo[0]; // 以第一个为准
  if (!outRenderingInfoItem) {
    throw new Error(t('eleMessage.material_map_empty'))
  };
  const { imgInfo = {}, renderingInfo: inRenderingInfo } = outRenderingInfoItem;
  let materialData = {} as Obj;
  let chartletKeys: string[] = [];
  if (isSddatRenderingInfo(inRenderingInfo)) {
    materialData = inRenderingInfo?.materials[0];
    chartletKeys = Object.values((materialData?.textures || {}) as Obj).map(item => item.path);
  } else {
    materialData = inRenderingInfo?.material?.layers[0]?.basic;
    chartletKeys = Object.values(materialData || {}).map(item => item?.texture?.path || '');
  }
  const chartlet = Object.entries(imgInfo).reduce((obj, [chartletKey, chartletPath]) => {
    if (chartletKeys.includes(chartletKey)) {
      obj[chartletKey] = chartletPath;
    }
    return obj;
  }, {} as Obj)

  if (!Object.keys(chartlet).length) {
    throw new Error(t('eleMessage.material_map_empty'))
  }

  return chartlet;
}

export async function normalize4DDatMaterial(material: any, thumbOptions: any, urlPrefix?: string) {
  const { id, name, imgInfo = {}, renderingInfo = {} } = material;
  const textureKeyMaps = getTextureKeyMaps('4ddat') as Record<string, string>;
  const materialData = renderingInfo.materials[0];
  const textures = materialData?.textures || [];
  const parsedMaterialInfo = {
    materialId: id,
    materialID: id,
    materialName: name,
    name,
    renderArguments: {}
  } as any;
  await Promise.all(Object.keys(textures).map(async (key) => {
    const path = textures[key].path;
    const absolutePath = imgInfo[path];
    if (absolutePath) {
      Object.keys(textureKeyMaps).map(async (name) => {
        let value = textureKeyMaps[name];
        if (key.toLocaleLowerCase().includes(value)) {
          // 生成外层的map字段
          parsedMaterialInfo.renderArguments[`${name}Map`] = await normalizeRendererImgUrl(absolutePath, thumbOptions, urlPrefix);
          parsedMaterialInfo.renderArguments[`${name}MapCrossOrigin`] ??= envs.VUE_APP_IS_REMOTE && isDataPipeUrl(absolutePath) ? 'use-credentials' : 'anonymous';
        }
      });
    }
  }));
  parsedMaterialInfo.renderArguments.sddat = renderingInfo;
  return parsedMaterialInfo;
}

function tryParseRenderingJson(renderArguments: any) {
  let parsedRenderArguments: any;
  if (typeof renderArguments === 'string') {
    try {
      parsedRenderArguments = JSON.parse(renderArguments);
    } catch (e) {
      parsedRenderArguments = {};
    }
  } else {
    parsedRenderArguments = { ...renderArguments };
  }
  return parsedRenderArguments;
}

export async function normalizeAMDFMaterial(material: any, thumbOptions: any, urlPrefix?: string) {
  const { id, name, imgInfo = {}, renderingInfo = {} } = material;
  const textureKeyMaps = getTextureKeyMaps('admf') as Record<string, string>;
  const materialData = renderingInfo?.material?.layers[0]?.basic;
  if (!materialData) {
    console.warn(t('eleMessage.missing_admf_data'));
    return false;
  }
  // 解析出所有贴图
  const parsedMaterialInfo = {
    materialId: id,
    materialID: id,
    materialName: name,
    name,
    renderArguments: {}
  } as any;
  await Promise.all(Object.keys(materialData).map(async (key) => {
    const path = materialData[key]?.texture?.path;
    if (path && imgInfo[path]) {
      const absolutePath = imgInfo[path];
      Object.keys(textureKeyMaps).map(async (name) => {
        let value = textureKeyMaps[name];
        if (key.toLocaleLowerCase().includes(value)) {
          // 生成外层的map字段
          parsedMaterialInfo.renderArguments[`${name}Map`] = await normalizeRendererImgUrl(absolutePath, thumbOptions, urlPrefix);
          parsedMaterialInfo.renderArguments[`${name}MapCrossOrigin`] ??= envs.VUE_APP_IS_REMOTE && isDataPipeUrl(absolutePath) ? 'use-credentials' : 'anonymous';
        }
      });
    }
  }));
  parsedMaterialInfo.renderArguments.admfdat = renderingInfo.material;
  return parsedMaterialInfo;
}

// 同时兼容ADMF/4DDat
export function normalizeMaterial(material: any, thumbOptions: any, urlPrefix?: string) {
  const { renderingInfo = {} } = material;
  try {
    if (renderingInfo?.materials?.length) {
      return normalize4DDatMaterial(material, thumbOptions, urlPrefix);
    } else {
      return normalizeAMDFMaterial(material, thumbOptions, urlPrefix);
    }
  } catch (error) {
    throw new Error(`${t('eleMessage.error_in_render')}：${error}`);
  }
}
