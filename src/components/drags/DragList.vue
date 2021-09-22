<template>
  <div class="h-drag-list" @dragenter.self="listDragEnter">
    <slot name="prepend"></slot>
    <transition-group name="drag-animate" tag="ul">
      <li
        v-for="(item, i) of list"
        :key="item[keyName] || 'no-id'"
        class="drag-li"
        :class="{ 'is-active': enterIndex === i }"
        :draggable="true"
        @dragstart="(e) => start(item, i, e)"
        @dragend="(e) => end(item, i, e)"
      >
        <div
          class="drag-area"
          :class="{
            'is-top-layer': isDragAreaTopLayer && startIndex !== i,
            disabled,
          }"
          @dragenter="(e) => enter(item, i, e)"
          @dragover.prevent
        ></div>
        <div class="h-drag-item">
          <slot :name="item.key || 'default'" :item="item" :i="i">{{ i }}</slot>
        </div>
      </li>
    </transition-group>
    <slot name="append"></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch, getCurrentInstance, inject, ComponentInternalInstance,
} from 'vue';
import { debounce, throttle } from 'throttle-debounce';
import { getId } from './utils';

type List = any[];

type DragContainerProvide = {
  DragListVms: DragListType,
  events: {
    onDragliststart: ({ item, vm }: { item: any, vm: DragListType }) => void,
    onDraglistenter: ({ enterIndex, vm }: { enterIndex: number, vm: DragListType }) => void,
    onDragenter: ({ startIndex, enterIndex, vm }: { startIndex: number, enterIndex: number, vm: DragListType }) => void,
    onDraglistend: ({ isInside }: { isInside: boolean }) => void,
  }
} | undefined;

// 区分是该组件内的拖拽还是外部的拖拽
export const hDrag = {
  isDragging: false,
};

const DragList = defineComponent({
  name: 'sd-drag-list',
  components: {},
  props: {
    modelValue: {
      type: Array as () => List,
      default: () => [],
    },
    // 对象唯一值,如果不指定会默认生成_hid属性作为标记,会改变传进来的数据结构
    keyName: {
      type: String,
      default: '_sduid',
    },
    // enter时的throttle
    throttle: {
      type: Number,
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    eventPreCallback: {
      type: Function as unknown as () => (e: DragEvent) => any,
    },
  },
  emits: ['update:modelValue', 'dragliststart', 'draglistenter', 'draglistend', 'dragenter', 'dragstart', 'dragend'],
  setup(props, { emit }) {
    const _this = getCurrentInstance() as ({ proxy: InstanceType<typeof DragList> });
    const dragContainerProvide: DragContainerProvide = inject('drag-container');
    if (dragContainerProvide) {
      const { DragListVms } = dragContainerProvide;
      DragListVms.value.push(_this);
    }
    const state = reactive({
      index: -1, // 外部初始化传进来,方便记录当前dragList在container中的index
      list: [] as List,
      startIndex: -1,
      enterIndex: -1,
      isDragNowList: false, // 拖拽现在容器
      isDragAreaTopLayer: false, // drag-area的z-index设置到上层
      isDragging: false, // 当前list的拖拽中状态
    });
    const getHandledList = (list: List) => {
      return list.map(item => ({ ...item, _sduid: item._sduid ?? getId() }));
    };
    const getList = () => {
      const needHandle = props.modelValue.length && props.modelValue.some(item => item[props.keyName] === undefined);
      return needHandle ? getHandledList(props.modelValue) : props.modelValue;
    };

    watch(() => props.modelValue, () => {
      state.list = getList();
    }, { immediate: true });
    watch(() => state.list, () => {
      emit('update:modelValue', state.list);
    }, { immediate: true });

    const eventPreCallback = (e: DragEvent) => {
      const { eventPreCallback: _eventPreCallback } = props;
      if (typeof _eventPreCallback === 'function') {
        const pass = _eventPreCallback(e);
        // 返回false时才不执行后面的代码
        if (pass === false) return pass;
      }
      return true;
    };


    const swap = (list: List, start: number, end: number) => {
      if (start === end) return;
      const startItem = list.splice(start, 1)[0];
      list.splice(end, 0, startItem);
      state.startIndex = end;
    };


    // container组件会调用该方法
    const reset = (options: { isClearDragAreaTopLayer?: boolean } = { isClearDragAreaTopLayer: true }) => {
      state.startIndex = -1;
      state.enterIndex = -1;
      state.isDragNowList = false;
      if (options.isClearDragAreaTopLayer) {
        // 是否清除isDragAreaTopLayer,跨列表拖拽时container会调reset方法,但是不能清除isDragAreaTopLayer
        state.isDragAreaTopLayer = false;
      }
    };
    const start = (item: any, i: number, e: DragEvent) => {
      e.dataTransfer?.setData('hdrag', 'true'); // 暂时用于useOutDrag区分
      hDrag.isDragging = true;
      const pass = eventPreCallback(e);
      if (!pass) return;
      if (props.disabled) return;
      if (state.startIndex === 0) {
        // 兼容mac的chrome拖拽后延迟大概两秒才触发end事件的问题
        e.preventDefault();
        return;
      }
      emit('dragstart', { startIndex: i, item, vm: _this });
      state.startIndex = i;
      state.isDragNowList = true;
      state.isDragAreaTopLayer = true;
      dragContainerProvide?.events.onDragliststart({ item, vm: _this });
    };

    const _enter = (item: any, i: number, e: DragEvent) => {
      const pass = eventPreCallback(e);
      if (!pass) return;
      if (props.disabled) return;
      state.enterIndex = i;
      const { startIndex, enterIndex } = state;
      if (enterIndex === -1) return;


      if (state.isDragNowList) {
        // 内部拖拽
        swap(state.list, startIndex, i);
        emit('dragenter', { vm: _this, startIndex: state.startIndex, enterIndex: i });
      } else {
        // 跨draglist拖拽
        dragContainerProvide?.events.onDraglistenter({ enterIndex: i, vm: _this });
      }
    };

    const enter = props.throttle ? throttle(props.throttle, _enter) : _enter;

    const _end = (item: any, i: number, e: DragEvent) => {
      hDrag.isDragging = false; // 不能通过reset去除,因为每次跨容器也会触发reset
      const pass = eventPreCallback(e);
      if (!pass) return;
      emit('dragend', { endIndex: i, item, vm: _this });
      if (dragContainerProvide) {
        // 如果通过container包一层
        // dragend事件触发在dragstart的元素上，即初始拖动的组件上，所以这里如果抛出_this是初始组件的vm(要获取end时的vm在enter时获取保存)
        dragContainerProvide?.events.onDraglistend({
          isInside: state.isDragNowList,
        });
      } else {
        // 直接使用dragList
        reset();
      }
    };
    const end = props.throttle ? debounce(props.throttle, _end) : _end; // 必须加debounce,否则在end之后由于throttle还会执行一次enter

    const listDragEnter = (e: DragEvent) => {
      if (!hDrag.isDragging) return;
      if (props.disabled) return;
      if (!state.isDragNowList) {
        // 跨dragelist,通过外部容器
        dragContainerProvide?.events.onDraglistenter({ enterIndex: Infinity, vm: _this });
      }
    };


    return {
      ...toRefs(state),
      start,
      enter,
      end,
      reset,
      listDragEnter,
    };
  },
});
export default DragList;
export type DragListType = { proxy: InstanceType<typeof DragList> };

</script>
<style lang="scss" scoped>
$baseZindex: 0;
.disabled {
  pointer-events: none;
}
// @import 'url'
.h-drag-list {
  position: relative;
  .is-active {
    opacity: 0.5;
  }
  .drag-li {
    position: relative;
    cursor: move;
    .drag-area {
      // background: black;
      // opacity: 0.3;
      // 避免无限循环替换
      position: absolute;
      width: 100%;
      height: 70%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: $baseZindex;
      &.is-top-layer {
        z-index: $baseZindex + 2;
      }
    }
    .h-drag-item {
      z-index: $baseZindex;
    }
  }
}
.drag-animate {
  &-move {
    transition: all 0.2s;
  }
  &-enter-active,
  &-leave-active {
    transition: all 0.2s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
