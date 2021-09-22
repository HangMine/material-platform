<template>
  <div ref="chartBar" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, ref, PropType, onMounted, shallowRef, onBeforeUnmount,
} from '@vue/runtime-core';
import * as echarts from 'echarts';

type optionsType = {
  xData?: string[],
  yData?: string[],
  labelShow: boolean,
  borderRadius: string[],
  seriesSetting?: object,
  xSetting?: object,
  ySetting?: object,
  seriesData: string[],
  axisLabel?: object

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
    const chartBar = shallowRef<any>();// Vue3使用了proxy，Echarts无法从中获取内部变量,不要在data中定义chart，或者使用shallowRef

    const chartSetOption = () => {
      // 绘制图表

      chartBar.value.setOption({
        tooltip: { // 悬浮时的提示
          trigger: 'item',
          formatter: '{b} : {c} ',
        },
        xAxis: [{
          data: props.options.xData,
          axisTick: {
            show: false, // 坐标轴刻度是否显示
          },
          ...props.options.xSetting,
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#D8D8D8', // 左边线的颜色
              width: 1, // 坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              color: '#999', // 坐标值得具体的颜色

            },
            interval: 0, // 横轴信息全部显示
            ...props.options.axisLabel,
          },
        }],
        yAxis: [{
          data: props.options.yData,
          splitLine: { // 网格布局设置为虚线
            show: true,
            lineStyle: {
              type: 'dashed',
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#D8D8D8', // 左边线的颜色
              width: 1, // 坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              color: '#666', // 坐标值得具体的颜色
            },
          },
          ...props.options.ySetting,
        }],
        series: [
          {
            type: 'bar',
            barWidth: '20px',
            data: props.options.seriesData,
            itemStyle: {
              normal: {
                color: '#56C79D',
                borderRadius: props.options.borderRadius, // 柱状图的圆角
                label: { // value值显示属性设置
                  show: props.options.labelShow,
                  position: 'right',
                  textStyle: {
                    fontSize: '16',
                    color: '#999',
                  },
                },
              },
            },
            ...props.options.seriesSetting,
          },
        ],
      });
    };
    const handleWindowResize = () => {
      if (!chartBar.value) return;
      chartBar.value.resize();
    };
    onMounted(() => {
      chartBar.value = echarts.init(chartBar.value!);
      chartSetOption();
      window.addEventListener('resize', handleWindowResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleWindowResize);
      chartBar.value && chartBar.value.clear();
      chartBar.value && chartBar.value.dispose();
    });
    return { ...toRefs(state), chartBar, chartSetOption };
  },
});
</script>
<style lang="scss">
</style>
