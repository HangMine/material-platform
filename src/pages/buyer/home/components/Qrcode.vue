<template>
  <el-popover placement="top" :width="200" trigger="click">
    <img class="buyer-home-qrcode-image" :src="qrcodeDataUrl" />
    <template #reference>
      <div class="buyer-home-qrcode flex-center">
        <i class="i-r-erweima-12"></i>
      </div>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { getMiniProgramQrCodeData } from '@/api/material';
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted,
} from 'vue';

export default defineComponent({
  name: 'buyer-home-qrcode',
  components: {},
  props: {},
  setup(props, { emit }) {
    const state = reactive({
      qrcodeDataUrl: '',
    });
    const setQrcodeDataUrl = async () => {
      state.qrcodeDataUrl = await getMiniProgramQrCodeData('pages/index/index', 'web_buyer_home');
    };
    onMounted(async () => {
      await setQrcodeDataUrl();
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss">
.buyer-home-qrcode-image {
  width: 100%;
}
</style>
<style lang="scss" scoped>
// @import 'url'
.buyer-home-qrcode {
  position: fixed;
  right: 16px;
  bottom: 80px;
  width: 48px;
  height: 48px;
  background: #222222;
  border-radius: 50%;
  cursor: pointer;
  > i {
    font-size: 24px;
    color: white;
  }
}
</style>
