<template>
  <div class="collection-color-card">
    <div class="color-card">
      <TopSearch @inputChange="inputChange" :title="$t('folder.color_card_book')"></TopSearch>
      <div class="folder-list-wrap">
        <div class="list-box" id="folderListWrap" v-if="tableList.length > 0">
          <ColorCardFolder
            receiveType="collectColorCard"
            @toDetail="toDetail"
            @refreshList="refreshList"
            :tableList="tableList"
          ></ColorCardFolder>
        </div>
        <template v-else-if="tableList.length === 0 && isSearch">
          <BlockError :error="{ message: $t('empty-page-tip.no_search_result'), code: '' }"></BlockError>
        </template>
        <template v-else>
          <BlockError :error="{ message: $t('empty-page-tip.no_data'), code: '404' }"></BlockError>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, toRefs, reactive, onMounted,
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {
  fetchCollectFoldersList, collectFolderItem,
} from '@/api/material';
import {
  ColorLibraryItem, ColorCardItem, fetchColorList, collectColorCardBookList,
} from '@/api/materialMenu';
import usePermisson from '@/utils/uses/use-permisson';

import ColorCardFolder from '@/pages/components/FolderList/components/ColorCardFolder.vue';
import BlockError from '@/components/error/BlockError.vue';
import delay from '_/delay';
import TopSearch from '@/pages/components/FolderList/components/TopSearch.vue';

interface tableListType extends ColorCardItem {
  colorList?: ColorLibraryItem[]

}
export default defineComponent({
  name: 'collectionFolders',
  props: {},
  components: {
    TopSearch,
    BlockError,
    ColorCardFolder,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { isSupplier } = usePermisson();

    const state = reactive({
      isSearch: false,

      keywords: '',

      loading: false,
      // 表单参数
      tableList: [] as tableListType[],
      colorList: [] as ColorLibraryItem[],
    });
    // const getList = async () => {
    //   state.loading = true;
    //   const res = await fetchCollectFoldersList(state.keywords);
    //   state.tableList = res;
    //   state.loading = false;
    // };
    const getList = async () => {
      state.loading = true;


      const res = await collectColorCardBookList({ name: state.keywords, page: 1, size: 9999 });
      const tableList = res.records;

      state.tableList = tableList;
      state.loading = false;
    };
    const refreshList = async () => {
      await getList();
    };
    const inputChange = async (value: string) => {
      state.isSearch = true;
      state.keywords = value;
      await getList();
    };
    const toDetail = async (item: ColorCardItem) => {
      console.log();
      router.push({
        path: './color-card-list',
        query: {
          colorBookName: item.name,
          detailId: item.materialBookId,
        },
      });
      console.log(item);
    };

    onMounted(async () => {
      await getList();
    });
    return {
      ...toRefs(state), inputChange, getList, refreshList, toDetail,
    };
  },
});
</script>

<style lang="scss">
.collection-color-card {
  .color-card {
    // display: flex;
    // flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 3px 6px 0px rgba(128, 128, 128, 0.18);

    .folder-list-wrap {
      position: relative;
      // padding: 20px;
      flex: 1;
    }
  }
}
</style>
