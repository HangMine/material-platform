<template>
  <el-popover v-model:visible="isPop" placement="bottom" width="auto" trigger="click">
    <Upload
      v-model="file"
      :options="{ types: ['png', 'jpg', 'jpeg'] }"
      :validOptions="['img']"
      class="image-search-upload"
    >
      <template #default="{ upload }">
        <div class="drag-area">{{ $t("material-manage.upload.drag_picture_here") }}</div>
        <el-button class="upload-btn" @click="upload">{{ $t("material-manage.upload.choose_file") }}</el-button>
      </template>
    </Upload>
    <template #reference>
      <slot>
        <i class="image-search-icon i-r-shitu-16"></i>
      </slot>
    </template>
  </el-popover>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';
import Upload from '@/components/form/upload/index.vue';

export default defineComponent({
  name: 'image-search',
  components: { Upload },
  props: {},
  emits: ['file-change', 'search'],
  setup(props, { emit }) {
    const state = reactive({
      isPop: false,
      file: undefined as File | undefined,
    });
    const clearFile = () => {
      state.file = undefined;
      state.isPop = false;
    };
    watch(() => state.file, () => {
      emit('file-change', state.file, clearFile);
      if (!state.file) return;
      emit('search', state.file, clearFile);
      state.isPop = false;
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss">
.image-search-upload {
  text-align: center;
  &.is-dragover {
    .drag-area {
      border-color: $color-primary;
      color: $color-primary;
    }
  }
  .drag-area {
    width: 484px;
    height: 78px;
    border: 1px dashed #999999;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .upload-btn {
    margin-top: 8px;
  }
}
</style>
<style lang="scss" scoped>
// @import 'url'
.image-search-icon {
  color: #999999;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: $color-primary;
  }
}
</style>
