<template>
  <UploadList
    v-model="fileList"
    class="file-list"
    :options="{ types: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'] }"
    :validOptions="['pdf', 'word', 'sheet', 'ppt']"
    v-bind="$attrs"
    ref="uploadListVm"
  >
    <template #default="{ item }">
      <div class="default-upload-file">
        <img :src="type2Img(item.name)" />
      </div>
    </template>
    <template #append="{ i, item }">
      <slot name="append" :i="i" :item="item"></slot>
    </template>
  </UploadList>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import BaseImage from '@/components/base/Image.vue';
import UploadList from './UploadList.vue';
import { type2Img } from './utils';

export default defineComponent({
  name: 'file-list',
  inheritAttrs: false,
  components: { UploadList },
  props: {},
  setup(props, { emit }) {
    const uploadListVm = ref<InstanceType<typeof UploadList>>();
    const state = reactive({
      fileList: [] as File[],
    });

    return {
      ...toRefs(state), uploadListVm, type2Img,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
</style>
