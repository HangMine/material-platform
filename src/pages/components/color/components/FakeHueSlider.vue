<template>
  <div class="fake-hue-slider el-color-hue-slider" :class="{ 'is-vertical': vertical }">
    <div ref="bar" class="el-color-hue-slider__bar" @click="handleClick"></div>
    <div class="mark-label">
      {{ tooltipContent }}
    </div>
    <el-tooltip
      effect="light"
      :content="tooltipContent"
      placement="left"
      :visible-arrow="false"
      popper-class="fake-hue-slider-tooltip"
    >
      <div
        ref="thumb"
        class="el-color-hue-slider__thumb"
        :style="{
          left: thumbLeft + 'px',
          top: thumbTop + 'px',
        }"
      ></div>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, getCurrentInstance, onMounted, watch,
} from 'vue';
import draggable from '@/components/color-selector/color-picker/draggable';

/* 该组件目前只有props.vertical=true有应用场景, 并联调通过, 对于props.vertical=false的情景尚未进行调试, 如需使用需再调整计算公式 */
export default defineComponent({
  name: 'fake-hue-slider',
  components: {},
  props: {
    vertical: Boolean,
    modelValue: {
      type: Number,
      default: 0,
    },
    // 总步数(页数)
    totalStepsLength: {
      type: Number,
      default: 100,
    },
    tooltipContent: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const currentStep = ref(props.modelValue);

    const instance = getCurrentInstance()!;

    const thumb = ref<HTMLElement | null>(null);
    const bar = ref<HTMLElement | null>(null);

    const thumbLeft = ref(0);
    const thumbTop = ref(0);
    const stepGap = ref(0);

    const calcStepGap = () => {
      const el = instance.vnode.el as HTMLElement;
      if (!el || !thumb.value || props.totalStepsLength <= 1) {
        stepGap.value = 0;
      }
      const elSize = props.vertical ? el.offsetHeight : el.offsetWidth;
      const thumbSize = props.vertical ? thumb.value.offsetHeight : thumb.value.offsetWidth;
      stepGap.value = (elSize - thumbSize) / (props.totalStepsLength - 1);
    };


    function handleDrag(event) {
      const el = instance.vnode.el as HTMLElement;
      const rect = el.getBoundingClientRect();
      let hue;
      if (!thumb.value) {
        return;
      }
      if (!props.vertical) {
        let left = event.clientX - rect.left;
        left = Math.min(left, rect.width - thumb.value.offsetWidth);
        left = Math.max(0, left);

        currentStep.value = Math.round(left / stepGap.value) + 1;
      } else {
        let top = event.clientY - rect.top;
        top = Math.min(top, rect.height - thumb.value.offsetHeight);
        top = Math.max(0, top);

        currentStep.value = Math.round(top / stepGap.value) + 1;
        console.log(currentStep.value);
      }
      emit('update:modelValue', currentStep.value);
    }

    function handleClick(event: Event) {
      const { target } = event;

      if (target !== thumb.value) {
        handleDrag(event);
      }
    }

    function getThumbLeft() {
      const { el } = instance.vnode;
      if (!el) return 0;
      if (props.vertical) return 0;
      return stepGap.value * (currentStep.value - 1);
    }

    function getThumbTop() {
      const el = instance.vnode.el as HTMLElement;
      if (!el) return 0;
      if (!props.vertical) return 0;
      return stepGap.value * (currentStep.value - 1);
    }

    function update() {
      thumbLeft.value = getThumbLeft();
      thumbTop.value = getThumbTop();
    }

    watch(() => props.modelValue, (val) => {
      currentStep.value = val;
    });

    watch(currentStep, (val) => {
      update();
      emit('update:modelValue', val);
    });

    watch(() => props.totalStepsLength, (val) => {
      calcStepGap();
      update();
    });

    onMounted(() => {
      const dragConfig = {
        drag: event => {
          handleDrag(event);
        },
        end: event => {
          handleDrag(event);
        },
      };
      draggable(bar.value, dragConfig);
      draggable(thumb.value, dragConfig);
      calcStepGap();
      update();
    });


    return {
      thumb,
      bar,
      thumbLeft,
      thumbTop,
      handleClick,
      update,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
.fake-hue-slider {
  background: linear-gradient(to bottom, #c37977 50%, #555555 50%);
  border-radius: 8px;
  padding: 4px 0 !important;
  .mark-label {
    text-align: center;
    margin-top: 18px;
  }
  &.is-vertical {
    width: 30px;
    height: 360px;
    .el-color-hue-slider__bar {
      background: linear-gradient(
        to bottom,
        transparent 4px,
        #c37977 4px,
        #ccad7d 10%,
        #d0d181 17%,
        #a1cf7f 29%,
        #8bce8c 39%,
        #8ccfcd 51%,
        #83acce 60%,
        #7576ca 68%,
        #ac78cc 78%,
        #c37984 87%,
        #6b5d5c 95%,
        #555555 calc(100% - 4px),
        transparent calc(100% - 4px)
      );
      background: linear-gradient(
        to bottom,
        transparent 4px,
        #d17575 4px,
        #d1d175 17.9%,
        #75d175 33.28%,
        #75d1d1 49.92%,
        #7575d1 66.42%,
        #d175d1 84.01%,
        #d17575 92%,
        #555555 calc(100% - 4px),
        transparent calc(100% - 4px)
      );
    }
    .el-color-hue-slider__thumb {
      box-sizing: content-box;
      border-radius: 6px;
      margin-left: -2px;
      background-color: transparent;
      border: 2px solid #ffffff;
      box-shadow: 0px 2px 4px 0px rgba(110, 110, 113, 0.5);
    }
  }
}
.fake-hue-slider-tooltip {
  padding: 3px 12px;
  box-shadow: 0px 2px 6px 0px rgba(28, 35, 63, 0.2);
}
</style>
