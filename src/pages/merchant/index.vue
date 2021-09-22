<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';

export default defineComponent({
  name: 'merchant',
  components: {},
  props: {},
  setup(props, { emit }) {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant {
}
</style>
