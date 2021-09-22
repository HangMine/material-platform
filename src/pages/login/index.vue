<template>
  <div class="login-view flex-column flex-1" :style="viewStyle">
    <img src="@/assets/img/login/logo-register.png" class="logo" @click="$router.push({ name: 'Login' })" />
    <div class="login-loading-wrap" v-loading="loading">
      <component :is="mainComponent.name" v-bind="mainComponent.props"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { getContextUser } from '@/loaders/context';
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';

import { loading, mainComponent } from './utils/loginStore';
import Login from './main/index.vue';
import QrCode from './main/QrCode.vue';
import Register from './main/Register.vue';
import ResetPassword from './main/ResetPassword.vue';
import Role from './main/Role.vue';
import Success from './main/Success.vue';

export default defineComponent({
  name: 'login-view',
  components: {
    Login,
    QrCode,
    Register,
    ResetPassword,
    Role,
    Success,
  },
  props: {},
  setup(props, { emit }) {
    const user = computed(() => getContextUser());

    const viewStyle = {
      // backgroundImage: `url(${require('@/assets/img/login/login-aside.png')}), linear-gradient(-45deg, #1a7bdb, #7fd9f9)`,
    };

    return {
      mainComponent, loading, viewStyle,
    };
  },
});
</script>
<style lang="scss">
.comp-main {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  position: relative;
  // width: 400px;
  // padding: 40px;
  // border-radius: 10px;
  overflow: hidden;
  // background: white;
  > div {
    width: 100%;
  }
}
.login,
.comp-main {
  color: #666666;
  .el-form-item {
    margin-bottom: 10px;
    transition: margin 0.25s;
    &.is-error {
      margin-bottom: 26px;
    }
  }
}
.login-title {
  font-size: 20px;
  margin-bottom: 26px;
  font-weight: 500;
  color: #222200;
  white-space: pre-line;
  line-height: 30px;
}
.login-btn {
  width: 100%;
  height: 40px;
  margin-top: 6px;
  margin-bottom: 14px;
  border-radius: 4px;
}
.login-logo {
  margin: 0 0 30px -16px;
  height: 24px;
}
.error-msg {
  min-height: 1px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1.5;
  color: #f62020;
}
</style>
<style lang="scss" scoped>
.login-view {
  position: relative;
  background-repeat: no-repeat;
  // background-position: center;
  // background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background-image: url("~@/assets/img/login/login-aside.svg"), linear-gradient(to left, #08aaa2 430px, #fff 430px);
  background-size: 344px, 100% 100%;
  background-position: right 32px center, right center;

  .login-loading-wrap {
    margin-right: 430px;
    width: 294px;
  }
}
.logo {
  position: absolute;
  top: 30px;
  left: 30px;
  height: 24px;
  cursor: pointer;
}
</style>
