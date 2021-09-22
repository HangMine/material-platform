<template>
  <div
    class="page-share flex-column flex-1"
    :class="{
      'page-supplier-share': isSupplier,
      'page-buyer-share': isBuyer,
      'page-not-login': !(isSupplier || isBuyer),
    }"
  >
    <Header v-if="showHeader"></Header>
    <div class="layout">
      <Sidebar v-if="showSidebar"></Sidebar>
      <div class="share-content">
        <header>
          <div class="header-content">
            <TopNav
              :headLine="headLine"
              @goBackEvent="changeShowFolderList"
              :custom="true"
              :subHead="folderInfo.name"
              v-if="!showFolderList"
            >
            </TopNav>
            <div class="introduction-box">
              <UserInfo :size="32" :userContext="shareUserInfo" />
              <CollapseText :content="introduction"></CollapseText>
              <!-- <TextCollapse v-show="introduction" :content="introduction" :showHeight="44"></TextCollapse> -->
            </div>
          </div>
        </header>

        <FolderList
          v-if="shareLinkType === 'folderShare'"
          @showTab="showTab"
          :canShareAgain="canShareAgain"
          :shareLinkType="shareLinkType"
          :shareId="shareId"
          :folderInfo="folderInfo"
          :showFolderList="showFolderList"
        ></FolderList>
        <ColorCardList
          v-else-if="shareLinkType === 'colorCardShare'"
          @showTab="showTab"
          :canShareAgain="canShareAgain"
          :shareLinkType="shareLinkType"
          :shareId="shareId"
          :folderInfo="folderInfo"
          :showFolderList="showFolderList"
        ></ColorCardList>
        <Main v-else :canShareAgain="canShareAgain" :shareId="shareId" :shareInfo="shareInfo"></Main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, reactive, toRefs,
} from 'vue';
// import TextCollapse from '@/components/upDown/index.vue';
import CollapseText from '@/components/collapse/CollapseText.vue';
import { useRoute, useRouter } from 'vue-router';
import * as api from '@/api/share';
import { ElMessageBox } from 'element-plus';
import onCreated from '@/utils/vue/onCreated';
import TopNav from '@/pages/main/materialMenu/components/TopNav.vue';
import UserInfo from '@/pages/components/Header/components/UserInfo';
import { t } from '@/i18n/index';
import Header from '@/pages/components/Header/index.vue';
import usePermisson from '@/utils/uses/use-permisson';
import Sidebar from '@/pages/components/Sidebar/index.vue';

import Main from './main/index.vue';
import FolderList from './components/FolderList.vue';
import ColorCardList from './components/ColorCardList.vue';

export default defineComponent({
  name: 'page-share',
  components: {
    Header,
    UserInfo,
    Main,
    // TextCollapse,
    FolderList,
    TopNav,
    ColorCardList,
    Sidebar,
    CollapseText,
  },
  setup() {
    const { query: { shareId, valid, shareLinkType } } = useRoute();
    const router = useRouter();
    const { user, isSupplier, isBuyer } = usePermisson();
    const showHeader = computed(() => !!user.value);
    const showSidebar = computed(() => !!(user.value && isSupplier.value));
    if (!shareId) {
      ElMessageBox.alert(t('share.the_share_novalid'), t('share.error'), {
        confirmButtonText: t('share.log_out'),
        callback: () => {
          router.replace({ name: 'Login' });
        },
      });
      return false;
    }
    const state = reactive({
      folderInfo: {} as api.folderInfoType,
      canShareAgain: false,
      introduction: '',
      shareUserInfo: {} as { headImg?: String, name?: String, account?: String },
      shareInfo: {} as AsyncReturnType<typeof api.fetchShareConfig>['data'],
      isShowTab: false,
      showFolderList: true,
      headLine: shareLinkType === 'folderShare' ? t('folder.material_book') : shareLinkType === 'colorCardShare' ? t('folder.color_card_book') : '',
    });

    const getShareInfo = async () => {
      const shareInfo = await api.fetchShareConfig(shareId as string);
      const shareType = shareInfo.data.type; // 分享权限: 1-公开|2-加密
      if (shareType === 2 && !valid) {
        router.replace({ path: 'share-validation', query: { shareId, shareLinkType } });
      }
      state.canShareAgain = !!shareInfo.data.isAgain;
      state.introduction = shareInfo.data.subject;
      state.shareUserInfo = {
        name: shareInfo.data.creatorName || '',
        headImg: shareInfo.data.creatorIcon || '',
      };
      state.shareInfo = shareInfo.data;
    };

    const showTab = () => {
      state.showFolderList = false;
    };
    const changeShowFolderList = () => {
      state.showFolderList = !state.showFolderList;
    };
    const setShareInfo = async () => {
      await getShareInfo();
      if (shareLinkType === 'folderShare') {
        const res = (await api.fetchMaterialShare(shareId as string));
        const folderInfo = res[0];
        state.folderInfo = folderInfo;

        console.log(state.folderInfo, 'state.folderInfo');
      } else if (shareLinkType === 'colorCardShare') {
        const res = (await api.fetchColorCardContent(shareId as string));
        const folderInfo = res;


        state.folderInfo = folderInfo;
      }
    };

    onCreated(async () => {
      await setShareInfo();
    });

    return {
      ...toRefs(state),
      user,
      showHeader,
      showSidebar,
      isSupplier,
      isBuyer,
      shareId,
      shareLinkType,
      showTab,
      changeShowFolderList,
    };
  },
});
</script>


<style lang="scss" scoped>
.page-share {
  height: 0;
  .layout {
    display: flex;
    flex: 1;
  }
}
.share-content {
  flex: 1;
  background: #fafbfc;

  .introduction-box {
    padding-top: 2px;
    padding-bottom: 4px;
    padding: 20px;
    background-color: #fff;
    // margin-bottom: -46px;
    .user-info + .collapse-text {
      margin-top: 12px;
      margin-left: 44px;
    }
  }
}
</style>

<style lang="scss">
.page-not-login {
  .header-content,
  .collect-or-material-folder,
  .share-header + main {
    // padding: unset !important;
    @include layout-elastic-center-container();
  }
  .introduction-box {
    padding: 20px 0 !important;
  }
  header {
    background-color: #fff;
  }
}
.page-buyer-share {
  .top-nav {
    background: transparent;
    border: none;
    padding: 0;
  }
  header,
  .collect-or-material-folder,
  .share-header + main {
    @include layout-elastic-center-container();
  }
  header {
    box-shadow: none;
  }
  .introduction-box {
    margin-top: 20px;
  }
  .top-nav + .introduction-box {
    margin-top: 0;
  }
}
.page-supplier-share {
  .main-home-sidebar + .share-content {
    padding: 20px;
  }
  header {
    box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.1);
  }
}
</style>
