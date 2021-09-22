<template>
  <div class="share-folder-list">
    <div class="list-box" id="folderListWrap" v-if="showFolderList">
      <CollectOrMaterialFolder
        :tableList="[folderInfo]"
        @chooseRow="showFolder"
        @shareShare="shareShare"
        @shareCollect="shareCollect"
        receiveType="MaterialBookShare"
      >
      </CollectOrMaterialFolder>
    </div>

    <div v-else class="material-list">
      <FolderBookList
        canShareAgain="true"
        :shareId="folderInfo.catalogId"
        :shareLinkType="shareLinkType"
      ></FolderBookList>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, computed, watch,
} from '@vue/runtime-core';
import { dialog } from '@/utils/vue/dialog';
import { ElMessage } from 'element-plus';
import FolderShare from '@/pages/components/share/index.vue';
import {
  MaterialList,
} from '@/models/Material';
import {
  fetchMaterialBookList, collectMaterialBook,
} from '@/api/materialMenu';
import { getContextUser } from '@/loaders/context';
import { t } from '@/i18n/index';
import CollectOrMaterialFolder from '@/pages/components/FolderList/components/CollectOrMaterialFolder.vue';
import FolderBookList from '../main/index.vue';

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
  components: { FolderBookList, CollectOrMaterialFolder },
  emits: ['showTab'],
  setup(props, { emit }) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const folderCoverImg = require('@/assets/img/public/folder.png');
    const state = reactive({
      showFolderList: props.showFolderList || true,
      materials: [] as MaterialList,

    });
    console.log(state.showFolderList, 'state.showFolderList');
    const user = computed(() => getContextUser());
    const showFolder = () => {
      state.showFolderList = false;
      emit('showTab');
    };
    const getMaterialList = async (id: string) => {
      const res = await fetchMaterialBookList({

        page: 1, size: 999, keywords: '', fields: { categoryId: [], id },
      });
      const { records } = res;
      state.materials = records;
    };
    watch(() => props.showFolderList, (value) => {
      state.showFolderList = value;
      console.log(value, 'value');
    });
    const shareCollect = async () => {
      if (user?.value?.id === props.folderInfo.creator) {
        ElMessage.error(t('eleMessage.do_not_collect_own', { name: t('folder.material_book') }));
        return;
      }
      await collectMaterialBook({ catalogId: props.folderInfo.catalogId, folderName: props.folderInfo.name });
      ElMessage.success(t('eleMessage.collect_name_success', { name: t('folder.material_book') }));
    };
    const shareShare = async () => {
      if (user?.value?.id === props.folderInfo.creator) {
        ElMessage.error(t('eleMessage.do_not_operation_again', { name: t('folder.material_book') }));
        return;
      }

      if (user?.value?.id !== props.folderInfo.creator && props.folderInfo.isShared === 0) {
        ElMessage.error(t('eleMessage.the_name_notallow_share', { name: t('folder.material_book') }));
        return;
      }

      await getMaterialList(props.folderInfo.catalogId);
      console.log(state.materials, 'state.materials');
      await dialog({
        is: FolderShare,
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

    return {
      ...toRefs(state), folderCoverImg, showFolder, shareShare, shareCollect,
    };
  },

});
</script>
<style lang="scss" scoped>
.share-folder-list {
  .list-box {
    margin-top: 20px;
    // margin: 75px 80px 0;
  }
}
</style>
