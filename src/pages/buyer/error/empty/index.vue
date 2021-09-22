<template>
  <EmptyPage></EmptyPage>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import EmptyPage from '@/pages/error/Empty.vue';

export default defineComponent({
  name: 'page-main-error-empty',
  components: { EmptyPage },
});
</script>

