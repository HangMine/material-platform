import { ModelTypeItem } from '@/api/material';

type Item<A> = A extends readonly (infer T)[] ? T : A extends (infer T)[] ? T : never;
type Values<O> = O extends { [k in any]: infer T } ? T : never;

export type MaterialType = '4ddat' | 'admf';

// 色卡的renderingInfo(前端用)
export interface RenderingInfoItem {
  sort: number;
  name: string;
  colorInfo: string;
  colorFamily: string;
  isDefault: number;
  isBan: number;
  fileInfo: {
    '4ddat': string;
    admf: string;
  };
  imgInfo?: Obj;
  renderingInfo?: Obj;
  changeColor?: Obj;
  material?: Obj; //
}
export type RenderingInfo = RenderingInfoItem[];

// admf的renderingInfo
export interface AdmfRenderingInfo {
  material: {
    layers: {
      basic: Obj;
    }[];
  };
}

// 4ddat的renderingInfo
export interface SddatRenderingInfo {
  materials: {
    textures: Obj;
  }[];
}

// renederingInfo字段里面每个item的renderingInfo字段
export type InRenderingInfo = AdmfRenderingInfo | SddatRenderingInfo;

// 材料的renederingInfo字段
export interface OutRenderingInfoItem {
  id: string;
  name: RenderingInfoItem['name'];
  colorInfo: string;
  colorFamily: RenderingInfoItem['colorFamily'];
  materialId: string;
  isDefault: 1 | 0;
  isBan: 1 | 0;
  fileInfo: Record<MaterialType, string>;
  imgInfo: Obj;
  renderingInfo: InRenderingInfo;
  sort: number;
}
export type OutRenderingInfo = OutRenderingInfoItem[];

export type PartialNumberBoolean = '' | 1 | 0;

// 面料基本信息
export class MaterialAttr {
  // 基本信息
  name = ''; // 材料名
  designContent = ''; // 标签
  sn = ''; // 编号（供货商货号）
  yearSeason = []; // 上市时间
  applicableSeason = ''; // 适用季节
  series = ''; // 系列
  applicableProduct: string | string[] = ''; // 适用产品线
  applicableParts: Obj[] = []; // 适用部位
  isEnvironmentProtection: PartialNumberBoolean = ''; // 是否环保
  environmentProtectionType: PartialNumberBoolean = ''; // 环保种类
  type = ''; // 类型
  productName = ''; // 品名
  classification = ''; // 分类

  colorRestriction = ''; // 颜色限制
  note = ''; // 注意事项
  // 业务信息
  isInStock = ''; // 是否现货
  isAgain = 0; // 是否允许被分享
  unit = ''; // 单位(沟通单位)
  sampleMoq = ''; // 样品起订量
  moq = ''; // 大货起订量（量产起订量）
  moqUnit = ''; // 大货起订量单位
  samplePrice = ''; // 样品价格
  samplePriceUnit = ''; // 样品价格单位
  samplePriceCurrency = ''; // 样品价格币种
  sampleMoqUnit = ''; // 样品起订量单位
  price = ''; // 量产价格
  priceUnit = ''; // 量产价格单位
  priceCurrency = ''; // 量产价格币种
  developmentCycle = ''; // 开发周期
  developmentCycleUnit = ''; // 开发周期单位
  leadTime = ''; // 大货生产周期（量产周期）
  leadTimeUnit = ''; // 大货生产周期单位（量产周期单位）

  currency = ''; // 币种

  // 特征属性
  materialTechnology: string | string[] = ''; // 材料工艺（颗粒面特征）
  averagesize = ''; // 平均尺寸
  averageSizeUnit = ''; // 平均尺寸单位
  grammage = ''; // 克重
  grammageUnit = ''; // 克重单位
  thickness = ''; // 厚度
  thicknessUnit = ''; // 厚度单位
  oilContent = ''; // 含油量
  oilContentUnit = ''; // 含油量单位
  highTemperatureRange = ''; //  可承受高温范围
  qualityGrade = ''; // 质量等级
  texturetype = ''; // 纹理类型
  bottomType = ''; // 底布类型
  function: string[] = []; // 功能
  postProcessing = ''; // 后处理
  area = ''; // 面积
  areaUnit = ''; // 面积单位
  recommendParts = ''; // 推荐使用部位
  manufacturingProcess = ''; // 制造工艺
  surfaceTreatment = ''; // 表面处理
  countryOfOrigin = ''; // 原产地
  width = ''; // 幅宽
  widthUnit = ''; // 幅宽单位
  component = ''; // 成分
  yarnAndProportion = ''; //  纱线及占比
  compositeMode = ''; //  复合方式
  length = ''; // 匹长(纱线及匹长)
  lengthUnit = ''; // 匹长单位(米)
  engineeringDesignMode = ''; // 工程设计方式
  structureMode = ''; // 结构方式
  subType = ''; // 材料子类型
  textureType = ''; // 纹理


  // 其它属性
  softness = ''; // 柔软性
  airPermeability = ''; //  透气性
  wearResistance = ''; //  耐磨损性
  elasticForce = ''; // 弹力
  colorFastness = ''; //  色牢度

  // 未分配
  hasFile: 1 | 0 = 0; // 是否有4ddat文件
  expireTime = ''; // 过期时间
  detail = ''; // 详情
  orgId = ''; // 租户id
  placeOfOrigin = ''; // 产地
  temperatureUnit = ''; // 温度单位
  attribute = ''; // 额外属性
  specification = ''; // 材料规格
  originalId = ''; // 源id
  categoryId = ''; // 材料类目
}

// 面料表单信息
// export class MaterailForm extends MaterialAttr {
//   season: string[] = [];
//   applicableProduct: string[] = [];
//   surfaceTechnology: string | string[] = '';
//   materialtechnology: string[] = [];
// }

// 面料
export interface EnclosureItem {
  url: string;
  name: string;
}
export class Material {
  // 色卡相关信息
  renderingInfo: OutRenderingInfo = [];
  // 附件信息
  enclosureInfo: {
    videos: EnclosureItem[];
    docs: EnclosureItem[];
    images: EnclosureItem[];
  } = ({
    videos: ([] as unknown) as EnclosureItem[],
    docs: ([] as unknown) as EnclosureItem[],
    images: ([] as unknown) as EnclosureItem[],
  });
  // 表单信息
  attributeInfo = new MaterialAttr();
}

export const materialStatus = {
  待上架: '待上架' as const,
  已上架: '已上架' as const,
  已下架: '已下架' as const,
};

export const colorFamily = {
  红色: '红色' as const,
  橙色: '橙色' as const,
  黄色: '黄色' as const,
  绿色: '绿色' as const,
  青色: '青色' as const,
  蓝色: '蓝色' as const,
  紫色: '紫色' as const,
  黑色: '黑色' as const,
  灰色: '灰色' as const,
  白色: '白色' as const,
};
export const colorFamilyArr = Object.keys(colorFamily);

export const colorFamilyMap = {
  红色: '#F45050',
  橙色: '#FFA64F',
  黄色: '#FFD809',
  绿色: '#62DC4B',
  青色: '#4BDCAC',
  蓝色: '#60B4F1',
  紫色: '#B360F1',
  黑色: '#303135',
  白色: '#DDDDDD',
  灰色: '#BFBFC2',
};

export type MaterialStatus = keyof typeof materialStatus;
export const materialStatusOptions = Object.entries(materialStatus).map(([key, title]) => ({
  key,
  title,
}));

export const colorFamilyOptions = Object.entries(colorFamily).map(([key, title]) => ({
  key,
  title,
}));

interface MaterialDetailAttribute extends MaterialAttr {
  creator: string;
  gmtCreateTime: string;
  gmtModifyTime: string;
  applicableParts: ModelTypeItem[];
  applicableProduct: string;
}
export interface MaterialDetail extends Material {
  attributeInfo: MaterialDetailAttribute;
  supplierInfo: {
    supplierName: string;
    supplierLogo: string;
    supplierId: string;
    count: number;
    industry: string;
    isCooperation: boolean;
    isFollow: boolean;
    followCount: number;
  };
  isCollect: boolean;
  isApply: boolean; // 是否申请过样品
  originalCId: string; // 面料ID
  isChoose?: boolean; // 是否选用
  catalogId?: string; // 值同originalCId(?), 只用于选用参数统一
}

export interface MaterialListItem extends MaterialAttr {
  applicableProduct: string;
  materialtechnology: string;
  id: string;
  catalogId: string;
  originalCId: string;
  tag: MaterialStatus;
  creator: string;
  isAgain: number;
  isAgainText: string;
  gmtCreateTime: string;
  gmtModifyTime: string;
  renderingInfo: OutRenderingInfo;
  images: string[]; // 附件图片列表
  supplierLogo?: string;
  supplierName?: string;
  materialTypeContent?: string; // 材料类型文本
}

export type MaterialList = MaterialListItem[];

export interface SharedMaterialItem extends MaterialListItem {
  isChecked: boolean;
  isCollect: boolean;
}

export default Material;


export interface RecommendationMaterialItem extends MaterialListItem {
  companyId: string,
  companyName: string,
  recommendMeetingId: string,
  recommendMeetingName: string,
}
