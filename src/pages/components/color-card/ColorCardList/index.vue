<template>
  <div class="page-buyer-color-library">
    <ColorLibrary :headLine="headLine" :colorBookName="colorBookName" :detailId="detailId" :topNavProps="topNavProps">
    </ColorLibrary>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
} from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router';

import ColorLibrary from '@/pages/main/materialMenu/components/ColorLibrary.vue';

export default defineComponent({
  name: '',
  components: {
    ColorLibrary,
  },
  props: {
    colorBookName: {
      type: String,
      default: '',
    },
    headLine: {
      type: String,

    },
    detailId: {
      type: String,
      default: '',
    },
    topNavProps: {
      type: Object,
    },
  },
  setup() {
    return {
    };
  },


});
</script>
<style lang='scss'>
.page-buyer-color-library {
  min-width: 1360px;
  .color-library {
    .top-nav {
      padding: 0;
    }
    .wrap {
      padding: 20px 0;
    }
  }
}
</style>
