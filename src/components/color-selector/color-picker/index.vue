<template>
  <el-popper
    ref="popper"
    v-model:visible="showPicker"
    effect="light"
    trigger="click"
    :show-arrow="false"
    :offset="6"
    transition="el-zoom-in-top"
    :gpu-acceleration="false"
    :popper-class="`el-color-picker__panel el-color-dropdown color-picker-panel ${popperClass}`"
    :stop-popper-mouse-event="false"
  >
    <template #default>
      <!-- <div> -->
      <sv-panel ref="svPanelRef" :color="colorInstance" />
      <footer class="flex-space-between">
        <div class="color-preview-box" :style="{ backgroundColor: currentColor }"></div>
        <hue-slider ref="hueSliderRef" class="hue-slider flex-1" :color="colorInstance" />
      </footer>
      <!-- </div> -->
    </template>
    <template #trigger>
      <slot name="trigger">
        <div class="flex color-picker-trigger">
          <span class="flex-1" :style="{ backgroundColor: currentColor }"></span>
          <span class="arrow">
            <i class="icon i-r-xia-12"></i>
          </span>
        </div>
      </slot>
    </template>
  </el-popper>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, nextTick, watch,
} from 'vue';
import { debounce } from 'throttle-debounce';
import Color, { cmyk2rgb } from './color';
import HueSlider from './components/hue-slider.vue';
import SvPanel from './components/sv-panel.vue';

export default defineComponent({
  name: 'color-picker',
  components: { HueSlider, SvPanel },
  props: {
    colorInstance: {
      type: Object as PropType<InstanceType<typeof Color>>,
      required: true,
    },
    // modelValue: {
    //   type: String,
    //   default: null,
    // },
    popperClass: String,
    // colorFormat: {
    //   type: String as PropType<'hsl' | 'cmyk' | 'hex' | 'rgb'>,
    //   default: 'hex',
    // },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'active-change', 'refreshColor'],
  setup(props, { emit }) {
    const showPicker = ref(false);
    const hueSliderRef = ref<typeof HueSlider>();
    const svPanelRef = ref<typeof SvPanel>();

    // const debounceSetShowPicker = debounce(100, (visible) => {
    //   showPicker.value = visible;
    // });


    // const handleTrigger = () => {
    //   if (props.disabled) return;
    //   debounceSetShowPicker(!showPicker.value);
    // };


    // 因为color-picker接受外部输入颜色, 在输入颜色时可能面板是折叠状态,
    // 此时无法获取到hueSliderRef和svPanelRef的offsetWidth等尺寸,导致无法在组件中标记当前hsv位置,
    // 所以增加对面板显示的监听,展开时更新hueSliderRef和svPanelRef的锚点位置
    watch(showPicker, async (isVisible) => {
      if (isVisible) {
        await nextTick();
        hueSliderRef.value?.update();
        svPanelRef.value?.update();
      }
    });

    const currentColor = computed(() => {
      // if (props.colorInstance.format === 'cmyk') {
      //   const _cmykParts = props.colorInstance.value.replace(/cmyk|\(|\)/gm, '')
      //     .split(/\s|,/g).filter(val => val !== '').map(val => parseInt(val, 10));
      //   const { r, g, b } = cmyk2rgb(..._cmykParts);
      //   return `rgb(${r},${g},${b})`;
      // }
      // console.log(props.colorInstance.value);
      // return props.colorInstance.value || '';
      return props.colorInstance._rgbValue || '';
    });

    return {
      showPicker,
      currentColor,
      // handleTrigger,
      hueSliderRef,
      svPanelRef,
    };
  },
});
</script>
<style lang="scss" scoped>
.color-picker-trigger {
  width: 40px;
  flex: 0 0 40px;
  line-height: 26px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  overflow: hidden;
  .arrow {
    i {
      width: 12px;
      display: inline-block;
      font-size: 12px;
      color: #9ca0a4;
      transform: scale(0.75);
    }
  }
}
</style>
<style lang="scss">
.color-preview-box {
  background: red;
  width: 28px;
  height: 28px;
  flex: 0 0 auto;
  margin-right: 6px;
  border-radius: 4px;
}
.color-picker-panel {
  padding: 0;
  border: none !important;
  width: 270px;
  footer {
    padding: 12px;
  }
}
</style>
