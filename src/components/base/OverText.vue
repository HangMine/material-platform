<template>
  <div class="over-text-container">
    <template v-if="isOver">
      <el-tooltip
        v-model="showTooltip"
        popper-class="over-text-tooltip"
        effect="light"
        :content="content"
        v-bind="$attrs"
      >
        <div :class="`over-text-wrap-${showLine}`" :style="wrapStyle" ref="wrap">
          <slot></slot>
        </div>
      </el-tooltip>
    </template>
    <template v-else>
      <div :class="`over-text-wrap-${showLine}`" :style="wrapStyle" v-bind="$attrs" ref="wrap">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, getCurrentInstance, nextTick, watch,
} from 'vue';
import useResize from '@/utils/uses/use-resize';
import { ElTooltip } from 'element-plus';
import { getPx } from '../sd-table/utils';


export default defineComponent({
  name: 'over-text',
  inheritAttrs: false,
  components: { ElTooltip },
  props: {
    width: {
      type: [Number, String],
      default: 'auto',
    },
    resize: {
      type: Boolean,
      default: false,
    },
    showLine: {
      type: Number,
      default: 1,
    },

  },
  setup(props, { emit }) {
    const wrap = ref();

    const state = reactive({
      showTooltip: false,
      isOver: false,
      content: '',
      wrapStyle: {
        width: typeof props.width === 'string' ? props.width : `${props.width}px`,
        height: 'auto',
        'white-space': 'no-wrap',
      },
    });

    // const setSlotsElInline = () => {
    //   // 这里的refs.wrap已经是isOver的wrap
    //   const slotEls = [...wrap.value.children] as HTMLElement[];
    //   slotEls.forEach(el => {
    //     el.style.display = 'inline';
    //   });
    // };

    // 可能从外部调用,不能修改名字
    const init = async () => {
      const WrapEl = wrap.value as HTMLElement;
      if (!WrapEl) return; // 比如模态框消失时,里面的overText仍然会通过useResize触发该函数
      if (props.isGrid) {
        // 兼容grid布局
        const ELIPSIS_WIDTH = 20; // 省略号宽度
        state.wrapStyle.height = getComputedStyle(WrapEl).lineHeight;
        state.wrapStyle.width = getPx(WrapEl.clientWidth - ELIPSIS_WIDTH) as string;
        return;
      }
      // 判断是否溢出: 单行文本用width判断, 而当为webkit多行方案时,实测scrollWidth=clientWidth,而scrollHeight=n*clientHeight, 所以区分判断
      const isOverCondition = props.showLine === 1
        ? WrapEl.scrollWidth > WrapEl.clientWidth
        : WrapEl.scrollHeight > WrapEl.clientHeight;
      if (isOverCondition) {
        state.isOver = true;
        state.content = WrapEl.textContent || '';


        await nextTick();
        // setSlotsElInline();
      } else {
        // 必须设置,有些场景可能从toolTip变成不需要toolTip
        state.isOver = false;
      }
    };

    // watch(() => state.showTooltip, (value) => {
    //   if (value) {
    //     init();
    //   }
    // });

    onMounted(async () => {
      await nextTick();
      init();
    });

    if (props.resize) {
      useResize(init, true);
    }

    return {
      ...toRefs(state),
      wrap,
      init,
    };
  },
});
</script>
<style lang="scss">
.over-text-tooltip {
  max-width: 300px;
}
</style>
<style lang="scss" scoped>
.over-text-container {
  overflow: hidden;
}
.over-text-wrap-1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  outline: none;
}
.over-text-wrap-2 {
  @include over-text(2);
}
</style>
