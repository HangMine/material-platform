<template>
  <div class="pages_merchant-home-display">
    <div class="content">
      <MerchantDisplay :orgId="orgId"></MerchantDisplay>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import MerchantDisplay from '@/pages/components/merchant/components/Diy/Display.vue';

export default defineComponent({
  name: 'pages_merchant-home-display',
  components: { MerchantDisplay },
  props: {
    orgId: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
@import "~@/pages/components/merchant/components/Diy/common.scss";
.pages_merchant-home-display {
  .content {
    // @include minMaxWidth();
    margin: 0 auto;
  }
}
</style>
