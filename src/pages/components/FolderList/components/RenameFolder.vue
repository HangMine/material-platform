<template>
  <div class="rename-folder">
    <div class="main">
      <div class="dialog-title">{{ $t("folder.rename") }}{{ title }}</div>
      <el-form
        @submit.prevent
        class="form-box flex-wrap"
        :model="form"
        :rules="formRules"
        size="small"
        label-position="top"
        ref="formRef"
      >
        <el-form-item label="" prop="content">
          <el-input v-model="form.content" :placeholder="placeholder" :maxlength="20"></el-input>
        </el-form-item>
      </el-form>
      <div class="footer">
        <el-button @click="cancel()"> {{ $t("public.dialog.cancel") }}</el-button>

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
import api, {
  renameMaterialBook, renameColorCard, addColorCard, addMaterialBook, collectColorCardBookRename,
} from '@/api/materialMenu';
import { getContextUser } from '@/loaders/context';
import { renameCollectFolder } from '@/api/material';
import { t } from '@/i18n/index';

export default defineComponent({
  name: '',

  components: {
  },
  props: {
    receiveType: {
      type: String,
      required: true,
    },
    detailId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
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

      content: validator2ElemRules([validFilled], { trigger: 'blur' }),

    };

    const state = reactive({
      title: '',
      titlePre: '',
      params: {
        id: props.detailId as string,
        newName: '',
        name: '',
      },

      form: {

        content: props.name,

      },

    });
    watch(() => props.receiveType, (value) => {
      console.log(value, 9999999999);
      switch (value) {
        case 'MaterialBook':

          state.title = t('folder.material_book');
          break;
        case 'collect':
          state.title = t('menu-management.favorites');
          break;
        case 'ColorCard' || 'collectColorCard':
          state.title = t('folder.color_card_book');
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
          state.params.newName = state.form.content;
          state.params.name = props.name as string;
          switch (props.receiveType) {
            case 'MaterialBook':
              delete state.params.id;
              await renameMaterialBook({ folderId: props.detailId as string, ...state.params });
              break;
            case 'collect':
              await renameCollectFolder({
                folderId: props.detailId,
                name: props.name,
                newName: state.params.newName,
              });
              break;
            case 'ColorCard':
              await renameColorCard(state.params);
              break;
            case 'collectColorCard':
              await collectColorCardBookRename({ id: props.detailId, name: state.form.content });
              break;
            default:
              break;
          }
          await ElMessage.success(`${t('folder.rename')}${state.title}${t('folder.success')}`);
          emit('confirm');
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    };

    return {
      ...toRefs(state), formRules, formRef, submit, cancel,
    };
  },
});
</script>
<style lang="scss" scoped>
.rename-folder {
  .main {
    border-radius: 8px;
    position: relative;
    .dialog-title {
      font-size: 16px;
      position: absolute;
      top: -20px;
    }

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
