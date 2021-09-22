<template>
  <template v-if="isEmpty">
    <Empty v-bind="$attrs"></Empty>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import Empty from './Empty.vue';

export default defineComponent({
  name: 'empty-wrap',
  components: { Empty },
  props: {
    data: {
      type: [Array, Object] as PropType<Obj>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    const isEmpty = computed(() => !Object.keys(props.data)?.length);
    return {
      ...toRefs(state), isEmpty,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.empty-wrap {
}
</style>
