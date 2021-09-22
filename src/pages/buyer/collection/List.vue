<template>
  <div class="buyer-collection-list">
    <ImageTypeSearchBar v-model="imgTypeKey" @search="search">
      <sd-breadcrumb
        :data="breadcrumbData"
        backPath="/buyer/collection/folders?activeName='materialBookCollect'"
      ></sd-breadcrumb>
    </ImageTypeSearchBar>
    <div v-loading="loading" class="material-list-container">
      <MaterialTileList
        class="material-search-list"
        :data="materialList"
        showHeader
        showTitle
        showPrice
        :showSupplier="false"
        :imgTypeKey="imgTypeKey"
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
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import ImageTypeSearchBar from '@/pages/components/material/components/ImageTypeSearchBar.vue';
import { ImgTypeKey } from '@/pages/components/material/search/components/Filter.vue';
import { collectFolderItem } from '@/api/material';
import { MaterialList } from '@/models/Material';
import {
  fetchMaterialBookList,
} from '@/api/materialMenu';
import usePage from '@/pages/components/material/usePage';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import onCreated from '@/utils/vue/onCreated';
import { t } from '@/i18n/index';

export default defineComponent({
  name: 'buyer-collection-list',
  components: { ImageTypeSearchBar, MaterialTileList },
  props: {
    folderName: {
      type: String,
      required: true,
    },
    folderId: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      imgTypeKey: 'imgUrl_crease_v2' as ImgTypeKey,
      keywords: '',
      breadcrumbData: [
        {
          path: '/buyer/collection/folders?activeName="materialBookCollect"',
          title: t('folder.material_book'),
        }, {
          path: '',
          title: props.folderName,
        },
      ],
      materialList: [] as MaterialList,
    });

    const { pageFetch, pageOption } = usePage(fetchMaterialBookList);

    const fetchMaterialList = async () => {
      try {
        state.loading = true;
        state.materialList = (await pageFetch({
          fields: { id: props.folderId },
          keywords: state.keywords,
        }));
      } finally {
        state.loading = false;
      }
    };

    const handleCurrentPageChange = async (page: number) => {
      pageOption.value.page = page;
      await fetchMaterialList();
    };

    const search = async (keywords: '') => {
      state.keywords = keywords;
      await fetchMaterialList();
    };
    onCreated(async () => {
      await fetchMaterialList();
    });
    return {
      ...toRefs(state), search, handleCurrentPageChange, pageOption,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.buyer-collection-list {
  .img-type-search-bar {
    background: transparent;
    .sd-breadcrumb {
      margin-bottom: 0;

      /deep/.el-breadcrumb__item {
        .el-breadcrumb__inner {
          color: #999999 !important;
        }
        &:last-child {
          .el-breadcrumb__inner {
            color: #222 !important;
          }
        }
      }
    }
  }
  .material-list-container {
    @include layout-elastic-center-container();

    margin-top: 20px;
  }
}
</style>
