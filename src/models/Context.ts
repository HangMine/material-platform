// import { AccountType } from '@/api/account';

// export class User {
//   id!: string;
//   name!: string;
//   account!: string;
//   type!: AccountType;
//   companyId!: string;
//   companyName!: string;
//   headImg!: string;
//   // mail!: string;
//   // mobile!: string;
//   // phone!: string;
//   // sourcePlatformId!: string;
//   status!: number;
//   department!: string;
//   constructor(mixin: Partial<User>) {
//     Object.assign(this, mixin);
//   }
// }

// export class Company {
//   id!: string;
//   name!: string;
//   businessModel!: string;
//   businessScope!: string;
//   leadingProduct!: string | string[];
//   cooperationBrand!: string;
//   landline!: string;
//   addressCountry!: string | null;
//   addressProvince!: string | null;
//   addressCity!: string | null;
//   address!: string;
//   logo!: string;
//   type!: AccountType; // 角色类型
//   creatorMail!: string;
//   creatorPhone!: string;
//   creatorName!: string;
//   industry!: string;
//   constructor(mixin: Partial<Company>) {
//     Object.assign(this, mixin);
//   }
// }

// export class Context {
//   // 当前用户
//   user!: User;
//   _userId!: User['id'];
// }

import tokenUtils from '@/utils/token';
import companyUtils from '@/utils/company';
import { modelOf } from '@/utils/model-of';
import { UserOrm, User } from './User';
// import { WorkspaceUserRoleOrm, WorkspaceUserRole } from './WorkspaceRole';
// import Workspace, { WorkspaceOrm } from './Workspace';
import { PermissionOrm, Permission } from './Permission';
import Company, { CompanyOrm } from './Company';


export class Context {
  id!: number;
  timestamp ?: number;
  _userId ?: string;
  user?: User | null;
  _orgId ?: string;
  company?: Company;
  // workspaceId ?: string;
  // workspace?: Workspace | null;
  // workspaceUserRole?: WorkspaceUserRole | null;
  // workspacePermissions?: Permission[];
}

export const ContextOrm = modelOf(Context, {
  entity: 'context',
  primaryKey: 'id',
  fields() {
    return {
      id: this.attr(0),
      timestamp: this.attr(undefined),
      _userId: this.attr(tokenUtils.get()),
      _orgId: this.attr(companyUtils.get()),
      company: this.belongsTo(CompanyOrm, '_orgId'),
      user: this.belongsTo(UserOrm, '_userId'),
      // workspaceId: this.attr(undefined),
      // workspace: this.belongsTo(WorkspaceOrm, 'workspaceId'),
      // workspaceUserRole: this.belongsTo(WorkspaceUserRoleOrm, 'workspaceId'),
      // workspacePermissions: this.hasMany(PermissionOrm, 'workspaceId'),
    };
  },
});

export default Context;
