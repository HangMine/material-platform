<template>
  <div class="sub-title-bar flex-space-between">
    <h2>推荐会列表</h2>
    <aside class="flex-vertical-center">
      <StretchSearch @search="handleSearch"></StretchSearch>
      <el-tooltip content="新建推荐会" effect="light" popper-class="tooltip--narrow" :visible-arrow="false">
        <i class="create-icon i-r-tianjia-16" @click.self="handleAdd"></i>
      </el-tooltip>
    </aside>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import StretchSearch from '@/components/search/StretchSearch.vue';
import { dialog, confirm } from '@/utils/vue/dialog';


export default defineComponent({
  name: 'sub-title-bar',
  components: { StretchSearch },
  props: {},
  setup(props, { emit }) {
    // const state = reactive({
    //   keywords: '',
    // });
    const handleSearch = async (keywords: '') => {
      // state.keywords = keywords;
      emit('search', keywords);
    };
    const handleAdd = async () => {
      emit('add');
    };
    return {
      // ...toRefs(state),
      handleSearch,
      handleAdd,
    };
  },
});
</script>
<style lang="scss" scoped>
.sub-title-bar {
  border-bottom: 1px solid #e7e7e7;
  // margin: 0 40px;
  // background: #f2f3f5;
  .create-icon {
    cursor: pointer;
    margin-left: 16px;
  }
  h2 {
    font-size: 16px;
    color: #222222;
    font-weight: 400;
  }
}
</style>
