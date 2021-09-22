/* eslint-disable class-methods-use-this */
// import { getContextCompany } from '@/loaders/context';
import { modelOf } from '@/utils/model-of';
import Company, { CompanyOrm } from './Company';
import CompanyRole, { CompanyRoleOrm, UserCompanyRoleOrm } from './CompanyRole';


export class User {
  id!: string;
  account ?: string;
  headImg ?: string;
  name?: string;
  phone ?: string;
  mail ?: string;
  mobile?: string;
  status!: number; // 0：待审核 1：审核不通过 2：有效 3：过期 4：用户无效 5：冻结

  // 个人注册关联的公司
  companyId ?: string;
  company?: Company;
  companies!: Company[];

  // 被关联的公司
  // companies!: Company[];

  /**
   * @deprecated 改用getContextCompany的businessType
   * @see {@link ./Company}
   */
  // get businessType() {
  //   return getContextCompany()?.businessType;
  // }
  // roleId ?: CompanyRole['id'];

  // TODO: 确认是否材料平台特有属性
  companyName?:string;
}

export const UserOrm = modelOf(User, {
  entity: 'users',
  primaryKey: 'id',
  fields() {
    return {
      id: this.attr(''),
      account: this.attr(''),
      headImg: this.attr(undefined),
      status: this.attr(undefined), // 账号审核状态
      name: this.attr(''),
      phone: this.attr(''),
      mobile: this.attr(''),
      mail: this.attr(undefined),
      companyId: this.attr(undefined),
      company: this.belongsTo(CompanyOrm, 'companyId'),
      companies: this.belongsToMany(CompanyOrm, UserCompanyRoleOrm, 'userId', 'orgId'),
      // roleId: this.attr(undefined),
      // role: this.belongsTo(CompanyRoleOrm, 'roleId'),
    };
  },
});

export default User;
