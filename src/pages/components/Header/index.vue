<template>
  <div class="header flex-space-between">
    <img :src="require('@/assets/img/login/logo-register.png')" class="logo" @click="handleTabChange('/main/home')" />
    <el-tabs
      v-if="isBuyer && !isSearchFocus"
      v-model="header.tab"
      class="sd-tabs flex-start flex-1"
      @tab-click="handleTabChange"
    >
      <el-tab-pane
        v-for="{ id, name, children, path } of header.tabList"
        :key="id"
        :label="name"
        :name="id"
        :tabInfo="{ id, name, children, path }"
      >
        <template #label>
          <span v-if="!children">{{ name }} </span>
          <el-dropdown v-else-if="Array.isArray(children)" @command="handleTabChange">
            <span class="dropdown-tab"> {{ name }}<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="child in children" :key="child.id" :command="child.path">
                  {{ child.name }}
                </el-dropdown-item>
                <!-- <el-dropdown-item command="colorBook">{{ $t("folder.my_color_card") }}</el-dropdown-item> -->
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-tab-pane>
    </el-tabs>
    <div class="header-right">
      <template v-if="isBuyer">
        <div class="search-wrap">
          <SdSearch
            class="header-search"
            v-model="searchText"
            @focus="focus"
            @image-search="imageSearch"
            @change="textSearch"
            :style="searchStyle"
            ref="sdSearchVm"
          ></SdSearch>
        </div>
        <div v-show="!isSearchFocus" class="icons">
          <el-tooltip effect="light" :content="$t('menu-management.favorites')" placement="bottom">
            <i class="i-r-shoucang-12" @click="goCollection"></i>
          </el-tooltip>
          <el-tooltip effect="light" :content="$t('menu-management.application_list')" placement="bottom">
            <i class="i-r-shenqingliebiao-12" @click="goApply"></i>
          </el-tooltip>
        </div>
      </template>

      <!-- <el-popover placement="bottom" :width="320" popper-class="header-dropdown-pop" trigger="click">
        <div class="header-user-info">
          <div class="top">
            <div class="left">
              <UserInfo :size="42" noTitle />
            </div>
            <div class="right">
              <h4 class="name">{{ userName }}</h4>
            </div>
          </div>
          <ul class="menu">
            <li @click="switchLanguage">中英文切换</li>
            <li @click="goProfile">{{ $t("public.title") }}</li>
            <li @click="goNews">消息</li>
            <li @click="goHelpCenter">帮助中心</li>
            <li @click="_logout">退出登录</li>
          </ul>
        </div>

        <template #reference>
          <div class="user-info-wrap">
            <UserInfo v-show="!isSearchFocus" :size="28" noTitle />
          </div>
        </template>
      </el-popover> -->
      <template v-if="companyInfo?.isAdmin">
        <el-divider direction="vertical" v-if="isBuyer"></el-divider>
        <el-tooltip effect="light" :content="$t('menu-management.apps_center')" placement="bottom">
          <i class="icon-app-center i-s-yingyongzhongxin-16" @click="$needFillInfo() && goAppCenter()"></i>
        </el-tooltip>
      </template>
      <UserMenu>
        <template #reference>
          <UserInfo v-show="!isSearchFocus" :size="28" noTitle />
        </template>
      </UserMenu>

      <span v-show="isSearchFocus" class="close-wrap" @click="closeSearch">
        <i class="el-icon-close"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, reactive, ref, toRefs, watch,
} from 'vue';
import { getContextCompany, getContextUser, logout } from '@/loaders/context';
import { getHomeRedirect, mainComponent } from '@/pages/login/utils/loginStore';

import { useRoute, useRouter } from 'vue-router';
import SdSearch from '@/components/search/index.vue';
import { getPx } from '@/utils/util';
import usePermisson from '@/utils/uses/use-permisson';
import i18n, { setLang, langConfigList } from '@/i18n/index';
import history from '@/utils/history';
import { Pane as TabPane } from 'element-plus/lib/el-tabs/src/tabs.vue';
import envs from '@/utils/envs';
import { searchBaseImage } from '../material/utils';
import UserInfo from './components/UserInfo';
import useHeader, { tabItemInfo } from './components/useHeader';
import UserMenu from './components/UserMenu.vue';

export default defineComponent({
  name: 'header',
  components: { UserInfo, SdSearch, UserMenu },
  props: {},
  setup(props, { emit }) {
    const sdSearchVm = ref<InstanceType<typeof SdSearch>>();
    const router = useRouter();
    const route = useRoute();
    const header = useHeader();
    const { isSupplier, isBuyer } = usePermisson();
    const user = computed(() => getContextUser());
    const companyInfo = computed(() => getContextCompany());
    const state = reactive({
      searchText: '',
      isSearchFocus: false,
    });
    const searchStyle = computed(() => {
      const LARGE_WIDTH = 500;
      const SMALL_WIDTH = 140;
      const POS_RIGHT = companyInfo.value?.isAdmin ? 220 : 160;
      return {
        width: state.isSearchFocus ? getPx(LARGE_WIDTH) : getPx(SMALL_WIDTH),
        right: state.isSearchFocus ? `calc(50% -  ${getPx(LARGE_WIDTH / 2)})` : getPx(POS_RIGHT),
      };
    });

    const userName = computed(() => user.value?.name || user.value?.account || '');

    watch(() => header.tab, () => {
      if (header.tab === '材料库') return;
      state.searchText = '';
    });
    // const goProfile = () => {
    //   router.push('/profile');
    // };
    // const goNews = () => {
    //   router.push('/news');
    // };
    // const goHelpCenter = () => {
    //   router.push('/help-center');
    // };
    const goCollection = () => {
      const path = isSupplier.value ? '/main/collection/folders' : '/buyer/collection/folders';
      router.push(path);
    };
    const goApply = () => {
      router.push('/applyRecordBuyer');
    };
    const goAppCenter = () => {
      history.push({ path: `${envs.VUE_APP_USER_CENTER_HOST_NAME || ''}/app-center/main`, query: { originType: envs.VUE_APP_ORIGIN_TYPE } });
    };
    const closeSearch = () => {
      state.isSearchFocus = false;
    };
    // const _logout = async () => {
    //   await logout();
    //   mainComponent.value = {
    //     name: 'login',
    //     props: {},
    //   };
    //   router.push('/login');
    // };
    const focus = () => {
      state.isSearchFocus = true;
    };
    const blur = () => {
      state.isSearchFocus = false;
    };
    const textSearch = () => {
      header.keywords = state.searchText;
      if (route.path !== '/search/base') {
        router.push('/search/base');
      }
      state.isSearchFocus = false;
      sdSearchVm.value?.inputEl?.blur();
    };
    const imageSearch = (file: File | undefined, clearFile: () => void) => {
      // header.searchImageFile = file;
      if (file) {
        searchBaseImage(file);
        // if (route.path !== '/search/base') {
        //   router.push('/search/base');
        // }
      }
    };
    const handleTabChange = async (tab: TabPane | String) => {
      console.warn(tab);
      let _path;
      if (typeof tab === 'string') {
        _path = tab;
      } else {
        if (!tab.instance) {
          return;
        }
        const { attrs: { tabInfo } } = tab.instance;
        if (!header.tab || tabInfo.children) return;
        if (header.tab !== '材料库') header.keywords = '';
        _path = tabInfo.path;
        if (typeof _path === 'function') {
          _path = await _path();
        }
      }
      router.push(_path);
      // switch (header.tab) {
      //   case '首页':
      //     {
      //       const homeRoute = await getHomeRedirect();
      //       router.push(homeRoute);
      //     }
      //     break;
      //   case '材料库':
      //     router.push({
      //       path: '/search/base',
      //     });
      //     break;
      //   case '颜色库':
      //     return;
      //   case '商家中心':
      //     router.push({
      //       path: '/merchant/home',
      //     });
      //     break;
      //   default:
      //     break;
      // }
    };

    // const handleColorCommand = (command: 'coloro' | 'colorBook') => {
    //   switch (command) {
    //     case 'coloro':
    //       router.push({
    //         path: '/buyer/color/coloro-gradient',
    //       });
    //       break;
    //     case 'colorBook':
    //       router.push({
    //         path: '/buyer/color-card-book',
    //       });
    //       break;
    //     default:
    //       break;
    //   }
    // };

    async function switchLanguage(langNum: number) {
      const langConfig = {
        name: 'English(英)',
        num: 1,
        lang: 'en',
        icon: require('@/assets/img/lang/icon_en.png'),
      };
      try {
        const langstr = langConfig?.lang as 'en' | 'cn';
        // await $confirm(i18n.t('setting.confirm_change_language', {
        //   lang: i18n.t(`setting.${langstr}`),
        // }), i18n.t('setting.confirm'));
        setLang(langstr);
      } catch (e) {
        emit('reset-lang');
      }
    }
    return {
      ...toRefs(state),
      sdSearchVm,
      isSupplier,
      isBuyer,
      userName,
      header,
      companyInfo,
      searchStyle,
      // goProfile,
      // goNews,
      // goHelpCenter,
      goCollection,
      goApply,
      goAppCenter,
      // _logout,
      focus,
      blur,
      closeSearch,
      textSearch,
      imageSearch,
      handleTabChange,
      switchLanguage,
      // handleColorCommand,
    };
  },
});
</script>

<style lang="scss" scoped>
// @import 'url'
.header {
  height: 63px;
  background: #ffffff;
  padding: 0 30px;
  border-bottom: 1px solid #dddddd;
  position: relative;
  .sd-tabs {
    padding-left: 40px;
    .dropdown-tab {
    }
  }
  .logo {
    // margin: 0 0 30px -16px;
    height: 28px;
    margin-left: 20px;
    cursor: pointer;
  }
  .header-right {
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
      margin-right: 20px;
      color: #666666;
      cursor: pointer;
      transition: color 0.2s;
      &:hover {
        color: $color-primary;
      }
    }
    .icon-app-center {
      color: #999;
    }
    .el-divider {
      margin-left: 0;
      margin-right: 20px;
    }
    .user-info-wrap {
      cursor: pointer;
    }
    .search-wrap {
      width: 140px;
      .header-search {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s;
      }
    }
    .el-dropdown {
      line-height: unset;
    }
    .close-wrap {
      display: inline-block;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3f2f2;
      border-radius: 50%;
      .el-icon-close {
        font-size: 16px;
        margin-right: 0;
        font-weight: bold;
      }
    }
  }
}
</style>


