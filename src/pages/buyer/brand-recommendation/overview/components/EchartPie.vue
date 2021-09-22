<template>
  <div ref="chartPie" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, ref, PropType, onMounted, shallowRef, onBeforeUnmount,
} from '@vue/runtime-core';
import * as echarts from 'echarts';

type optionsType = {

  seriesData: string[]

};

export default defineComponent({
  name: '',
  components: {},
  props: {
    options: {
      type: Object as PropType<optionsType>,
      required: true,
    },
  },

  setup(props) {
    const state = reactive({

    });
    const chartPie = shallowRef<any>();// Vue3使用了proxy，Echarts无法从中获取内部变量,不要在data中定义chart，或者使用shallowRef

    const chartSetOption = () => {
      // 绘制图表
      chartPie.value.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'center',
          bottom: '15%',
          icon: 'circle',
          formatter(name: string) {
            const data = props.options.seriesData;
            let total = 0;

            data.forEach((item, i) => {
              total += data[i].value;
            });
            const val = data.filter(item => {
              return item.name === name;
            });

            return `${name}  ${(val[0].value / total * 100).toFixed(2)}%   ${val[0].value}`;
          },
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '50%'],
            center: ['50%', '27%'],
            data: props.options.seriesData,
            label: {
              normal: {
                show: false,
              },
            },
          },
        ],
      });
    };

    const handleWindowResize = () => {
      if (!chartPie.value) return;

      chartPie.value.resize();
    };
    onMounted(() => {
      chartPie.value = echarts.init(chartPie.value!);
      chartSetOption();
      window.addEventListener('resize', handleWindowResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleWindowResize);
      chartPie.value && chartPie.value.clear();
      chartPie.value && chartPie.value.dispose();
    });


    return { ...toRefs(state), chartPie, chartSetOption };
  },
});
</script>
<style lang="scss">
</style>
