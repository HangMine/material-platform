import { modelOf } from '@/utils/model-of';

// 来源平台的Sdtc-App-Id
export enum PlatformType {
  FIM = '100',
  MATERIAL = '200'
}

// 身份类型
export enum IdentityType {
  COMMON = 0,
  SUPPLIER = 11,
  BUYER = 12,
}
export class Permission {
  code !: string;
  // groupAppId ?: string;
  // name !: string;
  value !: boolean;
  // workspace ?: Workspace;
}

export const PermissionOrm = modelOf(Permission, {
  entity: 'permissions',
  primaryKey: 'code',
  fields() {
    return {
      code: this.attr(''),
      // groupAppId: this.attr(undefined),
      // name: this.attr(undefined),
      value: this.attr(undefined),
      // workspace: this.belongsTo(WorkspaceOrm, 'groupAppId'),
    };
  },
});

export default Permission;
