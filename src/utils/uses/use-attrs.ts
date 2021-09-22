import {
  computed,
  reactive, toRefs,
} from 'vue';

const useAttrs = (attrs: Object, excludeKeys: string[] = ['style', 'class']) => {
  return computed(() => {
    return Object.entries(attrs).reduce((obj, [key, item]) => {
      if (!excludeKeys.includes(key)) obj[key] = item;
      return obj;
    }, {} as Obj);
  });
};

export default useAttrs;
