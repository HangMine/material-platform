<template>
  <main class="comp-main verify-code">
    <nav>
      <a href="javascript:;" @click="handleBack"> <i class="icon i-r-zuo-12"></i> {{ $t("back") }} </a>
    </nav>
    <h3 class="login-title">{{ computedState.title }}</h3>
    <div class="desc-text">
      {{ $t("login.send_to") }} <b>{{ account }}</b> {{ $t("login.verificate")
      }}<BtnSendVerifyCode btnType="text" :account="account" :codeType="computedState.codeType"></BtnSendVerifyCode>
    </div>
    <slot name="prevFormItems"></slot>
    <IdentCode
      v-model="identCode"
      :disabled="disabled"
      :type="computedState.codeType"
      :account="account"
      autocomplete="new-password"
      ref="codeVm"
    ></IdentCode>
  </main>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch,
} from 'vue';

import { t } from '@/i18n/index';
import useCode from '../utils/useCode';
import IdentCode from '../components/inputs/IdentCode.vue';
import BtnSendVerifyCode from '../components/BtnSendVerifyCode.vue';

export default defineComponent({
  name: 'verify-code',
  components: {
    IdentCode,
    BtnSendVerifyCode,
  },
  props: {
    type: {
      type: String as PropType<'login' | 'reset-password' | 'register' | 'bind' | 'logoff'>,
      required: true,
    },
    account: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'back'],
  setup(props, { emit }) {
    const codeVm = ref<InstanceType<typeof IdentCode>>();

    const state = reactive({
      identCode: '',
    });

    watch(() => props.modelValue, (value) => {
      state.identCode = value;
    }, { immediate: true });

    watch(() => state.identCode, (value) => {
      emit('update:modelValue', value);
    });

    const computedState = computed(() => {
      switch (props.type) {
        case 'login': return {
          title: t('login.verification_code_login'),
          btnTitle: t('login.register'),
          codeType: 'LOGIN',
          repeatPasswordTitle: t('login.confirm_password'),
        };
        case 'register': return {
          title: t('login.registered_account'),
          btnTitle: t('login.sign_in'),
          codeType: 'REGISTER',
          repeatPasswordTitle: t('login.confirm_password'),
        };
        case 'bind': return {
          title: t('login.for_your_account_security'),
          btnTitle: t('login.confirm_binding'),
          codeType: 'REGISTER',
          repeatPasswordTitle: t('login.confirm_password'),
        };
        case 'reset-password':
        default: return {
          title: t('login.reset_password'),
          btnTitle: t('login.reset_password'),
          codeType: 'UPDATE_PASS',
          repeatPasswordTitle: t('login.confirm_new_password'),
        };
      }
    });

    const accountRef = computed(() => props.account);
    const { disabled } = useCode(accountRef);

    const handleBack = () => {
      state.identCode = '';
      emit('back');
    };
    return {
      ...toRefs(state),
      codeVm,
      disabled,
      computedState,
      handleBack,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.verify-code {
  nav {
    margin-bottom: 32px;
    i {
      font-size: 12px;
    }
  }
  .login-title {
    // font-size: 20px;
    margin-bottom: 8px;
    // font-weight: 500;
    // color: #222200;
  }
  .desc-text {
    line-height: 20px;
    margin-bottom: 16px;
  }

  // .wx-icon {
  //   font-size: 30px;
  // }

  // .footer-link {
  //   display: flex;
  //   align-items: center;
  //   justify-content: flex-end;
  // }
}
</style>
