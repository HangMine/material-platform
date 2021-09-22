<template>
  <div class="page-buyer-pantone-gradient">
    <div class="search-bar flex-space-between">
      <div class="title">{{ $t("folder.pantone_color_library") }}（TCX）</div>
      <StretchSearch @search="handleSearch"></StretchSearch>
    </div>
    <PantoneLibrary class="buyer-pantone-gradient" ref="colorMainRef" :searchParams="searchParams"></PantoneLibrary>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted,
} from 'vue';
import PantoneLibrary from '@/pages/components/color/pantoneLibrary/index.vue';
import StretchSearch from '@/components/search/StretchSearch.vue';

export default defineComponent({
  name: 'buyer-pantone-gradient',
  components: { PantoneLibrary, StretchSearch },
  props: {},
  setup() {
    const colorMainRef = ref<InstanceType<typeof PantoneLibrary>>();
    const searchParams = ref({
      keywords: '',
    });
    const handleSearch = (keywords: string) => {
      searchParams.value.keywords = keywords;
      colorMainRef.value?.getColorList();
    };

    onMounted(() => {
      colorMainRef.value?.getColorList();
    });
    return {
      colorMainRef,
      searchParams,
      handleSearch,
    };
  },
});
</script>
<style lang="scss" scoped>
.page-buyer-pantone-gradient {
  @include layout-elastic-center-container();
  min-width: 1360px;
  .search-bar {
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
  .buyer-pantone-gradient {
    margin-top: 20px;
  }
}
</style>
