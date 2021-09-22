import { fetchUserOperationAuth } from '@/api/auth';
import { Permission, PermissionOrm } from '@/models/Permission';

export async function updateOperationPermissions() {
  const permissions = await fetchUserOperationAuth();
  const cache = {} as {[code: string]: Permission};
  permissions.forEach(item => {
    if (cache[item.code]) {
      console.warn('权限码存在冲突', [
        item,
        cache[item.code],
      ]);
      return;
    }
    cache[item.code] = {
      code: item.code,
      value: item.value,
    } as Permission;
  });
  const _permissions = Object.values(cache);
  return (await PermissionOrm.insertOrUpdate({
    data: _permissions,
  }))[PermissionOrm.entity] as Permission[];
}

export default updateOperationPermissions;
