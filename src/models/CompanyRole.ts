import { modelOf } from '@/utils/model-of';
import Company from './Company';
// import { UserOrm } from './User';

interface User {
  id: string,
  icon:string,
  name:string
}

export class CompanyRole {
  orgId!: Company['id'];
  id!: string;
  name!: string;
  description?: string;
  gmtCreateTime!: number;
  gmtModifyTime!: number;
}

export class UserCompanyRole {
  user!: User;
  useId!: User['id'];
  roleId!: CompanyRole['id'];
  role!: CompanyRole;
  orgId!: Company['id'];
  isOrgAdmin!: 0 | 1;
}

export const CompanyRoleOrm = modelOf(CompanyRole, {
  primaryKey: 'id',
  entity: 'companyRoles',
  fields() {
    return {
      orgId: this.attr(0),
      id: this.attr(0),
      name: this.attr(''),
      description: this.attr(null),
      gmtCreateTime: this.attr(0),
      gmtModifyTime: this.attr(0),
    };
  },
});

export const UserCompanyRoleOrm = modelOf(UserCompanyRole, {
  primaryKey: ['userId', 'roleId', 'orgId'],
  entity: 'userCompanyRoles',
  fields() {
    return {
      userId: this.attr(null),
      roleId: this.attr(null),
      orgId: this.attr(0),
      isOrgAdmin: this.attr(0),
    };
  },
});


export default CompanyRole;
