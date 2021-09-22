<template>
  <div class="collect-or-material-folder">
    <FoldersRow size="large">
      <Folder
        class="collect-folder"
        :receiveType="receiveType"
        v-for="(item, index) in tableList"
        @click="chooseRow(item)"
        :key="index"
        :folderInfo="item"
        @refreshList="refreshList"
        @shareShare="$emit('shareShare')"
        @shareCollect="$emit('shareCollect')"
      >
        <div class="item new-build" @click.stop="addFolder" v-if="!item.catalogId">
          <i class="color-iconfont i-r-tianjia-22"></i>
          <p class="new-build-text">{{ newBuiltName }}</p>
        </div>

        <div class="img-wrap" v-else>
          <base-image v-if="getFirstImages(item)" :src="getFirstImages(item)"> </base-image>
          <div v-else class="empty-image el-image"></div>
          <ul class="img-footer">
            <li v-for="(image, i) of getFooterImages(item)" :key="i" class="footer-li">
              <base-image v-if="image" :src="image"></base-image>
              <div v-else class="empty-image el-image"></div>
            </li>
          </ul>
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
import { collectFolderItem } from '@/api/material';
import {
  MaterialBookItem,
} from '@/api/materialMenu';

export default defineComponent({
  name: '',
  components: { FoldersRow, Folder },
  props: {
    tableList: {
      type: Array as PropType<collectFolderItem[]>,
      required: true,
    },
    newBuiltName: {
      type: String,
      required: true,
    },
    receiveType: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    console.log(props.tableList, 'tableList');
    const state = reactive({

    });
    const getFooterImages = (item: collectFolderItem) => {
      return [...new Array(3)].map((_, i) => {
        return item.images[i + 1] || '';
      });
    };
    const getFirstImages = (item: collectFolderItem) => {
      return item.images?.[0] || '';
    };
    const chooseRow = (item: collectFolderItem) => {
      emit('chooseRow', item);
    };
    const refreshList = () => {
      emit('refreshList');
    };
    const addFolder = () => {
      emit('addFolder');
    };
    return {
      ...toRefs(state), getFooterImages, getFirstImages, chooseRow, refreshList, addFolder,
    };
  },

});
</script>
<style lang="scss">
.collect-or-material-folder {
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .new-build {
    background: #f2f3f5ff;
    width: 100%;

    flex-direction: column;
    border-radius: 12px;
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
  .img-wrap {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    padding-top: 100%;
    .empty-image {
      background: #e3e4e6;
      width: 100%;
      height: 100%;
    }
    .el-image {
      transition: transform 0.2s;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 0;
    }
    .img-footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      display: flex;
      background-color: white;
      padding-top: 4px;
      .footer-li {
        position: relative;
        flex: 1;
        padding-top: 33.3%;
        + .footer-li {
          margin-left: 4px;
        }
      }
    }
  }
  .folders-list.large .collect-folder .cover-box {
    overflow: visible !important;
  }
  .sd-folder .cover-box {
    padding-bottom: 100%;
  }
}
</style>
