<template>
  <div class="page-color-card-book">
    <ColorCardBook></ColorCardBook>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import ColorCardBook from '@/pages/components/color-card/ColorCardBook';

export default defineComponent({
  name: 'color-card-book',
  components: { ColorCardBook },
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
.page-color-card-book {
}
</style>
