<template>
  <div class="dialog-title">{{ dialogTitle }}</div>
  <el-form size="small" ref="formVm">
    <div class="flex">
      <div class="cropper-box-wrapper">
        <VueCropper
          v-if="imageUrl"
          class="cropper-box"
          :img="imageUrl"
          :options="cropperOptions"
          ref="cropper"
        ></VueCropper>
        <Upload
          v-else
          v-model:url="imageUrl"
          class="cropper-upload"
          :options="{ types: ['png', 'jpg', 'jpeg'] }"
          :validOptions="['img']"
        >
          <template #default="{ upload }">
            <div class="upload-content" @click="upload">
              <i class="el-icon-circle-plus"></i>
              <p>上传{{ keyword }}</p>
            </div>
          </template>
        </Upload>
      </div>
      <Upload
        v-model:url="imageUrl"
        class="btn-re-upload"
        :options="{ types: ['png', 'jpg', 'jpeg'] }"
        :validOptions="['img']"
      >
        <template #default="{ upload }">
          <div class="upload-content" @click="upload">
            <i class="el-icon-circle-plus"></i>
            <p>重新上传</p>
          </div>
        </template>
      </Upload>
    </div>
    <div class="dialog-footer flex-justify-flex-end">
      <el-button @click="cancelForm">{{ $t("public.dialog.cancel") }}</el-button>
      <!-- <el-button type="primary" :disabled="$isActing(submitForm)" @click="$act(submitForm, [$event])">提交</el-button> -->
      <el-button type="primary" :disabled="!imageUrl" @click="submitForm">{{ $t("submit") }}</el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRef, toRefs, ref, watch,
} from 'vue';
import VueCropper, { cropper } from 'vue-picture-cropper';
import Upload from '@/components/form/upload/index.vue';
import uploadToOSS from '@/utils/oss/uploadToOSS';
import { updateContextUser } from '@/loaders/context';
import { fetchUserInfo, updateUserInfo } from '@/api/account';

export default defineComponent({
  components: {
    VueCropper,
    Upload,
  },
  props: {
    keyword: {
      type: String,
      default: '图片',
    },
    dialogTitle: {
      type: String,
      default: '图片裁剪',
    },
    pathType: {
      type: String,
      default: 'USER_IMG',
    },
  },
  dialogify: {
    props: {
      title: '',
      width: '540px',
    },
  },
  emits: ['cancel', 'confirm'],
  setup(props, { emit }) {
    const cropperOptions = {
      viewMode: 1,
      dragMode: 'crop',
      aspectRatio: 1.778,
    };
    const imageUrl = ref<string>('');

    const cancelForm = async () => {
      emit('cancel');
    };

    const submitForm = async () => {
      const blobUrl = cropper.getDataURL();
      // 上传到OSS
      const imgUrl = await uploadToOSS(blobUrl, 'COVER_PICTURE');
      emit('confirm', {
        url: imgUrl,
        blobUrl,
      });
    };

    return {
      submitForm,
      cancelForm,
      imageUrl,
      cropperOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.dialog-title {
  font-size: 16px;
  position: relative;
  top: -20px;
}
.dialog-footer {
  margin-top: 20px;
}
.flex {
  justify-content: space-between;
}
.upload-box {
  background: #fcfcfc;
  border: 1px solid #ddd;
  i {
    font-size: 24px;
    color: $color-primary;
  }
  p {
    margin-top: 8px;
    color: #999;
  }
}
.btn-re-upload {
  @extend .upload-box;
  width: 100px;
  height: 100px;
}
.cropper-box-wrapper {
  @extend .upload-box;
  width: 360px;
  height: 360px;
  i {
    font-size: 32px;
  }
}
.upload-content {
  height: 100%;
  cursor: pointer;
  flex-direction: column;
  @extend %flex-center;
}
.cropper-box,
.cropper-upload {
  width: 100%;
  height: 100%;
}
</style>
