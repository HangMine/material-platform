/* 默认只支持文档类型 */
<template>
  <Upload
    v-model="uploadItem.item"
    v-model:url="uploadItem.url"
    class="file-upload"
    :options="{ types: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'] }"
    :validOptions="['pdf', 'word', 'sheet', 'ppt']"
    v-bind="$attrs"
    ref="fileUploadVm"
  >
    <template #default="{ file, url, upload }">
      <div class="file-upload-content" @click="upload">
        <div v-if="file || url" class="default-upload-file" :class="{ 'is-img': isImg }">
          <img :src="type2Img(file || url)" />
          <div class="update-content">
            <div class="icon-wrap">
              <i class="i-l-shangchuantubiao-34"></i>
            </div>
            <div class="title">更新资料</div>
          </div>
        </div>
        <div v-else class="upload-btn flex-center flex-column">
          <i class="icon i-l-shangchuantubiao-34"></i>
          <span>上传</span>
        </div>
        <!-- <div v-else class="default-upload-list-add flex-center">
          <i class="i-l-tianjia-34"></i>
        </div> -->
      </div>
    </template>
    <template #append="{ i, file }">
      <slot name="append" :i="i" :file="file">
        <over-text class="upload-title">{{ file ? file.name : "" }}</over-text>
      </slot>
    </template>
  </Upload>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch,
} from 'vue';
import BaseImage from '@/components/base/Image.vue';
import getExt from '@4dst-saas/public-utils/dist/get-ext';
import { getRelativePathFromUrl } from '@/utils/normalize-component';
import Upload from './index.vue';
import { type2Img, UploadItem } from './utils';

export default defineComponent({
  name: 'file-upload',
  inheritAttrs: false,
  components: { Upload },
  props: {
    modelValue: {
      type: Object as PropType<UploadItem>,
      default: () => ({
        item: undefined,
        url: '',
        name: '',
      }),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const fileUploadVm = ref<InstanceType<typeof Upload>>();
    const state = reactive({
      uploadItem: props.modelValue,
    });

    const isImg = computed(() => {
      return ['jpg', 'jpeg', 'png'].includes(getExt(state.uploadItem.item || getRelativePathFromUrl(state.uploadItem.url)));
    });

    watch(() => props.modelValue, (value) => {
      state.uploadItem = value;
    });

    watch(() => state.uploadItem.url, (value) => {
      emit('update:modelValue', state.uploadItem);
    });


    return {
      ...toRefs(state), fileUploadVm, type2Img, isImg,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.file-upload {
  width: 108px;
  height: 108px;
  .file-upload-content {
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #dddddd;
    .default-upload-file {
      cursor: pointer;
      position: relative;
      &.is-img {
        padding: 0;
      }
      .update-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 200;
        .icon-wrap {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $color-primary;
          border-radius: 50%;
          > i {
            color: white;
          }
        }
        > .title {
          padding-top: 10px;
          font-size: 12px;
        }
      }

      &:hover {
        .update-content {
          display: flex;
        }
      }
    }
    .upload-btn {
      width: 100%;
      height: 100%;
      background: #fcfcfc;
      font-size: 12px;
      line-height: 24px;
      cursor: pointer;
      &:hover {
        color: $color-primary;
        transition: all 0.3s;
      }
      i {
        font-size: 24px;
      }
    }
  }
  /deep/.upload-title {
    font-size: 12px;
    color: #666666;
    line-height: 24px;
    height: 24px !important;
  }
}
</style>
