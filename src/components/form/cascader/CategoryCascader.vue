<template>
  <SdCascader
    v-if="reMounted"
    :fetchFn="cascaderFetchFn"
    :placeholder="`${$t('all')}${fieldMap.getWithKey('categoryId')}`"
    class="catergory-cascader"
    v-bind="$attrs"
  ></SdCascader>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, watch, nextTick,
} from 'vue';
import { fetchMaterial, fetchMaterialList, fetchChildCategory } from '@/api/material';
import fieldMap from '@/utils/field-map';
import { useI18n } from '@/i18n';
import SdCascader, { CascaderNode, CascaderNodes } from './index';

export default defineComponent({
  name: 'catergory-cascader',
  inheritAttrs: false,
  components: { SdCascader },
  props: {},
  setup(props, { emit }) {
    const { lang } = useI18n();
    const state = reactive({
      reMounted: true,
    });
    const cascaderFetchFn = async (node: CascaderNode) => {
      const res = (await fetchChildCategory({ pId: node.value || '-1' })).data;
      return res.map(item => ({
        level: node.level + 1,
        value: item.id,
        label: item.name,
        leaf: !item.hasChild,
      }));
    };
    // watch(lang, async () => {
    // 暂时在业务层面解决 后面需要再说
    //   // 强制重新挂载categoryCascader以触发国际化,因为cascader是通过lazyLoad渲染
    //   state.reMounted = false;
    //   await nextTick();
    //   state.reMounted = true;
    // });
    return {
      ...toRefs(state), cascaderFetchFn, fieldMap,
    };
  },
});
</script>
<style lang="scss" >
// @import 'url'
.catergory-cascader {
  .el-input__inner {
    &::placeholder {
      color: #606266 !important;
    }
  }
}
</style>
