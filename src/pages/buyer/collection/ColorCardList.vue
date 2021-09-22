<template>
  <div class="wrap flex-column" v-loading="loading">
    <FoldersRow size="large" v-if="tableList.length">
      <Folder
        @refreshList="refreshList"
        receiveType="collectColorCard"
        v-for="(item, index) in tableList"
        @click.stop="toDetail(item)"
        :key="index"
        :folderInfo="item"
      >
        <div class="color-box no-color" v-if="!item.relateTop5Resps.length"></div>
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
    </FoldersRow>
    <Empty v-else></Empty>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, toRefs, reactive, onMounted, watch,
} from '@vue/runtime-core';

import FoldersRow from '@/pages/components/FolderList/components/FoldersRow.vue';
import Folder from '@/pages/components/FolderList/components/FolderView.vue';
import { useRouter } from 'vue-router';
import {
  ColorCardItem, ColorLibraryItem, fetchColorList, collectColorCardBookList,
} from '@/api/materialMenu';
import delay from '_/delay';
import Empty from '@/components/error/Empty.vue';


interface tableListType extends ColorCardItem {
  colorList?: ColorLibraryItem[]
}
export default defineComponent({
  name: '',
  components: {
    FoldersRow, Folder, Empty,
  },
  props: {
    keywords: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const state = reactive({
      isSearch: false,

      colorFamily: '',
      loading: false,
      activeName: 'colorBook',
      tableList: [] as tableListType[],
      colorList: [] as ColorLibraryItem[],
    });
    const getList = async () => {
      state.loading = true;
      const res = await collectColorCardBookList({ name: props.keywords, page: 1, size: 9999 });
      const tableList = res.records;

      state.tableList = tableList;


      state.loading = false;
    };
    const refreshList = async () => {
      console.log(222);
      await getList();
    };
    watch(() => props.keywords, async (val, oldVal) => {
      if (val !== oldVal) {
        await getList();
      }
    });
    const toDetail = async (item: ColorCardItem) => {
      console.log();
      router.push({
        path: './color-list',
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
      ...toRefs(state), toDetail, refreshList,
    };
  },
});
</script>
<style lang="scss" scoped>
.wrap {
  margin: 0 80px;
  margin-top: 20px;
  height: 100%;
  background: #f2f3f5;
  padding: 20px;
  // max-height: 808px;
  overflow: hidden;
  position: relative;
  flex: 0 1 auto;
  box-shadow: none;
  .color-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .no-color {
    background: linear-gradient(180deg, #f1f1f2, #e6e7e8 69%, #c2c3c4);
  }
}
</style>
