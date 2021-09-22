<template>
  <div class="data-manage-field">
    <CommonTable type="field"></CommonTable>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import CommonTable from '../comopnents/CommonTable';

export default defineComponent({
  name: 'data-manage-field',
  components: { CommonTable },
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
.data-manage-field {
}
</style>
