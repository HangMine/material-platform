<template>
  <div class="sd-folder">
    <div class="cover-box">
      <div class="conver-content flex-center">
        <slot>
          <img class="cover-img" :src="folderCoverImg" />
        </slot>
      </div>
    </div>
    <SdDropdown
      v-if="folderInfo.name && receiveType !== 'MerchantMaterialBook'"
      class="handle-btns"
      trigger="hover"
      :appendToBody="false"
      @command="handleCommand"
    >
      <span class="el-dropdown-link flex-center" @click.stop>
        <i class="el-icon-more"></i>
      </span>
      <template v-slot:dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-if="receiveType !== 'MaterialBookShare'" command="rename">{{
            $t("folder.rename")
          }}</el-dropdown-item>
          <el-dropdown-item v-if="receiveType === 'MaterialBook' || receiveType === 'ColorCard'" command="share">{{
            $t("folder.share")
          }}</el-dropdown-item>
          <el-dropdown-item v-if="receiveType !== 'MaterialBookShare'" command="delete">{{
            $t("folder.delete")
          }}</el-dropdown-item>
          <el-dropdown-item v-if="receiveType === 'MaterialBook' && folderInfo.isopmk === 0" command="onShelf">
            {{ $t("folder.upload_to_market") }}
          </el-dropdown-item>
          <el-dropdown-item v-if="receiveType === 'MaterialBook' && folderInfo.isopmk === 1" command="offShelf">{{
            $t("folder.cancel_upload_to_market")
          }}</el-dropdown-item>
          <el-dropdown-item v-if="receiveType === 'MaterialBookShare'" command="shareShare">{{
            $t("folder.share")
          }}</el-dropdown-item>
          <el-dropdown-item v-if="receiveType === 'MaterialBookShare'" command="shareCollect">{{
            $t("folder.collection")
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </SdDropdown>
    <div class="title-content" v-if="folderInfo.name">
      <h4 class="title">
        <over-text class="upload-title" :showLine="2" :resize="true">{{ folderInfo.name }}</over-text>
      </h4>
      <p class="description">
        {{ folderInfo.count ? folderInfo.count : "0"
        }}{{
          receiveType === "ColorCard" || receiveType === "collectColorCard"
            ? $t("number")
            : $t("folder.section_materials")
        }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, PropType, watch,
} from 'vue';
import { ElMessage } from 'element-plus';
import { confirm, dialog } from '@/utils/vue/dialog';
import {
  deleteMaterialBook, deleteColorCard, fetchMaterialBookList, collectColorCardBookDelete, uploadToMarket, cancelUploadToMarket,
} from '@/api/materialMenu';
import { deleteCollectFolder } from '@/api/material';
import Share from '@/pages/components/share/index.vue';
import {
  MaterialList,
} from '@/models/Material';
import { String } from '@vuex-orm/core';
import SdDropdown from '@/components/dropdown/dropdown.vue';
import { t } from '@/i18n/index';
import RenameFolder from './RenameFolder.vue';

//  重命名，分享，删除，上架，下架，查看分享的材料册的分享，查看分享的材料册的收藏
type Command = 'rename' | 'share' | 'delete' | 'onShelf' | 'offShelf' | 'shareShare' | 'shareCollect';
// 收藏夹，材料册，色卡本，收藏夹中的色卡中，查看分享的材料册

type ReceiveType = 'collect' | 'MaterialBook' | 'ColorCard' | 'collectColorCard' | 'MaterialBookShare' | 'MerchantMaterialBook';

export default defineComponent({
  name: 'SdFolder',
  components: { SdDropdown },
  props: {
    folderInfo: {
      type: Object,
      default: () => ({}),
    },
    receiveType: {
      type: String as PropType<ReceiveType>,
      required: true,
    },

  },
  emits: ['handleCommand', 'refreshList', 'shareShare', 'shareCollect'],
  setup(props, { emit }) {
    const state = reactive({
      title: '',
      materials: [] as MaterialList,

    });

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const folderCoverImg = require('@/assets/img/public/folder.png');
    watch(() => props.receiveType, (value) => {
      switch (value) {
        case 'MaterialBook':
          state.title = t('folder.material_book');
          break;
        case 'ColorCard':
          state.title = t('folder.color_card_book');
          break;
        case 'collect':
          state.title = t('menu-management.favorites');
          break;
        default:
          break;
      }
    }, { immediate: true });
    const getMaterialList = async (id: string) => {
      const res = await fetchMaterialBookList({

        page: 1, size: 999, keywords: '', fields: { categoryId: [], id },
      });
      const { records } = res;
      state.materials = records;
    };
    const shareMaterialBook = async () => {
      await getMaterialList(props.folderInfo.catalogId);
      if (state.materials.length === 0) {
        ElMessage.error(t('eleMessage.no_share_empty', { name: t('folder.material_book') }));
        return;
      }
      console.log(state.materials, 'state.materials');
      await dialog({
        is: Share,
        props: {
          folderInfo: props.folderInfo,
          shareType: 'folderShare',
          fatherId: props.folderInfo.id,
          showConfig: true,
          materials: state.materials,

        },
      }, {
        noTitle: true,
        props: {
          width: '705px',
        },
      });
    };
    const shareColorCard = async () => {
      if (props.folderInfo.count === 0) {
        ElMessage.error(t('eleMessage.no_share_empty', { name: 'folder.color_card_book' }));
        return;
      }
      await dialog({
        is: Share,
        props: {
          folderInfo: props.folderInfo,
          shareType: 'colorCardShare',

          materials: state.materials,

        },
      }, {
        noTitle: true,
        props: {
          width: '705px',
        },
      });
    };
    const handleOnShelf = async () => {
      if (props.folderInfo.count === 0) {
        ElMessage.error(t('eleMessage.no_upload_empty_material_book'));
        return;
      }
      await confirm({ title: t('eleMessage.upload_to_market_tip') });
      await uploadToMarket([props.folderInfo.catalogId]);
      await emit('refreshList');
      ElMessage.success(t('eleMessage.operation_success'));
    };
    const handleOffShelf = async () => {
      await confirm({ title: t('eleMessage.cancel_to_market_tip') });
      await cancelUploadToMarket([props.folderInfo.catalogId]);
      await emit('refreshList');
      ElMessage.success(t('eleMessage.operation_success'));
    };
    const handleCommand = async (command: Command) => {
      console.log(command);
      switch (command) {
        case 'rename':

          await dialog({
            is: RenameFolder,
            props: {
              receiveType: props.receiveType,
              detailId: props.folderInfo.id || props.folderInfo.catalogId,
              name: props.folderInfo.name,
            },
          });
          await emit('refreshList');

          break;
        case 'share':
          if (props.receiveType === 'MaterialBook') {
            await shareMaterialBook();
          } else {
            await shareColorCard();
          }


          break;
        case 'delete':
          console.log(22);
          await confirm({ title: `${t('folder.whether_empty')}${state.title}${t('folder.and_delete')}` });
          switch (props.receiveType) {
            case 'MaterialBook':
              await deleteMaterialBook(props.folderInfo.catalogId);
              break;
            case 'ColorCard':
              await deleteColorCard(props.folderInfo.id);
              break;
            case 'collect':
              await deleteCollectFolder({ folderId: props.folderInfo.catalogId, folderName: props.folderInfo.name });
              break;
            case 'collectColorCard':
              await collectColorCardBookDelete([props.folderInfo.id]);
              break;
            default: break;
          }
          await emit('refreshList');
          ElMessage.success(t('delete_success'));
          // loadTable();
          break;
        case 'onShelf':
          await handleOnShelf();
          break;
        case 'offShelf':
          await handleOffShelf();
          break;
        case 'shareShare':
          emit('shareShare');
          break;
        case 'shareCollect':
          emit('shareCollect');
          break;
        default:
          break;
      }
    };

    return {
      ...toRefs(state),
      folderCoverImg,
      handleCommand,
      handleOnShelf,
      handleOffShelf,
    };
  },
});
</script>

<style lang="scss">
.sd-folder {
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  // margin-bottom: 20px;

  // &.large {
  //   // $min-form-item-width: 220px !global;
  //   // $form-item-padding: 8px !global;
  //   .title {
  //     font-weight: 600;
  //   }
  // }
  // &.small {
  //   // $min-form-item-width: 140px !global;
  //   // $form-item-padding: 3px !global;
  //   .title {
  //     text-align: center;
  //   }
  // }

  .cover-box {
    // min-width: $min-form-item-width;
    height: 0;
    position: relative;
    padding-bottom: 56.4%;
    // background-color: rgba(0, 0, 0, 0.06);
  }
  .conver-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: stretch;
  }
  .cover-img {
    height: 100%;
  }
  &:hover {
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
    }
    .description {
      color: #999999;
      font-size: 12px;
    }
  }
}
</style>
