<template>
  <main class="comp-main">
    <div class="reset-password">
      <!-- <img :src="require('@/assets/img/login/logo-register.png')" class="login-logo" /> -->
      <el-form :model="form" @submit.prevent ref="formVm">
        <template v-if="step === 'input-account'">
          <h3 class="login-title">{{ computedState.title }}</h3>
          <Account
            v-if="type === 'bind'"
            v-model="form.account"
            @blur="handleBlur"
            @focus="handleFocus"
            :error="repeatError"
          ></Account>
          <Account v-else v-model="form.account"></Account>
          <BtnSendVerifyCode
            :account="form.account"
            @sended="step = 'input-code'"
            codeType="UPDATE_PASS"
          ></BtnSendVerifyCode>
        </template>
        <template v-else>
          <VerifyCode
            :type="type === 'reset' ? 'reset-password' : 'bind'"
            :account="form.account"
            @back="step = 'input-account'"
            v-model="form.code"
          >
            <template #prevFormItems>
              <Password
                v-model="form.password"
                :placeholder="computedState.oldPasswordTitle"
                autocomplete="new-password"
                :rules="complexPwRule"
              ></Password>
              <Password
                v-model="form.repeatPassword"
                :placeholder="computedState.repeatPasswordTitle"
                autocomplete="new-password"
                :rules="repeatPwRule"
              ></Password>
            </template>
          </VerifyCode>
          <Agree v-model="hasAgree"></Agree>
          <el-button class="login-btn" type="primary" :disabled="type === 'bind' && !hasAgree" @click="resetPassword">{{
            computedState.btnTitle
          }}</el-button>
        </template>

        <!-- <IdentCode
          v-model="form.code"
          :disabled="disabled"
          :type="computedState.codeType"
          :account="form.account"
          autocomplete="new-password"
          ref="codeVm"
        ></IdentCode> -->
        <!-- <div v-if="type === 'bind'" class="agree"></div> -->

        <p v-if="type === 'reset'" class="footer-link flex-center">
          <span class="text-link" @click="toRegister">{{ $t("login.register") }}</span>
          <el-divider direction="vertical"></el-divider>
          <span class="text-link" @click="toLogin">{{ $t("login.sign_in") }}</span>
        </p>
      </el-form>
    </div>
  </main>
</template>

<script lang="ts">
import { validateForm } from '@/utils/validators/validate-form';
import {
  defineComponent, reactive, computed, ref, toRefs, toRef, PropType, onMounted,
} from 'vue';
import * as api from '@/api/account';
import { ElForm, ElMessage } from 'element-plus';
import openWindow from '@/utils/open-window';
import { t } from '@/i18n';
import useCode from '../utils/useCode';
import {
  accountType, handleLogined, loading, mainComponent, qrcodeScene,
} from '../utils/loginStore';
import IdentCode from '../components/inputs/IdentCode.vue';
import Account from '../components/inputs/Account.vue';
import Password, { complexPwRule } from '../components/inputs/Password.vue';
import Agree from '../components/Agree.vue';
import useRepeatPwRule from '../utils/useRepeatPwRule';
import useCheckRepeat from '../utils/useCheckRepeat';
import BtnSendVerifyCode from '../components/BtnSendVerifyCode.vue';
import VerifyCode from './VerifyCode.vue';


export default defineComponent({
  name: 'reset-password',
  components: {
    Account,
    // IdentCode,
    Password,
    Agree,
    BtnSendVerifyCode,
    VerifyCode,
  },
  props: {
    type: {
      type: String as PropType<'reset' | 'bind'>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const formVm = ref<typeof ElForm>();
    const codeVm = ref<InstanceType<typeof IdentCode>>();

    const state = reactive({
      form: {
        account: '',
        password: '',
        repeatPassword: '',
        code: '',
      },
      step: 'input-account' as 'input-account' | 'input-code',
      successCountDown: 3,
    });
    const { repeatError, handleBlur, handleFocus } = useCheckRepeat(formVm, toRef(state.form, 'account'));
    const repeatPwRule = useRepeatPwRule(toRef(state.form, 'repeatPassword'));
    const computedState = computed(() => {
      return props.type === 'bind' ? {
        title: t('login.for_your_account_security'),
        btnTitle: t('login.confirm_binding'),
        codeType: 'REGISTER',
        oldPasswordTitle: t('login.input_password'),
        repeatPasswordTitle: t('login.confirm_password'),
      } : {
        title: t('login.reset_password'),
        btnTitle: t('login.reset_password'),
        codeType: 'UPDATE_PASS',
        oldPasswordTitle: t('login.input_new_password'),
        repeatPasswordTitle: t('login.input_password_again'),
      };
    });
    const hasAgree = ref(false);


    const { disabled } = useCode(toRef(state.form, 'account'));

    const toRegister = () => {
      mainComponent.value = {
        name: 'role',
        props: {},
      };
    };
    const toLogin = () => {
      mainComponent.value = {
        name: 'login',
        props: {},
      };
    };


    const resetPassword = async () => {
      await validateForm(formVm.value!);

      try {
        loading.value = true;
        // await codeVm.value?.checkCode();
        if (props.type === 'bind') {
          if (!hasAgree.value) {
            ElMessage.error(t('login.check_the_agreement'));
            return;
          }
          // 绑定邮箱/手机
          if (!accountType.value) {
            throw new Error(t('login.empty_roles'));
          }
          const token = (await api.registerAndLogin({
            account: state.form.account,
            pw: state.form.password,
            code: state.form.code,
            type: accountType.value,
            channel: '1',
            scene: qrcodeScene.value,
          })).data;
          mainComponent.value = {
            name: 'success',
            props: {
              title: t('login.bind_success'),
              token,
            },
          };
          // await  handleLogined(token);
        } else {
          // 重置密码
          await api.resetPassword({
            account: state.form.account,
            pw: state.form.password,
            code: state.form.code,
          });
          mainComponent.value = {
            name: 'success',
            props: {
              title: t('login.password_reset_success'),
              isReturnLogin: true,
            },
          };
        }
      } finally {
        loading.value = false;
      }
    };


    return {
      ...toRefs(state),
      formVm,
      codeVm,
      resetPassword,
      toRegister,
      toLogin,
      disabled,
      hasAgree,
      computedState,
      repeatPwRule,
      complexPwRule,
      repeatError,
      handleBlur,
      handleFocus,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.reset-password {
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
