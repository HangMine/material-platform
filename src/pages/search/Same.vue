<template>
  <div class="search-same">
    <div class="header">
      <div class="search-img-wrap">
        <base-image :src="searchImgSrc" />
      </div>
      <over-text>
        {{ searchImgName }}
      </over-text>
    </div>
    <div v-loading="loading" class="material-list-wrap">
      <MaterialTileList
        class="material-search-list"
        :data="searchMaterialList"
        showHeader
        showTitle
        showPrice
        :emptyOption="{
          type: 'search',
          message: '暂无识图结果',
        }"
      ></MaterialTileList>
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
  </div>
</template>

<script lang="ts">
import { fetchMaterial, MaterialListByImage } from '@/api/material';
import { MaterialDetail, MaterialList } from '@/models/Material';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, onMounted, onUnmounted, watch,
} from 'vue';
import * as materialApi from '@/api/material';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import usePage from '@/pages/components/material/usePage';
import useHeader from '../components/Header/components/useHeader';
import { getMaterialImg } from '../components/material/utils';

export default defineComponent({
  name: 'search-same',
  components: { MaterialTileList },
  props: {},
  setup(props, { emit }) {
    const header = useHeader();
    const state = reactive({
      searchMaterialListWithAll: [] as MaterialList,
      searchMaterialList: [] as MaterialList,
      loading: false,
      pageOption: {
        page: 1, size: 20, total: 0,
      },
    });
    const searchImgSrc = computed(() => {
      if (header.searchImageFile) {
        return URL.createObjectURL(header.searchImageFile);
      }
      return '';
    });
    const searchImgName = computed(() => {
      if (header.searchImageFile) {
        return header.searchImageFile.name;
      }
      return '';
    });

    const getSliceList = (list: any[]) => {
      const { page, size } = state.pageOption;
      const start = (page - 1) * size;
      const end = page * size;
      return list.slice(start, end);
    };


    const fetchSearchMaterialList = async () => {
      if (!header.searchImageFile) return;
      try {
        state.loading = true;
        const searchMaterialListWithAll = await materialApi.searchByImage(header.searchImageFile);
        state.searchMaterialListWithAll = searchMaterialListWithAll;
        state.pageOption.total = searchMaterialListWithAll.length;
        state.pageOption.page = 1;
        state.searchMaterialList = getSliceList(searchMaterialListWithAll);
      } finally {
        state.loading = false;
      }
    };

    const handleCurrentPageChange = async (page: number) => {
      state.pageOption.page = page;
      state.searchMaterialList = getSliceList(state.searchMaterialListWithAll);
    };

    watch(() => header.searchImageFile, async () => {
      await fetchSearchMaterialList();
    }, { immediate: true });


    onUnmounted(() => {
      header.searchImageFile = undefined;
    });
    return {
      ...toRefs(state), header, searchImgSrc, searchImgName, handleCurrentPageChange,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.search-same {
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: flex-end;
    margin-top: 25px;
    .search-img-wrap {
      flex-shrink: 0;
      width: 120px;
      height: 120px;
      background-image: url("~@/assets/img/search/shitu-bg.png");
      background-size: contain;
      background-repeat: no-repeat;
      padding: 2px;
      margin-right: 10px;
      > .el-image {
        border-radius: 0;
      }
    }
    .search-img-text {
      padding-right: 10px;
      width: 250px;
    }
  }
  .material-list-wrap {
    margin-top: 35px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .material-search-pageination {
    padding: 16px 0 32px 0;
  }
}
</style>
