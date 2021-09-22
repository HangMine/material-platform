<template>
  <div class="model-select-edit">
    <ModelSelectPane v-model="currentValue"></ModelSelectPane>
    <div class="dialog-buttons">
      <el-button type="default" @click="cancel">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" @click="confirm">{{ $t("public.dialog.save") }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import deepCopy from '@/utils/deep-copy';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import ModelSelectPane from './SelectPane.vue';
import { DisplayModelTypeList, useModelUtils } from './utils';

export default defineComponent({
  name: 'model-select-edit',
  dialogify: {
    props: {
      width: '1200px',
      title: '编辑公模',
    },
  },
  components: { ModelSelectPane },
  props: {
    initValue: {
      type: Array as PropType<DisplayModelTypeList>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      currentValue: deepCopy(props.initValue) as typeof props.initValue,
    });
    const cancel = () => {
      emit('cancel');
    };
    const confirm = () => {
      emit('confirm', state.currentValue);
    };
    return {
      ...toRefs(state), cancel, confirm,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.model-select-edit {
  .dialog-buttons {
    padding-top: 20px;
    text-align: right;
  }
}
</style>
