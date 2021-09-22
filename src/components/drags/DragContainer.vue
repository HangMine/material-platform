<template>
  <div class="h-drag-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, getCurrentInstance, onMounted, provide,
} from 'vue';
import delay from '_/delay';
import { DragListType } from './DragList.vue';

const DragContainer = defineComponent({
  name: 'sd-drag-container',
  components: {},
  props: {},
  emits: ['start', 'inside-enter', 'draglist-enter', 'end'],
  setup(props, { emit }) {
    const _this = getCurrentInstance();
    const state = reactive({
      startItem: {} as any,
      fromVm: {} as DragListType,
      toVm: {} as DragListType,
      dragList: {
        // 保存跨列表 列表组件的index
        startIndex: -1,
      },
      cross: {
        // 保存跨列表 拖拽项的index
        startIndex: -1,
      },
      inside: {
        // 保存列表内 拖拽项的index
        startIndex: -1,
        enterIndex: -1,
      },

    });
    const DragListVms = ref<DragListType[]>([]);
    const getDragListVms = () => DragListVms.value;

    const setAllDragAreaLayer = () => {
      getDragListVms().forEach(_vm => {
        _vm.proxy.isDragAreaTopLayer = true;
      });
    };
    const reset = () => {
      state.startItem = {};
      state.fromVm = {} as DragListType;
      state.toVm = {} as DragListType;
      state.dragList = {
        startIndex: -1,
      };
      state.cross = {
        startIndex: -1,
      };
      state.inside = {
        startIndex: -1,
        enterIndex: -1,
      };
    };
    const resetAllList = () => {
      getDragListVms().forEach(_vm => _vm.proxy.reset());
    };
    const events = {
      onDragliststart: ({ item, vm }: { item: any, vm: DragListType }) => {
        // 内部或跨列表拖拽都会触发
        state.startItem = item;
        state.fromVm = vm;
        state.dragList.startIndex = vm.proxy.index;
        setAllDragAreaLayer();
        emit('start', { vm: _this, item });
      },
      onDraglistenter: ({ enterIndex, vm }: { enterIndex: number, vm: DragListType }) => {
        // 跨draglist拖拽
        state.toVm = vm;
        const { fromVm, toVm } = state;
        enterIndex = enterIndex === Infinity ? toVm.proxy.list.length : enterIndex;
        toVm.proxy.list.splice(enterIndex, 0, state.startItem);
        fromVm.proxy.list.splice(fromVm.proxy.startIndex, 1);

        state.cross.startIndex = fromVm.proxy.startIndex;

        fromVm.proxy.reset({ isClearDragAreaTopLayer: false });
        state.fromVm = vm;
        toVm.proxy.startIndex = enterIndex;
        toVm.proxy.enterIndex = enterIndex;
        toVm.proxy.isDragNowList = true;
        emit('draglist-enter', { vm: _this });
      },
      onDragenter: ({ startIndex, enterIndex, vm }: { startIndex: number, enterIndex: number, vm: DragListType }) => {
        state.inside.startIndex = startIndex;
        state.inside.enterIndex = enterIndex;
        // dragList内部拖拽
        emit('inside-enter', { vm: _this });
      },
      onDraglistend: ({ isInside }: { isInside: boolean }) => {
        const toVmProxy = state.toVm?.proxy || {};
        // 内部或跨列表拖拽都会触发
        // 这里抛出的startIndex和endIndex会根据v-for的key值有没有重新渲染而不一样 后续需要换种方式
        emit('end', {
          vm: _this,
          startIndex: state.dragList.startIndex,
          endIndex: toVmProxy.index,
          endVm: state.toVm,
          cross: {
            startIndex: state.cross.startIndex,
            endIndex: toVmProxy.enterIndex,
          },
          inside: state.inside,
          isInside, // 是否是内部拖拽
        });
        resetAllList();
        reset();
      },
    };
    provide('drag-container', { DragListVms, events });
    // const getDragListVms = () => ((_this?.$children || []) as DragListType[]).filter(vm => vm.$options.name === 'h-drag-list');
    const init = (() => {
      const setAllListIndex = () => {
        getDragListVms().forEach((_vm, i) => {
          _vm.proxy.index = i;
        });
      };


      return async ({ addEvents }: { addEvents: boolean } = { addEvents: true }) => {
        // 现在只在挂载时出初始化,当新增删除dragList时,需要手动再调初始化
        // 延迟200MS保存DOM元素生成后初始化,暂时这么写,后续确定原因后修改
        await delay(200);

        setAllListIndex();
      };
    })();


    onMounted(() => {
      init();
    });

    return {
      ...toRefs(state),
      init,
      getDragListVms,
    };
  },
});
export default DragContainer;
export type DragContainerType = InstanceType<typeof DragContainer>;
</script>
<style lang="scss" scoped>
// @import 'url'
.h-drag-container {
}
</style>
