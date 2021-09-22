<template>
  <div class="pages_merchant-home-diy" v-loading="loading">
    <Banner v-if="merchant" :merchant="merchant"></Banner>
    <div class="content">
      <MerchantDiy v-if="merchant" :orgId="merchant.id"></MerchantDiy>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted,
} from 'vue';
import MerchantDiy from '@/pages/components/merchant/components/Diy/Edit.vue';
import { MerchantItem } from '@/models/Merchant';
import usePermisson from '@/utils/uses/use-permisson';
import onCreated from '@/utils/vue/onCreated';
import { fetchMerchantInfo, fetchMerchantInfoByOrgId } from '@/api/merchant';
import Banner from '../detail/components/banner.vue';

export default defineComponent({
  name: 'pages_merchant-home-diy',
  components: { MerchantDiy, Banner },
  props: {},
  setup(props, { emit }) {
    const state = reactive({
      merchant: undefined as MerchantItem | undefined,
      loading: false,
    });
    const { company } = usePermisson();
    const setMerchantList = async () => {
      try {
        state.loading = true;
        state.merchant = (await fetchMerchantInfoByOrgId({
          orgId: company.value?.id || '',
        }));
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
@import "~@/pages/components/merchant/components/Diy/common.scss";

.pages_merchant-home-diy {
  min-height: 200px;
  .content {
    @include minMaxWidth();
    margin: 0 auto;
  }
}
</style>
