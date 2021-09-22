<template>
  <main class="login-main">
    <!-- <section class="content-left">
      <img src="@/assets/img/login/logo-register.png" class="logo" @click="$router.push({ name: 'Login' })" />
      <img class="login-holder" src="@/assets/img/login/login-holder.png" />
    </section> -->
    <!-- <section class="content-right"> -->
    <div class="login">
      <el-form :model="form" @submit.prevent ref="formVm">
        <template v-if="!isCodeInputVisible">
          <el-tabs v-model="currentTab" class="login-tab">
            <el-tab-pane :label="$t('login.password_login')" name="account"> </el-tab-pane>
            <el-tab-pane :label="$t('login.verification_code_login')" name="code"> </el-tab-pane>
          </el-tabs>
          <transition name="el-zoom-in-top">
            <div v-if="loginError" class="error-msg">
              {{ loginError }}
            </div>
          </transition>
          <Account v-model="form.account"></Account>
          <Password v-if="currentTab === 'account'" v-model="form.password" @keydown.enter="login"></Password>
        </template>
        <VerifyCode
          v-else
          type="login"
          :account="form.account"
          @back="step = 'input-account'"
          v-model="form.code"
        ></VerifyCode>
        <!-- <IdentCode
          v-else-if="currentTab === 'code'"
          v-model="form.code"
          :disabled="disabled"
          type="LOGIN"
          :account="form.account"
          ref="codeVm"
        ></IdentCode> -->
      </el-form>
      <el-button
        v-if="currentTab === 'account' || step === 'input-code'"
        class="login-btn"
        type="primary"
        @click="login"
        >{{ $t("login.sign_in") }}</el-button
      >
      <BtnSendVerifyCode
        v-else
        :account="form.account"
        @sended="step = 'input-code'"
        codeType="LOGIN"
      ></BtnSendVerifyCode>
      <!-- <el-button v-else class="login-btn" type="primary" :disabled="disabled" @click="goToVerifyCode"
        >获取验证码</el-button
      > -->

      <div class="flex-space-between">
        <span :style="{ cursor: 'pointer' }" @click="forgetPassword">{{ $t("login.forget_password") }}</span>
        <span class="text-link" @click="register">{{ $t("login.registered_account") }}</span>
      </div>
      <ThirdLogin></ThirdLogin>
    </div>
    <!-- </section> -->
  </main>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, toRef, watch, onMounted, onUnmounted, h,
} from 'vue';
import validateForm from '@/utils/validators/validate-form';
import { ElForm } from 'element-plus';
import * as api from '@/api/account';
import AppError from '@/utils/error';
import { t } from '@/i18n/index';
// import openTencentCaptcha, { CaptchaRes } from '@/utils/open-tencent-captcha';
// import { fetchCode } from '@/api/account';
import { dialog, confirm } from '@/utils/vue/dialog';
import ChangePasswordDialogForm from '@/pages/profile/components/dialog/ChangePasswordDialogForm.vue';
import useCode from '../utils/useCode';
import {
  handleLogined, loading, mainComponent, qrcodeScene,
} from '../utils/loginStore';
import Account, { checker as accountChecker } from '../components/inputs/Account.vue';
import Password, { checker as pwChecker } from '../components/inputs/Password.vue';
// import IdentCode, { checker as codeChecker } from '../components/inputs/IdentCode.vue';
import ThirdLogin from '../components/ThirdLogin.vue';
import BtnSendVerifyCode from '../components/BtnSendVerifyCode.vue';
import VerifyCode from './VerifyCode.vue';

export default defineComponent({
  name: 'login',
  components: {
    // IdentCode,
    Account, Password, ThirdLogin, VerifyCode, BtnSendVerifyCode,
  },
  props: {
    qrcodeScene: {
      type: String,
    },
  },

  setup(props, { emit }) {
    const formVm = ref<typeof ElForm>();
    // const codeVm = ref<InstanceType<typeof IdentCode>>();
    const state = reactive({
      currentTab: 'code' as 'account' | 'code',
      step: 'input-account' as 'input-account' | 'input-code',
      form: {
        account: '',
        password: '',
        code: '',
      },
      // captcha: {} as CaptchaRes,
      loginError: '' as string,
    });
    const { disabled } = useCode(toRef(state.form, 'account'));

    const isCodeInputVisible = computed(() => {
      return state.currentTab === 'code' && state.step === 'input-code';
    });
    // 表单自动填充导致一开始无法更新state.form的值,暂时不用
    // const btnDisabled = computed(() => {
    //   let isPass = false;
    //   switch (state.currentTab) {
    //     case 'account':
    //       isPass = accountChecker(state.form.account) && pwChecker(state.form.password);
    //       break;
    //     case 'code':
    //       isPass = accountChecker(state.form.account) && codeChecker(state.form.code);
    //       break;

    //     default:
    //       break;
    //   }
    //   return !isPass;
    // });
    watch(() => state.currentTab, () => {
      formVm.value?.clearValidate();
      state.loginError = '';
    });
    const forgetPassword = () => {
      mainComponent.value = {
        name: 'reset-password',
        props: { type: 'reset' },
      };
    };
    const register = () => {
      mainComponent.value = {
        name: 'role',
        props: {},
      };
    };

    const loginErrorHandle = async (err: AppError) => {
      switch (err.code) {
        case 131001:
          // 密码错误，需要提示剩余次数，涉及到翻译，所以后端只在err.message中返回剩余次数（数字），前端根据code翻译
          err.message = t('login.password_error', { number: err.message });
          break;
        case 131034:
          err.message = t('login.reset_tip');
          // 密码已过期
          await confirm({
            title: '',
            confirmText: t('login.reset'),
            message: h('div', { class: 'flex-vertical-center' }, [
              h('i', {
                class: 'el-icon-warning',
                style: {
                  fontSize: '22px',
                  color: '#FAAD14',
                  marginRight: '14px',
                },
              }),
              t('login.reset_tip'),
            ]),
          });
          forgetPassword();
          break;
        default:
          err.message = t(`public.code_msg._${err.code}`, err.message || t('login.system_error')); // AppError.MESSAGES[err.code];
          break;
      }
      state.loginError = err.message;
    };

    const login = async () => {
      await validateForm(formVm.value!);
      try {
        loading.value = true;
        let f = '';
        if (state.currentTab === 'code') {
          // await codeVm.value?.checkCode();
          f = (await api.codeLogin({
            account: state.form.account,
            code: state.form.code,
            scene: props.qrcodeScene,
          })).data;
        } else {
          f = (await api.accountLogin({
            account: state.form.account,
            pw: state.form.password,
            scene: props.qrcodeScene,
          })).data;
        }
        await handleLogined(f);
      } catch (error) {
        loginErrorHandle(error);
      } finally {
        loading.value = false;
      }
    };

    // const getCode = async () => {
    //   const captcha = await openTencentCaptcha();
    //   state.captcha = captcha;
    //   await fetchCode({
    //     account: state.form.account,
    //     ticket: captcha.ticket,
    //     randstr: captcha.randstr,
    //     type: 'REGISTER',
    //   });
    // };


    // const goToVerifyCode = async () => {
    //   await getCode();
    //   state.step = 'input-code';
    // };


    onMounted(() => {
      state.currentTab = 'account';
    });


    return {
      ...toRefs(state),
      login,
      forgetPassword,
      register,
      formVm,
      disabled,
      // goToVerifyCode,
      isCodeInputVisible,
      // getCode,
    };
  },
});
</script>
<style lang="scss">
.login-main {
  // display: flex;
  position: relative;
  // width: 294px;
  // height: 560px;
  // border-radius: 10px;
  overflow: hidden;
  // background: white;
  // .content-left {
  //   flex-grow: 0;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: 340px;
  //   height: 100%;
  //   background: #f3f4f9;

  //   .logo {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     margin: 18px 6px;
  //     height: 20px;
  //     cursor: pointer;
  //   }

  //   .login-holder {
  //     width: 292px;
  //   }
  // }
  // .content-right {
  //   flex-grow: 1;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  .login {
    // width: 320px;
    .login-tab {
      margin-bottom: 36px;
      .el-tabs__header {
        @extend %flex-center;
        border-bottom: 1px solid #f7f7f7;
      }
      .el-tabs__item {
        color: inherit;
        font-size: 16px;
        &.is-active {
          color: #222222;
          font-weight: 500;
        }
        &.is-top:nth-child(2) {
          padding-right: 16px !important;
        }
        &.is-top:last-child {
          padding-left: 16px !important;
        }
      }
      .el-tabs__active-bar {
        border-radius: 1px;
      }
      // /deep/.el-tabs__nav-wrap {
      //   &::after {
      //     display: none;
      //   }
      // }
      // /deep/ .el-tabs__active-bar {
      //   height: 3px;
      // }
      // /deep/.el-tabs__item {
      //   font-weight: 400;
      // }
      // /deep/.el-tabs__item.is-active {
      //   color: #333333;
      //   font-weight: 500;
      // }
    }
    .third-login {
      margin-top: 30px;
    }
  }
  // }
}
</style>
