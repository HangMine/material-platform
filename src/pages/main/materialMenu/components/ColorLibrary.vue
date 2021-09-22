<template>
  <div class="color-library">
    <TopNav
      :headLine="headLine || $t('folder.color_card_book')"
      :subHead="colorBookName"
      v-if="hasTopNav"
      :topNavProps="topNavProps"
    >
      <RightSearch type="colorLibrary" @inputChange="inputChange" @selectChange="selectChange"></RightSearch>
    </TopNav>
    <div class="wrap" v-loading="loading">
      <template v-if="colorList.length > 0">
        <SdGrid :data="colorList" :minWidth="193" :gap="8">
          <template #default="{ item }">
            <ColorLibraryList
              @refreshList="refreshList"
              :fatherId="detailId"
              :colorItem="item"
              :noBtn="noBtn"
              type="colorLibraryDetail"
            ></ColorLibraryList>
          </template>
        </SdGrid>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pages.page || 1"
          :page-size="pages.size"
          layout="total, prev, pager, next, jumper"
          :total="pages.total"
        >
        </el-pagination>
      </template>
      <!-- <CordWrap size="medium" v-if="colorList.length > 0">
        <ColorLibraryList
          @refreshList="refreshList"
          :fatherId="detailId"
          v-for="(item, index) in colorList"
          :key="index"
          :colorItem="item"
          :noBtn="noBtn"
          type="colorLibraryDetail"
        ></ColorLibraryList>
        <div class="pagination"></div>
      </CordWrap> -->
      <template v-else-if="colorList.length === 0 && isSearch">
        <BlockError :error="{ message: $t('empty-page-tip.no_search_result'), code: '' }"></BlockError>
      </template>
      <template v-else>
        <BlockError :error="{ message: $t('empty-page-tip.no_color'), code: '404' }"></BlockError>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, onMounted, reactive, toRefs, watch,
} from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router';
import {
  fetchColorList, ColorLibraryItem,
} from '@/api/materialMenu';
import BlockError from '@/components/error/BlockError.vue';
import SdGrid from '@/components/grid/index.vue';
import RightSearch from './RightSearch.vue';
import TopNav from './TopNav.vue';
import ColorLibraryList from './ColorLibraryList.vue';
// import CordWrap from './ColorWrap.vue';

export default defineComponent({
  name: '',
  components: {
    RightSearch,
    // CordWrap,
    SdGrid,
    ColorLibraryList,
    TopNav,
    BlockError,
  },
  props: {
    detailId: {
      type: String,
      required: true,
    },
    noBtn: {
      type: Boolean,
      default: false,
    },
    colorBookName: {
      type: String,
      required: false,
    },
    headLine: {
      type: String,
      required: false,
    },
    hasTopNav: {
      type: Boolean,
      default: true,
    },
    topNavProps: {
      type: Object,
    },
    keywords: {
      type: String,
    },
  },
  setup(props) {
    const router = useRouter();

    const state = reactive({
      isSearch: false,
      pages: {
        page: 1, size: 42, total: 0,
      },
      keywords: '',
      loading: false,
      colorList: [] as ColorLibraryItem[],
      colorFamily: '',
    });

    const getList = async () => {
      state.loading = true;

      const params = {

        keywords: state.keywords || props.keywords,
        page: state.pages.page,
        size: state.pages.size,

        fields: {
          id: props.detailId as string,
          colorFamily: state.colorFamily,
        },
      };
      const res = await fetchColorList(params);
      state.pages.total = parseInt(res.total, 10);

      // state.pages.total = res.total;
      const { records } = res;
      state.colorList = records;
      state.loading = false;
    };
    const inputChange = async (value: string) => {
      state.isSearch = true;
      state.keywords = value;
      state.pages.page = 1;
      await getList();
    };
    const selectChange = async (value: string) => {
      state.isSearch = true;

      console.log(value, 'selectChange');
      state.colorFamily = value;
      state.pages.page = 1;
      await getList();
    };
    const goBack = () => {
      router.go(-1);
    };
    const refreshList = async () => {
      state.pages.page = 1;
      await getList();
    };
    const handleCurrentChange = async (value: number) => {
      console.log(value, 'value');
      state.pages.page = value || 1;
      await getList();
    };
    watch(() => props.keywords, async (val, oldVal) => {
      if (val !== oldVal) {
        await getList();
      }
    });
    onMounted(async () => {
      await getList();
    });
    return {
      ...toRefs(state), inputChange, goBack, handleCurrentChange, selectChange, refreshList,
    };
  },


});
</script>
<style lang='scss' scoped>
.color-library {
  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    line-height: 52px;
    background: #fff;
    padding: 0 20px 0 12px;
    border-bottom: 1px solid #eee;
    .left-title {
      cursor: pointer;
      span {
        padding: 0 8px;
      }
      .color-book {
        border-left: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
      }
      .color-book {
        color: #999999;
      }
      .color-book-name {
        color: #00b8b1;
      }
      .iconfont {
        font-size: 10px;
      }
    }
  }
  .wrap {
    background: #fff;
    padding: 20px;
    position: relative;
    .pagination {
      height: 64px;
      // line-height: 64px;

      width: 100%;
      text-align: center;
      background: #fff;
      bottom: 0;
      border-top: 1px solid #dddddd;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
