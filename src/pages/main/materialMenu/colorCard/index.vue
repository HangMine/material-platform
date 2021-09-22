<template>
  <div class="color-card flex-column">
    <div class="top-nav">
      <div class="left-title">
        <el-tabs v-model="activeName" @tab-click="handleChangeTab">
          <el-tab-pane :label="$t('folder.color_card_book')" name="colorBook"></el-tab-pane>
          <!-- <el-tab-pane label="coloro颜色库" name="colorLibrary"></el-tab-pane> -->
          <el-tab-pane :label="$t('folder.coloro_color_library')" name="coloroGradient"></el-tab-pane>
          <el-tab-pane :label="$t('folder.pantone_color_library')" name="pantoneLibrary"></el-tab-pane>
        </el-tabs>
      </div>
      <RightSearch
        v-if="['colorBook', 'pantoneLibrary'].includes(activeName)"
        :type="activeName"
        :keywords="keywords"
        @refreshList="refreshList"
        @selectChange="selectChange"
        @inputChange="inputChange"
      ></RightSearch>
    </div>
    <div
      class="wrap flex-column"
      v-loading="loading"
      :style="{ flex: activeName === 'coloroGradient' ? '1' : 'inherit' }"
    >
      <ColorCardFolder
        ref="colorMainRef"
        receiveType="ColorCard"
        v-if="activeName === 'colorBook'"
        @addFolder="addFolder"
        @toDetail="toDetail"
        @refreshList="refreshList"
        :tableList="tableList"
      ></ColorCardFolder>

      <ColoroGradient style="padding: 20px" v-else-if="activeName === 'coloroGradient'"></ColoroGradient>
      <PantoneLibrary
        ref="colorMainRef"
        style="padding: 20px"
        v-else-if="activeName === 'pantoneLibrary'"
        :searchParams="searchParams"
      ></PantoneLibrary>

      <!-- <CordWrap class="flex-1" size="medium" v-if="activeName === 'colorLibrary'">
        <ColorLibraryList
          v-for="(item, index) in colorList"
          :key="index"
          :colorItem="item"
          type="colorLibrary"
        ></ColorLibraryList>
      </CordWrap> -->
      <!-- <div class="pagination" v-if="activeName === 'colorLibrary' && colorList.length > 0">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pages.page || 1"
          :page-size="pages.size"
          layout="total, prev, pager, next, jumper"
          :total="pages.total"
        >
        </el-pagination>
      </div> -->
      <template v-if="['colorBook', 'pantoneLibrary'].includes(activeName) && tableList.length === 0">
        <BlockError v-if="isSearch" :error="{ message: $t('empty-page-tip.no_search_result'), code: '' }"></BlockError>
        <BlockError
          v-else
          :error="{
            message: `${tableList.length === 0 ? $t('empty-page-tip.尚未创建色卡本，创建一个吧') : ''}`,
            code: '404',
          }"
        ></BlockError>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, toRefs, reactive, onMounted, ref,
} from '@vue/runtime-core';
import BlockError from '@/components/error/BlockError.vue';

import { useRouter } from 'vue-router';
import {
  fetchColorCard, ColorCardItem, ColorLibraryItem, fetchColorLibrary, fetchColorList,
} from '@/api/materialMenu';
import delay from '_/delay';
import { confirm, dialog } from '@/utils/vue/dialog';
import AddFolder from '@/pages/components/FolderList/components/AddFolder.vue';
import ColoroGradient from '@/pages/components/color/coloroGradient/index.vue';
import PantoneLibrary from '@/pages/components/color/pantoneLibrary/index.vue';
import ColorCardFolder from '@/pages/components/FolderList/components/ColorCardFolder.vue';
import { nextTick } from 'vue';
import RightSearch from '../components/RightSearch.vue';
// import ColorLibraryList from '../components/ColorLibraryList.vue';
// import CordWrap from '../components/ColorWrap.vue';

interface tableListType extends ColorCardItem {
  colorList?: ColorLibraryItem[]

}
export default defineComponent({
  name: '',
  components: {
    RightSearch,
    // ColorLibraryList,
    // CordWrap,

    BlockError,
    ColoroGradient,
    ColorCardFolder,

    PantoneLibrary,
  },
  props: {},
  setup(props, { emit }) {
    const colorMainRef = ref<InstanceType<typeof ColorCardFolder | typeof PantoneLibrary>>();
    const router = useRouter();
    const state = reactive({
      isSearch: false,
      pages: {
        page: 1, size: 48, total: 0,
      },
      searchParams: {
        keywords: '',
        fields: {
          colorFamily: '',
        },
      },
      keywords: '',
      // colorPage: 1, // coloro搜索对应page数据专用字段
      colorFamily: '',
      loading: false,
      activeName: 'colorBook',
      tableList: [] as tableListType[],
      colorList: [] as ColorLibraryItem[],
    });

    const getList = async () => {
      state.loading = true;
      // 我的色卡本
      if (state.activeName === 'colorBook') {
        const res = await fetchColorCard(state.searchParams.keywords);
        const tableList = res;
        tableList.unshift({
          count: 0,
          id: '',
          name: '',
        });
        state.tableList = tableList;
      } else if (state.activeName === 'pantoneLibrary') {
        const _fn = (colorMainRef.value as InstanceType<typeof PantoneLibrary>)?.getColorList;
        _fn();
      }
      //  else if (state.activeName === 'colorLibrary') {
      //   // coloro颜色库
      //   const params = {
      //     keywords: state.keywords,
      //     // colorPage: 1,
      //     ...state.pages,
      //     fields: {
      //       colorFamily: state.colorFamily,

      //     },
      //   };
      //   const res = await fetchColorLibrary(params);
      //   // state.pages.total = res.total;
      //   state.pages.total = parseInt(res.total, 10);

      //   const { records } = res;
      //   state.colorList = records;
      // }
      state.loading = false;
    };
    const handleCurrentChange = async (value: number) => {
      console.log(value, 'value');
      state.pages.page = value || 1;
      await getList();
    };
    const inputChange = async (value: string) => {
      state.isSearch = true;
      state.searchParams.keywords = value;
      state.pages.page = 1;
      await getList();
    };
    const selectChange = async (value: string) => {
      state.isSearch = true;
      console.log(value, 'selectChange');
      state.searchParams.fields.colorFamily = value;
      state.pages.page = 1;
      await getList();
    };
    const handleChangeTab = async () => {
      await nextTick(); // 加nextTick确保colorMainRef切换完成再调用getList, 以获取到正确的请求函数
      state.isSearch = false;
      state.searchParams.keywords = '';
      state.searchParams.fields.colorFamily = '';
      state.pages.page = 1;
      await getList();
    };
    const refreshList = async () => {
      state.pages.page = 1;
      await getList();
    };
    const addFolder = async () => {
      await dialog({
        is: AddFolder,
        props: {
          receiveType: 'ColorCard',
        },
      });
      await refreshList();
    };

    const toDetail = async (item: ColorCardItem) => {
      console.log();
      router.push({
        path: './color-library',
        query: {
          colorBookName: item.name,
          detailId: item.id,
        },
      });
    };

    onMounted(async () => {
      await getList();
    });

    return {
      colorMainRef,
      ...toRefs(state),
      inputChange,
      handleChangeTab,
      toDetail,
      refreshList,
      handleCurrentChange,
      selectChange,
      addFolder,
    };
  },
});
</script>
<style lang="scss" scoped>
.color-card {
  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
    height: 52px;
    line-height: 52px;
    background: #fff;
    padding: 0 20px;
    border-bottom: 1px solid #eee;
    .el-tabs__nav-wrap::after {
      height: 0;
    }
    .el-tabs__header {
      margin: 0;
    }
    .el-tabs__nav {
      .el-tabs__item {
        color: #999;
      }
      .is-active {
        color: #00b8b1;
      }
    }
  }
  .wrap {
    background: #fff;
    // padding: 20px;
    // max-height: 808px;
    overflow: auto;
    position: relative;
    flex: 0 1 auto;

    .pagination {
      // position: absolute;
      // height: 64px;
      // line-height: 64px;
      // width: 100%;
      // text-align: center;
      // background: #fff;
      border-top: 1px solid #dddddd;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-pagination {
        margin: 25px 0 5px 0;
      }
    }
  }
}
</style>
