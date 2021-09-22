<template>
  <div class="third-login flex-center flex-column">
    <el-divider>{{ $t("login.thrid_account") }}{{ computedState.name }}</el-divider>

    <el-button size="" type="primary" @click="openQRcode">
      <i class="wx-icon i-s-weixin-12" :style="{ marginTop: '16px' }"></i>
      {{ $t("login.wechat") }}{{ computedState.name }}
    </el-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import { t } from '@/i18n/index';
import { mainComponent } from '../utils/loginStore';

export default defineComponent({
  name: 'third-login',
  components: {},
  props: {
    isRegister: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    const computedState = computed(() => ({
      name: props.isRegister ? t('login.register') : t('login.sign_in'),
    }));
    const openQRcode = () => {
      mainComponent.value = {
        name: 'qr-code',
        props: {
          isRegister: props.isRegister,
        },
      };
    };
    return {
      ...toRefs(state), computedState, openQRcode,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
.third-login {
  .el-button {
    background-color: #4dc569;
    border: none;
    transition: color 0.2s;
    width: 100%;
    height: 40px;
  }
  .el-divider__text {
    color: #666;
  }
  .wx-icon {
    font-size: 22px;
  }
  // .wx-icon {
  // font-size: 30px;
  // cursor: pointer;
  // color: #4dc569;
  // &:hover {
  //   color: #4dc569;
  // }
  // }
}
</style>
