<template>
  <div class="page-error-404">
    <BlockError :error="{ message: $t('empty-page-tip.no_data'), code: '404' }"></BlockError>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import BlockError from '@/components/error/BlockError.vue';

export default defineComponent({
  name: 'page-error-404',
  components: { BlockError },
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
.page-error-404 {
}
</style>
