import { fetchMaterialList } from '@/api/material';
import { MaterialList } from '@/models/Material';
import {
  reactive, toRefs,
} from 'vue';

type extendsMaterialListFn = (...args: [Parameters<typeof fetchMaterialList>[0] & Record<string, unknown>]) => ReturnType<typeof fetchMaterialList>;
const usePage = <T extends extendsMaterialListFn = typeof fetchMaterialList>(fetchFn: T) => {
  const state = reactive({
    pageOption: {
      page: 1, totalPage: 1, size: 20, total: 0,
    },
  });
  const pageFetch = async (params: Parameters<T>[0] = {}) => {
    const res = await fetchFn({
      ...params,
      size: state.pageOption.size,
      page: state.pageOption.page,
    });
    state.pageOption.total = +res.total;
    state.pageOption.totalPage = Math.ceil(+res.total / state.pageOption.size);
    state.pageOption.page = Math.min(state.pageOption.page, state.pageOption.totalPage);
    return res.records;
  };

  return {
    ...toRefs(state), pageFetch,
  };
};

export default usePage;
