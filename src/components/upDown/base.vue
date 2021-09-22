<template>
  <div class="up-down-base">
    <div class="up-down-wrap" :style="wrapStyle" ref="wrapEl">
      <div class="up-down-content" ref="contentEl">
        <slot></slot>
      </div>
    </div>
    <div v-if="showIsOpen" class="footer">
      <slot name="footer" :isOpen="isOpen" :toggleOpen="toggleOpen">
        <span v-if="!isOpen" class="default-text" @click="toggleOpen()">
          {{ expendBtnText }}
          <i class="i-r-xia-12"></i>
        </span>
        <span v-else class="default-text" @click="toggleOpen()">
          {{ collapseBtnText }}
          <i class="i-r-shang-12"></i>
        </span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, watch, nextTick,
} from 'vue';
import { useElObserve } from '@/utils/mutation-observer';
import { getPx } from '../sd-table/utils';

export default defineComponent({
  name: 'up-down-base',
  components: {},
  props: {
    height: {
      type: [String, Number],
      default: 'auto',
    },
    expendBtnText: {
      type: String,
      default: '展开',
    },
    collapseBtnText: {
      type: String,
      default: '收起',
    },
    isObserve: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const wrapEl = ref<HTMLDivElement>();
    const contentEl = ref<HTMLDivElement>();
    const state = reactive({
      showIsOpen: true,
      isOpen: false,
      currentHeight: getPx(props.height),
    });

    const wrapStyle = computed(() => {
      return {
        height: state.currentHeight,
      };
    });

    const setCurrentHeight = () => {
      const el = contentEl.value;
      if (!el) return;
      state.currentHeight = state.isOpen ? getPx(el.clientHeight) : getPx(props.height);
    };

    watch(() => state.isOpen, () => {
      setCurrentHeight();
    });

    const setShowIsOpen = () => {
      const el = wrapEl.value;
      if (!el) return;
      const showIsOpen = el.scrollHeight > el.clientHeight;
      state.showIsOpen = showIsOpen;
      if (!showIsOpen) {
        state.currentHeight = 'auto'; // 不需展开时不设置高度
      } else {
        setCurrentHeight();
      }
    };

    const toggleOpen = (isOpen?: boolean) => {
      state.isOpen = isOpen === undefined ? !state.isOpen : isOpen;
    };

    const reset = async () => {
      const propsHeight = getPx(props.height);
      // 在监听元素变化的时候,调setShowIsOpen之前需要初始化一下:比如重新设置currentHeight保证高度
      if (state.currentHeight !== propsHeight) {
        state.currentHeight = propsHeight;
        // 在wrapStyle生效后触发
        await nextTick();
      }
    };

    if (props.isObserve) {
      useElObserve(contentEl, async () => {
        await reset();
        setShowIsOpen();
      });
    }


    return {
      ...toRefs(state), wrapEl, contentEl, wrapStyle, toggleOpen, setCurrentHeight,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.up-down-base {
  .up-down-wrap {
    overflow-y: hidden;
    transition: height 0.3s;
    .up-down-content {
    }
  }
  .footer {
    cursor: pointer;
    .default-text {
      font-size: 12px;
      color: $color-primary;
      i {
        font-size: 12px;
      }
    }
  }
}
</style>
