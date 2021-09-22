/* eslint-disable import/prefer-default-export */
import {
  reactive, computed, ref, toRefs, getCurrentInstance, onMounted, watch, SetupContext,
} from 'vue';

type List = any[];

export const getId = (() => {
  let id = 0;
  return () => id++;
})();

export class GetId {
  id = 0;
  get() {
    return this.id++;
  }
}


export const useFilter = () => {
  const state = reactive({
    // originList: [] as List,
    list: [] as List,
    filterList: [] as List,
    filterValue: '',
  });
  watch(() => state.list, () => {
    console.log('useFilter');
  }, { immediate: true });
  const setFilterValue = (filterValue: string, filterMethod?: Function) => {
    state.filterValue = filterValue;
    state.filterList = state.list.filter(item => item.title.includes(filterValue));
  };
  return {
    ...toRefs(state),
    setFilterValue,
  };
};


