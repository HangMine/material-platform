// import Context from '@/models/context';
import { PermissionOrm } from '@/models/Permission';
// import getGroupAppId from '@/router/utils/get-group-app-id';
import AppError from '../error';

/**
 *
 * @param code 权限码
 * @param param 包含workspaceId的对象
 * @param allow 权限表没有找到对应的权限时是否允许
 */
export function can(code: number | string, allow = true) {
  // let computedWorkspaceId: string | undefined = workspaceId;
  // if (computedWorkspaceId === 'workspace') {
  //   computedWorkspaceId = getGroupAppId();
  // } else if (computedWorkspaceId === 'system') {
  //   computedWorkspaceId = '';
  // }
  // if (computedWorkspaceId == null) {
  //   return;
  // }
  if (!code) return;
  code = `${code}`;
  // if (!code.startsWith('IL')) {
  //   code = `IL${code.padStart(4, '0')}`;
  // }
  if (code.length === 4) {
    code = `IL${code}`;
  } else if (code.length === 6) {
    code = `ILI${code}`;
  }

  const operation = PermissionOrm.query().where('code', code).first();
  if (operation) {
    if (!operation.value) throw AppError.auth;
  } else if (!allow) throw AppError.auth;
}

export default can;
