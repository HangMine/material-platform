<template>
  <button class="button-badge" :class="size">
    <span class="flex-center">{{ content }} <i class="icon i-r-you-12"></i></span>
  </button>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';

export default defineComponent({
  name: 'button-badge',
  components: {},
  props: {
    size: {
      type: String as PropType<'large' | 'medium' | 'small'>,
      default: 'medium',
    },
    content: {
      type: String,
    },
  },
  setup(props, { emit }) {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.button-badge {
  color: #fff;

  background: #2878ff;
  border: 1px solid #ffffff;
  margin-left: 4px;
  cursor: pointer;
  span {
    white-space: nowrap;
    i {
      font-size: unset;
      vertical-align: unset;
      line-height: unset;
    }
  }
  &.medium {
    line-height: 22px;
    border-radius: 12px;
    padding: 0 12px;
  }
  &.small {
    font-size: 12px;
    line-height: 16px;
    border-radius: 9px;
    padding: 0 4px;
    span {
      transform: scale(0.86);
    }
  }
}
</style>
