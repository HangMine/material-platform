<template>
  <div class="overview-subtitle">
    <div class="top-title flex-space-between">
      <p class="left-head">总览</p>

      <p class="select-search">
        <el-select size="small" clearable="true" @change="selectChange" v-model="selectValue">
          <el-option label="全部推荐会" value=""> </el-option>
          <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"> </el-option>
        </el-select>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted,
} from '@vue/runtime-core';
import {
  fetchCooperatedBrandRecommendationList, RecommendationItem,
} from '@/api/recommendation';

export default defineComponent({
  name: '',
  props: {},
  components: {

  },
  setup(props, { emit }) {
    const state = reactive({
      selectValue: '',
      options: [] as RecommendationItem[],

    });
    const selectChange = (value: string) => {
      emit('selectChange', value);
      console.log(333);
    };
    const getBrandList = async () => {
      const res = await fetchCooperatedBrandRecommendationList(0);
      state.options = res[0]?.coopRecommendMeetingResps;
    };
    onMounted(async () => {
      await getBrandList();
    });

    return { ...toRefs(state), selectChange };
  },
});
</script>
<style lang="scss">
.overview-subtitle {
  padding: 0 40px;
  .top-title {
    height: 52px;
    line-height: 52px;
    border-bottom: 1px solid #e7e7e7;

    .left-head {
      font-size: 16px;
    }
    .select-search {
      .el-input__inner {
        background-color: #f2f3f5;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
