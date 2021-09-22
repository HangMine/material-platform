<template>
  <el-popover placement="bottom" :width="320" popper-class="header-dropdown-pop" trigger="click">
    <div class="header-user-info">
      <div class="top">
        <div class="left">
          <UserInfo :size="42">
            <template #desc v-if="!isBuyer">
              <PackageBadge @click="companyInfo?.isAdmin && $needFillInfo() && toOpenMemeber()" />
              <!-- <PackageBadge badgeType="star" @click="$act(toOpenMemeber)" /> -->
            </template>
          </UserInfo>
        </div>
      </div>
      <div class="to-certificate-area flex-space-between" v-if="!companyInfo?.isFilled">
        <span class="flex-vertical-center">
          <VBadge />
          {{ $t("header.no_complete_compony_info") }}
        </span>
        <ButtonBadge :content="$t('header.to_perfect')" @click="$act(toFillCompanyInfo, [])" />
      </div>
      <!-- <ul class="account-statistic-area" v-if="companyInfo?.isVIP">
        <li>
          <div class="progress-item flex-space-between">
            <label>{{ $t("header.account_valid") }}</label>
            <span
              >{{ usageInfo.validPeriod - usageInfo.validPeriodUsed }}{{ $t("day") }}/{{ usageInfo.validPeriod
              }}{{ $t("day") }}</span
            >
          </div>
          <el-progress :percentage="validPeriodUsagePercent || 0" :show-text="false"></el-progress>
        </li>
        <li>
          <div class="progress-item flex-space-between">
            <label>{{ $t("header.account_number") }}</label>
            <span
              >{{ usageInfo.subAccount - usageInfo.subAccountUsed }}{{ $t("number") }}/{{ usageInfo.subAccount
              }}{{ $t("number") }}</span
            >
          </div>
          <el-progress :percentage="subAccountUsagePercent || 0" :show-text="false"></el-progress>
        </li>
      </ul> -->
      <el-divider></el-divider>
      <ul class="menu">
        <li @click="$can('0500') && goProfile()">{{ $t("header.personal_center") }}</li>
        <li v-if="isSupplier" @click="$can('0500') && goMerchantDiy()">{{ $t("header.business_primary_setting") }}</li>
        <li @click="$can('0500') && goFollowedMerchantList()">{{ $t("header.follow_list") }}</li>
        <li v-if="companyInfo?.isAdmin" @click="$can('0504') && goAccount()">{{ $t("header.account_setting") }}</li>
      </ul>
      <el-divider></el-divider>
      <ul class="menu">
        <li @click="$can('0500') && goNews()">{{ $t("header.news") }}</li>
        <!-- <li @click="switchLanguage">{{ $t("header.language_change") }}</li> -->
        <li @click="$can('0500') && goHelpCenter()">{{ $t("header.help_center") }}</li>
      </ul>
      <el-divider></el-divider>
      <ul class="menu">
        <li @click="goLogoff">{{ $t("header.cancellation") }}</li>
        <li @click="handleLogout">{{ $t("header.logout") }}</li>
      </ul>
    </div>

    <template #reference>
      <div class="user-info-wrap">
        <slot name="reference"></slot>
        <!-- <UserInfo :size="28" noTitle /> -->
      </div>
    </template>
  </el-popover>
</template>

<script lang="ts">
import {
  ref, computed, onMounted, onUnmounted, getCurrentInstance, defineComponent, PropType,
} from 'vue';
import { getContextCompany, getContextUser, logout } from '@/loaders/context';
import envs from '@/utils/envs';
import history from '@/utils/history';
import User from '@/models/User';
import Company from '@/models/Company';
import { fetchResourceUsageInfo } from '@/api/auth';
import onCreated from '@/utils/vue/onCreated';
import { getHomeRedirect, mainComponent } from '@/pages/login/utils/loginStore';
import usePermisson from '@/utils/uses/use-permisson';
import {
  currentLang, setLang, langStore,
} from '@/i18n/index';
import SdTableI18n from '@/components/sd-table/i18n';
// import { getCurrentApp } from '@/main';
import PackageBadge from '@/pages/components/Header/components/PackageBadge.vue';
import ButtonBadge from '@/pages/components/Header/components/ButtonBadge.vue';
import VBadge from '@/pages/components/Header/components/VBadge.vue';
import UserInfo from './UserInfo/index';

export default defineComponent({
  name: 'Header',
  components: {
    UserInfo, PackageBadge, ButtonBadge, VBadge,
  },
  props: {
  },
  setup(props, { emit }) {
    const user = computed(() => getContextUser());
    const companyInfo = computed(() => getContextCompany());
    const userName = computed(() => user.value?.name || user.value?.account || '');
    const { isBuyer, isSupplier } = usePermisson();

    const usageInfo = ref({
      validPeriod: 0,
      validPeriodUsed: 0,
      subAccount: 0,
      subAccountUsed: 0,
    });
    const goProfile = () => {
      history.push({ path: `${envs.VUE_APP_USER_CENTER_HOST_NAME || ''}/user-profile/info`, query: { originType: envs.VUE_APP_ORIGIN_TYPE } });
    };
    const goMerchantDiy = () => {
      history.push({ path: '/merchant/detail', query: { isDiy: true } });
    };
    const goFollowedMerchantList = () => {
      history.push({ path: '/merchant/followed' });
    };
    const goAccount = () => {
      history.push({ path: `${envs.VUE_APP_USER_CENTER_HOST_NAME || ''}/user-profile/account`, query: { originType: envs.VUE_APP_ORIGIN_TYPE } });
    };
    const goNews = () => {
      history.push({ path: '/news' });
    };
    const goHelpCenter = () => {
      history.push({ path: '/help-center' });
    };
    const goLogoff = () => {
      history.push({ path: `${envs.VUE_APP_USER_CENTER_HOST_NAME || ''}/logoff/main`, query: { originType: envs.VUE_APP_ORIGIN_TYPE } });
    };
    const handleLogout = async () => {
      await logout();
      mainComponent.value = {
        name: 'login',
        props: {},
      };
      history.push('/login');
    };

    // const getResourceUsageInfo = async () => {
    //   const res = await fetchResourceUsageInfo();
    //   usageInfo.value.validPeriod = res.validPeriod || 1;
    //   usageInfo.value.validPeriodUsed = res.validPeriodUsed || 0;
    //   usageInfo.value.subAccount = res[envs.VUE_APP_ORIGIN_TYPE === 'FIM' ? 'subAccount' : 'materialSubAccount'] || 1;
    //   usageInfo.value.subAccountUsed = res[envs.VUE_APP_ORIGIN_TYPE === 'FIM' ? 'subAccountUsed' : 'materialSubAccountUsed'] || 0;
    // };
    // const validPeriodUsagePercent = computed(() => Math.round((1 - usageInfo.value.validPeriodUsed / usageInfo.value.validPeriod) * 100));
    // const subAccountUsagePercent = computed(() => Math.round((1 - usageInfo.value.subAccountUsed / usageInfo.value.subAccount) * 100));

    // onCreated(() => {
    //   getResourceUsageInfo();
    // });
    async function switchLanguage(langNum: number) {
      try {
        const langstr = currentLang.value === 'cn' ? 'en' : 'cn';
        setLang(langstr);
        SdTableI18n.setLang(langstr);
      } catch (e) {
        emit('reset-lang');
      }
    }
    return {
      currentLang,
      userName,
      goProfile,
      goMerchantDiy,
      goAccount,
      goFollowedMerchantList,
      goNews,
      goHelpCenter,
      handleLogout,
      goLogoff,
      // validPeriodUsagePercent,
      // subAccountUsagePercent,
      usageInfo,
      companyInfo,
      isBuyer,
      isSupplier,
      switchLanguage,
      toOpenMemeber() {
        history.push({ path: `${envs.VUE_APP_USER_CENTER_HOST_NAME || ''}/user-profile/vip-center` });
      },
      toFillCompanyInfo() {
        history.push({ path: `${envs.VUE_APP_USER_CENTER_HOST_NAME || ''}/user-profile/info` });
      },
    };
  },
});
</script>
<style lang="scss">
.header-dropdown-pop {
  padding: 0 !important;
  border: none !important;
  // .popper__arrow {
  //   &::after {
  //     border-bottom-color: #32c4bd !important;
  //   }
  // }
  .el-popper__arrow {
    top: -4px !important;
    &::before {
      border-left-color: #32c4bd !important;
      border-top-color: #32c4bd !important;
      background: #32c4bd !important;
    }
  }
  .to-certificate-area {
    background: #f5f6f7;
    color: #222;
    padding: 10px;
    margin: 8px;
    border-radius: 20px;
    .v-badge {
      margin-right: 4px;
    }
  }
  .account-statistic-area {
    margin: 12px 16px;
    li {
      .progress-item {
        padding: 4px 0 2px;
        label {
          font-weight: 500;
          line-height: 20px;
        }
        span {
          color: #ccc;
        }
      }
      & + li {
        margin-top: 10px;
      }
    }
  }
  .el-divider {
    background-color: #eee;
    width: unset;
    margin: 0 16px;
  }
}
.header-user-info {
  .top {
    height: 80px;
    background-image: url("~@/assets/img/header/user-info-header-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 16px;
    .left {
      margin-right: 10px;
    }
    .right {
      .name {
        color: #ffffff;
        line-height: 22px;
        font-size: 16px;
      }
    }
  }
  .menu {
    padding: 6px 0 4px;
    > li {
      line-height: 36px;
      padding: 0 20px;
      cursor: pointer;
      font-size: 12px;
      color: #222222;
      &:hover {
        background-color: #e6f8f8;
        color: $color-primary;
      }
    }
  }
  .user-info .title {
    color: #fff;
  }
}
</style>
