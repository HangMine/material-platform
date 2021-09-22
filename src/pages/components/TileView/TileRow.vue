<template>
  <div class="tile-row" :class="size">
    <!-- 加多一层inner, 避免loading时可滚动 -->
    <div class="tile-row-inner flex-wrap">
      <slot size="size"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, provide,
} from 'vue';

export default defineComponent({
  name: 'tile-row',
  props: {
    size: {
      type: String as PropType<'large' | 'small'>,
      default: 'large',
    },
    modelValue: {
      type: Array,
      default: () => ([]),
    },
    // checkedItems: {
    //   type: Array,
    //   default: () => ([]),
    // },
  },
  emits: ['update:modelValue', 'selection'],
  setup(props, { emit, attrs }) {
    const checkedItems = ref(props.modelValue);

    const clearCheck = () => {
      checkedItems.value = [];
    };

    const handleCheck = (isChecked: boolean, item) => {
      const targetIndex = checkedItems.value.findIndex(e => e === item);
      console.log(checkedItems, isChecked, item, targetIndex);
      if (targetIndex !== -1) {
        if (!isChecked) {
          checkedItems.value.splice(targetIndex, 1);
        }
      } else if (isChecked) {
        checkedItems.value.push(item);
      }
      console.log(checkedItems);
      emit('selection', checkedItems);
      emit('update:modelValue', checkedItems);
    };

    provide('tileViewProps', { checkedItems, handleCheck, clearCheck });

    return {
      clearCheck,
    };
  },
});
</script>
<style lang="scss">
.tile-row {
  overflow: hidden;
  .tile-row-inner {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  @mixin folder-col($min-form-item-width, $form-item-padding, $count-per-line) {
    margin-left: -$form-item-padding;
    margin-right: -$form-item-padding;
    .tile-view {
      padding-left: $form-item-padding;
      padding-right: $form-item-padding;
      // padding-bottom: $form-item-padding;
      min-width: $min-form-item-width + $form-item-padding * 2;
    }
    @each $count in $count-per-line {
      @media screen and (min-width: #{$count * $min-form-item-width + ($count - 1) * 2 * $form-item-padding  + 260}) {
        .tile-view {
          width: percentage(1 / $count);
        }
      }
    }
  }

  &.large {
    $min-form-item-width: 216px !global;
    $count-per-line: 4, 5, 6, 7, 8, 9 !global;
    $form-item-padding: 10px !global;
    @include folder-col($min-form-item-width, $form-item-padding, $count-per-line);
    // .tile-view {
    // .title {
    //   font-weight: 600;
    // }
    // }
  }

  &.small {
    $min-form-item-width: 140px !global;
    $count-per-line: 7, 8, 9, 10, 11, 12 !global;
    $form-item-padding: 3px !global;
    @include folder-col($min-form-item-width, $form-item-padding, $count-per-line);
    // .tile-view {
    //   .title {
    //     text-align: center;
    //   }
    //   .description {
    //     display: none;
    //   }
    // }
  }
}
</style>
