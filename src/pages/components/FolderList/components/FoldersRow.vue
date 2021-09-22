<template>
  <div class="folders-list" :class="size" ref="colorWrap" :style="{ marginRight: `-${innerRightMargin}px` }">
    <div class="inner-wrapper flex-wrap" ref="innerWrap">
      <slot size="size"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, onMounted,
} from 'vue';

export default defineComponent({
  name: 'folders-list',
  props: {
    // dataList: {
    //   type: Array,
    //   required: true,
    // },
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
.folders-list {
  overflow-y: scroll;
  overflow-x: hidden;

  @mixin folder-col($min-form-item-width, $form-item-padding, $count-per-line) {
    margin-left: -$form-item-padding;
    margin-right: -$form-item-padding;
    .sd-folder {
      padding-left: $form-item-padding;
      padding-right: $form-item-padding;
      padding-bottom: $form-item-padding;
      min-width: $min-form-item-width + $form-item-padding * 2;
    }
    @each $count in $count-per-line {
      @media screen and (min-width: #{$count * $min-form-item-width + ($count - 1) * 2 * $form-item-padding  + 260}) {
        .sd-folder {
          width: percentage(1 / $count);
        }
      }
    }
  }

  &.large {
    .inner-wrapper {
      $min-form-item-width: 220px !global;
      $count-per-line: 4, 5, 6, 7, 8, 9 !global;
      $form-item-padding: 8px !global;
      @include folder-col($min-form-item-width, $form-item-padding, $count-per-line);
    }
    .sd-folder {
      .cover-box {
        border-radius: 4px;
        overflow: hidden;
      }
      .handle-btns {
        right: 16px;
      }
    }
  }
  &.small {
    .inner-wrapper {
      $min-form-item-width: 140px !global;
      $count-per-line: 6, 7, 8, 9, 10, 11, 12 !global;
      $form-item-padding: 3px !global;
      @include folder-col($min-form-item-width, $form-item-padding, $count-per-line);
    }
    .sd-folder {
      padding-top: 20px;
      margin-bottom: 24px;
      max-width: 16.67%;
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
      .title {
        font-weight: 400;
        max-width: 100%;
        padding: 0 12px;
        text-align: center;
      }
      .title-content {
        margin-top: 0;
        height: 48px;
        display: flex;
        justify-content: center;
      }
      .description {
        display: none;
      }
    }
  }
}
</style>
