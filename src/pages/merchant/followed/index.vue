<template>
  <div class="merchant-followed">
    <sd-breadcrumb
      backPath="auto"
      :data="[
        {
          path: '/merchant/followed',
          title: '关注列表',
        },
      ]"
    ></sd-breadcrumb>
    <MerchantList type="list" :data="merchantList" v-loading="loading"></MerchantList>
  </div>
</template>

<script lang="ts">
import { fetchFollowedMerchantInfo } from '@/api/merchant';
import { MerchantList as MerchantListType } from '@/models/Merchant';
import onCreated from '@/utils/vue/onCreated';
import MerchantList from '@/pages/components/merchant/components/List/index.vue';

import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';

export default defineComponent({
  name: 'merchant-followed',
  components: { MerchantList },
  props: {},
  setup(props, { emit }) {
    const state = reactive({
      merchantList: [] as MerchantListType,
      loading: false,
    });
    const setMerchantList = async () => {
      try {
        state.loading = true;
        state.merchantList = (await fetchFollowedMerchantInfo({ keywords: '', fields: {} }));
      } finally {
        state.loading = false;
      }
    };
    onCreated(async () => {
      await setMerchantList();
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant-followed {
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
}
</style>
