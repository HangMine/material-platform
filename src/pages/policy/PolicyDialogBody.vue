<template>
  <div class="policy-container">
    <div class="dialog-title">{{ title }}</div>
    <div class="policy-content">
      <component :is="policyName"></component>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PrivacyPolicy from './PrivacyPolicy.vue';
import NetworkServiceTerms from './NetworkServiceTerms.vue';

export default defineComponent({
  dialogify: {
    props: {
      title: '',
      width: '880px',
      closeOnClickModal: false,
    },
  },
  props: {
    policyName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    PrivacyPolicy,
    NetworkServiceTerms,
  },
});
</script>

<style lang="scss" scoped>
.policy-container {
  // background-color: #f4f7fc;
  .policy-content {
    margin-left: -20px;
    margin-right: -20px;
    max-height: 560px;
    padding: 0 20px;
    overflow: auto;
  }
  .dialog-title {
    font-size: 16px;
    position: relative;
    top: -20px;
    font-weight: 500;
  }
}
</style>
