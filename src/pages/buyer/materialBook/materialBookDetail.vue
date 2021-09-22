<template>
  <div class="buyer-collection-list">
    <!-- <ImageTypeSearchBar v-model="imgTypeKey" @search="search"> -->
    <sd-breadcrumb :data="breadcrumbData"></sd-breadcrumb>
    <!-- </ImageTypeSearchBar> -->
    <MaterialSearch :params="searchParams" :fetchFn="fetchFn"></MaterialSearch>
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
import onCreated from '@/utils/vue/onCreated';
import { t } from '@/i18n/index';
import MaterialSearch from '@/pages/components/material/search/index.vue';
import useHeader from '@/pages/components/Header/components/useHeader';

export default defineComponent({
  name: 'buyer-collection-list',
  components: { MaterialSearch },
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
    const header = useHeader();
    const state = reactive({
      searchParams: {
        keywords: header.keywords,
      },
      loading: false,
      imgTypeKey: 'imgUrl_crease_v2' as ImgTypeKey,
      keywords: '',
      breadcrumbData: [
        {
          path: '/merchant/detail',
          title: '材料册',
        }, {
          path: '',
          title: props.folderName,
        },
      ],
      materialList: [] as MaterialList,
    });
    const fetchFn = async (params: Obj) => {
      const newParams = {
        ...params,
        fields: {
          ...params.fields,
          id: props.folderId,

        },
      };
      return fetchMaterialBookList(newParams);
    };
    const { pageFetch, pageOption } = usePage(fetchMaterialBookList);

    // const fetchMaterialList = async () => {
    //   try {
    //     state.loading = true;
    //     state.materialList = (await pageFetch({
    //       fields: { id: props.folderId },
    //       keywords: state.keywords,
    //     }));
    //   } finally {
    //     state.loading = false;
    //   }
    // };

    // const handleCurrentPageChange = async (page: number) => {
    //   pageOption.value.page = page;
    //   await fetchMaterialList();
    // };

    const search = async (keywords: '') => {
      state.keywords = keywords;
      // await fetchMaterialList();
    };
    onCreated(async () => {
      // await fetchMaterialList();
    });
    return {
      ...toRefs(state), search, pageOption, fetchFn,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.buyer-collection-list {
  .img-type-search-bar {
    background: transparent;
    padding: 0 40px;
    .sd-breadcrumb {
      margin-bottom: 0;
    }
  }
  .material-list-wrap {
    max-width: 1260px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>
