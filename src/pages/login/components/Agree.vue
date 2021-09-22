<template>
  <div class="agree">
    <el-checkbox v-model="agree"></el-checkbox>
    {{ $t("login.read_and_agree") }}
    <template v-for="(policy, index) in policyConfig" :key="policy.policyName">
      <span class="text-link" @click="openPolicyDialog(policy)"> 《{{ policy.title }}》 </span>
      <span v-if="index < policyConfig.length - 1">{{ $t("login.and") }}</span>
    </template>
    <!-- <span class="text-link" @click="openPolicyDialog('PrivacyPolicy')"> 《{{ $t("login.privacy_policy") }}》 </span> -->
  </div>
</template>

<script lang="ts">
import openWindow from '@/utils/open-window';
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';
import { dialog } from '@/utils/vue/dialog';
import PolicyDialogBody from '@/pages/policy/PolicyDialogBody.vue';
import { t } from '@/i18n/index';

export default defineComponent({
  name: 'agree',
  components: {},
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      agree: false,
    });
    watch(() => props.modelValue, (value) => {
      state.agree = value;
    }, { immediate: true });
    watch(() => state.agree, (value) => {
      emit('update:modelValue', value);
    });

    const openPolicyDialog = async (policy) => {
      await dialog({
        is: PolicyDialogBody,
        props: {
          policyName: policy.policyName,
          title: policy.title,
        },
      });
    };

    const openWin = (url: string) => {
      openWindow(url);
    };
    return {
      ...toRefs(state),
      openWin,
      openPolicyDialog,
      policyConfig: [{
        policyName: 'NetworkServiceTerms',
        title: t('login.network_service_terms'),
      }, {
        policyName: 'PrivacyPolicy',
        title: t('login.privacy_policy'),
      }],
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.agree {
  margin-bottom: 20px;
  font-size: 12px;
}
</style>
