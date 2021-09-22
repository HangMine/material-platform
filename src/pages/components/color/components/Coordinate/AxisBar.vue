<template>
  <div class="coordinate-axis-bar flex-space-between" :class="vertical ? 'vertical' : 'horizental'">
    <span v-if="startGridText" :style="{ width: `${relateAxisWidth}px` }">{{ startGridText }}</span>
    <div class="axis-line flex"></div>
    <label>{{ label }}</label>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';

export default defineComponent({
  name: 'coordinate-axis-bar',
  components: {},
  props: {
    label: {
      type: String,
      default: '',
    },
    startGridText: {
      type: String,
      default: '',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    // 关联坐标轴宽度
    relateAxisWidth: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    watch(() => props.length, (val) => {
      console.log(val);
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
$arrow-size: 12px;
$axis-color: #ccc;
$axis-size: 1px;
$text-color: #999;
$label-size: 12px;

.coordinate-axis-bar {
  span {
    font-size: 14px;
    color: $text-color;
    text-align: center;
    // padding: 0 12px;
    // width: 0;
  }
  label {
    font-size: $label-size;
    color: $text-color;
    // margin-left: 10px;
  }
  &.horizental {
    .axis-line {
      flex: 1;
      height: $axis-size;
      background-color: $axis-color;
      margin-right: 10px;
      justify-content: flex-end;
      align-items: center;
      &:after {
        content: " ";
        display: block;
        width: 0;
        border-left: $arrow-size solid $axis-color;
        border-top: $arrow-size/2 solid transparent;
        border-bottom: $arrow-size/2 solid transparent;
        margin-right: -$axis-size * 2;
      }
    }
  }

  &.vertical {
    display: flex;
    flex-direction: column-reverse;
    align-self: stretch;
    .axis-line {
      width: $axis-size;
      height: 100%;
      background-color: $axis-color;
      margin: 10px 0;
      flex-direction: column;
      align-items: center;
      &:after {
        content: " ";
        display: block;
        width: 0;
        border-bottom: $arrow-size solid $axis-color;
        border-left: $arrow-size/2 solid transparent;
        border-right: $arrow-size/2 solid transparent;
        margin-top: -$axis-size * 2;
      }
    }
    label {
      height: 0;
      padding-top: 50%;
      padding-bottom: 50%;
      transform-origin: center center;
      transform: rotate(-90deg);
      position: relative;
      left: -25%;
    }
  }
}
</style>
