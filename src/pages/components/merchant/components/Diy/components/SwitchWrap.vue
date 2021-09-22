<template>
  <div class="switch-wrap">
    <div class="main" :class="{ 'h-disabled': !isActive }">
      <slot></slot>
    </div>
    <el-switch class="switch-btn" v-model="isActive"></el-switch>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';

export default defineComponent({
  name: 'switch-wrap',
  components: {},
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      isActive: props.modelValue,
    });
    watch(() => props.modelValue, () => {
      state.isActive = props.modelValue;
    });
    watch(() => state.isActive, () => {
      emit('update:modelValue', state.isActive);
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.switch-wrap {
  position: relative;

  .main {
  }

  .switch-btn {
    position: absolute;
    right: 10px;
    top: 40px;
  }
}
</style>
