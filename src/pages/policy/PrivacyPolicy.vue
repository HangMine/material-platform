<template>
  <div class="privacy-policy" v-html="html"></div>
</template>

<script lang="ts">
import loadMarkdown from '@/utils/load-markdown';
// import i18n from '@/i18n';
import { defineComponent, onMounted, ref } from 'vue';
import envs from '@/utils/envs';
import {
  currentLang,
} from '@/i18n/index';

const Policy = defineComponent({
  name: 'PrivacyPolicy',
  setup() {
    const html = ref<string>(null);
    onMounted(async () => {
      const { data: dom } = await loadMarkdown(`${envs.VUE_APP_POLICY_URL}/${currentLang.value}/Privacy_Policy.md`);
      html.value = dom.innerHTML;
    });

    return {
      html,
    };
  },
});
export default Policy;
</script>

<style lang="scss" scoped>
/deep/ {
  h1 {
    font-size: 34px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 30px;
  }
  p,
  h3,
  h4 {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1.2;
    text-align: justify;
  }
  .hightlight {
    color: green;
    text-decoration: underline;
  }
}
</style>
