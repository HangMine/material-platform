import {
  inject, onUnmounted, provide, ref, watch, computed,
} from 'vue';

// const checkedItems = ref<unknown[]>([]);
const _totalList = ref<Obj[]>([]);
let _valueKey = 'id';
const storedEmit = ref<((event: string, ...args: any[]) => void)|null>(null);

const checkedItems = computed(() => {
  return _totalList.value.filter(_item => _item.__isChecked);
});

const isCheckAll = computed(() => {
  return checkedItems.value.length === _totalList.value.length;
});

const isIndeterminate = computed(() => {
  return checkedItems.value.length > 0 && checkedItems.value.length < _totalList.value.length;
});
// const clearCheck = () => {
//   checkedItems.value = [];
// };

const handleCheck = (item: Obj, isChecked?: boolean) => {
  const targetItem = _totalList.value.find(_item => _item[_valueKey] === item[_valueKey]);
  if (targetItem) {
    targetItem.__isChecked = isChecked ?? !targetItem.__isChecked;
  }

  if (storedEmit.value) {
    storedEmit.value('selection', checkedItems.value, isCheckAll.value, isIndeterminate.value);
  }
};

const handleCheckAll = (_isCheckAll: boolean) => {
  _totalList.value.forEach(_item => { _item.__isChecked = _isCheckAll; });
  if (storedEmit.value) {
    storedEmit.value('selection', checkedItems.value, isCheckAll.value, isIndeterminate.value);
  }
};

// 重置选中项
// const resetCheckedItems = (currentCheckedItems: unknown[]) => {
//   if (currentCheckedItems !== checkedItems.value) {
//     checkedItems.value = currentCheckedItems;
//   }
// };

const resetParams = () => {
  _totalList.value = [];
  storedEmit.value = null;
};

export const useMultiCheckWrapper = ({
  initTotalList, initCheckedItem = [], valueKey = 'id', wrapperEmit,
}:{
  initTotalList: Obj[],
  initCheckedItem?: Obj[],
  valueKey?: string,
  wrapperEmit?: ((event: string, ...args: any[]) => void),
}) => {
  resetParams();

  _totalList.value = initTotalList.map(_item => ({ ..._item, __isChecked: false }));
  initCheckedItem.forEach(item => {
    handleCheck(item, true);
  });
  _valueKey = valueKey;
  storedEmit.value = wrapperEmit || null;

  onUnmounted(() => {
    resetParams();
  });

  return {
    checkedItems,
    handleCheckAll,
    isCheckAll,
    isIndeterminate,
  };
};

export const useMultiCheckItem = (item: Obj) => {
  // const isChecked = ref<boolean>(checkedItems.value.includes(itemValue));

  // watch(checkedItems, (val) => {
  //   isChecked.value = val.includes(itemValue);
  // });

  const isChecked = computed(() => {
    return (_totalList.value.find(_item => _item[_valueKey] === item[_valueKey])?.__isChecked);
  });

  // props.data的变化目前只发现在于列表刷新时, 而刷新时需要情空选中项,所以用其变化来清空选中项
  watch(() => item, (val) => {
    _totalList.value = [];
  });

  const handleCheckItem = () => {
    handleCheck(item);
  };

  return { isChecked, handleCheckItem };
};

export default useMultiCheckWrapper;
