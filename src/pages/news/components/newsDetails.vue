<template>
  <div class="news-details">
    <p class="title">{{ detailInfo["title"] }}</p>
    <div v-if="detailInfo['noticeType'] === 4" class="sample-content">
      <div class="notice-title">{{ detailInfo["noticeContent"] }}</div>
      <div class="notice-content">{{ detailInfo["noticeDetail"] && detailInfo["noticeDetail"][0].content }}</div>
    </div>
    <div v-if="detailInfo['noticeType'] === 3" class="sample-content">
      <p class="notice-title">{{ $t("news.material_name") }}</p>
      <p class="notice-content material-name">{{ detailInfo["noticeRelatedId"] }}</p>
      <p class="notice-title">{{ $t("news.material_has_change") }}</p>
      <p class="notice-content material-list" v-for="(logItem, i) in modifyLog" :key="i">{{ logItem }}</p>
    </div>
    <div v-if="detailInfo['noticeType'] === 2" class="account-change">
      <div class="item">
        <p class="account-title">{{ $t("news.approve_result") }}</p>
        <p class="content">{{ detailInfo["noticeContent"] }}</p>
      </div>
      <div class="item flex-space-between">
        <p class="account-title">{{ $t("news.apply_time") }}</p>
        <p class="content">{{ detailInfo["createTime"] }}</p>
      </div>
      <div class="item flex-space-between">
        <p class="account-title">{{ $t("news.apply_status") }}</p>
        <p class="content">{{ $t("application_list.through") }}</p>
      </div>
    </div>
    <div v-if="detailInfo['noticeType'] === 6" class="account-change">
      <div class="item">
        <p class="account-title">推荐会名称</p>
        <p class="content">{{ detailInfo["noticeContent"] }}</p>
      </div>
      <div class="item flex-space-between">
        <p class="account-title">起止时间</p>
        <p class="content">{{ detailInfo["createTime"] }}</p>
      </div>
      <div class="item flex-space-between">
        <p class="account-title">材料数量</p>
        <p class="content">{{ $t("application_list.through") }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted,
} from '@vue/runtime-core';
import { getNoticeDetail, noticeItem } from '@/api/applyRecord';
import dayjs from 'dayjs';
import { getEditFormKeyMap, getnewsData } from '@/pages/components/material/components/MaterialForm/utils';

const modifyTypeTextMap = {
  UPDATE: '修改',
  INSERT: '补充',
  DELETE: '删除',
};
type modifyTypeText = 'UPDATE' | 'INSERT' | 'DELETE';
export default defineComponent({
  name: '',
  components: {},
  props: {
    detailId: {
      type: String,
    },

  },
  dialogify: {
    props: {
      title: '',
      width: '370px',
      closeOnClickModal: false,
    },
  },
  setup(props) {
    const state = reactive({
      detailInfo: {} as noticeItem,
      modifyLog: [] as Object[],
    });
    const getDetail = async () => {
      console.log(8888);
      const res = await getNoticeDetail(props.detailId);
      res.createTime = res.gmtCreateTime && dayjs(res.gmtCreateTime).format('YYYY/MM/DD');
      // res.createTime = res.gmtCreateTime && res.gmtCreateTime.substr(0, 10);
      state.detailInfo = res;
      if (res.noticeType === 3) {
        state.modifyLog = Object.entries(JSON.parse(res.noticeDetail[0].content)).map(([key, val]) => {
          const editFormKeyMap = getnewsData();
          getEditFormKeyMap();

          return `${modifyTypeTextMap[val as modifyTypeText]}了${editFormKeyMap?.[key] ?? ''}`;
        });
      }
    };
    onMounted(async () => {
      await getDetail();
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scoped>
.news-details {
  position: relative;
  .title {
    font-size: 16px;
    position: absolute;
    top: -20px;
  }
  .sample-content {
    .notice-title {
      padding: 24px 0 9px;
      color: #888888;
      font-size: 12px;
    }
    .material-name {
      padding-bottom: 24px;
      border-bottom: 1px solid #eeeeee;
    }
    .material-list {
      line-height: 22px;
    }
  }
  .account-change {
    .item {
      padding: 24px 0;
      border-bottom: 1px solid #eeeeee;
      .account-title {
        color: #888;
        &:first-child {
          margin-bottom: 9px;
        }
      }
    }
  }
}
</style>
