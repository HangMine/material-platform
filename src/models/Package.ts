import { modelOf } from '@/utils/model-of';

export class Package {
  id!: string;
  name!: string; // 套餐名称
  businessType?: string; // 业务类型;1-客户套餐；2-内部套餐；
  code: keyof typeof ExperiencePackage | keyof typeof CertificationPackage | keyof typeof EnterprisePackage | ''; // 编号
  authStatus?:string; // 0-未授权，1-已授权
  type?:number; // 公司类型, 0-通用, 11-卖家 12-买家
}

export const PackageOrm = modelOf(Package, {
  entity: 'package',
  primaryKey: 'id',
  fields() {
    return {
      id: this.attr(''),
      name: this.attr(''),
      businessType: this.attr(undefined),
      code: this.attr(undefined),
      authStatus: this.attr(undefined),
      type: this.attr(undefined),
    };
  },
});

// enum EnterprisePackage {
//   LEVEL3 = 'DJ-001',
//   LEVEL2 = 'DJ-002',
//   LEVEL1 = 'DJ-003',
//   // LEVEL4 = 'DJ-004',
// }

enum EnterprisePackage{
  'DJ-001' = 3,
  'DJ-002' = 2,
  'DJ-003' = 1,
  'DJ-004' = 3,
  'DJ-005' = 2,
  'DJ-006' = 1,
  'DJ-007' = 3,
  'DJ-008' = 2,
  'DJ-009' = 1,
}

enum ExperiencePackage {
  'PP001',
  'PP003',
  'PP005',
}

enum CertificationPackage {
  'PP002',
  'PP004',
  'PP006',
}

export default Package;

export { ExperiencePackage, CertificationPackage, EnterprisePackage };
