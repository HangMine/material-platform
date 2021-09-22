<template>
  <div class="collapse-text flex">
    <div class="content" :class="{ collapse: isCollapse }" ref="contentVm" :style="{ lineHeight: LineHeight + 'px' }">
      <div class="collapse-btn blue" @click="isCollapse = !isCollapse" v-show="isCollapse">展开</div>
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, watch,
} from 'vue';
import delay from '_/delay';

/* 参考: https://zhuanlan.zhihu.com/p/373359523 */
export default defineComponent({
  name: 'collapse-text',
  components: {},
  props: {
    content: {
      type: String,
      default: '',
    },
    maxLine: {
      type: Number,
      default: 2,
    },
    LineHeight: {
      type: Number,
      default: 22,
    },
  },
  setup(props, { emit }) {
    const isCollapse = ref(false);

    // 以下逻辑都为判断isCollapse的值
    const contentVm = ref<HTMLDivElement>();
    const contentHeight = ref(0);
    const collapseHeight = props.maxLine * props.LineHeight;

    const pMounted = new Promise((resolve) => {
      onMounted(resolve);
    });

    watch(() => props.content, async (val) => {
      await pMounted;
      await delay(30);
      isCollapse.value = false;
      if (contentVm.value) {
        contentHeight.value = contentVm.value?.getBoundingClientRect().height;
        isCollapse.value = contentHeight.value > collapseHeight;
      }
    }, { immediate: true });


    return {
      contentVm,
      isCollapse,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import "~@/styles/mixins.scss";

// 外包一层flex, 以解决height取%无效的问题!
.collapse-text {
  .content {
    &.collapse {
      @include over-text(2);
    }
    &:before {
      content: "";
      float: right;
      height: 100%;
      margin-bottom: -20px;
      // background: blue;
    }
  }
  .collapse-btn {
    display: flex;
    align-items: center;
    float: right;
    clear: both;
    cursor: pointer;
    &:after {
      content: "";
      margin-left: 1px;
      // width: 0;
      border-top: 4px solid currentColor;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
    }
  }
}
</style>
