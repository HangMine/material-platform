<template>
  <Header></Header>

  <div class="news">
    <sd-breadcrumb></sd-breadcrumb>
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
          <p class="title">{{ menuList[currentIndex]["title"] }}</p>
          <p class="clear-btn" @click="handleDelete()">
            <i class="iconfont i-r-qingli-242x" />
            <span>{{ $t("news.clean_news") }}</span>
          </p>
        </div>
        <div class="list-content" v-loading="loading">
          <div class="item-box" v-if="tableList.length > 0">
            <div class="item" v-for="(item, index) in tableList" :key="index">
              <p class="title">{{ item["title"] }}</p>

              <p v-if="item['noticeType'] !== 1" class="content">{{ item["noticeContent"] }}</p>
              <p v-if="item['noticeType'] === 1" class="content">{{ $t("news.recommended_material") }}</p>
              <p
                class="check"
                v-if="
                  !(
                    item['noticeType'] === 5 ||
                    (item['noticeType'] === 4 &&
                      (item['noticeContent'].indexOf('您已成功取消') > -1 ||
                        item['noticeContent'] === '取消样品申请失败，商家已处理您的样品申请！'))
                  )
                "
                @click="openDetail(item)"
              >
                <span>{{ $t("see") }}<i class="iconfont i-r-you-12" /></span>
              </p>
            </div>
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

          <BlockError
            class="empty-page"
            v-else
            :error="{ message: $t('empty-page-tip.no_news'), code: 'no-news' }"
          ></BlockError>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted, computed,
} from '@vue/runtime-core';
import { dialog } from '@/utils/vue/dialog';
import {
  getNoticeList, noticeItem, deleteNoticeAll, deleteNoticeByType,
} from '@/api/applyRecord';
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import BlockError from '@/components/error/BlockError.vue';
import { t } from '@/i18n/index';
import Header from '../components/Header/index.vue';
import NewsDetail from './components/newsDetails.vue';


export default defineComponent({
  name: '',
  breadCrumb: [{
    path: '/news',
    title: t('header.news'),
  }],
  components: { Header, BlockError },
  props: {},
  setup() {
    const menuList = computed(() => {
      return [
        { title: t('news.all') },
        { title: t('news.share_notice') },
        { title: t('news.account_examine') },
        { title: t('news.material_update') },
        // { title: t('news.cooperation_info') },
        { title: t('news.sample_apply_info') },
        { title: '名片交换信息' },
        { title: '品牌推荐会通知信息' },
      ];
    });
    const router = useRouter();
    const state = reactive({
      loading: false,
      pages: {
        page: 1, size: 10, total: 0,
      },
      currentIndex: 0,
      tableList: [] as noticeItem[],

    });
    const getList = async () => {
      state.loading = true;

      const params = {
        keywords: '',
        page: state.pages.page,
        size: state.pages.size,
        fields: state.currentIndex === 0 ? {} : { noticeType: state.currentIndex },
      };
      const res = await getNoticeList(params);
      state.pages.total = parseInt(res.total, 10);
      const { records } = res;

      state.tableList = records;
      state.loading = false;
    };
    onMounted(async () => {
      await getList();
    });
    const openDetail = async (item: noticeItem) => {
      if (item.noticeType === 1) {
        router.push(`/share?shareLinkType=${item.noticeContent === '1' ? 'material' : 'folderShare'}&shareId=${item.noticeRelatedId}`);
        // `分享链接：${window.location.host}/share?shareId=${shareId}${code ? `\n访问密码：${code}` : ''}`;
      } else {
        await dialog({
          is: NewsDetail,
          props: {
            detailId: item.id,

          },
        });
      }

      console.log(item);
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
    const handleDelete = async () => {
      if (state.currentIndex === 0) {
        await deleteNoticeAll();
      } else {
        await deleteNoticeByType(state.currentIndex);
      }

      ElMessage.success(t('delete_success'));
      state.pages.page = 1;
      await getList();
    };
    return {
      ...toRefs(state), menuList, changeTab, handleCurrentChange, handleDelete, openDetail,
    };
  },
});
</script>
<style lang="scss" scoped>
.news {
  width: 1200px;
  height: calc(100vh - 153px);

  margin: 0 auto 20px;
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
        .clear-btn {
          color: #666;
          cursor: pointer;
          span {
            margin-left: 8px;
          }
        }
      }
      .list-content {
        margin: 0 40px 0 20px;
        height: calc(100% - 45px);
        overflow: auto;
        position: relative;
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
            font-size: 16px;
            font-weight: 600;
          }
          .content {
            font-size: 12px;
            color: #999;
            margin-top: 8px;
          }
          .check {
            font-size: 12px;
            color: #2878ff;
            margin-top: 8px;
            cursor: pointer;
            span {
              position: relative;
            }
            .iconfont {
              position: absolute;
              bottom: 2px;
              font-size: 7px;
            }
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
        .empty-page {
          margin-top: 20%;
        }
      }
    }
  }
}
</style>
