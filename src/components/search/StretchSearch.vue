<template>
  <div class="stretch-search" :style="searchStyle">
    <el-input
      class="search-input"
      v-model="keywords"
      size="small"
      :placeholder="$t('material-manage.input_keyword_search_material')"
      clearable
      :style="searchInputStyle"
      @change="search"
      @blur="toggleShowSearch(false)"
      v-bind="$attrs"
      ref="searchInputVm"
    >
      <template #prefix>
        <i class="el-input__icon el-icon-search"></i>
      </template>
    </el-input>
    <el-tooltip content="搜索" effect="light" popper-class="tooltip--narrow" :visible-arrow="false">
      <i class="search-icon i-r-fangdajing2" :style="searchIconStyle" @click="toggleShowSearch(true)"></i>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { ElInput } from 'element-plus';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { getPx } from '@/utils/util';

type Aspect = 'left' | 'right';

export default defineComponent({
  name: 'stretch-search',
  components: {},
  props: {
    width: {
      type: [Number, String],
      default: 220,
    },
    aspect: {
      type: String as PropType<Aspect>,
      default: 'right',
    },
  },
  setup(props, { emit }) {
    const searchInputVm = ref<InstanceType<typeof ElInput>>();
    const state = reactive({
      keywords: '',
      showSearch: false,
    });
    const searchStyle = computed(() => {
      return {
        width: getPx(props.width),
      };
    });
    const getAspectStyle = () => {
      return props.aspect === 'right' ? {
        right: '0',
      } : {
        left: '0',
      };
    };
    const searchInputStyle = computed(() => {
      return {
        width: state.showSearch ? getPx(props.width) : '0',
        'pointer-event': state.showSearch ? 'auto' : 'none',
        opacity: state.showSearch ? '1' : '0',
        ...getAspectStyle(),
      };
    });

    const searchIconStyle = computed(() => {
      return {
        opacity: state.showSearch ? '0' : '1',
        'pointer-event': state.showSearch ? 'none' : 'auto',
        ...getAspectStyle(),

      };
    });
    const toggleShowSearch = (showSearch?: boolean) => {
      state.showSearch = showSearch === undefined ? !state.showSearch : showSearch;
      if (state.showSearch) {
        searchInputVm.value?.focus();
      }
    };
    const search = () => {
      emit('search', state.keywords);
      toggleShowSearch(false);
    };
    return {
      ...toRefs(state), searchInputVm, searchStyle, searchInputStyle, searchIconStyle, toggleShowSearch, search,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.stretch-search {
  position: relative;
  height: 50px;
  display: inline-block;
  overflow: hidden;
  .search-input {
    position: absolute;
    top: 10px;
    transition: all 0.3s;
  }
  .search-icon {
    position: absolute;
    top: 18px;
    cursor: pointer;
  }
}
</style>
