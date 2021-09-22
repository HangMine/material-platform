<template>
  <div class="video-editor">
    <EditWrap @edit="edit" :hasSwitch="hasSwitch">
      <Upload
        v-model="file"
        v-model:url="url"
        :options="{ types: ['mp4'] }"
        :validOptions="['video']"
        class="video-editor-upload"
        ref="uploadVm"
      >
        <template #default="{ url }">
          <div class="video-editor__video-wrap">
            <Video :src="url" type="default" controls ref="videoVm"></Video>
          </div>
        </template>
      </Upload>
    </EditWrap>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch, PropType,
} from 'vue';
import Upload from '@/components/form/upload/index.vue';
import { getPx } from '@/utils/util';
import Video from '@/components/video/index.vue';
import EditWrap from './EditWrap.vue';


export default defineComponent({
  name: 'video-editor',
  components: { Upload, Video, EditWrap },
  props: {
    url: {
      type: String,
      default: require('@/assets/video/merchant/movie.mp4'),
    },
    modelValue: {
      type: Object as PropType<File | undefined>,
    },
    width: {
      type: [Number, String],
      default: 'auto',
    },
    height: {
      type: [Number, String],
      default: 'auto',
    },
    hasSwitch: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:url'],

  setup(props, { emit }) {
    const uploadVm = ref<InstanceType<typeof Upload>>();
    const videoVm = ref<InstanceType<typeof Video>>();
    const state = reactive({
      file: undefined as File | undefined,
      url: '',
    });
    const imgWrapStyle = computed(() => {
      return {
        width: getPx(props.width),
        height: getPx(props.height),
      };
    });
    // file
    watch(() => props.modelValue, async (value) => {
      state.file = value;
    }, { immediate: true });
    watch(() => state.file, (value) => {
      emit('update:modelValue', value);
    });
    // url
    watch(() => props.url, (value) => {
      if (!value) return;
      state.url = value;
    }, { immediate: true });
    watch(() => state.url, (value) => {
      emit('update:url', value);
    });
    const edit = async () => {
      uploadVm.value?.upload();
    };
    return {
      ...toRefs(state), uploadVm, videoVm, imgWrapStyle, edit,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../common";
.video-editor {
  .video-editor-upload {
    .video-editor__video-wrap {
      cursor: pointer;
      @include videoSahre();
    }
  }
}
</style>
