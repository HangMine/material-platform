// 缓存的调试中心,目前用到的只有分类映射缓存,预留位置
// true代表有缓存,false代表没有缓存
export const apiCache = {
  category: false,
};


export const asyncCacheable = <T extends (...anyargs: any[]) => Promise<any>>(fn: T, cacheKey?: keyof typeof apiCache): T => {
  let data: any;
  const _fn = async (...args: Parameters<T>) => {
    const allCache = {
      ...apiCache,
    };
    if (!data || (cacheKey && allCache[cacheKey] === false)) {
      try {
        data = await fn(...args);
        if (cacheKey) {
          allCache[cacheKey] = true; // 请求成功即缓存
        }
      } catch (error) {
        if (cacheKey) {
          allCache[cacheKey] = false; // 请求失败不缓存
        }
      }
    }
    return data;
  };
  return _fn as T;
};

const cacheController = {
  apiCache,
};

export default cacheController;
