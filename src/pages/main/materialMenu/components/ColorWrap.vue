<template>
  <div class="color-wrap" :class="size" ref="colorWrap" :style="{ marginRight: `-${innerRightMargin}px` }">
    <div class="inner-wrap flex-wrap" ref="innerWrap">
      <slot size="size"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, onMounted, provide,
} from 'vue';

export default defineComponent({
  name: 'color-wrap',
  props: {
    dataList: {
      type: Array,
      required: true,
    },
    size: {
      type: String as PropType<'large' | 'small'>,
      default: 'small',
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    const colorWrap = ref<HTMLDivElement>();
    const innerWrap = ref<HTMLDivElement>();
    const innerRightMargin = ref(0); // 修复滚动条占用宽度导致响应式在个别尺寸下失效

    onMounted(() => {
      // console.log(colorWrap.value?.clientWidth, colorWrap.value?.scrollWidth, colorWrap.value?.offsetWidth);
      // console.log(innerWrap.value?.clientWidth, innerWrap.value?.scrollWidth, innerWrap.value?.offsetWidth);
      innerRightMargin.value = (innerWrap.value?.clientWidth || 0) - (colorWrap.value?.clientWidth || 0);
    });
    return {
      ...toRefs(state),
      colorWrap,
      innerWrap,
      innerRightMargin,
    };
  },
});
</script>
<style lang="scss">
.color-wrap {
  // margin-bottom: 40px;
  overflow-x: hidden;
  overflow-y: auto;
  @mixin color-col($min-form-item-width, $form-item-padding, $count-per-line) {
    margin-left: -$form-item-padding;
    margin-right: -$form-item-padding;
    .color-library-list {
      padding-left: $form-item-padding;
      padding-right: $form-item-padding;
      padding-bottom: $form-item-padding;
      min-width: $min-form-item-width + $form-item-padding * 2;
    }
    @each $count in $count-per-line {
      @media screen and (min-width: #{$count * $min-form-item-width + ($count - 1) * 2 * $form-item-padding  + 260}) {
        .color-library-list {
          width: percentage(1 / $count);
        }
      }
    }
  }

  &.medium {
    .inner-wrap {
      $min-form-item-width: 186px !global;
      $count-per-line: 4, 5, 6, 7, 8, 9, 10, 11, 12 !global;
      $form-item-padding: 4px !global;
      @include color-col($min-form-item-width, $form-item-padding, $count-per-line);
    }
    .color-library-list {
      .title {
        text-align: center;
      }
      .description {
        display: none;
      }
    }
  }
}
</style>
