<template>
  <el-form-item :prop="prop">
    <template #label>
      <slot name="label">
        <label class="el-form-item__label">Logo</label>
      </slot>
    </template>
    <div class="upload-area flex">
      <BaseImage v-if="currentImgUrl" class="preview-box" :src="currentImgUrl" @click="showEditAvatarDialog" />
      <div v-else class="upload-btn flex-center flex-column" @click="showEditAvatarDialog">
        <i class="icon i-l-shangchuantubiao-34"></i>
        <span>上传</span>
      </div>
    </div>
  </el-form-item>
</template>
<script lang="ts">
// import Upload from '@/components/form/upload/index.vue';
import { dialog } from '@/utils/vue/dialog';
import {
  defineComponent, reactive, watch, toRefs, PropType, ref,
} from 'vue';
import BaseImage from '@/components/base/Image.vue';
import ImageCropperForm from './ImageCropperForm.vue';


export default defineComponent({
  name: 'image-uploader',
  components: {
    BaseImage,
    // IconTip,
    // Upload,
  },
  props: {
    prop: {
      type: String,
      default: 'logo',
    },
    sizeLimit: {
      type: Number,
      default: 100 * 1024,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  emits: ['upload', 'update:imageUrl'],
  setup(props, { emit }) {
    const currentImgUrl = ref(props.imageUrl);
    const showEditAvatarDialog = async () => {
      const { blobUrl, url } = await dialog({
        is: ImageCropperForm,
        props: {
          dialogTitle: '上传封面',
        },
      });
      currentImgUrl.value = blobUrl;
      emit('update:imageUrl', url);
    };
    return {
      currentImgUrl,
      showEditAvatarDialog,
    };
  },
});
</script>

<style lang="scss" scoped>
/deep/ .icon-tip {
  font-size: 12px !important;
  margin-left: 4px;
  color: #ccc !important;
}
.upload-area {
  width: 203px;
  height: 114px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #dddddd;
  cursor: pointer;
  // align-items: stretch;
  .upload-btn {
    width: 100%;
    background: #fcfcfc;
    font-size: 12px;
    line-height: 24px;
    i {
      font-size: 24px;
    }
  }
}
</style>
<style lang="scss">
.upload-logo-tooltip {
  color: #666;
  padding: 4px 12px;
  border: none !important;
  background-color: red;
  box-shadow: 0 2px 6px 0 rgba(28, 35, 63, 0.2);
}
</style>
