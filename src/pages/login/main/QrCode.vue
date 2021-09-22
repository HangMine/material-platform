
<template>
  <main class="comp-main" :class="{ 'is-login': !isRegister }">
    <div class="qr-code">
      <!-- <h3 class="login-title">微信{{ typeName }}</h3> -->
      <div class="img-wrap">
        <base-image :src="qrcodeParams.url" />
      </div>
      <p class="footer">{{ $t("login.scan_attention") }}{{ typeName }}</p>
      <i class="close-icon hover-link i-r-guanbi-16" @click="handleClose"></i>
    </div>
  </main>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, onUnmounted,
} from 'vue';
import BaseImage from '@/components/base/Image.vue';
import useLoopFetch from '@/utils/uses/use-loop-fetch';
import { fetchQrcode, fetchQrcodeResult, QRcodeStatus } from '@/api/account';
import { url2ImageUrl } from '@/utils/qrcode';
import { DefaultResponse } from '@/utils/axios';
import { t } from '@/i18n/index';
import {
  handleLogined, mainComponent, qrcodeScene, accountType,
} from '../utils/loginStore';

export default defineComponent({
  name: 'qr-code',
  components: { BaseImage },
  props: {
    isRegister: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change-main-component'],
  setup(props, { emit }) {
    const state = reactive({
      qrcodeParams: {
        scene: '',
        url: '',
      },
    });
    const typeName = computed(() => (props.isRegister ? t('login.register') : t('login.sign_in')));
    const fetchFn = async () => {
      const res = await fetchQrcodeResult({ scene: state.qrcodeParams.scene });
      return res;
    };
    const stopFn = (res: DefaultResponse<{ status: QRcodeStatus, token: string }>) => {
      return res.data?.status !== '1';
    };
    const { loopFetch, stopFetch } = useLoopFetch({
      fetchFn, stopFn, limit: Infinity,
    });

    const createQRcode = async () => {
      const qrcodeParams = (await fetchQrcode()).data;
      qrcodeParams.url = await url2ImageUrl(qrcodeParams.url, { size: 275 });
      state.qrcodeParams = qrcodeParams;
      qrcodeScene.value = qrcodeParams.scene;
      let { res } = await loopFetch();
      if (res.data?.status === '5') {
        // 如果失效,重新生成二维码
        res = await createQRcode();
      }
      return res;
    };

    const handleClose = () => {
      mainComponent.value = {
        name: props.isRegister ? 'register' : 'login',
        props: {},
      };
      qrcodeScene.value = '';
    };


    onMounted(async () => {
      const { data } = await createQRcode();
      const { status, token } = data;
      switch (status) {
        case '3':
          mainComponent.value = accountType.value ? {
            name: 'reset-password',
            props: { type: 'bind' },
          } : {
            name: 'role',
            props: {
              resetPasswordType: 'bind',
              qrcodeScene: qrcodeScene.value,
            },
          };
          break;
        case '4':
          await handleLogined(token);
          break;
        default:
          break;
      }
    });

    onUnmounted(() => {
      stopFetch();
    });

    return {
      ...toRefs(state), typeName, handleClose,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.comp-main {
  &.is-login {
    // width: 800px;
    height: 560px;
  }
  .qr-code {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // .login-title {
    //   font-size: 20px;
    //   color: #222222;
    // }
    .img-wrap {
      position: relative;
      max-width: 300px;
      // margin: 20px 0 40px 0;
      border: 1px solid #cccccc;
      width: 294px;
      height: 294px;
      margin-bottom: 16px;
      /deep/ .el-image {
        padding: 8px;
      }
    }
    .footer {
      // font-size: 12px;
      color: #999999;
    }
    .close-icon {
      font-size: 16px;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 50%;
      margin-top: 24px;
    }
  }
}
</style>
