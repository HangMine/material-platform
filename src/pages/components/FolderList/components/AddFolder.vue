<template>
  <div class="add-folder">
    <div class="main">
      <div class="dialog-title">{{ $t("folder.new_built") }}{{ title }}</div>
      <el-form
        @submit.prevent
        class="form-box flex-wrap"
        :model="form"
        :rules="formRules"
        size="small"
        label-position="top"
        ref="formRef"
      >
        <!-- <p>材料册名称</p> -->
        <el-form-item class="form-item--narrow-label" :label="labelName" prop="name">
          <el-input v-model="form.name" :maxlength="20" :autofocus="true"></el-input>
        </el-form-item>
        <el-form-item
          class="form-item--narrow-label"
          v-if="receiveType !== 'collect'"
          :label="$t('folder.shared_permission')"
        >
          <el-radio-group v-model="form.isShared">
            <el-radio label="1"> {{ $t("folder.can_be_shared") }}</el-radio>
            <el-radio label="0">{{ $t("folder.cannot_be_shared") }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="footer">
        <el-button @click="cancel()">{{ $t("public.dialog.cancel") }}</el-button>

        <el-button type="primary" @click="submit()">{{ $t("public.dialog.confirm") }}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import {
  defineComponent, reactive, toRefs, ref, watch,
} from '@vue/runtime-core';
import { ElForm, ElMessage } from 'element-plus';
import { validator2ElemRules } from '@/utils/validators/utils/validator-to-elem-rule';
import validFilled from '@/utils/validators/valid-filled';
import {
  addColorCard, addMaterialBook,
} from '@/api/materialMenu';
import { addCollectFolder } from '@/api/material';
import { t } from '@/i18n/index';

type formItem = {
  name: string,
  isShared?: number,

};
export default defineComponent({
  name: '',

  components: {
  },
  props: {

    receiveType: {
      type: String,
    },

  },
  emits: ['cancel'],
  dialogify: {
    props: {
      title: '',
      width: '440px',
      closeOnClickModal: false,
    },
  },
  setup(props, { emit }) {
    const formRef = ref<InstanceType<typeof ElForm>>();
    const formRules = {
      name: validator2ElemRules([validFilled], { trigger: 'blur' }),
    };
    const state = reactive({
      title: '',
      labelName: '',
      form: { isShared: '1', name: '' },
    });
    watch(() => props.receiveType, (value) => {
      switch (value) {
        case 'MaterialBook':

          state.title = t('folder.material_book');
          state.labelName = t('folder.name_of_material_volume');
          break;
        case 'collect':
          state.title = t('menu-management.favorites');
          state.labelName = '';
          break;
        case 'ColorCard':
          state.title = t('folder.color_card_book');
          state.labelName = t('folder.color_card_name');
          break;
        default:
          break;
      }
    }, { immediate: true });
    const cancel = async () => {
      emit('cancel');
    };
    const submit = async () => {
      formRef.value!.validate(async (valid) => {
        if (valid) {
          const params = {} as formItem;
          params.name = state.form.name;
          switch (props.receiveType) {
            case 'MaterialBook':
              params.isShared = parseInt(state.form.isShared, 10);
              await addMaterialBook({ ...params });
              break;
            case 'collect':
              await addCollectFolder({ ...params });
              break;
            case 'ColorCard':
              params.isShared = parseInt(state.form.isShared, 10);
              await addColorCard({ ...params });
              break;
            default:
              break;
          }
          await ElMessage.success(`${t('folder.new_built')}${state.title}${t('folder.success')}`);
          emit('confirm');
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    };
    return {
      ...toRefs(state), formRules, formRef, submit, cancel, t,
    };
  },
});
</script>
<style lang="scss" scoped>
.add-folder {
  .main {
    border-radius: 8px;
    position: relative;
    .dialog-title {
      font-size: 16px;
      position: absolute;
      top: -20px;
    }
    // .el-dialog{
    //   .el-dialog__body{
    //     padding: 10px 30px 30px;
    //   }
    // }
    .form-box {
      padding: 22px 0 14px;
      .el-form-item {
        width: 100%;
      }
    }
  }
  .footer {
    text-align: right;
  }
}
</style>
