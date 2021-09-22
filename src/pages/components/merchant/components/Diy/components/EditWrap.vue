<template>
  <div class="edit-wrap" :class="{ 'has-switch': hasSwitch }">
    <slot></slot>
    <div class="sd-button primary" @click="edit">
      <i class="i-r-bianji-16"></i>
      {{ $t("edit") }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';

export default defineComponent({
  name: 'edit-wrap',
  components: {},
  props: {
    hasSwitch: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['edit'],
  setup(props, { emit }) {
    const state = reactive({});
    const edit = () => {
      emit('edit');
    };
    return {
      ...toRefs(state), edit,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.edit-wrap {
  position: relative;
  height: 100%;
  &.has-switch {
    .sd-button {
      right: 66px;
      top: 32px;
    }
  }
  &:hover {
    .sd-button {
      opacity: 1;
    }
  }
  .sd-button {
    opacity: 0;
    position: absolute;
    right: 16px;
    top: 16px;
  }
}
</style>
