<template>
  <ColoroGradient class="buyer-coloro-gradient"></ColoroGradient>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import ColoroGradient from '@/pages/components/color/coloroGradient/index.vue';

export default defineComponent({
  name: 'buyer-coloro-gradient',
  components: { ColoroGradient },
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
.buyer-coloro-gradient {
  padding: 20px;
}
</style>
