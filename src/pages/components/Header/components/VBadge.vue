<template>
  <div class="v-badge flex-vertical-center"></div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';

export default defineComponent({
  name: 'v-badge',
  components: {},
  props: {
  },
});
</script>
<style lang="scss" scoped>
.v-badge {
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background: #2878ff url("~@/assets/img/profile/v.png") no-repeat center center;
  background-size: 68%;
}
</style>
