<template>
  <div class="range-input flex" :class="{ isActive: isActive }">
    <el-input
      v-model="currentFromValue"
      :placeholder="fromPlaceholder"
      size="small"
      :oninput="onNumberInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <span class="range-separator"></span>
    <el-input
      v-model="currentToValue"
      :placeholder="toPlaceholder"
      size="small"
      :oninput="onNumberInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch, reactive, toRefs,
} from 'vue';
import { onNumberInput } from '@/pages/components/material/components/MaterialForm/utils';

export default defineComponent({
  props: {
    fromValue: {
      type: [String, Number],
    },
    toValue: {
      type: [String, Number],
    },
    fromPlaceholder: {
      type: String,
    },
    toPlaceholder: {
      type: String,
    },
  },
  emits: ['update:fromValue', 'update:toValue', 'change'],
  setup(props, { emit }) {
    const state = reactive({
      currentFromValue: props.fromValue || '',
      currentToValue: props.toValue || '',
      isActive: false,
    });

    ['fromValue', 'toValue'].forEach((propKey) => {
      watch(() => props[propKey], (val) => {
        console.log(propKey, val);
        state[`current${propKey[0].toUpperCase() + propKey.slice(1)}` as 'currentFromValue' | 'currentToValue'] = val;
      });

      watch(() => state[`current${propKey[0].toUpperCase() + propKey.slice(1)}`], (val) => {
        emit(`update:${propKey}`, val);
      });
    });

    const handleFocus = () => {
      state.isActive = true;
    };
    const handleBlur = () => {
      state.isActive = false;
    };
    const handleChange = (...args) => {
      emit('change', ...args);
    };
    return {
      ...toRefs(state),
      handleFocus,
      handleBlur,
      onNumberInput,
      handleChange,
    };
  },
});
</script>

<style lang="scss">
.range-input {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  // margin-top: -1px;
  // margin-bottom: -1px;
  height: 32px;
  overflow: hidden;
  &.isActive {
    // .el-input__inner,
    // .range-separator {
    border-color: $color-primary !important;
    // }
  }
  .el-input {
    .el-input__inner {
      border-width: 0;
      line-height: 30px;

      &:focus {
        border-color: #dcdfe6;
      }
      // border: none;
      text-align: center;
      padding: 0 5px;
      font-size: 12px;
    }
    &:nth-of-type(1) .el-input__inner {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      // border-right: none;
    }
    &:nth-of-type(2) .el-input__inner {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      // border-left: none;
    }
  }
  .range-separator {
    // border-top: 1px solid #dcdfe6;
    // border-bottom: 1px solid #dcdfe6;
    @extend %flex-center;
    background-color: #fff;
    &:after {
      content: "";
      display: block;
      width: 8px;
      border-bottom: 1px solid #999;
    }
  }
}
</style>

