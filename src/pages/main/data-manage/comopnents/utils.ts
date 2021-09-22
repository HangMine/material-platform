/* eslint-disable import/prefer-default-export */
import cacheController from '@/utils/cache-controller';
import fieldMap from '@/utils/field-map';
import { TableType } from './CommonTable';

export const updateAliasCache = async (type: TableType) => {
  if (type === 'field') {
    // 如果是字段映射，需要更新一下fieldMap
    await fieldMap.fetch();
  } else {
    // 如果是分类管理,更新缓存标识
    cacheController.apiCache.category = false;
  }
};
