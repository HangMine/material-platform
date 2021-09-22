import {
  reactive,
  SetupContext,
  unref,
  toRefs,
  Ref,
} from 'vue';
import { ElTable } from 'element-plus';
import { Obj } from '../type';

const useSelection = ({ tableVm, currentRows, selectable }:
{tableVm: Ref<InstanceType<typeof ElTable>>,
  currentRows: Ref<Obj[]>,
  selectable?:(row:Obj, index?: string) => boolean
}) => {
  const state = reactive({
    isAllSelect: false,
  });

  const setAllSelect = () => {
    state.isAllSelect = currentRows.value.every(row => row.__isChecked);
  };

  const addRowSelectionFlag = (rows:Obj[]) => {
    return unref(rows).map(item => ({
      ...item,
      __isChecked: false,
    }));
  };
  const handleRowSelect = ({ row, $index }:{row:Obj, $index:number}) => {
    if (!tableVm.value) return;
    row.__isChecked = !row.__isChecked;
    state.isAllSelect = unref(currentRows).every(_row => _row.__isChecked);
    tableVm.value.toggleRowSelection(row);
  };

  const handleRowAllSelect = () => {
    state.isAllSelect = !state.isAllSelect;
    unref(currentRows).forEach(_row => {
      _row.__isChecked = state.isAllSelect;
    });
    tableVm.value?.toggleAllSelection();
  };
  return {
    ...toRefs(state), addRowSelectionFlag, handleRowAllSelect, handleRowSelect, setAllSelect,
  };
};

export default useSelection;
