<template>
  <el-form class="recommendation-material-search-bar" inline size="small">
    <el-form-item>
      <el-input
        v-model="searchParams.keywords"
        placeholder="请输入关键词"
        prefix-icon="i-r-sousuo-16"
        @change="handeSearch"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-select
        v-model="searchParams.recommendMeetingOrgId"
        @change="handleBrandChange"
        placeholder="所属品牌"
        clearable
      >
        <el-option v-for="brand in brandList" :key="brand.id" :label="brand.name" :value="brand.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-select v-model="searchParams.recommendMeetingId" placeholder="品牌推荐会" clearable @change="handeSearch">
        <el-option
          v-for="recommadation in selectedBrandRecommendationList || []"
          :key="recommadation.id"
          :label="recommadation.name"
          :value="recommadation.id"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import { fetchCooperatedBrandRecommendationList, CooperatedBrandRecommendationItem, RecommendationItem } from '@/api/recommendation';
import onCreated from '@/utils/vue/onCreated';

export default defineComponent({
  name: 'recommendation-material-search-bar',
  components: {},
  props: {
    handleChange: {
      type: Function,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      searchParams: {
        keywords: '',
        recommendMeetingOrgId: '',
        recommendMeetingId: '',
      },
      selectedBrandRecommendationList: [] as RecommendationItem[],
      brandList: [] as CooperatedBrandRecommendationItem[],
    });
    const getCooperatedBrandRecommendationList = async () => {
      const res = await fetchCooperatedBrandRecommendationList(0);
      state.brandList = res;
    };
    const handeSearch = async () => {
      props.handleChange(state.searchParams);
    };
    const handleBrandChange = (brandId: string) => {
      if (!brandId) {
        state.searchParams.recommendMeetingId = '';
        state.selectedBrandRecommendationList = [];
      } else {
        const target = state.brandList.find(brand => brand.id === brandId);
        state.selectedBrandRecommendationList = target?.coopRecommendMeetingResps ?? [];
      }
      handeSearch();
    };

    onCreated(async () => {
      getCooperatedBrandRecommendationList();
    });
    return {
      ...toRefs(state),
      handeSearch,
      handleBrandChange,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
.recommendation-material-search-bar {
  margin: 20px 0 7px;
  position: relative;
  .el-input__prefix {
    left: 8px;
    color: #666666;
  }
}
</style>
