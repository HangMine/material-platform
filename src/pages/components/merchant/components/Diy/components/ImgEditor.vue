<template>
  <div class="img-editor">
    <EditWrap @edit="edit" :hasSwitch="hasSwitch">
      <Upload
        v-model="file"
        v-model:url="url"
        :options="{ types: ['png', 'jpg', 'jpeg'] }"
        :validOptions="['img']"
        class="img-editor-upload"
        ref="uploadVm"
      >
        <template #default="{ url }">
          <div class="img-wrap" :class="{ 'is-scale': scale }" :style="imgWrapStyle">
            <base-image :src="url"></base-image>
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
import selectFiles from '@/utils/select-files';
import EditWrap from './EditWrap.vue';

export default defineComponent({
  name: 'img-editor',
  components: { Upload, EditWrap },
  props: {
    url: {
      type: String,
      default: require('@/assets/img/public/default-image.png'),
    },
    modelValue: {
      type: Object as PropType<File | undefined>,
    },
    width: {
      type: [Number, String],
      default: 'auto',
    },
    maxWidth: {
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
    scale: {
      type: Number,
    },
  },
  emits: ['update:modelValue', 'update:url'],
  setup(props, { emit }) {
    const uploadVm = ref<InstanceType<typeof Upload>>();
    const state = reactive({
      file: undefined as File | undefined,
      url: '',
    });
    const imgWrapStyle = computed(() => {
      const scale = props.scale ? `${+(parseFloat(props.scale).toFixed(2)) * 100}%` : '';
      const scaleStyle = props.scale ? {
        paddingBottom: scale,
      } : {};
      return {
        width: getPx(props.width),
        height: getPx(props.height),
        maxWidth: getPx(props.maxWidth),
        ...scaleStyle,
      };
    });
    // file
    watch(
      () => props.modelValue,
      async value => {
        state.file = value;
      },
      { immediate: true },
    );
    watch(
      () => state.file,
      value => {
        emit('update:modelValue', value);
      },
    );
    // url
    watch(
      () => props.url,
      value => {
        if (!value) return;
        state.url = value;
      },
      { immediate: true },
    );
    watch(
      () => state.url,
      value => {
        emit('update:url', value);
      },
    );
    const edit = async () => {
      uploadVm.value?.upload();
    };
    return {
      ...toRefs(state),
      uploadVm,
      imgWrapStyle,
      edit,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.img-editor {
  display: inline-block;
  .img-editor-upload {
    height: 100%;
    .img-wrap {
      // cursor: pointer;
      position: relative;
      .el-image {
        border-radius: 0;
      }
      &.is-scale {
        .el-image {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
