<template>
  <div class="color-card-book__core" v-loading="loading">
    <!-- <div class="folder-list-wrap"> -->
    <SdGrid :data="tableList" v-if="tableList.length > 0">
      <template #default="{ item }">
        <Folder @refreshList="refreshList" receiveType="ColorCard" @click.stop="toDetail(item)" :folderInfo="item">
          <div class="color-box new-build" @click.stop="addFolder" v-if="!item.name">
            <i class="color-iconfont i-r-tianjia-22"></i>
            <p class="new-build-text">{{ $t("folder.new_built_color_card") }}</p>
          </div>
          <div class="color-box no-color" v-else-if="!item.relateTop5Resps.length">
            <!-- <i class="color-iconfont i-r-seka-16"></i> -->
          </div>
          <div class="color-box" v-else style="width: 100%">
            <p
              :style="{
                backgroundColor: `rgb(${ele.r}, ${ele.g}, ${ele.b})`,
                width: `${100 / `${item.relateTop5Resps.length}`}%`,
                height: '100%',
              }"
              v-for="(ele, inIndex) in item.relateTop5Resps"
              :key="inIndex"
            ></p>
          </div>
        </Folder>
      </template>
    </SdGrid>
    <!-- <div class="list-box" id="folderListWrap" v-if="tableList.length > 0"> -->
    <!-- <FoldersRow size="large"> -->

    <!-- </FoldersRow> -->
    <!-- </div> -->
    <template v-else-if="tableList.length === 0 && isSearch">
      <BlockError :error="{ message: $t('empty-page-tip.no_search_result'), code: '' }"></BlockError>
    </template>
    <template v-else>
      <BlockError :error="{ message: $t('empty-page-tip.no_create_color_card'), code: '404' }"></BlockError>
    </template>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted,
} from 'vue';
import { useRouter } from 'vue-router';
import {
  fetchColorCard, ColorCardItem, ColorLibraryItem, fetchColorLibrary, fetchColorList,
} from '@/api/materialMenu';
// import delay from '_/delay';
import { confirm, dialog } from '@/utils/vue/dialog';
import AddFolder from '@/pages/components/FolderList/components/AddFolder.vue';
// import ColoroGradient from '@/pages/components/color/coloroGradient/index.vue';
// import usePermisson from '@/utils/uses/use-permisson';
import SdGrid from '@/components/grid/index.vue';
// import FoldersRow from '@/pages/components/FolderList/components/FoldersRow.vue';
import Folder from '@/pages/components/FolderList/components/FolderView.vue';
import BlockError from '@/components/error/BlockError.vue';

interface tableListType extends ColorCardItem {
  colorList?: ColorLibraryItem[]
}

export default defineComponent({
  name: 'color-card-book__core',
  components: {
    // FoldersRow,
    SdGrid,
    Folder,
    BlockError,
  },
  props: {},
  setup(props, { emit }) {
    const router = useRouter();

    const state = reactive({
      isSearch: false,
      keywords: '',
      loading: false,
      // 表单参数
      tableList: [] as tableListType[],
      colorList: [] as ColorLibraryItem[],
    });
    const getList = async () => {
      state.loading = true;


      const res = await fetchColorCard(state.keywords);
      const tableList = res;

      tableList.unshift({
        count: 0,
        id: '',
        name: '',
      });
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
      emit('to-detail', {
        colorBookName: item.name,
        detailId: item.id,
      });
    };

    const addFolder = async () => {
      await dialog({
        is: AddFolder,
        props: {
          receiveType: 'ColorCard',
          // catalogId,
        },
      });
      await refreshList();
    };

    onMounted(async () => {
      await getList();
    });
    return {
      ...toRefs(state), refreshList, inputChange, toDetail, addFolder,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
.color-card-book__core {
  .color-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sd-folder {
    .cover-box {
      border-radius: 4px;
      overflow: hidden;
    }
  }
  .no-color {
    background: linear-gradient(180deg, #f1f1f2, #e6e7e8 69%, #c2c3c4);
  }
  .new-build {
    background: white;
    width: 100%;
    flex-direction: column;
    cursor: pointer;
    .new-build-text {
      color: #999999ff;
      line-height: 20px;
      margin-top: 4px;
    }
    .color-iconfont {
      font-size: 42px;
      color: #c9cdcc;
    }
  }
  .folder-list-wrap {
    position: relative;
    padding: 20px;
    flex: 1;
  }
}
</style>
