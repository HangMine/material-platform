<template>
  <div class="coloro-gradient flex-column" v-loading="loading">
    <main class="flex flex-1">
      <CoordinateSystem class="flex-1" :xAxisLabel="$t('folder.Chromaticity')" :yAxisLabel="$t('folder.brightness')">
        <template #main>
          <div class="content-wrapper flex-1 flex-column" @mouseleave="handleMouseLeave">
            <div class="row flex-1 flex" v-for="row in gradientSize.rows" :key="`${colorPage}_${row}`">
              <div
                class="item flex-1"
                v-for="col in gradientSize.cols"
                :key="`${colorPage}_${row}_${col}`"
                :style="{
                  backgroundColor: getColor(row, col).bg,
                  color: getColor(row, col).color,
                  transition: `all 0.1s`,
                  'transition-delay': `${0.015 * col}s`,
                }"
                @mouseenter="handleMouseEnter($event, getColor(row, col))"
              >
                <!-- <span>{{ getColor(row, col).name }}</span> -->
              </div>
            </div>
            <ColorItem
              class="hover-color-item"
              :colorItem="hoverItem"
              :style="{
                top: `${hoverItemRect.top - 2}px`,
                left: `${hoverItemRect.left - 2}px`,
                width: `${hoverItemRect.width}px`,
                height: `${hoverItemRect.height + 34}px`,
              }"
            ></ColorItem>
          </div>
        </template>
      </CoordinateSystem>

      <FakeHueSlider
        :totalStepsLength="pages.pagesCount"
        v-model="colorPage"
        vertical
        :tooltipContent="`${colorRange.min} - ${colorRange.max}`"
      />
    </main>
    <!-- </main> -->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="colorPage"
      layout="prev, pager, next"
      :page-count="pages.pagesCount"
      :pager-count="4"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, PropType, watch, nextTick,
} from 'vue';
import {
  ColorLibraryItem, fetchColorLibrary,
} from '@/api/materialMenu';
import { debounce } from 'throttle-debounce';
import CoordinateSystem from '../components/Coordinate/index.vue';
import FakeHueSlider from '../components/FakeHueSlider.vue';
import ColorItem from './Item.vue';

export default defineComponent({
  name: 'coloro-gradient',
  components: {
    CoordinateSystem,
    FakeHueSlider,
    ColorItem,
  },
  props: {
  },
  setup(props, { emit }) {
    const mainRef = ref<HTMLElement | null>(null);
    const state = reactive({
      colorList: [] as ColorLibraryItem[],
      pages: {
        page: 1,
        size: 4000,
        // total: 3500,
        pagesCount: 63, // 总页数
      },
      colorRange: {
        min: '000',
        max: '000',
      },
      colorPage: 1, // coloro搜索对应page数据专用字段
      loading: true,
      hoverItem: null,
      hoverItemRect: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      },
    });

    // 将颜色数组转换成功映射对象,以便读取;随便对比获取最大最小值
    const colorMapObj = computed(() => {
      return state.colorList.reduce((obj, item) => {
        // 第一项赋值给colorRange
        if (Object.keys(obj).length === 0) {
          state.colorRange.max = item.name.slice(0, 3);
          state.colorRange.min = item.name.slice(0, 3);
        }
        // 比较获取最大最小值
        if (item.name > state.colorRange.max) {
          state.colorRange.max = item.name.slice(0, 3);
        } else if (item.name < state.colorRange.min) {
          state.colorRange.min = item.name.slice(0, 3);
          console.log(state.colorRange.min);
        }
        obj[`${state.colorPage}_${item.line}_${item.row}`] = item;
        return obj;
      }, {});
    });

    const getList = async () => {
      state.loading = true;
      const _params = {
        keywords: '',
        ...state.pages,
        colorPage: state.colorPage,
        fields: {
          type: 1,
        },
      };
      const res = await fetchColorLibrary(_params);
      state.colorList = res.records;
      state.loading = false;
    };

    const handleCurrentChange = async (page: number) => {
      state.colorPage = page;
      // await getList();
    };

    watch(() => state.colorPage, debounce(200, async () => {
      await getList();
    }));

    const getColor = (row: number, col: number) => {
      // 因为网格为固定分布, 换页不触发刷新,导致上一页的颜色会带入下一页. 所以在loading时对网格数据做一次清空
      if (state.loading) {
        return {};
      }
      const _item = colorMapObj.value[`${state.colorPage}_${row}_${col}`] || {};
      return {
        // ..._item,
        id: _item.id,
        name: _item.name,
        colorFamily: _item.colorFamily,
        bg: _item.name ? `rgb(${_item.r}, ${_item.g}, ${_item.b})` : 'transparent',
        color: row <= 3 ? '#222' : '#fff',
      };
    };

    const handleMouseEnter = (event, item) => {
      if (typeof item.name === 'undefined') {
        state.hoverItem = null;
        return;
      }
      state.hoverItem = item;
      const rect = event.target.getBoundingClientRect();
      Object.keys(state.hoverItemRect).forEach((key) => {
        state.hoverItemRect[key] = rect[key];
      });
    };

    const handleMouseLeave = (event) => {
      if (state.hoverItem) {
        state.hoverItem = null;
      }
      console.log('mouseleave');
    };
    onMounted(async () => {
      await getList();
    });

    return {
      ...toRefs(state),
      mainRef,
      handleCurrentChange,
      getColor,
      gradientSize: {
        rows: 10,
        cols: 10,
      },
      colorMapObj,
      handleMouseEnter,
      handleMouseLeave,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
.coloro-gradient {
  flex: 1;
  .content-wrapper {
    .item {
      margin: 2px;
    }
  }
  .el-pagination {
    flex: 0;
    margin-top: 20px;
  }
  .hover-color-item {
    position: fixed;
  }
}
</style>
