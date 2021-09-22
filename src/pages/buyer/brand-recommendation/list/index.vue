<template>
  <div class="page-brand-recomendation-list">
    <SubTitleBar @add="handleEditItem()" @search="handleSearch"></SubTitleBar>
    <main class="grid-wrap" v-loading="loading">
      <SdGrid :data="recommendationList" v-if="recommendationList.length > 0">
        <template #default="{ item }">
          <RecommendationTileView
            :recommendationInfo="item"
            @edit="handleEditItem"
            @delete="handleDeleteItem"
          ></RecommendationTileView>
        </template>
      </SdGrid>
      <Empty v-else></Empty>
    </main>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import SdGrid from '@/components/grid/index.vue';
import { RecommendationItem, fetchBrandRecommendationList, deleteBrandRecommendation } from '@/api/recommendation';
import { dialog, confirm } from '@/utils/vue/dialog';
import { ElMessage } from 'element-plus';
import { t } from '@/i18n';
import onCreated from '@/utils/vue/onCreated';
import Empty from '@/components/error/Empty.vue';
import SubTitleBar from './components/SubTitleBar.vue';
import RecommendationTileView from './components/RecommendationTileView.vue';
import FormEditRecommandation from './components/FormEditRecommandation.vue';

export default defineComponent({
  name: 'page-brand-recomendation-list',
  components: {
    SubTitleBar, SdGrid, RecommendationTileView, Empty,
  },
  props: {},
  setup(props, { emit }) {
    const state = reactive({
      loading: true,
      keywords: '',
      recommendationList: [] as RecommendationItem[],
    });

    const getBrandRecommendationList = async (keywords = state.keywords) => {
      try {
        state.loading = true;
        state.recommendationList = await fetchBrandRecommendationList(keywords);
      } finally {
        state.loading = false;
      }
    };

    const handleEditItem = async (item?: RecommendationItem) => {
      await dialog({
        is: FormEditRecommandation,
        props: {
          submitType: item ? 'edit' : 'add',
          editItem: item,
        },
      });
      getBrandRecommendationList(state.keywords);
    };

    const handleDeleteItem = async (item: RecommendationItem) => {
      await confirm({ title: `${t('folder.whether_empty')}${item.name}${t('folder.and_delete')}` });
      await deleteBrandRecommendation(item.id);
      ElMessage.success(t('delete_success'));
      getBrandRecommendationList();
    };

    const handleSearch = async (keywords = '') => {
      state.keywords = keywords;
      getBrandRecommendationList();
    };

    onCreated(async () => {
      await getBrandRecommendationList();
    });

    return {
      ...toRefs(state),
      handleEditItem,
      handleDeleteItem,
      handleSearch,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
.page-brand-recomendation-list {
  @include layout-elastic-center-container();
  .grid-wrap {
    // margin: 0 80px;
    margin-top: 20px;
  }
  .tile-view {
    // height: 134px;
  }
}
</style>
