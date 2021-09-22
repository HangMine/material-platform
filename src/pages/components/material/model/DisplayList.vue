<template>
  <ul class="model-display-ul">
    <li class="model-display-li" v-for="(model, i) of modelList" :key="i">
      <Display :model="model"></Display>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { ModelTypeItem, Model, Part } from '@/api/material';
import Display from './Display.vue';

export default defineComponent({
  name: 'model-display-list',
  components: { Display },
  props: {
    modelList: {
      type: Array as PropType<Model[]>,
      required: true,
    },
  },
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
.model-display-ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
