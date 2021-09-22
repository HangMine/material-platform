<template>
  <div class="pantone-gradient flex-column" v-loading="loading">
    <main class="grid-wrap">
      <SdGrid :data="colorList" v-if="colorList.length > 0" :minWidth="193" :gap="8">
        <template #default="{ item }">
          <ColorItem :colorItem="item"></ColorItem>
        </template>
      </SdGrid>
      <Empty v-else></Empty>
    </main>
    <el-pagination
      v-if="colorList.length > 0"
      @current-change="handleCurrentPageChange"
      :current-page="pageOption.page || 1"
      :page-size="pageOption.size"
      layout="total, prev, pager, next"
      :total="pageOption.total"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, PropType, watch, nextTick,
} from 'vue';
import {
  ColorLibraryItem, fetchColorLibrary, fetchColorCard,
} from '@/api/materialMenu';
import onCreated from '@/utils/vue/onCreated';
import SdGrid from '@/components/grid/index.vue';
import Empty from '@/components/error/Empty.vue';
import ColorItem from './Item.vue';

export default defineComponent({
  name: 'pantone-gradient',
  components: {
    SdGrid,
    ColorItem,
    Empty,
  },
  props: {
    searchParams: {
      type: Object as PropType<{ keywords: string, fields: { colorFamily?: string } }>,
      default: () => ({
        keywords: '',
        fields: {
          colorFamily: '',
        },
      }),
    },
  },
  setup(props, { emit }) {
    const mainRef = ref<HTMLElement | null>(null);
    const state = reactive({
      // keywords: '',
      colorList: [] as ColorLibraryItem[],
      loading: true,
      pageOption: {
        page: 1,
        size: 42,
        total: 0,
      },
    });


    const getColorList = async () => {
      try {
        state.loading = true;
        const res = (await fetchColorLibrary({
          keywords: props.searchParams.keywords,
          fields: {
            // colorFamily: '',
            ...props.searchParams.fields,
            type: 2,
          },
          ...state.pageOption,
        }));
        state.colorList = res.records;
        state.pageOption.total = res.total;
        console.log(state.colorList);
      } finally {
        state.loading = false;
      }
    };

    const handleCurrentPageChange = async (page: number) => {
      state.pageOption.page = page;
      await getColorList();
    };

    // onCreated(async () => {
    //   await getColorList();
    // });

    return {
      ...toRefs(state),
      mainRef,
      getColorList,
      handleCurrentPageChange,
    };
  },
});
</script>
<style lang="scss">
.pantone-gradient {
  flex: 1;
  // overflow: auto;
  .content-wrapper {
    .item {
      margin: 2px;
    }
  }
  .el-pagination {
    flex: 0;
    // margin-top: 20px;
    padding: 16px 0 32px 0;
  }
  .hover-color-item {
    position: fixed;
  }
}
</style>
