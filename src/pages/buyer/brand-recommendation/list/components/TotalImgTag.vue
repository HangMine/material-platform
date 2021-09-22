<template>
  <div class="total-image-tag flex-vertical-center">
    <i class="icon i-s-cailiao-12"></i>
    <span>{{ total }}个</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';

export default defineComponent({
  name: 'total-image-tag',
  components: {},
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
});
</script>
<style lang="scss" scoped>
.total-image-tag {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 4px 6px 4px 8px;
  .icon {
    font-size: 14px;
    margin-right: 4px;
  }
}
</style>
