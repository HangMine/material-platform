<template>
  <div class="color-card-book">
    <ColorCardList
      v-if="isDetail"
      :headLine="$t('folder.my_color_card')"
      :topNavProps="{
        custom: true,
        onGoBackEvent: backToDetail,
      }"
      v-bind="detailProps"
    ></ColorCardList>
    <template v-else>
      <div class="search-bar">
        <div class="title">{{ $t("folder.my_color_card") }}</div>
        <StretchSearch @search="searchCore"></StretchSearch>
      </div>
      <div class="core-wrap">
        <Core @to-detail="toDetail" ref="CoreVm"></Core>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {
  reactive, toRefs, defineComponent, computed, ref,
} from 'vue';
import StretchSearch from '@/components/search/StretchSearch.vue';
import ColorCardList from '../ColorCardList/index.vue';
import Core from './Core.vue';

type DetailProps = InstanceType<typeof ColorCardList>['$props'];

export default defineComponent({
  name: 'color-card-book',
  components: {
    Core, ColorCardList, StretchSearch,
  },
  props: {},
  setup(props, { emit }) {
    const CoreVm = ref<InstanceType<typeof Core>>();
    const state = reactive({
      currentComponent: 'core',
      detailProps: {},
    });
    const isDetail = computed(() => {
      console.log(isDetail, 'isDetail');
      return Object.keys(state.detailProps).length;
    });
    const toDetail = (detailProps: DetailProps) => {
      state.detailProps = detailProps;
    };
    const backToDetail = () => {
      console.log(isDetail, 'isDetailisDetailisDetail');
      state.detailProps = {};
    };
    const searchCore = (keywords: string) => {
      CoreVm.value?.inputChange(keywords);
    };
    return {
      ...toRefs(state), CoreVm, toDetail, backToDetail, isDetail, searchCore,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.color-card-book {
  // margin: 0 40px;
  @include layout-elastic-center-container();
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    .title {
      font-size: 16px;
      color: #222222;
      line-height: 22px;
    }
    .stretch-search {
      margin-right: 0;
    }
  }
  /deep/.color-library {
    .top-nav,
    .wrap {
      background: transparent;
    }
    .wrap {
      box-shadow: none;
      .pagination {
        background: transparent;
      }
    }
  }
  .core-wrap {
    padding: 20px 0;
  }
}
</style>
