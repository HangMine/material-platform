<template>
  <div class="search-base">
    <el-tabs v-if="!header.tab" v-model="tab" @tab-click="handleTabChange">
      <el-tab-pane v-for="{ id, name } of tabList" :key="id" :label="name" :name="id"> </el-tab-pane>
    </el-tabs>
    <MaterialSearch
      v-show="isShowMaterial"
      :params="searchParams"
      :defaultSortType="defaultSortType"
      :categoryId="categoryId"
      ref="materialSearchVm"
    ></MaterialSearch>
    <MerchantList
      v-show="isShowMerchant"
      type="list"
      :data="merchantList"
      :emptyOption="{ type: 'search' }"
      v-loading="loading"
    ></MerchantList>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch, PropType,
} from 'vue';
import MaterialSearch from '@/pages/components/material/search/index.vue';
import MerchantList from '@/pages/components/merchant/components/List/index.vue';
import { MerchantList as MerchantListType } from '@/models/Merchant';

import { fetchMerchantInfo } from '@/api/merchant';
import useHeader from '../components/Header/components/useHeader';

export default defineComponent({
  name: 'search-base',
  components: { MaterialSearch, MerchantList },
  props: {
    defaultSortType: {
      type: String as PropType<'1' | '2' | '3'>,
    },
    categoryId: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const materialSearchVm = ref<InstanceType<typeof MaterialSearch>>();
    const header = useHeader();
    const state = reactive({
      tab: '材料',
      tabList: [{
        id: '材料',
        name: '材料',
      }, {
        id: '商家',
        name: '商家',
      }],
      merchantList: [] as MerchantListType,
      loading: false,
      isFetchedMerchantList: false, // 已经拉过商家列表的标识
      searchParams: {
        keywords: header.keywords,
      },
    });
    const isShowMaterial = computed(() => {
      return header.tab || state.tab === '材料';
    });
    const isShowMerchant = computed(() => {
      return !header.tab && state.tab === '商家';
    });
    const setMerchantList = async () => {
      try {
        state.loading = true;
        state.merchantList = (await fetchMerchantInfo({ keywords: header.keywords, fields: {} }));
      } finally {
        state.loading = false;
      }
    };
    const fetchBaseTab = async () => {
      if (isShowMaterial.value) {
        await materialSearchVm.value?.search({ page: 1, fields: { categoryId: [props.categoryId].filter(Boolean) } });
      } else if (isShowMerchant.value) {
        if (!state.isFetchedMerchantList) {
          await setMerchantList();
          state.isFetchedMerchantList = true;
        }
      }
    };
    watch(() => header.keywords, async (value) => {
      if (header.tab !== '材料库') return;
      state.searchParams.keywords = header.keywords;
      state.isFetchedMerchantList = false;
      await fetchBaseTab();
    });
    watch(() => header.tab, async (value) => {
      if (!value || value === '颜色库') return;
      await fetchBaseTab();
    });


    const handleTabChange = async () => {
      if (state.tab === '商家') {
        await fetchBaseTab();
      }
    };
    return {
      ...toRefs(state), isShowMaterial, isShowMerchant, materialSearchVm, header, handleTabChange,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.search-base {
  @include layout-elastic-center-container();

  .el-tabs {
    margin-top: 10px;
  }
}
</style>
