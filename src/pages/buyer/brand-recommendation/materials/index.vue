<template>
  <div class="page-recommendation-materials flex-1 flex-column">
    <ImageTypeSearchBar v-model="imgTypeKey" @search="handleSearch">
      <sd-breadcrumb :data="breadcrumbData" backPath="/buyer/brand-recommendation/list"></sd-breadcrumb>
      <template #appendHandleBtns>
        <CollapseSearchFilter onlyTrigger :handleChange="handleSearch" maskTarget="#maskTarget"></CollapseSearchFilter>
      </template>
    </ImageTypeSearchBar>
    <div id="maskTarget" class="flex-column">
      <div class="content-inner flex-1" v-loading="loading">
        <div class="handle-bar flex-space-between">
          <template v-if="!isBatchHandling">
            <el-button type="text" :disabled="materialList.length === 0" @click="isBatchHandling = true"
              >批量操作</el-button
            >
            <el-button size="mini" @click="exportWithFilter">{{ $t("material-manage.btn.export") }}</el-button>
          </template>
          <template v-else>
            <div class="">
              <el-checkbox v-model="isCheckAll" :indeterminate="isIndeterminate" @change="handleCheckAll"
                ><span class="text-link">全选</span></el-checkbox
              >
              <el-divider direction="vertical"></el-divider>
              <span :class="['text-link', { 'h-disabled': !selectedRowList.length }]" @click="multiPrintQrcode()">{{
                $t("material-manage.btn.print_qrcode")
              }}</span>
              <!-- <el-divider direction="vertical"></el-divider>
            <span :class="['text-link']" @click="exportWithFilter"> {{ $t("material-manage.btn.export") }}</span> -->
            </div>
            <el-button type="primary" size="mini" @click="isBatchHandling = false">退出操作</el-button>
          </template>
        </div>
        <MaterialTileList
          ref="materialTileList"
          class="material-search-list"
          :data="materialList"
          showHeader
          showTitle
          showPrice
          :imgTypeKey="imgTypeKey"
          :checkable="isBatchHandling"
          :dropdownOptions="['print']"
          @selection="handleSelection"
        >
          <template #leftTopTag="{ material }" v-if="!isBatchHandling">
            <PickStateTag
              :class="{ shown: !material.isChoose, 'expand-on-hover': true }"
              v-model:isPick="material.isChoose"
              :material="material"
            ></PickStateTag>
          </template>
        </MaterialTileList>
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
  </div>
</template>

<script lang="ts">
/* eslint-disable max-len */

import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import ImageTypeSearchBar from '@/pages/components/material/components/ImageTypeSearchBar.vue';
import { ImgTypeKey } from '@/pages/components/material/search/components/Filter.vue';
import { collectFolderItem, exportMaterialList } from '@/api/material';
import { MaterialListItem, MaterialList } from '@/models/Material';
import {
  fetchMaterialsFromBrandRecommendation,
  exportMaterialsFromBrandRecommendation,
} from '@/api/recommendation';
import usePage from '@/pages/components/material/usePage';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import onCreated from '@/utils/vue/onCreated';
import { t } from '@/i18n/index';
import CollapseSearchFilter from '@/components/CollapseSearchFilter';
import usePrintMaterial from '@/utils/printMaterial/use-print-material';
import FileSaver from 'file-saver';
import PickStateTag from './components/PickStateTag.vue';


export default defineComponent({
  name: 'page-recommendation-materials',
  components: {
    ImageTypeSearchBar,
    MaterialTileList,
    CollapseSearchFilter,
    PickStateTag,
  },
  props: {
    recommendationName: {
      type: String,
      required: true,
    },
    recommendationId: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      imgTypeKey: 'imgUrl_crease_v2' as ImgTypeKey,
      // keywords: '',
      searchParams: {
        keywords: '',
        parentId: props.recommendationId,
        fields: {
          // categoryId: [],
        },
      },
      breadcrumbData: [
        {
          path: '/buyer/brand-recommendation/list',
          title: '推荐会',
        }, {
          path: '',
          title: props.recommendationName,
        },
      ],
      materialList: [] as MaterialListItem[],
      isBatchHandling: false, // 是否批量操作中
      selectedRowList: [] as MaterialListItem[],
      isCheckAll: false, // 是否全选
      isIndeterminate: false, // 全选框是否半选中
    });
    const materialTileList = ref<InstanceType<typeof MaterialTileList>>();

    const { pageFetch, pageOption } = usePage<typeof fetchMaterialsFromBrandRecommendation>(fetchMaterialsFromBrandRecommendation);

    const fetchMaterialList = async () => {
      try {
        state.loading = true;
        state.materialList = (await pageFetch({
          // parentId: props.recommendationId,
          ...state.searchParams,
        }));
      } finally {
        state.loading = false;
      }
    };

    const handleCurrentPageChange = async (page: number) => {
      pageOption.value.page = page;
      await fetchMaterialList();
    };

    const handleSearch = async (currentParams: string | { [key: string]: any }) => {
      if (typeof currentParams === 'string') {
        state.searchParams.keywords = currentParams;
      } else {
        const { keywords, ...otherParams } = currentParams;
        state.searchParams = { ...state.searchParams, ...{ fields: { ...state.searchParams.fields, ...otherParams } } };
      }
      await fetchMaterialList();
    };
    const exportWithFilter = async () => {
      try {
        state.loading = true;
        const defaultPageParams = {
          page: 1,
          size: pageOption.value.size,
        };
        const tableParams = state.searchParams;
        const params = {
          ...defaultPageParams,
          ...tableParams,
        };
        const res = await exportMaterialsFromBrandRecommendation(params);
        FileSaver.saveAs(res, `${new Date().getTime()}.xlsx`);
      } finally {
        state.loading = false;
      }
    };

    const handleSelection = (_rows: MaterialListItem[], isCheckAll: boolean, isIndeterminate: boolean) => {
      state.selectedRowList = _rows;
      state.isCheckAll = isCheckAll;
      state.isIndeterminate = isIndeterminate;
    };

    const handleCheckAll = (val: boolean) => {
      materialTileList.value?.checkAll(val);
    };

    const { printMaterial } = usePrintMaterial();

    // const { isFunctionAvaliable } = useResourceUsage();

    const multiPrintQrcode = async (_rows: MaterialListItem[] = state.selectedRowList) => {
      // 判断是否有剩余名额
      // if (!await isFunctionAvaliable('PRINT')) {
      //   throw new NoQuatoError();
      // }
      // // 递增打印次数
      // increateUserResourceUsage({ type: 'PRINT', num: 1 });
      printMaterial(_rows);
    };

    onCreated(async () => {
      await fetchMaterialList();
    });
    return {
      ...toRefs(state),
      materialTileList,
      handleSearch,
      handleCurrentPageChange,
      pageOption,
      exportWithFilter,
      handleSelection,
      handleCheckAll,
      multiPrintQrcode,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
$collapse-search-filter-top: 113px;
.page-recommendation-materials {
  .img-type-search-bar {
    background: transparent;
    // padding: 0;
    // margin: 0 40px;

    .sd-breadcrumb {
      margin-bottom: 0;
      border-bottom: 0;

      // .el-breadcrumb__item {
      //   .el-breadcrumb__inner {
      //     color: #999999 !important;
      //   }
      //   &:last-child {
      //     .el-breadcrumb__inner {
      //       color: #222 !important;
      //     }
      //   }
      // }
    }
  }
  .collapse-search-filter {
    margin-left: 16px;
    .collapse-form {
      background-color: #f2f3f5;
      position: fixed;
      width: 100vw;
      left: 0;
      right: 0;
      top: $collapse-search-filter-top;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      min-width: 1276px;
      > .el-form,
      > .handler-btns-bar {
        @include layout-elastic-center-container();
        margin: unset;
      }
    }
  }
  .content-inner {
    @include layout-elastic-center-container();
  }
  .handle-bar {
    line-height: 20px;
    margin: 16px 0;
    .el-button {
      min-height: unset !important;
    }
    .el-button--text {
      padding: 6px 0;
    }
  }
  .material-list-wrap {
    // max-width: 1260px;
    // margin-top: 20px;
  }
  .pick-state-tag,
  .pick-material-popper-trigger {
    position: absolute;
  }
  .pick-state-tag {
    top: 12px;
    left: 12px;
    z-index: 2;
  }
  .pick-material-popper-trigger {
    top: 40px;
  }
  .material-search-pageination {
    padding: 16px 0 32px 0;
  }
}
#maskTarget {
  position: relative;
  height: calc(100vh - #{$collapse-search-filter-top});
  overflow: auto;
  .table-mask {
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    z-index: 888;
    top: $collapse-search-filter-top;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
