<template>
  <div class="page-main-color-library">
    <ColorLibrary :colorBookName="colorBookName" :detailId="detailId"></ColorLibrary>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
} from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router';

import ColorLibrary from '../components/ColorLibrary.vue';

export default defineComponent({
  name: '',
  components: {

    ColorLibrary,
  },
  props: {

  },
  setup() {
    const router = useRouter();
    const { query: { colorBookName, detailId } } = useRoute();


    return {
      colorBookName, detailId,
    };
  },


});
</script>
<style lang='scss'>
</style>
