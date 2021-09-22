<template>
  <main class="comp-main">
    <div class="register">
      <!-- <img :src="require('@/assets/img/login/logo-register.png')" class="login-logo" /> -->
      <el-form :model="form" @submit.prevent ref="formVm">
        <template v-if="step === 'input-account'">
          <h3 class="login-title">{{ $t("login.registered_account") }}</h3>
          <Account
            v-model="form.account"
            :error="repeatError"
            autocomplete="new-password"
            @focus="handleFocus"
            @blur="handleBlur"
          ></Account>
          <BtnSendVerifyCode
            :validator="handleBlur"
            :account="form.account"
            @sended="step = 'input-code'"
            codeType="REGISTER"
          ></BtnSendVerifyCode>
        </template>
        <template v-else>
          <VerifyCode type="register" :account="form.account" @back="step = 'input-account'" v-model="form.code">
            <template #prevFormItems>
              <Password v-model="form.password" autocomplete="new-password" :rules="complexPwRule"></Password>
              <Password
                v-model="form.repeatPassword"
                autocomplete="new-password"
                :placeholder="$t('login.confirm_password')"
                :rules="repeatPwRule"
              ></Password>
              <!-- <IdentCode
                v-model="form.code"
                v-model:captcha="captcha"
                :disabled="disabled"
                type="REGISTER"
                :account="form.account"
                ref="codeVm"
              ></IdentCode> -->
            </template>
          </VerifyCode>
          <Agree v-model="hasAgree"></Agree>
          <el-button @click="register" :disabled="!hasAgree" type="primary" class="login-btn">{{
            $t("login.register")
          }}</el-button>
        </template>

        <ThirdLogin :isRegister="true"></ThirdLogin>
        <p class="flex-center">
          {{ $t("login.existing_account")
          }}<span class="text-link" type="primary" @click="toLogin">{{ $t("login.sign_in") }}</span>
        </p>
      </el-form>
    </div>
  </main>
</template>

<script lang="ts">
import { validateForm } from '@/utils/validators/validate-form';
import { dialog } from '@/utils/vue/dialog';
import {
  defineComponent, reactive, computed, ref, toRefs, toRef, SetupContext,
} from 'vue';
import * as api from '@/api/account';
import { ElForm, ElMessage } from 'element-plus';
import i18n, { t } from '@/i18n';
import { CaptchaRes } from '@/utils/open-tencent-captcha';
import useCode from '../utils/useCode';
import useRepeatPwRule from '../utils/useRepeatPwRule';
import {
  accountType, handleLogined, loading, mainComponent, qrcodeScene,
} from '../utils/loginStore';
import IdentCode from '../components/inputs/IdentCode.vue';
import Account from '../components/inputs/Account.vue';
import Password, { complexPwRule } from '../components/inputs/Password.vue';
import Agree from '../components/Agree.vue';
import ThirdLogin from '../components/ThirdLogin.vue';
import useCheckRepeat from '../utils/useCheckRepeat';
import BtnSendVerifyCode from '../components/BtnSendVerifyCode.vue';
import VerifyCode from './VerifyCode.vue';


export default defineComponent({
  name: 'register',
  components: {
    Account,
    Password,
    // IdentCode,
    Agree,
    ThirdLogin,
    BtnSendVerifyCode,
    VerifyCode,
  },
  props: {},
  emits: ['open-captcha', 'change-component', 'confirm'], // confirm实际上是dialog里的组件emit的,在这里声明解决vetur报错
  setup(props, { emit }) {
    const formVm = ref<typeof ElForm>();
    // const codeVm = ref<InstanceType<typeof IdentCode>>();

    const state = reactive({
      form: {
        account: '',
        password: '',
        repeatPassword: '',
        code: '',
      },
      step: 'input-account',
    });
    const { repeatError, handleBlur, handleFocus } = useCheckRepeat(formVm, toRef(state.form, 'account'));
    const repeatPwRule = useRepeatPwRule(toRef(state.form, 'repeatPassword'));
    const hasAgree = ref(false);
    const captcha = ref<CaptchaRes>();

    const { disabled } = useCode(toRef(state.form, 'account'));

    const register = async () => {
      await validateForm(formVm.value!);
      if (!hasAgree.value) {
        ElMessage.error(t('login.check_the_agreement'));
        return;
      }
      if (!accountType.value) {
        throw new Error(t('login.empty_role'));
      }
      try {
        loading.value = true;
        // await codeVm.value?.checkCode();
        const token = (await api.registerAndLogin({
          account: state.form.account,
          pw: state.form.password,
          code: state.form.code,
          type: accountType.value,
          channel: qrcodeScene.value ? '1' : '0',
          scene: qrcodeScene.value || undefined,
        })).data;
        qrcodeScene.value = '';
        mainComponent.value = {
          name: 'success',
          props: {
            title: t('login.register_success'),
            token,
          },
        };
        // await handleLogined(token);
      } finally {
        loading.value = false;
      }
    };
    const toLogin = () => {
      mainComponent.value = {
        name: 'login',
        props: {},
      };
    };

    return {
      ...toRefs(state),
      repeatError,
      hasAgree,
      captcha,
      formVm,
      // codeVm,
      register,
      toLogin,
      disabled,
      handleBlur,
      handleFocus,
      repeatPwRule,
      complexPwRule,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.register {
  .third-login {
    margin-bottom: 30px;
  }
}
</style>
