<template>
  <div class="material-search">
    <Filter
      initSearch
      :pageOption="pageOption"
      :params="params"
      :defaultParams="defaultParams"
      :defaultSortType="defaultSortType"
      :categoryId="categoryId"
      @search="search"
      @img-type-change="handleImgTypeChange"
    ></Filter>
    <div v-loading="loading" class="material-list-wrap">
      <MaterialTileList
        class="material-search-list"
        :data="materialList"
        showHeader
        showTitle
        showPrice
        :imgTypeKey="imgTypeKey"
        :emptyOption="{ type: 'search' }"
        v-bind="materialListProps"
      ></MaterialTileList>
    </div>

    <el-pagination
      hide-on-single-page
      class="material-search-pageination"
      layout="prev, pager, next"
      :page-size="pageOption.size"
      :total="pageOption.total"
      :current-page="pageOption.page"
      @current-change="handleCurrentPageChange"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">

import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import * as materialApi from '@/api/material';
import { MaterialList } from '@/models/Material';
import onCreated from '@/utils/vue/onCreated';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import usePage from '../usePage';
import Filter, { ImgTypeKey } from './components/Filter.vue';


export default defineComponent({
  name: 'material-search',
  components: { Filter, MaterialTileList },
  props: {
    params: {
      type: Object,
      default: () => ({}),
    },
    defaultSortType: {
      type: String as PropType<'1' | '2' | '3'>,
    },
    categoryId: {
      type: String,
    },
    fetchFn: {
      type: Function as PropType<typeof materialApi.fetchMarketMaterialList>,
    },
    defaultParams: {
      type: Object,
    },
    materialListProps: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      imgTypeKey: 'imgUrl_crease_v2',
      materialList: [] as MaterialList,
      currentParams: {},
    });
    const handleImgTypeChange = (imgTypeKey: ImgTypeKey) => {
      state.imgTypeKey = imgTypeKey;
    };

    const { pageFetch, pageOption } = usePage(props.fetchFn || materialApi.fetchMarketMaterialList);

    const fetchMaterialList = async () => {
      try {
        state.loading = true;
        state.materialList = await pageFetch({
          keywords: '',
          fields: {},
          ...state.currentParams,
          ...props.params, // props.params覆盖state.currentParams
        });
      } finally {
        state.loading = false;
      }
    };
    const handleCurrentPageChange = async (page: number) => {
      pageOption.value.page = page;
      await fetchMaterialList();
    };
    const search = async (params: Obj) => {
      pageOption.value.page = params.page;
      state.currentParams = { ...state.currentParams, ...params, fields: { ...state.currentParams.fields, ...params.fields } }; // 浅合并就好,外部可能
      await fetchMaterialList();
    };
    // 初始加载通过filter组件触发search,因为需要初始设置fields参数
    // onCreated(async () => {
    //   await fetchMaterialList();
    // });
    return {
      ...toRefs(state), handleImgTypeChange, search, handleCurrentPageChange, pageOption,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.material-search {
  .material-search-filter {
    margin-top: 20px;
  }
  .material-search-list {
    margin-top: 20px;
  }
  .material-search-pageination {
    padding: 16px 0 32px 0;
  }
}
</style>
