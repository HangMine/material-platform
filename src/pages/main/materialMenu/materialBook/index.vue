<template>
  <div class="material-book">
    <div class="wrap">
      <TopSearch @inputChange="inputChange" :title="$t('folder.material_book')"></TopSearch>
      <div class="folder-list-wrap">
        <div class="list-box" id="folderListWrap" v-if="tableList.length > 0">
          <CollectOrMaterialFolder
            :tableList="tableList"
            :newBuiltName="$t('folder.new_built_material_book')"
            @chooseRow="chooseRow"
            @addFolder="addFolder"
            @refreshList="refreshList"
            receiveType="MaterialBook"
          >
          </CollectOrMaterialFolder>
        </div>
        <template v-else-if="tableList.length === 0 && isSearch">
          <BlockError :error="{ message: $t('empty-page-tip.no_search_result'), code: '' }"></BlockError>
        </template>
        <template v-else>
          <BlockError
            :error="{
              message: `${$t('empty-page-tip.no_create_and_create', { name: `${$t('folder.material_book')}` })}`,
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
import { useRouter } from 'vue-router';
import BlockError from '@/components/error/BlockError.vue';
import { confirm, dialog } from '@/utils/vue/dialog';
import AddFolder from '@/pages/components/FolderList/components/AddFolder.vue';
import TopSearch from '@/pages/components/FolderList/components/TopSearch.vue';
import CollectOrMaterialFolder from '@/pages/components/FolderList/components/CollectOrMaterialFolder.vue';
import { MaterialBookItem, fetchMaterialBook } from '@/api/materialMenu';

export default defineComponent({
  name: 'collectionFolders',
  props: {},
  components: {
    TopSearch, BlockError, CollectOrMaterialFolder,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      isSearch: false,
      keywords: '',
      params: {
        keywords: '',
      },
      loading: false,
      // 表单参数
      tableList: [
      ] as MaterialBookItem[],
    });
    const getList = async () => {
      state.loading = true;
      const res = await fetchMaterialBook(state.keywords);
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
    const chooseRow = async (item: MaterialBookItem) => {
      router.push({
        path: './material-list',
        query: {
          MaterialBookName: item.name || '材料册1',
          fatherId: item.catalogId,
        },
      });
      console.log(8888);
    };
    const refreshList = async () => {
      await getList();
    };
    const addFolder = async () => {
      await dialog({
        is: AddFolder,
        props: {
          receiveType: 'MaterialBook',
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
