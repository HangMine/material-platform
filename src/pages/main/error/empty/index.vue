<template>
  <EmptyPage></EmptyPage>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import EmptyPage from '@/pages/error/Empty.vue';
import usePermisson from '@/utils/uses/use-permisson';
import history from '@/utils/history';

export default defineComponent({
  name: 'page-main-error-empty',
  components: { EmptyPage },
  setup() {
    const { isBuyer } = usePermisson();
    if (isBuyer.value) {
      history.replace('/buyer/error/empty');
    }
  },
});
</script>

