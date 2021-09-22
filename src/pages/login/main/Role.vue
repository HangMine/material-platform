<template>
  <main class="comp-main" v-loading="loading">
    <div class="role">
      <h3 class="login-title">{{ $t("login.choose_role") }}</h3>
      <ul class="role-choose">
        <li v-for="(item, i) of roles" :key="i" @click="chooseRole(item)">
          <div class="img-wrap">
            <img v-show="item.accountType === accountType" :src="item.activeImg" />
            <img v-show="item.accountType !== accountType" :src="item.img" />
          </div>
          <p class="name">{{ item.name }}</p>
          <p v-for="(title, i) of item.titles" :key="i">{{ title }}</p>
        </li>
      </ul>

      <el-button
        v-if="type === 'initialize'"
        class="login-btn"
        :disabled="disabled"
        type="primary"
        @click="handleInitialize"
        >{{ $t("public.dialog.confirm") }}</el-button
      >
      <template v-else>
        <el-button class="login-btn" :disabled="disabled" type="primary" @click="next">{{
          $t("public.dialog.next")
        }}</el-button>
        <p class="flex-center">
          {{ $t("login.existing_account") }}<span class="text-link" @click="toLogin">{{ $t("login.sign_in") }}</span>
        </p>
      </template>
    </div>
  </main>
</template>

<script lang="ts">
import { AccountType, initializeAccount } from '@/api/account';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { t } from '@/i18n/index';
import {
  accountType, mainComponent,
} from '../utils/loginStore';

export default defineComponent({
  name: 'role',
  components: {},
  props: {
    // 类别: 该组件两处使用场景: 1-账户注册|2-账户初始化
    type: {
      type: String as PropType<'login' | 'initialize'>,
      default: 'login',
    },
    resetPasswordType: {
      type: String as PropType<'reset' | 'bind'>,
    },
    qrcodeScene: {
      type: String,
    },
  },
  emits: ['change-component', 'confirm'],
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      // activeRole: -1,
    });
    const roles = computed(() => {
      return [{
        accountType: 11 as const,
        name: t('login.supplier'),
        titles: [t('login.material_release_and_promotion'), t('login.buyer_demand_response')],
        isActive: false,
        img: require('@/assets/img/login/supplyer.png'),
        activeImg: require('@/assets/img/login/supplyer-active.png'),
      }, {
        accountType: 12 as const,
        name: t('login.buyers'),
        titles: [t('login.material_order'), t('login.demand_release')],
        isActive: false,
        img: require('@/assets/img/login/buyer.png'),
        activeImg: require('@/assets/img/login/buyer-active.png'),
      }];
    });
    const disabled = computed(() => !accountType.value || ![11, 12].includes(accountType.value));
    const chooseRole = (role: GetArrayItem<typeof roles.value>) => {
      accountType.value = role.accountType;
      // roles.value.forEach(item => {
      //   item.isActive = role.accountType === item.accountType ? !item.isActive : false;
      // });
      // console.log(roles.value);
    };
    const next = () => {
      // accountType.value = roles.value.find(item => item.isActive === true)?.accountType;
      if (props.resetPasswordType) {
        mainComponent.value = {
          name: 'reset-password',
          props: { type: props.resetPasswordType },
        };
      } else {
        mainComponent.value = {
          name: 'register',
          props: {},
        };
      }
    };
    const toLogin = () => {
      mainComponent.value = {
        name: 'login',
        props: {
          qrcodeScene: props.qrcodeScene,
        },
      };
    };
    const handleInitialize = async () => {
      state.loading = true;
      // const _accountType = roles.value.find(item => item.isActive === true)?.accountType;
      if (disabled.value) {
        return;
      }
      await initializeAccount(accountType.value!);
      state.loading = false;
      emit('confirm');
    };
    return {
      ...toRefs(state),
      next,
      toLogin,
      chooseRole,
      accountType,
      disabled,
      handleInitialize,
      roles,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.role {
  .role-choose {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 36px 0 20px 0;
      font-size: 12px;
      color: #999999;
      cursor: pointer;
      line-height: 18px;

      .img-wrap {
        width: 76px;
        height: 76px;
        margin-bottom: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .name {
        font-size: 16px;
        color: #222222;
        margin: 8px 0;
      }
    }
  }
}
</style>
