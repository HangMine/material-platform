<template>
  <Header></Header>
  <div class="apply-record-buyer">
    <div class="main flex">
      <div class="left-menu">
        <div
          :class="['menu-item', currentIndex === index ? 'active-style' : '']"
          @click="changeTab(index)"
          v-for="(item, index) in menuList"
          :key="index"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="right-content">
        <div class="top-title-box flex-space-between">
          <p class="title">
            {{ menuList[currentIndex]["title"] }}
          </p>
        </div>
        <div class="list-content" v-loading="loading">
          <div class="item-box" v-if="tableList.length > 0">
            <div class="item" v-for="(item, index) in tableList" :key="index">
              <p class="title flex-space-between">
                <span @click="openComponyDialog(item)">{{ item["applicantName"] }}</span>
                <span @click="openDetail(item)">{{ $t("see") }}<i class="iconfont i-r-you-12" /></span>
              </p>

              <p class="content">{{ item["applyCon"] }}</p>
              <p
                class="approve-result"
                :style="{
                  color:
                    item.approvalStatusText === '待审核'
                      ? '#2878FF'
                      : item.approvalStatusText === '已通过'
                      ? '#32CC72'
                      : '#999999',
                }"
              >
                {{ item["approvalStatusText"] }}
              </p>
            </div>
          </div>
          <BlockError
            class="apply-record-buyer-blockerror"
            v-else
            :error="{ message: $t('empty-page-tip.no_application'), code: 'no-records' }"
          ></BlockError>
          <div class="pagination">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page="pages.page || 1"
              :page-size="pages.size"
              layout="total, prev, pager, next, jumper"
              :total="pages.total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, onMounted, toRefs,
} from '@vue/runtime-core';
import { dialog } from '@/utils/vue/dialog';
import {
  applyReceiveOrLaunch, ApplyItem,
} from '@/api/applyRecord';
import { useRouter } from 'vue-router';
import BusinessDetails from '@/pages/main/applyRecord/components/dialog/businessDetails.vue';
import BlockError from '@/components/error/BlockError.vue';
import { t } from '@/i18n/index';
import Header from '../components/Header/index.vue';
import ApplyRecordDetail from './components/ApplyRecordDetail.vue';


export default defineComponent({

  name: '',
  props: {},
  components: { Header, BlockError },
  setup() {
    const menuList = [{ title: t('menu-management.sample_application') }];
    const router = useRouter();
    const state = reactive({
      loading: false,
      pages: {
        page: 1, size: 10, total: 0,
      },
      currentIndex: 0,
      tableList: [] as ApplyItem[],

    });
    const getList = async () => {
      state.loading = true;

      const params = {
        receiveOrlaunch: 'send',
        keywords: '',
        page: state.pages.page,
        size: state.pages.size,
        fields: {
          applyType: state.currentIndex === 0 ? 2 : 1, approvalStatus: [],
        },
      };
      const res = await applyReceiveOrLaunch(params);
      state.pages.total = parseInt(res.total, 10);
      const { records } = res;

      state.tableList = records;
      state.loading = false;
    };
    onMounted(async () => {
      await getList();
    });
    const openComponyDialog = async (row: ApplyItem) => {
      await dialog({
        is: BusinessDetails,
        props: {
          supplierId: row.orgId,
        },
      });
    };
    const openDetail = async (item: ApplyItem) => {
      await dialog({
        is: ApplyRecordDetail,
        props: {
          detailForm: item,
          applyType: state.currentIndex === 0 ? '样品申请' : '合作申请',
          isReceived: false,

        },
      }, {
        props: {
          title: state.currentIndex === 0 ? t('menu-management.sample_application') : t('menu-management.cooperation_application'),
        },
      });
      await getList();
    };
    const changeTab = async (index: number) => {
      state.pages.page = 1;
      state.currentIndex = index;
      await getList();
    };
    const handleCurrentChange = async (value: number) => {
      console.log(value, 'value');
      state.pages.page = value || 1;
      await getList();
    };

    return {
      ...toRefs(state), menuList, changeTab, handleCurrentChange, openComponyDialog, openDetail,
    };
  },
});
</script>
<style lang="scss" scoped>
.apply-record-buyer {
  width: 1200px;
  height: calc(100vh - 105px);

  margin: 20px auto 20px;
  .main {
    height: 100%;

    background: #fff;
    box-shadow: 0 5px 10px 0 rgba(54, 74, 107, 0.1);
    .left-menu {
      padding: 18px 0 40px 30px;

      width: 182px;
      border-right: 1px solid #ddd;
      background: #fafbfc;
      .menu-item {
        cursor: pointer;
        margin-bottom: 20px;
        color: #666;
      }
      .active-style {
        color: #06c1b5;
        border-right: 4px solid #14ccb0;
      }
    }
    .right-content {
      width: 100%;
      .top-title-box {
        height: 45px;
        line-height: 45px;
        padding: 0 16px 0 20px;
        border-bottom: 1px solid #ddd;
        .title {
          font-size: 16px;
        }
      }
      .list-content {
        margin: 0 40px 0 20px;
        height: calc(100% - 45px);
        overflow: auto;
        position: relative;
        .apply-record-buyer-blockerror {
          margin-top: 22%;
        }
        .empty {
          text-align: center;
          margin-top: 40px;
        }
        .item-box {
          margin-bottom: 63px;
        }
        .item {
          padding: 12px 0 9px 0;
          border-bottom: 1px solid #ddd;
          .title {
            span {
              &:first-child {
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
              }
              &:nth-child(2) {
                font-size: 12px;
                color: #999999;
                cursor: pointer;
              }
              .iconfont {
                font-size: 12px;
              }
            }
          }
          .content {
            line-height: 18px;
            font-size: 12px;
            color: #999;
            margin: 10px 0;
          }
          .approve-result {
            font-size: 12px;
          }
        }
        .pagination {
          height: 64px;
          // line-height: 64px;

          width: 1018px;
          text-align: center;
          background: #fff;
          position: fixed;
          bottom: 20px;
          border-top: 1px solid #dddddd;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /deep/ .el-pagination {
          // line-height: 64px !important;
        }
      }
    }
  }
}
</style>
