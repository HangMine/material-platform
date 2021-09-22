<template>
  <div class="apply-sample">
    <div class="main" v-if="!fillLogisticOpen">
      <el-form
        class="form-box flex-wrap"
        :model="receiverInfo"
        :rules="formRules"
        size="small"
        label-position="top"
        ref="formRef"
      >
        <el-form-item :label="$t('application_list.form-application-sample.name')" prop="name">
          <el-input v-model="receiverInfo.name" :placeholder="$t('public.form.input_please')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('application_list.form-application-sample.phone')" prop="phone">
          <el-input v-model="receiverInfo.phone" :placeholder="$t('public.form.input_please')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('application_list.form-application-sample.address')" prop="address">
          <DictionaryAddressSelector
            @change="handleAddressChange"
            :modelValue="addressList"
          ></DictionaryAddressSelector>
        </el-form-item>
        <el-form-item :label="$t('application_list.form-application-sample.detail_address')" prop="addressDetail">
          <el-input v-model="receiverInfo.addressDetail" :placeholder="$t('public.form.input_please')"></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('application_list.form-application-sample.application_content')"
          v-if="!sendSample"
          prop="content"
        >
          <el-input
            type="textarea"
            v-model="receiverInfo.content"
            :placeholder="$t('public.form.input_apply_contetn')"
            resize="none"
            rows="4"
            maxlength="200"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="footer">
        <el-button v-if="!sendSample" type="primary" @click="submit()">{{ $t("submit") }}</el-button>
        <template v-else>
          <el-button type="" @click="handleCancel()">{{ $t("cancel") }}</el-button>
          <el-button type="primary" @click="nextStep()">{{ $t("next") }}</el-button>
        </template>
      </div>
    </div>
    <FillLogistic :row="row" :sendForm="receiverInfo" @cancel="handleCancel" v-if="fillLogisticOpen"></FillLogistic>
  </div>
</template>
<script lang="ts">

import {
  defineComponent, reactive, toRefs, ref, PropType,
} from '@vue/runtime-core';
import { ElForm, ElMessage } from 'element-plus';

import DictionaryAddressSelector from '@/components/form/DictionaryAddressSelector.vue';
import { validator2ElemRules } from '@/utils/validators/utils/validator-to-elem-rule';
import validMobilePhone from '@/utils/validators/valid-mobile-phone';
import validFilled from '@/utils/validators/valid-filled';
import { getContextUser } from '@/loaders/context';
import {
  submitApply, ApplyItem,
} from '@/api/applyRecord';
import { getMatchedAddressCnText } from '@/utils/format-address';
import { t } from '@/i18n/index';
import FillLogistic from './FillLogistic.vue';


type AddressList = [string | null, string | null, string | null];

export default defineComponent({
  name: '',
  dialogify: {
    props: {
      title: '',
      width: '500px',
      closeOnClickModal: false,
    },
  },
  components: {
    DictionaryAddressSelector, FillLogistic,
  },
  props: {
    sendSample: {
      type: Boolean,
    },
    appendRequestParams: {
      type: Object as PropType<{
        approver: string,
        applyType: 1 | 2,
        sampleId?: string,
        originalCId?: string,
        sampleName?: string,
        categoryId?: string
      }>,
    },
    row: {
      type: Object as PropType<ApplyItem>,
    },
  },
  setup(props, { emit }) {
    const formRef = ref<InstanceType<typeof ElForm>>();

    const formRules = {
      name: validator2ElemRules([validFilled], { trigger: 'blur' }),
      content: validator2ElemRules([validFilled], { trigger: 'blur' }),
      address: validator2ElemRules([validFilled], { trigger: 'blur' }),
      phone: validator2ElemRules([validFilled, validMobilePhone], { trigger: 'blur' }),
      addressDetail: validator2ElemRules([validFilled], { trigger: 'blur' }),
    };

    const state = reactive({
      fillLogisticOpen: false,
      receiverInfo: {
        name: '',
        content: '',
        phone: '',
        address: '',
        addressDetail: '',
      },
      addressList: [null, null, null] as AddressList,

    });
    const handleAddressChange = async (addressList: string[]) => {
      console.log(addressList);
      state.receiverInfo.address = await getMatchedAddressCnText([addressList[0], addressList[1], addressList[2]]);
      // state.receiverInfo.address = addressList;
    };
    const handleCancel = () => {
      emit('cancel');
    };
    const nextStep = async () => {
      formRef.value!.validate(async (valid) => {
        if (valid) {
          state.fillLogisticOpen = true;
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    };
    const submit = async () => {
      formRef.value!.validate(async (valid) => {
        if (valid) {
          const user = getContextUser();
          console.log(state.receiverInfo);

          await submitApply({
            applicant: user?.id as string,
            applyContent: {
              sampleId: props?.appendRequestParams?.sampleId,
              originalCId: props?.appendRequestParams?.originalCId,

              sampleName: props?.appendRequestParams?.sampleName,
              categoryId: props?.appendRequestParams?.categoryId,
              applyContent: state.receiverInfo.content,
              name: state.receiverInfo.name,
              phone: state.receiverInfo.phone,
              address: state.receiverInfo.address,
              addressDetail: state.receiverInfo.addressDetail,

            },
            ...(props.appendRequestParams! ?? {}),
          });
          await ElMessage.success(t('application_list.success_apply'));

          emit('confirm');
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    };


    return {
      ...toRefs(state), formRules, formRef, submit, handleCancel, nextStep, handleAddressChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.apply-sample {
  .main {
    border-radius: 8px;

    // width: 500px;
    // background: #fff;
    .title {
      font-size: 16px;
    }
    .form-box {
      padding: 0 6px 14px;
      .el-form-item {
        margin-bottom: 14px;
        width: 100%;
        /deep/ .el-form-item__label {
          padding-bottom: 0;
        }
      }
    }
  }
  .footer {
    text-align: right;
  }
}
</style>
