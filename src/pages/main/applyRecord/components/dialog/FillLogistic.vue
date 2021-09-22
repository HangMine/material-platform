<template>
  <div class="fill-logistic">
    <div class="receive-info">
      <div class="title">{{ $t("application_list.form-send-sample.receiver_info") }}</div>
      <div class="item" v-for="(item, index) in receiveInfo" :key="index">
        <span class="name">{{ item.name }}：</span>
        <span class="value">{{ receiveForm[item.value] }}</span>
      </div>
    </div>
    <el-form
      class="form-box flex-wrap"
      :model="logisticInfo"
      :rules="formRules"
      size="small"
      label-position="top"
      ref="formRef"
    >
      <el-form-item :label="$t('application_list.form-send-sample.goods_info')" prop="name">
        <el-input v-model="logisticInfo.name" disabled :placeholder="$t('public.form.input_please')"></el-input>
      </el-form-item>
      <el-form-item :label="$t('application_list.form-send-sample.choose_logistics')" prop="com">
        <el-select v-model="logisticInfo.com" :placeholder="$t('public.form.input_choose')">
          <el-option v-for="item in logisticOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item :label="$t('application_list.form-send-sample.choose_time')" prop="">
        <el-cascader v-model="logisticInfo.time" :options="timeOptions" @change="handleTimeChange"></el-cascader>
      </el-form-item>
      <el-form-item :label="$t('application_list.form-send-sample.remark')" prop="remark">
        <el-input
          type="textarea"
          v-model="logisticInfo.remark"
          :placeholder="$t('public.form.input_please')"
          resize="none"
          rows="4"
          maxlength="200"
          show-word-limit
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="footer">
      <el-button type="" @click="handleCancel()">{{ $t("cancel") }}</el-button>
      <el-button type="primary" @click="submit()">{{ $t("submit") }}</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, onMounted, reactive, toRefs, PropType,
} from '@vue/runtime-core';
import validFilled from '@/utils/validators/valid-filled';
import { validator2ElemRules } from '@/utils/validators/utils/validator-to-elem-rule';
import {
  getTrans, sendSampleForLogistic, ApplyItem, transList,
} from '@/api/applyRecord';
import dayjs from 'dayjs';
import { t } from '@/i18n/index';

type sendType = {
  name: string, phone: string, address: string, addressDetail: string
};
type OptionType = {
  value: string,
  label: string
};
type logisticInfoType = {
  name: string,
  cargo: string,
  remark: string,
  dayType: string,
  com: string,
  time: string,
  pickupStartTime: string,
  pickupEndTime: string,
  weight: string
};
export default defineComponent({
  name: '',
  dialogify: {
    props: {
      title: t('application_list.send_sample'),
      width: '500px',
      closeOnClickModal: false,
    },
  },
  components: {},
  props: {
    row: {
      type: Object as PropType<ApplyItem>,
      required: true,
    },
    sendForm: {
      type: Object as PropType<sendType>,
      required: true,
    },
  },
  emits: ['cancel'],
  setup(props, { emit }) {
    const time = [
      { label: '08:00-10:00', value: '08:00-10:00' },
      { label: '10:00-12:00', value: '10:00-12:00' },
      { label: '12:00-14:00', value: '12:00-14:00' },
      { label: '14:00-16:00', value: '14:00-16:00' },
      { label: '16:00-18:00', value: '16:00-18:00' },
      { label: '18:00-20:00', value: '18:00-20:00' }];
    const state = reactive({
      timeList: [],
      todayTimeList: [],
      logisticOptions: [] as OptionType[],
      receiveInfo: [
        { name: t('application_list.form-application-sample.name'), value: 'name' },
        { name: t('application_list.form-application-sample.phone'), value: 'phone' },
        { name: t('application_list.form-application-sample.address'), value: 'address' },
        { name: t('application_list.form-application-sample.detail_address'), value: 'addressDetail' },
      ],
      receiveForm: {
        name: '',
        phone: '',
        address: '',
        addressDetail: '',
      } as sendType,
      logisticInfo: {
        name: '样品',
        cargo: '其他',

        remark: '',
        dayType: '',
        com: '',
        time: '',
        pickupStartTime: '',
        pickupEndTime: '',
        weight: '0.5',

      } as logisticInfoType,


    });


    const handleCancel = () => {
      emit('cancel');
    };
    const handleTimeChange = (value: string[]) => {
      // eslint-disable-next-line prefer-destructuring
      state.logisticInfo.dayType = value[0];
      // eslint-disable-next-line prefer-destructuring
      state.logisticInfo.pickupStartTime = value[1].split('-')[0];
      // eslint-disable-next-line prefer-destructuring
      state.logisticInfo.pickupEndTime = value[1].split('-')[1];
      console.log(state.logisticInfo);
    };
    const getTimeInterval = () => {
      console.log(9999);
      const arr = [] as any;
      for (let i = 0; i < 23; i += 2) {
        const value = `${i < 10 ? `0${i}` : i}:00-${i + 2 < 10 ? `0${i + 2}` : i + 2}:00`;
        arr.push({ label: value, value });
      }
      state.timeList = arr;
      const number = Math.floor((dayjs().hour()) / 2);
      state.todayTimeList = arr?.slice(number);
    };
    getTimeInterval();

    const timeOptions = [
      {
        value: '今天',
        label: '今天',
        children: state.todayTimeList,
      },
      { value: '明天', label: '明天', children: state.timeList },
      { value: '后天', label: '后天', children: state.timeList },
    ];
    console.log(timeOptions);
    const formRules = {

      content: validator2ElemRules([validFilled], { trigger: 'blur' }),

      phone: validator2ElemRules([validFilled], { trigger: 'blur' }),
      addressDetail: validator2ElemRules([validFilled], { trigger: 'blur' }),
    };
    const submit = async () => {
      await sendSampleForLogistic({
        ...state.logisticInfo,
        applyId: props.row.id,
        recManName: state.receiveForm.name,
        recManMobile: state.receiveForm.phone,
        recManPrintAddr: state.receiveForm.address + state.receiveForm.addressDetail,
        sendManName: props.sendForm.name,
        sendManMobile: props.sendForm.phone,
        sendManPrintAddr: props.sendForm.address + props.sendForm.addressDetail,
      });
      console.log(888);
    };
    const getTransList = async () => {
      const res = await getTrans({
        sendManPrintAddr: props.sendForm.address + props.sendForm.addressDetail,
        recManPrintAddr: state.receiveForm.address + state.receiveForm.addressDetail,
      });
      const arr = [] as OptionType[];
      res.data.forEach((item: { com: string }) => {
        transList.forEach(ele => {
          if (item.com === ele.value) {
            arr.push(ele);
            console.log(999);
          }
        });
      });
      state.logisticOptions = arr;
    };
    onMounted(async () => {
      console.log(props.row?.applyContent, 'props.row?.applyContent');
      if (props.row?.applyContent) {
        state.receiveForm = props.row?.applyContent;
      }
      console.log(props.row, 'row');
      await getTransList();

      console.log(props.row, 'row');
      console.log(props.sendForm, 'sendForm');
    });
    return {
      ...toRefs(state), formRules, handleTimeChange, handleCancel, submit, getTransList, timeOptions,
    };
  },
});
</script>
<style lang="scss" scoped>
.fill-logistic {
  .receive-info {
    background: #f3f2f2;
    padding: 16px;
    border-radius: 4px;
    .title {
      height: 20px;
      color: #222222;
    }
    .item {
      margin-top: 8px;
      span {
        color: #666666;
      }
      line-height: 20px;
    }
  }
  .form-box {
    margin-top: 16px;
    padding: 0 6px 14px;
    .el-form-item {
      margin-bottom: 14px;
      width: 100%;
      /deep/ .el-form-item__label {
        padding-bottom: 0;
      }
    }
    /deep/.el-select {
      width: 100% !important;
    }
    /deep/.el-cascader {
      width: 100% !important;
    }
  }
  .footer {
    text-align: right;
  }
}
</style>
