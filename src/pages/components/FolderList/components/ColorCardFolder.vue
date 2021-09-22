<template>
  <div class="color-card-folder">
    <FoldersRow size="large">
      <Folder
        @refreshList="refreshList"
        :receiveType="receiveType"
        v-for="(item, index) in tableList"
        @click.stop="toDetail(item)"
        :key="index"
        :folderInfo="item"
      >
        <div class="color-box new-build" @click.stop="addFolder" v-if="!item.name">
          <i class="color-iconfont i-r-tianjia-22"></i>
          <p class="new-build-text">{{ $t("folder.new_built_color_card") }}</p>
        </div>
        <div class="color-box no-color" v-else-if="item.relateTop5Resps && !item.relateTop5Resps.length"></div>
        <div class="color-box" v-else style="width: 100%">
          <p
            :style="{
              backgroundColor: `rgb(${ele.r}, ${ele.g}, ${ele.b})`,
              width: `${100 / `${item.relateTop5Resps && item.relateTop5Resps.length}`}%`,
              height: '100%',
            }"
            v-for="(ele, inIndex) in item.relateTop5Resps"
            :key="inIndex"
          ></p>
        </div>
      </Folder>
    </FoldersRow>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, PropType,
} from '@vue/runtime-core';
import FoldersRow from '@/pages/components/FolderList/components/FoldersRow.vue';
import Folder from '@/pages/components/FolderList/components/FolderView.vue';
import { useRouter, useRoute } from 'vue-router';
import {
  ColorCardItem, ColorLibraryItem,
} from '@/api/materialMenu';

interface tableListType extends ColorCardItem {
  colorList?: ColorLibraryItem[]

}
export default defineComponent({
  name: '',
  components: { FoldersRow, Folder },
  props: {
    tableList: {
      type: Array as PropType<tableListType[]>,
      required: true,
    },
    receiveType: {
      type: String,
      required: true,
    },
  },
  emit: ['refreshList', 'toDetail'],
  setup(props, { emit }) {
    const router = useRouter();

    const state = reactive({});
    const toDetail = async (item: ColorCardItem) => {
      emit('toDetail', item);
    };
    const addFolder = async () => {
      emit('addFolder');
    };

    const refreshList = async () => {
      emit('refreshList');
    };
    return {
      ...toRefs(state), toDetail, refreshList, addFolder,
    };
  },
});
</script>
<style lang="scss">
.color-card-folder {
  height: 100%;
  width: 100%;
  padding: 20px;
  overflow-y: scroll;
  .color-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .no-color {
    background: linear-gradient(180deg, #f1f1f2, #e6e7e8 69%, #c2c3c4);
  }
  .new-build {
    background: #f2f3f5ff;
    width: 100%;
    flex-direction: column;
    .new-build-text {
      color: #999999ff;
      line-height: 20px;
      margin-top: 4px;
    }
  }
  .color-iconfont {
    font-size: 42px;
    color: #c9cdcc;
  }
}
</style>
