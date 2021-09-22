<template>
  <div
    class="h-drag-item"
    draggable
    @dragstart="start"
    @dragenter="enter"
    @dragover.prevent
    @dragend="end"
    ref="dragItem"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch, getCurrentInstance,
} from 'vue';

const DragItem = defineComponent({
  name: 'sd-drag-item',
  components: {},
  props: {},
  setup(props, { emit }) {
    const _this = getCurrentInstance() as InstanceType<typeof DragItem>;

    const state = reactive({});

    const reset = () => {

    };

    const start = (e: DragEvent) => {
      console.log(1, e);
      emit('dragstart', e);
    };


    const enter = (e: DragEvent) => {
      emit('dragenter', e);
    };

    const end = (e: DragEvent) => {
      reset();
      emit('dragend', e);
    };

    return {
      ...toRefs(state),
      start,
      enter,
      end,
      reset,
    };
  },

});
export default DragItem;
export type DragItemType = InstanceType<typeof DragItem>;

</script>
<style lang="scss" scoped>
// @import 'url'
.h-drag-item {
  cursor: move;
}
</style>
