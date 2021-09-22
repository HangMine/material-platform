<template>
  <div class="sd-grid">
    <ul class="grid-ul" :style="gridStyle">
      <slot name="prepend"></slot>
      <li class="grid-li" v-for="(item, i) of data" :key="i">
        <slot :item="item" :i="i">{{ i }}</slot>
      </li>
      <slot name="append"></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { getPx } from '@/utils/util';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { DEFAULT_MIN_WIDTH, DEFAULT_GAP } from './useGridSlice';


export default defineComponent({
  name: 'sd-grid',
  components: {},
  props: {
    data: {
      type: Array,
      required: true,
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
  },
  setup(props, { emit }) {
    const state = reactive({});
    const gridStyle = computed(() => {
      const defaultStyle = {
        'grid-template-columns': `repeat(auto-fill, minmax(${getPx(props.minWidth)}, 1fr))`,
        gap: getPx(props.gap),
      };
      return {
        ...defaultStyle,
        ...props.style,
      };
    });
    return {
      ...toRefs(state), gridStyle,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.sd-grid {
  .grid-ul {
    display: grid;
    .grid-li {
    }
  }
}
</style>
