<template>
  <div class="collection">
    <div class="wrap">
      <TopSearch @inputChange="inputChange" :title="$t('folder.material_book')"></TopSearch>
      <div class="folder-list-wrap">
        <div class="list-box" id="folderListWrap" v-if="tableList.length > 0">
          <CollectOrMaterialFolder
            :tableList="tableList"
            :newBuiltName="$t('folder.new_built_collect')"
            @chooseRow="chooseRow"
            @addFolder="addFolder"
            @refreshList="refreshList"
            receiveType="collect"
          >
          </CollectOrMaterialFolder>
        </div>
        <template v-else-if="tableList.length === 0 && isSearch">
          <BlockError :error="{ message: $t('empty-page-tip.no_search_result'), code: '' }"></BlockError>
        </template>
        <template v-else>
          <BlockError
            :error="{
              message: `${$t('empty-page-tip.no_create_and_create', { name: `${$t('folder.collect')}` })}`,
              code: '404',
            }"
          ></BlockError>
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
import { fetchCollectFoldersList, collectFolderItem } from '@/api/material';
import usePermisson from '@/utils/uses/use-permisson';

import BlockError from '@/components/error/BlockError.vue';
import { confirm, dialog } from '@/utils/vue/dialog';
import AddFolder from '@/pages/components/FolderList/components/AddFolder.vue';
import TopSearch from '@/pages/components/FolderList/components/TopSearch.vue';
import CollectOrMaterialFolder from '@/pages/components/FolderList/components/CollectOrMaterialFolder.vue';

export default defineComponent({
  name: 'collectionFolders',
  props: {},
  components: {
    TopSearch, BlockError, CollectOrMaterialFolder,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { isSupplier } = usePermisson();

    const state = reactive({
      isSearch: false,

      keywords: '',
      params: {
        keywords: '',
      },
      loading: false,
      // 表单参数
      tableList: [
      ] as collectFolderItem[],
    });
    const getList = async () => {
      state.loading = true;
      const res = await fetchCollectFoldersList(state.keywords);
      state.tableList = res;
      state.tableList.unshift({
        catalogId: '',
        name: '',
        count: 0,
        images: [],
      });
      state.loading = false;
    };

    const inputChange = async (value: string) => {
      state.isSearch = true;
      state.keywords = value;
      await getList();
    };
    const chooseRow = async (item) => {
      router.push({
        path: isSupplier.value ? './materials' : '/buyer/collection/list',
        query: {
          folderName: item.name || '收藏夹1',
          folderId: item.catalogId,
        },
      });
    };
    const refreshList = async () => {
      await getList();
    };
    const addFolder = async () => {
      await dialog({
        is: AddFolder,
        props: {

          receiveType: 'collect',

          // catalogId,
        },
      });
      await refreshList();
    };

    onMounted(async () => {
      await getList();
    });
    return {
      ...toRefs(state), inputChange, chooseRow, getList, refreshList, addFolder,
    };
  },
});
</script>

<style lang="scss" >
.wrap {
  background: #ffffff;
  box-shadow: 0px 3px 6px 0px rgba(128, 128, 128, 0.18);
  height: 100%;

  .folder-list-wrap {
    position: relative;
    padding: 20px;
    flex: inherit;
    overflow-y: scroll;
    margin-bottom: 60px;
    height: calc(100% - 90px);
  }
}
</style>
