import useResize from '@/utils/uses/use-resize';
import {
  computed,
  ComputedRef,
  isRef,
  onMounted,
  reactive, ref, Ref, toRefs, unref, watch,
} from 'vue';


export const DEFAULT_MIN_WIDTH = 264;
export const DEFAULT_GAP = 20;
export type UseGridSliceOption<T = any[]> = {
  list: Ref<T> | ComputedRef<T>,
  container: Ref<HTMLElement | undefined>,
  lines?: number,
  minItemWidth?: number,
  gap?: number,
  disabled?: boolean
};


const useGridSlice = <T extends any[]>(
  {
    disabled = true,
    list,
    container,
    lines = 2,
    minItemWidth = DEFAULT_MIN_WIDTH,
    gap = DEFAULT_GAP,
  }: {
    list: Ref<T> | ComputedRef<T>,
    container: Ref<HTMLElement | undefined>,
    lines?: number,
    minItemWidth?: number,
    gap?: number,
    disabled?: boolean
  },
) => {
  const state = reactive({
    cols: 5, // 默认给个5吧
  });
  const setCols = () => {
    const containerEl = container.value;
    if (!containerEl) return;
    const { clientWidth } = containerEl;
    state.cols = Math.floor((clientWidth + gap) / (minItemWidth + gap));
  };
  const getDisplayNumber = () => {
    return state.cols * lines;
  };

  const slicedList = computed(() => {
    if (disabled) return unref(list);
    const displayNumber = getDisplayNumber();
    return unref(list).slice(0, displayNumber) as T; // slice会丢失泛型类型??
  });

  if (!disabled) {
    onMounted(() => {
      setCols();
    });

    useResize(() => {
      setCols();
    });
  }


  return {
    ...toRefs(state), slicedList,
  };
};

export default useGridSlice;
