<template>
  <div class="material-list-wrap" ref="gridContainerEl">
    <ul v-if="slicedList.length" class="material-list" :style="computedStyle">
      <li v-for="(item, i) of slicedList" :key="i">
        <TileItem :radius="radius" :material="item" v-bind="$attrs" :checkable="checkable" :key="item.id">
          <template v-for="(val, key) in dynamicSlotMap" :key="key" v-slot:[key]="{ material }">
            <slot :name="key" :material="material"> </slot>
          </template>
        </TileItem>
      </li>
    </ul>
    <Empty v-else v-bind="emptyOption"></Empty>
  </div>
</template>

<script lang="ts">
import { MaterialList } from '@/models/Material';
import { getPx } from '@/utils/util';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch, toRef,
} from 'vue';
import Empty from '@/components/error/Empty.vue';
import useGridSlice, { UseGridSliceOption, DEFAULT_MIN_WIDTH, DEFAULT_GAP } from '@/components/grid/useGridSlice';
import { useMultiCheckWrapper } from '@/utils/uses/use-multi-check';
import TileItem from '../Item/TileItem.vue';


export default defineComponent({
  name: 'material-list',
  components: { TileItem, Empty },
  props: {
    data: {
      type: Array as PropType<MaterialList>,
      requried: true,
    },
    minWidth: {
      type: [Number, String],
      default: DEFAULT_MIN_WIDTH,
    },
    gap: {
      type: [Number, String],
      default: DEFAULT_GAP,
    },
    style: {
      type: Object,
    },
    emptyOption: {
      type: Object,
    },
    useGridSlice: {
      type: Boolean,
      default: false,
    },
    useGridSliceOption: {
      type: Object as PropType<Omit<UseGridSliceOption, 'container' | 'list'>>,
    },
    gridColoumn: {
      type: String,
    },
    radius: {
      type: Number,
    },
    checkable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    // 动态插槽数据, 可多项, 透传到子组件
    const dynamicSlotMap = slots;
    const gridContainerEl = ref<HTMLUListElement>();
    const state = reactive({
    });
    const currentList = computed(() => props.data!);

    const { slicedList } = useGridSlice({
      disabled: !props.useGridSlice,
      container: gridContainerEl,
      list: currentList,
      ...props.useGridSliceOption,
    });

    const computedStyle = computed(() => {
      const defaultStyle = {
        'grid-template-columns': props.gridColoumn || `repeat(auto-fill, minmax(${getPx(props.minWidth)}, 1fr)`,
        gap: getPx(props.gap),
      };
      return {
        ...defaultStyle,
        ...props.style,
      };
    });

    let handleCheckAll: (isCheckAll: boolean) => void;
    // 按需注入多选功能
    watch(() => props.checkable, (val) => {
      if (val) {
        ({ handleCheckAll } = useMultiCheckWrapper({
          initTotalList: slicedList.value,
          wrapperEmit: emit,
        }));
      }
    }, { immediate: true });

    // const checkAll = () => {
    //   if (!handleCheckAll) {
    //     return;
    //   }
    //   handleCheckAll(slicedList.value);
    // };
    return {
      ...toRefs(state),
      gridContainerEl,
      computedStyle,
      slicedList,
      dynamicSlotMap,
      checkAll(val: boolean) {
        if (handleCheckAll) {
          handleCheckAll(val);
        }
      },
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.material-list-wrap {
  width: 100%;
}
.material-list {
  display: grid;
}
</style>
