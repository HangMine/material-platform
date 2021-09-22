<template>
  <div class="edit-alias">
    <el-form :model="form" size="small" ref="ruleForm" label-width="140px" @submit.prevent>
      <el-form-item :label="typeData.nameTitle"> {{ typeData.nameValue }} </el-form-item>
      <el-form-item :label="typeData.aliasTitle" prop="alias">
        <el-input
          v-model="form.alias"
          :placeholder="$t('data-management.list-field.please_enter_custom_name')"
          maxlength="20"
          show-word-limit
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-buttons">
      <el-button type="default" @click="cancel">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" @click="confirm">{{ $t("public.dialog.confirm") }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import validator2ElemRule from '@/utils/validators/utils/validator-to-elem-rule';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import isFilled from '@/utils/validators/valid-filled';
import { updateAlias } from '@/api/dataManage';
import fieldMap from '@/utils/field-map';
import { t } from '@/i18n/index';
import cacheController from '@/utils/cache-controller';
import { fetchCategoryList } from '@/api/material';
import { TableType, Row } from './CommonTable';
import { updateAliasCache } from './utils';

export default defineComponent({
  name: 'edit-alias',
  dialogify: {
    props: {
      width: '440px',
    },
  },
  components: {},
  props: {
    type: {
      type: String as PropType<TableType>,
      required: true,
    },
    row: {
      type: Object as PropType<Row>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const getTypeData = () => {
      switch (props.type) {
        case 'first':
        default:
          return {
            nameTitle: t('data-management.material_primary_classification'),
            aliasTitle: t('data-management.custom_primary_classification'),
          };
        case 'second':
          return {
            nameTitle: t('data-management.material_second_classification'),
            aliasTitle: t('data-management.custom_second_classification'),
          };
        case 'field':
          return {
            nameTitle: t('data-management.material_field_name'),
            aliasTitle: t('data-management.custom_field_name'),
          };
      }
    };
    const state = reactive({
      // typeData: {},
      form: {
        alias: props.row.alias,
      },
    });
    const typeData = computed(() => {
      return { ...getTypeData(), nameValue: props.row.sourceName };
    });
    const cancel = () => {
      emit('cancel');
    };
    const confirm = async () => {
      await updateAlias({
        id: props.row.id,
        alias: state.form.alias,
      }, ['first', 'second'].includes(props.type));
      await updateAliasCache(props.type);
      emit('confirm');
    };
    return {
      ...toRefs(state), cancel, confirm, t, typeData,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.edit-alias {
  .dialog-buttons {
    text-align: right;
  }
}
</style>
