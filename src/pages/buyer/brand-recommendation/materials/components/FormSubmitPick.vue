<template>
  <el-form class="form-submit-pick">
    <el-input
      v-model="formData.remark"
      type="textarea"
      placeholder="请输入备注内容"
      resize="none"
      :rows="4"
      :maxlength="500"
      show-word-limit
    ></el-input>
    <div class="dialog-buttons">
      <el-button size="mini" @click="$emit('cancel')">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" size="mini" @click="handlePick">提交</el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { MaterialListItem } from '@/models/Material';
import { pickMaterialInRecommendation } from '@/api/recommendation';

export default defineComponent({
  name: 'form-submit-pick',
  components: {},
  props: {
    material: {
      type: Object as PropType<MaterialListItem>,
      required: true,
    },
  },
  dialogify: {
    props: {
      title: '备注',
      width: '500px',
      closeOnClickModal: false,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: true,
      formData: {
        remark: '',
      },
    });
    const handlePick = async () => {
      try {
        state.loading = true;
        await pickMaterialInRecommendation({
          originalId: props.material.originalCId,
          catalogId: props.material.catalogId,
          remarks: state.formData.remark,
        });
        emit('confirm');
      } finally {
        state.loading = false;
      }
    };
    return {
      ...toRefs(state),
      handlePick,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.form-submit-pick {
  .dialog-buttons {
    padding-top: 20px;
    text-align: right;
  }
}
</style>
