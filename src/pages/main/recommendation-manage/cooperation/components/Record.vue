<template>
  <div class="cooperation-record" v-loading="loading">
    <h4 class="title">{{ $t("recommendation.cooperation.record.brand-response-content") }}</h4>
    <EmptyWrap :data="recordList">
      <ul class="record-ul scrollable-y">
        <li class="record-li" v-for="(record, i) of recordList" :key="i">
          <div class="date">{{ dayjs(record.gmtModifyTime).format("YYYY-MM-DD") }}</div>
          <div class="content">{{ record.messageContent }}</div>
        </li>
      </ul>
    </EmptyWrap>

    <!-- <div class="footer flex-sapce-between">
      <div class="dialog-buttons">
        <el-button type="primary" @click="cancel">{{ $t("close") }}</el-button>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { CommunicateListItem, CooperationListItem, fetchCommunicateList } from '@/api/recommendation';
import onCreated from '@/utils/vue/onCreated';
import i18n from '@/i18n';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import dayjs from 'dayjs';
import EmptyWrap from '@/components/error/EmptyWrap.vue';


export default defineComponent({
  name: 'cooperation-record',
  dialogify: {
    props: {
      title: i18n.t('recommendation.cooperation.btns.record'),
      width: '516px',
    },
  },
  components: { EmptyWrap },
  props: {
    item: {
      type: Object as PropType<CooperationListItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      recordList: [] as CommunicateListItem[],
    });
    const setRecordList = async () => {
      try {
        state.loading = true;
        state.recordList = (await fetchCommunicateList(props.item.id));
      } finally {
        state.loading = false;
      }
    };
    const cancel = () => {
      emit('cancel');
    };
    onCreated(async () => {
      await setRecordList();
    });
    return {
      ...toRefs(state), dayjs, cancel,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.cooperation-record {
  .title {
    color: #222222;
    line-height: 20px;
  }
  .record-ul {
    max-height: 60vh;
    .record-li {
      .date {
        color: #999999;
        line-height: 17px;
        font-size: 12px;
        padding-top: 16px;
      }
      .content {
        font-weight: 400;
        color: #222222;
        line-height: 20px;
        padding-bottom: 10px;
      }
      + .record-li {
        border-top: 1px solid #dddddd;
      }
    }
  }
  .footer {
    padding-top: 10px;
    .dialog-buttons {
      text-align: right;
    }
  }
}
</style>
