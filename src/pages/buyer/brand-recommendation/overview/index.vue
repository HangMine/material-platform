<template>
  <div class="page-brand-recomendation-overview">
    <SubTitle @selectChange="brandChange"></SubTitle>
    <div class="main">
      <TotalNumberList :totalNumberList="totalNumberList" :formNumber="formNumber"></TotalNumberList>
      <div class="center-echart flex-space-between">
        <div class="echart-style echart-left">
          <EchartTitle
            type="supplierUse"
            @selectChange="echartSelectChange"
            title="选用材料供应商(TOP 10)"
          ></EchartTitle>
          <EchartBar ref="supplierUseRef" :options="materialSupplierUse"></EchartBar>
        </div>
        <div class="echart-style echart-right">
          <EchartTitle type="materialType" title="选用材料类型 " @selectChange="echartSelectChange"></EchartTitle>
          <EchartPie ref="materialTypeRef" :options="materialType"></EchartPie>
        </div>
      </div>
      <div class="bottom-echart flex-space-between">
        <div class="echart-style echart-left">
          <EchartTitle type="designerUse" title="设计师选用数(TOP 10)" @selectChange="echartSelectChange"></EchartTitle>
          <EchartBar ref="designerUseRef" :options="designerUseNum"></EchartBar>
        </div>
        <div class="echart-style echart-right">
          <EchartTitle type="materialUse" title="选用材料次数(TOP 10)" @selectChange="echartSelectChange"></EchartTitle>
          <EchartBar ref="materialUseRef" :options="materialUseNum"></EchartBar>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, shallowRef,
} from '@vue/runtime-core';
import {
  fetchEchartData, fetchMaterialStatistic,
} from '@/api/recommendation';
import SubTitle from './components/SubTitle.vue';
import TotalNumberList from './components/TotalNumberList.vue';
import EchartBar from './components/EchartBar.vue';
import EchartPie from './components/EchartPie.vue';
import EchartTitle from './components/EchartTitle.vue';

type echartType = 'supplierUse' | 'materialType' | 'designerUse' | 'materialUse';
export default defineComponent({
  name: '',
  props: {},
  components: {
    SubTitle, TotalNumberList, EchartBar, EchartTitle, EchartPie,
  },
  setup() {
    const supplierUseRef = shallowRef<any>();
    const materialTypeRef = shallowRef<any>();
    const designerUseRef = shallowRef<any>();
    const materialUseRef = shallowRef<any>();
    const state = reactive({
      totalNumberList: [
        { title: '推荐材料总数', value: 'latestMaterialCount', icon: 'i-s-tuijiancailiaozongshu-16' },
        { title: '材料选用', value: 'materialChooseCount', icon: 'i-s-cailiaoxuanyong-16' },
        { title: '人均选用数', value: 'avgMaterialChooseCount', icon: 'i-s-renjunxuanyongshu-16' },
        { title: '选用率', value: 'materialChooseRate', icon: 'i-s-xuanyongshuai-16' }],
      formNumber: {
        latestMaterialCount: 0, materialChooseCount: 0, avgMaterialChooseCount: 0, materialChooseRate: 0,
      },
      materialSupplierUse: {
        yData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        borderRadius: [0, 100, 100, 0],
        labelShow: true,
        seriesData: ['1000', '208', '309', '100', '2077', '30', '170', '20', '30', '10'],
        xSetting: {
          splitLine: {
            show: false,
          },

        },
        ySetting: {
          splitLine: {
            show: false,
          },
        },
      },
      designerUseNum: {
        xData: ['Mon', 'Tue', '1062D咖啡1062D咖啡', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        borderRadius: [100, 100, 0, 0],
        labelShow: false,
        seriesData: ['10', '260', '380', '10', '20', '370', '190', '270', '30', '10'],
      },
      materialUseNum: {
        xData: ['1062D咖啡1062D咖啡', '1062D咖啡1062D咖啡', 'Wed', 'Thu', '1062D咖啡1062D咖啡', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        borderRadius: [100, 100, 0, 0],
        labelShow: false,
        seriesData: ['10', '20', '30', '10', '20', '30', '10', '20', '30', '10'],
        axisLabel: {
          rotate: 45, // 倾斜角度
          formatter(value: string) {
            return value.length > 5 ? `${value.substring(0, 5)}...` : value;
          },
        },

      },
      materialType: {
        seriesData: [
          { value: 5, name: '纺织品', itemStyle: { color: '#4C7CF7' } },
          { value: 42, name: '人造革', itemStyle: { color: '#5DCAA2' } },
          { value: 222, name: '真皮', itemStyle: { color: '#F5C343' } },
          { value: 223, name: '其他', itemStyle: { color: '#5B6378' } },
        ],
      },
    });
    const getMaterialStatistic = async (id: string) => {
      const res = await fetchMaterialStatistic(id);
      // state.formNumber = res;
    };
    const getSupplierUseData = () => {
      state.materialSupplierUse.yData = ['hh', '还好', '你好', 'hh', '还好', '你好', 'hh', '还好', '你好', 'hh'];
      state.materialSupplierUse.seriesData = ['10', '260', '380', '10', '20', '370', '190', '270', '30', '10'];
      supplierUseRef.value.chartSetOption();
    };
    const getMaterialTypeData = () => {
      state.materialType.seriesData = [
        { value: 90, name: '纺织品', itemStyle: { color: '#4C7CF7' } },
        { value: 22, name: '人造革', itemStyle: { color: '#5DCAA2' } },
        { value: 33, name: '真皮', itemStyle: { color: '#F5C343' } },
        { value: 55, name: '其他', itemStyle: { color: '#5B6378' } },
      ];
      materialTypeRef.value.chartSetOption();
    };
    const getDesignerUseData = () => {
      state.designerUseNum.xData = ['hh', '还好', '你好', 'hh', '还好', '你好', 'hh', '还好', '你好', 'hh'];
      state.designerUseNum.seriesData = ['10', '260', '380', '10', '20', '370', '190', '270', '30', '10'];
      designerUseRef.value.chartSetOption();
    };
    const getMaterialUseData = () => {
      state.materialUseNum.xData = ['hh', '还好', '你好', 'hh', '还好', '你好', 'hh', '还好', '你好', 'hh'];
      state.materialUseNum.seriesData = ['10', '260', '380', '10', '20', '370', '190', '270', '30', '10'];
      materialUseRef.value.chartSetOption();
    };
    const echartSelectChange = (value: string, type: echartType) => {
      console.log(value, type, '999');
      switch (type) {
        case 'supplierUse':
          console.log(333);
          getSupplierUseData();
          break;
        case 'materialType':
          console.log(333);
          getMaterialTypeData();
          break;
        case 'designerUse':
          console.log(333);
          getDesignerUseData();
          break;
        case 'materialUse':
          console.log(333);
          getMaterialUseData();
          break;
        default:
          break;
      }
    };
    const brandChange = (value: string) => {
      console.log(value);
    };
    return {
      ...toRefs(state), echartSelectChange, supplierUseRef, materialTypeRef, designerUseRef, materialUseRef, brandChange, getMaterialStatistic,
    };
  },
});
</script>
<style lang="scss">
.page-brand-recomendation-overview {
  .main {
    padding: 20px 100px;
    .echart-style {
      border-radius: 8px;
      background: #fff;
      padding: 20px;
    }
    .center-echart {
      height: 476px;
      width: 100%;
      margin-top: 20px;
      .echart-left {
        width: 70%;
        height: 100%;
        margin-right: 20px;
      }
      .echart-right {
        width: calc(30% - 20px);
        height: 100%;
      }
    }
    .bottom-echart {
      margin-top: 20px;
      width: 100%;
      height: 289px;
      .echart-left {
        margin-right: 20px;
      }
      .echart-left,
      .echart-right {
        width: 50%;
        height: 100%;
      }
    }
  }
}
</style>
