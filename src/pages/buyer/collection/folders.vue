<template>
  <div class="buyer-collection-folders">
    <div class="search-bar flex-space-between">
      <div class="left-title">
        <el-tabs v-model="activeName" @tab-click="handleChangeTab">
          <el-tab-pane :label="$t('folder.material_book')" name="materialBookCollect"></el-tab-pane>
          <el-tab-pane :label="$t('folder.color_card_book')" name="colorCardCollect"></el-tab-pane>
        </el-tabs>
      </div>
      <StretchSearch @search="search"></StretchSearch>
    </div>

    <div class="grid-wrap" v-if="activeName === 'materialBookCollect'" v-loading="loading">
      <SdGrid :data="folderList">
        <template #prepend>
          <li @click="addFolder">
            <div class="add-folder">
              <div class="add-folder-inner">
                <i class="add-folder-icon i-r-tianjia-22"></i>
                <div class="tip">{{ $t("folder.new_built_collect") }}</div>
              </div>
            </div>
          </li>
        </template>
        <template #default="{ item }">
          <div class="folder-main" @click="chooseRow(item)">
            <div class="img-wrap">
              <base-image v-if="getFirstImages(item)" :src="getFirstImages(item)"> </base-image>
              <div v-else class="empty-image el-image"></div>
              <ul class="img-footer">
                <li v-for="(image, i) of getFooterImages(item)" :key="i" class="footer-li">
                  <base-image v-if="image" :src="image"></base-image>
                  <div v-else class="empty-image el-image"></div>
                </li>
              </ul>
            </div>
            <div class="footer">
              <h3 class="name">{{ item.name }}</h3>
              <small class="count">{{ item.count }}{{ $t("folder.section_materials") }}</small>
            </div>
            <SdDropdown
              class="handle-btns"
              trigger="hover"
              :appendToBody="false"
              @command="(command) => handleCommand(command, item)"
            >
              <span class="el-dropdown-link flex-center" @click.stop>
                <i class="el-icon-more"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="rename">{{ $t("folder.rename") }}</el-dropdown-item>
                  <el-dropdown-item command="delete">{{ $t("folder.delete") }}</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </SdDropdown>
          </div>
        </template>
      </SdGrid>

      <!-- <Empty v-else></Empty> -->
    </div>
    <ColorCardList :keywords="keywords" v-else></ColorCardList>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';
import SdGrid from '@/components/grid/index.vue';
import { collectFolderItem, deleteCollectFolder, fetchCollectFoldersList } from '@/api/material';
import onCreated from '@/utils/vue/onCreated';
import { dialog, confirm } from '@/utils/vue/dialog';
import AddFolder from '@/pages/components/FolderList/components/AddFolder.vue';
import RenameFolder from '@/pages/components/FolderList/components/RenameFolder.vue';

import SdDropdown from '@/components/dropdown/dropdown.vue';
import { ElMessage } from 'element-plus';
// import Empty from '@/components/error/Empty.vue';
import { useRouter } from 'vue-router';
import { t } from '@/i18n/index';
import StretchSearch from '@/components/search/StretchSearch.vue';
import ColorCardList from './ColorCardList.vue';


type Command = 'rename' | 'delete';


export default defineComponent({
  name: 'buyer-collection-folders',
  components: {
    SdGrid, SdDropdown, ColorCardList, StretchSearch,
    // Empty,
  },
  props: {},
  setup(props, { emit }) {
    const router = useRouter();
    const state = reactive({
      loading: false,
      keywords: '',
      folderList: [] as collectFolderItem[],
      activeName: localStorage.getItem('collectTab') || 'materialBookCollect',
    });


    const getFirstImages = (item: collectFolderItem) => {
      return item.images?.[0] || '';
    };

    const getFooterImages = (item: collectFolderItem) => {
      return [...new Array(3)].map((_, i) => {
        return item.images[i + 1] || '';
      });
    };

    const fetchFolderList = async () => {
      try {
        state.loading = true;
        const res = await fetchCollectFoldersList(state.keywords);
        state.folderList = res;
      } finally {
        state.loading = false;
      }
    };
    const search = async (keywords: '') => {
      state.keywords = keywords;
      if (state.activeName === 'materialBookCollect') {
        await fetchFolderList();
      }
    };

    const addFolder = async () => {
      await dialog({
        is: AddFolder,
        props: {
          receiveType: 'collect',
          // catalogId,
        },
      });
      await fetchFolderList();
    };

    const handleCommand = async (command: Command, item: collectFolderItem) => {
      switch (command) {
        case 'rename':
          await dialog({
            is: RenameFolder,
            props: {
              receiveType: 'collect',
              detailId: item.catalogId,
              name: item.name,
            },
          });
          break;
        case 'delete':
          await confirm({ title: `${t('folder.whether_empty')}${item.name}${t('folder.and_delete')}` });
          await deleteCollectFolder({ folderId: item.catalogId, folderName: item.name });
          ElMessage.success(t('delete_success'));
          break;
        default:
          break;
      }
      await fetchFolderList();
    };

    const chooseRow = async (item: collectFolderItem) => {
      router.push({
        path: '/buyer/collection/list',
        query: {
          folderName: item.name,
          folderId: item.catalogId,
        },
      });
    };
    watch(() => state.activeName, (val, oldVal) => {
      if (val !== oldVal) {
        localStorage.setItem('collectTab', val);
      }
    });
    const handleChangeTab = async () => {
      // state.isSearch = false;
      state.keywords = '';
      // state.pages.page = 1;
      // await getList();
    };
    onCreated(async () => {
      await fetchFolderList();
    });

    return {
      ...toRefs(state), search, getFirstImages, getFooterImages, addFolder, handleCommand, chooseRow, handleChangeTab,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.buyer-collection-folders {
  @include layout-elastic-center-container();
  .search-bar {
    background: #f2f3f5;
    border-bottom: 1px solid #e7e7e7;
    // margin: 0 40px;
    padding: 0;
    position: relative;
  }
  .el-tabs__nav-wrap::after {
    height: 0;
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__nav {
    .el-tabs__item {
      font-size: 16px !important;
      color: #999;
    }
    .is-active {
      color: #00b8b1;
    }
  }
  .grid-wrap {
    // max-width: 1260px;
    // margin: 0 80px;
    margin-top: 20px;
  }
  .add-folder {
    position: relative;
    overflow: hidden;
    padding-top: 100%;
    cursor: pointer;
    &:hover {
      .add-folder-inner {
        color: $color-primary;
        i {
          color: $color-primary;
        }
      }
    }
    .add-folder-inner {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #999999;
      background: #ffffff;
      border-radius: 8px;
      transition: color 0.2s;

      > i {
        font-size: 60px;
        color: #ddd;
      }
      .tip {
        font-size: 12px;
        padding-top: 10px;
      }
    }
  }

  .folder-main {
    position: relative;
    cursor: pointer;
    &:hover {
      /deep/.handle-btns {
        visibility: visible;
      }
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
    .footer {
      .name {
        color: #222222;
        line-height: 20px;
        padding-top: 10px;
      }
      .count {
        font-size: 12px;
        color: #999999;
        line-height: 17px;
        padding-top: 10px;
      }
    }
    /deep/.handle-btns {
      visibility: hidden;
      cursor: pointer;
      position: absolute;
      right: 8px;
      top: 8px;
      .el-dropdown-link {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        color: #fff;
        i {
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>
