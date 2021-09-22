<template>
  <div class="coordinate-system flex-column" :style="`margin-left:-${verticalAxisWidth / 2}px`">
    <div class="content">
      <AxisBar :label="yAxisLabel" vertical ref="verticalAxis"></AxisBar>
      <main class="flex-1 flex">
        <slot name="main"></slot>
      </main>
    </div>
    <AxisBar :label="xAxisLabel" startGridText="0" :relateAxisWidth="verticalAxisWidth"></AxisBar>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted,
} from 'vue';
import AxisBar from './AxisBar.vue';

export default defineComponent({
  name: 'coordinate-system',
  components: { AxisBar },
  props: {
    xAxisLabel: {
      type: String,
      default: '',
    },
    yAxisLabel: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const verticalAxis = ref<InstanceType<typeof AxisBar>>();
    const verticalAxisWidth = ref(0);

    onMounted(() => {
      console.log(verticalAxis.value);
      verticalAxisWidth.value = verticalAxis.value?.$el.clientWidth || 0;
    });

    return {
      verticalAxis,
      verticalAxisWidth,
    };
  },
});
</script>
<style lang="scss" scoped>
.coordinate-system {
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    > main {
      margin-top: 30px;
      margin-right: 30px;
    }
  }
}
</style>
