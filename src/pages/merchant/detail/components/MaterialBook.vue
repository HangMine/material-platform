<template>
  <div class="marchant-material-book">
    <template v-if="tableList.length">
      <CollectOrMaterialFolder
        v-loading="loading"
        :tableList="tableList"
        :newBuiltName="$t('folder.new_built_material_book')"
        receiveType="MerchantMaterialBook"
        @chooseRow="chooseRow"
      >
      </CollectOrMaterialFolder>
    </template>
    <template v-else>
      <BlockError
        :error="{
          message: $t('empty-page-tip.no_data'),
          code: '404',
        }"
      ></BlockError>
    </template>
    <!-- <MaterialList v-if="isShow" :folderName="folderName" :folderId="folderId"></MaterialList> -->
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted, PropType,
} from '@vue/runtime-core';
import CollectOrMaterialFolder from '@/pages/components/FolderList/components/CollectOrMaterialFolder.vue';
import {
  MaterialBookItem, fetchMaterialBook, fetchMarketMaterialBook,
} from '@/api/materialMenu';
import { useRouter } from 'vue-router';
import { MerchantItem } from '@/models/Merchant';
import BlockError from '@/components/error/BlockError.vue';
// import MaterialList from './MaterialList.vue';

export default defineComponent({
  name: '',
  props: {
    merchant: {
      type: Object as PropType<MerchantItem>,
      required: true,
    },
  },
  components: {
    CollectOrMaterialFolder,
    //  MaterialList,
    BlockError,
  },
  setup(props) {
    const router = useRouter();

    const state = reactive({
      keywords: '',

      loading: false,
      // 表单参数
      tableList: [
      ] as MaterialBookItem[],
      folderName: '',
      folderId: '',
      isShow: false,
    });
    // const chooseRow = async (item: MaterialBookItem) => {
    //   state.isShow = true;
    //   state.folderName = item.name;
    //   state.folderId = item.catalogId;
    // };
    const chooseRow = async (item: MaterialBookItem) => {
      router.push({
        path: '/buyer/material-book/material-book-detail',
        query: {
          folderName: item.name,
          folderId: item.catalogId,
        },
      });
    };
    const getList = async () => {
      state.loading = true;
      const res = await fetchMarketMaterialBook(props.merchant.id);
      state.tableList = res;

      state.loading = false;
    };
    onMounted(async () => {
      await getList();
      console.log(888);
    });
    return { ...toRefs(state), chooseRow };
  },
});
</script>
<style lang="scss">
.marchant-material-book {
  padding: 20px 80px;
}
</style>
