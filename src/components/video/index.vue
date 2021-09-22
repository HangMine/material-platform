<template>
  <div class="video-wrap">
    <video
      :src="currentSrc"
      class="base-video"
      :preload="preload"
      @play="onPlay"
      @pause="onPause"
      v-bind="$attrs"
      ref="videoEl"
    ></video>
    <span v-if="paused" class="play-icon hover-link flex-center" @click.stop="start">
      <i class="icon i-s-bofanganniu-18"></i>
      <!-- <i v-else class="icon i-r-yanjingguanbi-18"></i> -->
    </span>
  </div>
</template>

<script lang="ts">
import { isOssUrl, signUrl } from '@/utils/oss/utils';
import { dialog } from '@/utils/vue/dialog';
import onCreated from '@/utils/vue/onCreated';
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, PropType, h, getCurrentInstance, watch,
} from 'vue';
import Controller from './Controller.vue';

type VideoType = 'dialog' | 'default';

export default defineComponent({
  name: 'base-video',
  components: {},
  props: {
    src: {
      type: String,
      required: true,
    },
    preload: {
      type: String as PropType<HTMLVideoElement['preload']>,
      default: 'metadata',
    },
    type: {
      type: String as PropType<VideoType>,
      default: 'dialog',
    },
  },
  setup(props, { emit }) {
    const videoEl = ref<HTMLVideoElement>();
    const state = reactive({
      currentSrc: '',
      paused: true,
    });
    // 外部会使用
    const toggle = (play?: boolean) => {
      const video = videoEl.value;
      if (!video) return;

      state.paused = play !== undefined ? !play : !state.paused;
      state.paused ? video.pause() : video.play();
    };
    const onPlay = () => {
      state.paused = false;
    };
    const onPause = () => {
      state.paused = true;
    };
    const start = async () => {
      if (props.type === 'dialog') {
        await dialog({
          is: Controller,
          props: {
            src: props.src,
          },
        });
      } else {
        toggle();
      }
    };
    const signSingleUrl = async (url: string) => {
      const newUrl = isOssUrl(url) ? await signUrl(url) : url;
      return newUrl;
    };
    watch(() => props.src, async () => {
      state.currentSrc = await signSingleUrl(props.src);
    }, { immediate: true });

    return {
      ...toRefs(state), videoEl, start, onPlay, onPause, toggle,
    };
  },

});
</script>
<style lang="scss" scoped>
// @import 'url'
.video-wrap {
  position: relative;
  height: 100%;
  background: black;
  .base-video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .close-icon {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .play-icon {
    position: absolute;
    width: 44px;
    height: 44px;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
    i {
      font-size: 18px;
      color: #fff;
    }
    &:hover {
      i {
        color: $color-primary;
      }
    }
    // &::after {
    //   content: "";
    //   position: absolute;
    //   left: 13px;
    //   top: 6px;
    //   width: 0;
    //   height: 0;
    //   border: 10px solid transparent;
    //   border-left-color: #fff;
    //   border-radius: 4px;
    // }
  }
}
</style>
