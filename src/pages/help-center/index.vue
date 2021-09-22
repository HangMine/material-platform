<template>
  <router-view v-loading="helpCenterStore.loading"></router-view>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';
import { helpCenterStore } from './utils';

export default defineComponent({
  name: 'help-center-wrap',
  props: {},
  setup() {
    return { helpCenterStore };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.help-center-wrap {
}
</style>
