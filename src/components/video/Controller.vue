
<template>
  <div class="video-controller-wrap">
    <div class="video-content">
      <video :src="currentSrc" autoplay controls ref="videoEl"></video>
    </div>
    <div class="video-controller"></div>
  </div>
</template>

<script lang="ts">
import { isOssUrl, signUrl } from '@/utils/oss/utils';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, onMounted, createVNode, h, watch,
} from 'vue';

export default defineComponent({
  name: 'video-controller',
  dialogify: {
    props: {
      // width: '80vw',
      title: '视频播放',
      fullscreen: true,
      customClass: 'video-controller-dialog',
    },
  },
  components: {},
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      currentSrc: '',
    });
    const signSingleUrl = async (url: string) => {
      const newUrl = isOssUrl(url) ? await signUrl(url) : url;
      return newUrl;
    };
    watch(() => props.src, async () => {
      state.currentSrc = await signSingleUrl(props.src);
    }, { immediate: true });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
.video-controller-dialog {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  .el-dialog__body {
    flex: 1;
    overflow: auto;
  }
}
</style>

<style lang="scss" scoped>
.video-controller-wrap {
  overflow: auto;
  height: 100%;
  .video-content {
    overflow: hidden;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>


