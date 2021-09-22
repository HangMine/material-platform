<template>
  <div :class="['flex', 'top-content']">
    <img class="buyer-home-img" :src="require('@/assets/img/buyer/pic_banner_首页.png')" :style="{ height: '424px' }" />
    <div class="slot-wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, reactive, toRefs,
} from 'vue';


export default defineComponent({
  props: {
  },


});
</script>

<style lang="scss" scoped>
.top-content {
  position: relative;
  background-color: #1e5760;
  .buyer-home-img {
    min-width: 1250px;
    object-fit: cover;
  }
}
.count-bar {
  background: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.center-wrapper {
  max-width: 1850px;
  height: 80px;
  margin: 0 auto;
}
.count-bar-item {
  flex: auto;
  text-align: center;
  position: relative;
  z-index: 1;
  &:not(:last-of-type) {
    &::after {
      content: " ";
      height: 28px;
      width: 1px;
      background-color: #ddd;
      position: absolute;
      right: 0;
      top: 12px;
    }
  }
  .wrapper {
    display: inline-block;
    cursor: pointer;
    > div {
      &:first-of-type {
        color: #222;
        font-size: 26px;
        line-height: 34px;
      }
      &:last-of-type {
        color: #666;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
.slot-wrapper {
  position: absolute;
  height: 100%;
}
</style>

