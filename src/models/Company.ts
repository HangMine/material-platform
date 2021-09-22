import { modelOf } from '@/utils/model-of';
// import CompanyRole, { CompanyRoleOrm } from './CompanyRole';
// import Package, { PackageOrm } from './Package';
import { IdentityType } from './Permission';


// export enum CompanyType {
//   BRAND = 1,
//   MATERIAL_SUPPLIER = 3,
//   PERSONAL_STUDIO = 7,
//   OTHER = 8,
// }

// export enum PartnerStatus {
//   NORMAL = 1,
//   STOP = 2,
// }
// 数据来源（0：用户 1：后台创建）
// export enum SourceStatus {
//   BY_USER = 1,
//   BY_ADMIN = 2,
// }

// function generateAccessor(model: Object, propKey: string, relationKey: string, {
//   internalKey,
//   foreignKey = 'id',
// }: { internalKey: string, foreignKey?: string }) {
//   Object.defineProperty(model, propKey, {
//     set(value: string | undefined) {
//       if (!value) return;
//       if (!this[internalKey]) throw new Error('no package id');
//       this[relationKey] ??= { [foreignKey]: this[internalKey] };
//       Object.assign(this.package, {
//         [propKey]: value,
//       });
//     },
//     get() {
//       return this[relationKey]?.[propKey];
//     },
//   });
// }
// 0：待审核 1：审核不通过 2：有效 3：过期
enum AuditStatus {
  NOAPPLY = -1,
  PENDING,
  NOPASS,
  VALID,
  EXPIRE
}

// export class ResourceInfo {
//   userId!: string;
//   usedSubAccount!: number;
//   freeSubAccount!: number;
//   totalSubAccount!: number;
//   totalDataSize!: number;
//   usedWorkspace!: number;
//   totalWorkspace!: number;
// }

type Attachment = { name: string, downloadUrl: string };

export class Company {
  // /** @deprecated 国家 */
  // country ?: number;
  // /** @deprecated 城市 */
  // city ?: string;

  // 套餐Id
  // packageId ?: string;
  // // 套餐名字
  // packageName ?: string;
  // package: Package;
  // businessType ?: 0 | 1 | 2 | 3;

  id!: string;
  // 公司类型(1：品牌；2：代理商/贸易公司；3： 面料供应商；4：制造商；5：独立设计师；6：材料供应商；7：个人工作室；8：其它; 11-(IDEALAB)供应商; 12-(IDEALAB)买家)
  type!: IdentityType;
  // 公司规模(1：少于50人 2；50-150人 3：150-500人 4：500-1000人 5：1000-5000人 6：5000人以上)
  // scale ?: number;
  // 公司注册代码
  certificateCode?: string;
  // 公司全称
  name!: string;
  // 公司简称
  // abbreviation?: string;
  // 合作状态(1：正常，2：停止)
  // partnerStatus!: PartnerStatus;
  // 有效期至
  // expireTime!: string;
  // 创建人
  creatorName?: string;
  // creatorLastName ?: string;
  // creatorFirstName ?: string;
  // creatorPosition ?: string;
  creatorPhone?: string;
  creatorMail?: string;

  // auditStatus?: AuditStatus;
  // 联系人
  contactName?: string;
  contactMobile?: string;

  // resourceInfo ?: ResourceInfo;
  // roles?: CompanyRole[];
  // 地址
  addressCountry?: string;
  addressProvince?: string;
  addressCity?: string;
  addressDistrict?: string; // 级联地区
  address?: string;
  // 公司邮箱
  // email?: string;
  // 公司LOGO(去掉域名后的url, 提交用该字段)
  logo?: string;
  // 公司LOGO(完整url, 显示用该字段)
  logoUrl?: string;
  // 附件
  additionalFiles?: Attachment[];
  // 公司简介
  industry?: string;
  // 主营产品：真皮；人造革；针织；梭织；薄膜料；其他；鞋带；织带；织唛；鞋垫；沿条；五金配饰；线；鞋底
  leadingProduct!: string | string[];
  // 固定电话
  landline?: string;
  // 经营模式：制造商、工厂；贸易公司；批发零售；其他
  businessModel!: string;
  // 经营范围
  businessScope!: string;
  // 合作品牌
  cooperationBrand!: string;
  // 数据来源（0：用户 1：后台创建）
  // sourceStatus?: SourceStatus;
  // message?: string;
  // 用户在当前租户中是否为主账号
  isAdmin!: boolean;

  isVIP!: boolean;
  packageName!: string;
  expireTime!: string;

  // 企业必填项是否已填
  isFilled!: boolean;
}

// export const ResourceInfoOrm = modelOf(ResourceInfo, {
//   entity: 'resourceInfos',
//   primaryKey: 'userId',
//   fields() {
//     return {
//       userId: this.attr(''),
//       usedSubAccount: this.attr(0),
//       freeSubAccount: this.attr(0),
//       totalSubAccount: this.attr(0),
//       totalDataSize: this.attr(0),
//       usedWorkspace: this.attr(0),
//       totalWorkspace: this.attr(0),
//     };
//   },
// });


export const CompanyOrm = modelOf(Company, {
  entity: 'companies',
  primaryKey: 'id',
  fields() {
    return {
      // country: this.attr(''),
      // /** @deprecated 城市 */
      // city: this.attr(''),

      /** @deprecated 套餐信息、服务等级 */
      // packageId: this.attr(''),
      // package: this.hasOne(PackageOrm, 'id', 'packageId'),

      id!: this.attr(''),
      // 公司类型
      type!: this.attr(0),
      // 公司规模
      // scale: this.attr(''),
      // 公司注册代码
      certificateCode: this.attr(''),
      // 公司全称
      name!: this.attr(''),
      // 公司简称
      // abbreviation: this.attr(''),
      // 合作状态
      // partnerStatus: this.attr(1),
      // 有效期至
      // expireTime: this.attr(null),
      // 创建人
      creatorName: this.attr(''),
      // creatorLastName: this.attr(''),
      // creatorFirstName: this.attr(''),
      creatorPhone: this.attr(''),
      creatorMail: this.attr(''),

      // 联系人
      contactName: this.attr(''),
      contactMobile: this.attr(''),

      // 地址
      addressCountry: this.attr(''),
      addressProvince: this.attr(''),
      addressCity: this.attr(''),
      addressDistrict: this.attr(''), // 级联地
      address: this.attr(''),

      // roles: this.hasMany(CompanyRoleOrm, 'orgId'),

      // 公司邮箱
      // email: this.attr(''),

      // 公司LOGO
      logo: this.attr(''),
      logoUrl: this.attr(''),

      additionalFiles: this.attr([]),

      // businessType: this.attr(0),
      // auditStatus: this.attr(-1),

      industry: this.attr(''),
      leadingProduct: this.attr(''),
      landline: this.attr(''),
      businessModel: this.attr(''),
      businessScope: this.attr(''),
      cooperationBrand: this.attr(''),
      // message: this.attr(''),

      isAdmin: this.attr(false),
      isVIP: this.attr(false),
      packageName: this.attr(''),
      expireTime: this.attr(''),
      isFilled: this.attr(false),
    };
  },
});
export default Company;
