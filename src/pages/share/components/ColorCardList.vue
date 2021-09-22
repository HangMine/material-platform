<template>
  <div class="share-color-card-list">
    <div class="color-card-list" v-if="showFolderList" @click="showFolder">
      <div class="cover-box">
        <div class="conver-content flex-center">
          <slot>
            <div class="color-box" style="width: 100%">
              <p
                :style="{
                  backgroundColor: `rgb(${ele.r}, ${ele.g}, ${ele.b})`,
                  width: `${100 / `${folderInfo.relateTop5Resps.length}`}%`,
                  height: '100%',
                }"
                v-for="(ele, inIndex) in folderInfo.relateTop5Resps"
                :key="inIndex"
              ></p>
            </div>
            <!-- <p class="color-card-bg"></p> -->
            <!-- <img class="cover-img" :src="folderCoverImg" /> -->
          </slot>
        </div>
      </div>
      <div class="handle-btns">
        <el-dropdown trigger="hover" @command="handleCommand">
          <span class="el-dropdown-link flex-center" @click.stop>
            <i class="el-icon-more"></i>
          </span>
          <template v-slot:dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="collection">{{ $t("folder.collection") }}</el-dropdown-item>
              <el-dropdown-item command="share">{{ $t("share.share") }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

      <div class="title-content">
        <h4 class="title">
          <over-text class="upload-title" :showLine="2" :resize="true">{{ folderInfo.name }}</over-text>
        </h4>
      </div>
    </div>
    <div v-else class="wrap">
      <SdGrid :data="colorList" :minWidth="193" :gap="8">
        <template #default="{ item }">
          <ColorLibraryList
            @refreshList="refreshList"
            fatherId=""
            :noBtn="true"
            :colorItem="item"
            type="colorLibraryDetail"
          ></ColorLibraryList>
        </template>
      </SdGrid>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pages.page || 1"
        :page-size="pages.size"
        layout="total, prev, pager, next, jumper"
        :total="pages.total"
      >
      </el-pagination>
      <!-- <CordWrap size="medium">
        <ColorLibraryList
          @refreshList="refreshList"
          fatherId=""
          :noBtn="true"
          v-for="(item, index) in colorList"
          :key="index"
          :colorItem="item"
          type="colorLibraryDetail"
        ></ColorLibraryList>
        <div class="pagination">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pages.page || 1"
            :page-size="pages.size"
            layout="total, prev, pager, next, jumper"
            :total="pages.total"
          >
          </el-pagination>
        </div>
      </CordWrap> -->
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, computed, watch, onMounted,
} from '@vue/runtime-core';
import { dialog } from '@/utils/vue/dialog';
import { ElMessage } from 'element-plus';
import FolderShare from '@/pages/components/share/index.vue';
import {
  MaterialList,
} from '@/models/Material';
import {
  fetchMaterialBookList, collectColorCardBook, fetchColorList, collectMaterialBook,
} from '@/api/materialMenu';
import { getContextUser } from '@/loaders/context';
// import FolderBookList from '../main/index.vue';
import ColorLibraryList from '@/pages/main/materialMenu/components/ColorLibraryList.vue';
// import CordWrap from '@/pages/main/materialMenu/components/ColorWrap.vue';
import SdGrid from '@/components/grid/index.vue';
import { t } from '@/i18n/index';

type Command = 'collection' | 'share';
export default defineComponent({
  name: '',
  props: {
    folderInfo: {
      type: Object,
      default: () => ({}),
    },
    shareLinkType: {
      type: String,
      default: 'material',
    },
    canShareAgain: {
      type: Boolean,
      default: false,
    },
    shareId: {
      type: String,
      require: true,
    },
    showFolderList: {
      type: Boolean,
    },

  },
  components: {
    ColorLibraryList,
    SdGrid,
    // CordWrap,
    // FolderBookList
  },
  emits: ['showTab'],
  setup(props, { emit }) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const folderCoverImg = require('@/assets/img/public/folder.png');
    const state = reactive({
      showFolderList: props.showFolderList || true,
      colorList: [],
      loading: false,
      pages: {
        page: 1, size: 48, total: 0,
      },

    });

    const getList = async () => {
      state.loading = true;

      const params = {

        keywords: '',
        page: state.pages.page,
        size: state.pages.size,

        fields: {
          id: props.folderInfo.id as string,
          colorFamily: '',
        },
      };
      const res = await fetchColorList(params);
      state.pages.total = parseInt(res.total, 10);

      // state.pages.total = res.total;
      const { records } = res;
      state.colorList = records;
      state.loading = false;
    };

    console.log(state.showFolderList, 'state.showFolderList');
    const user = computed(() => getContextUser());
    const showFolder = async () => {
      state.showFolderList = false;
      await getList();
      emit('showTab');
    };

    watch(() => props.showFolderList, async (value) => {
      if (!value) {
        await getList();
      }
      state.showFolderList = value;
      console.log(value, 'value');
    });
    const handleCurrentChange = async (value: number) => {
      console.log(value, 'value');
      state.pages.page = value || 1;
      // await getList();
    };
    const refreshList = async () => {
      console.log(111);
    };
    const handleCommand = async (command: Command) => {
      console.log(command);
      switch (command) {
        case 'collection':
          if (user?.value?.id === props.folderInfo.creator) {
            ElMessage.error(t('eleMessage.do_not_collect_own', { name: t('folder.color_card_book') }));
            return;
          }
          await collectColorCardBook([{ materialBookId: props.folderInfo.id, name: props.folderInfo.name }]);
          ElMessage.success(t('eleMessage.collect_name_success', { name: t('folder.color_card_book') }));
          break;
        case 'share':
          if (user?.value?.id === props.folderInfo.creator) {
            ElMessage.error(t('eleMessage.do_not_operation_again', { name: t('folder.color_card_book') }));
            return;
          }
          if (user?.value?.id !== props.folderInfo.creator && props.folderInfo.isShared === 0) {
            ElMessage.error(t('eleMessage.the_name_notallow_share', { name: t('folder.color_card_book') }));
            return;
          }
          await dialog({
            is: FolderShare,
            props: {
              folderInfo: props.folderInfo,
              shareType: 'colorCardShare',
              materials: [],
            },
          }, {
            noTitle: true,
            props: {
              width: '705px',
            },
          });
          break;
        default:
          break;
      }
    };

    return {
      ...toRefs(state), folderCoverImg, handleCommand, showFolder, handleCurrentChange, refreshList,
    };
  },

});
</script>
<style lang="scss" scoped>
.share-color-card-list {
  padding: 30px 80px 0;
  .color-card-list {
    margin-top: 50px;
    width: 220px;
    position: relative;
    border-radius: 4px;
    margin-bottom: 20px;
    cursor: pointer;
    .cover-box {
      height: 0;
      position: relative;
      padding-bottom: 56.4%;
      margin-left: 10px;
      border-radius: 4px;
      overflow: hidden;
    }
    .conver-content {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      align-items: stretch;
      .color-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    // .color-card-bg {
    //   border-radius: 4px;
    //   height: 124px;
    //   width: 220px;
    //   background: pink;
    // }
    // .cover-img {
    //   height: 100%;
    // }
    &:hover {
      // background-color: rgba(0, 0, 0, 0.06);
      .handle-btns {
        visibility: visible;
      }
    }
    .handle-btns {
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
    .title-content {
      margin-top: 4px;
      .title {
        color: #222222;
        line-height: 24px;
        text-align: center;
      }
      .description {
        color: #999999;
        font-size: 12px;
      }
    }
  }
  .wrap {
    // background: #fff;
    background: none;
    box-shadow: none;
    padding: 20px;
    margin-top: 30px;

    position: relative;
    .pagination {
      height: 64px;
      // line-height: 64px;

      width: 100%;
      text-align: center;
      // background: #fff;
      bottom: 0;
      border-top: 1px solid #dddddd;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
