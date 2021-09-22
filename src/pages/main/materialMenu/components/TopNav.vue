<template>
  <div class="top-nav">
    <div class="left-title" @click="goBack">
      <span class="return-btn"><i class="iconfont i-r-zuo-12"></i>{{ $t("back") }}</span>
      <span class="color-book">{{ headLine }}</span>
      <span class="color-book-name">{{ subHead }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: '',
  components: {},
  props: {
    headLine: {
      type: String,
    },
    subHead: {
      type: String,
    },
    custom: {
      type: Boolean,
      default: false,
    },
    topNavProps: {
      type: Object,
    },

  },
  emits: ['goBackEvent'],
  setup(props, { emit }) {
    const router = useRouter();
    console.log(props.custom, 'custom');

    const goBack = () => {
      if (props.custom) {
        emit('goBackEvent');
      } else if (props?.topNavProps?.custom) {
        props?.topNavProps.onGoBackEvent();
      } else {
        router.go(-1);
      }
    };

    return {
      goBack,

    };
  },
});
</script>
<style lang="scss">
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  line-height: 52px;
  background: #fff;
  padding: 0 20px 0 12px;
  border-bottom: 1px solid #eee;
  .left-title {
    cursor: pointer;
    span {
      padding: 0 8px;
    }
    .color-book {
      border-left: 1px solid #cccccc;
      border-right: 1px solid #cccccc;
    }
    .color-book {
      color: #999999;
    }
    .color-book-name {
      color: #00b8b1;
    }
    .iconfont {
      font-size: 10px;
    }
  }
}
</style>
