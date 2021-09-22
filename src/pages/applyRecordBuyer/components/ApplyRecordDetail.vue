<template>
  <div class="apply-record-detail">
    <div class="list">
      <div
        :class="['item', index !== 1 ? 'flex-space-between' : 'apply-content-item']"
        v-for="(item, index) in tableList"
        :key="index"
      >
        <p class="title">{{ item.title }}</p>
        <p
          @click="openDetail(item)"
          :class="['content', item.hasArrow ? 'click-content' : '']"
          :style="{
            color:
              detailForm[item.value] === '待审核'
                ? '#2878FF'
                : detailForm[item.value] === '已通过'
                ? '#32CC72'
                : '#999999',
          }"
        >
          {{ detailForm[item.value] }}
          <i v-if="item.hasArrow" class="iconfont i-r-you-12" />
        </p>
      </div>
    </div>
    <div v-if="!isReceived && detailForm.approvalStatusText === '待审核'" class="btn-box">
      <el-button @click="() => $can('0021') && cancelApply()" class="btn" type="">{{
        $t("application_list.btn.cancel_application")
      }}</el-button>
    </div>
    <!-- <LogisticsInfo
      :isReceived="isReceived"
      :applyId="detailForm.id"
      v-if="detailForm.approvalStatusText === '已通过' && applyType === '样品申请'"
    ></LogisticsInfo> -->
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, PropType, watch,
} from '@vue/runtime-core';
import {
  applyReceiveOrLaunch, ApplyItem, applyCancel,
} from '@/api/applyRecord';
import { confirm, dialog } from '@/utils/vue/dialog';
import { ElMessage } from 'element-plus';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';
import { t } from '@/i18n/index';
import MerchantInfo from '../../merchant/components/Info.vue';
// import LogisticsInfo from './LogisticsInfo.vue';

export default defineComponent({
  name: '',
  components: {
    // LogisticsInfo
  },
  props: {
    detailForm: {
      type: Object,
      required: true,
    },
    applyType: {
      type: String,
      required: true,

    },
    isReceived: {
      type: Boolean,
    },

  },
  dialogify: {
    props: {
      title: '',
      width: '500px',
      closeOnClickModal: false,
    },
  },
  emits: ['confirm'],
  setup(props, { emit }) {
    const state = reactive({
      tableList: [
        { title: t('application_list.applicant'), value: 'applicantName', hasArrow: true },
        { title: t('application_list.application_content'), value: 'applyCon' },
        { title: t('application_list.sample_name'), value: 'sampleName', hasArrow: true },
        { title: t('application_list.applicantion_time'), value: 'gmtCreateTime' },
        { title: t('application_list.application_status'), value: 'approvalStatusText' }],


    });
    watch(() => props.applyType, (value) => {
      if (value === '合作申请') {
        state.tableList = state.tableList.filter(item => item.title !== '样品名称');
      }
      console.log(value);
    }, { immediate: true });
    const cancelApply = async () => {
      await confirm({ title: t('application_list.sure_cancel_apply') });
      await applyCancel(props.detailForm.id);
      ElMessage.success(t('cancel_success'));
      emit('confirm');
    };
    const openComponyDialog = async () => {
      await dialog({
        is: MerchantInfo,
        props: {
          merchant: { id: props.detailForm.orgId },
        },
      });
    };
    const openMaterialDialog = async () => {
      await dialog({
        is: MaterialDetailComp,
        props: {
          row: {
            catalogId: props.detailForm.applyContent?.originalCId,
            categoryId: props.detailForm.applyContent?.categoryId,

          },

        },
      });
    };
    const openDetail = async (item: { title: string, value: string }) => {
      switch (item.value) {
        case 'applicantName':
          await openComponyDialog();
          break;
        case 'sampleName':
          await openMaterialDialog();
          break;
        default:
          break;
      }
    };
    return {
      ...toRefs(state), cancelApply, openDetail,
    };
  },
});
</script>
<style lang="scss" scoped>
.apply-record-detail {
  height: 600px;
  overflow-y: scroll;
  .list {
    margin-bottom: 20px;
    .item {
      height: 58px;
      border-bottom: 1px solid #eee;
      .title {
        color: #888888;
      }
      .click-content {
        cursor: pointer;
      }
    }
    .apply-content-item {
      height: auto;
      padding: 24px 0;
      .title {
        margin-bottom: 9px;
      }
    }
  }
  .btn-box {
    text-align: right;
  }
}
</style>
