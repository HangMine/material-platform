<template>
  <ul class="fail-list">
    <li v-for="(item, i) of failList" :key="i">
      {{ $t("material-manage.upload.file") }}{{ item.name }}{{ $t("material-manage.upload.upload_error") }};
    </li>
  </ul>
  <div class="footer">
    <el-button @click="$emit('cancel')">{{ $t("public.dialog.cancel") }}</el-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import {
  FailUploadList,
} from '@/components/form/upload/utils';
import { t } from '@/i18n/index';

export default defineComponent({
  name: 'fail-list',
  dialogify: {
    props: {
      title: t('material-manage.upload.upload_error_list'),
      width: '440px',
    },
  },
  components: {},
  props: {
    failList: {
      type: Array as PropType<FailUploadList>,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.fail-list {
  color: #666666;
  li {
    padding: 10px 10px 10px 0;
    border-bottom: 1px solid #eeeeee;
    margin-left: 10px;
  }
}
.footer {
  margin-top: 20px;
  text-align: right;
}
</style>
