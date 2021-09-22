<template>
  <div class="model-select-pane flex-column">
    <div class="filter">
      <el-input
        placeholder="输入模型名称"
        size="small"
        prefix-icon="el-icon-search"
        v-model="searchText"
        clearable
        :style="{ width: '220px' }"
        @change="search"
        ref="inputVm"
      >
      </el-input>
    </div>
    <ul v-if="!isEmpty" class="model-type-ul scrollable-y">
      <template v-for="(modelType, i) of displayModelTypeList" :key="i">
        <li class="model-type-li" v-show="modelType.isShow">
          <h4 class="title">{{ modelType.name }}</h4>
          <ul class="model-ul">
            <template v-for="(model, i) of modelType.modelProp" :key="i">
              <li class="model-li" v-show="model.isShow">
                <Select :model="model"></Select>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
    <Empty v-else type="search"></Empty>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch, PropType,
} from 'vue';
import * as materialApi from '@/api/material';
import onCreated from '@/utils/vue/onCreated';
import useResourceUsage from '@/utils/uses/use-resource-usage';
import usePermisson from '@/utils/uses/use-permisson';
import { objUtil } from '@/utils/util';
import { ElInput } from 'element-plus';
import Empty from '@/components/error/Empty.vue';
import Select from './Select.vue';
import { DisplayModelTypeList, SelectableModel, useModelUtils } from './utils';

export default defineComponent({
  name: 'model-select-pane',
  components: { Select, Empty },
  props: {
    modelValue: {
      type: Array as PropType<DisplayModelTypeList>,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputVm = ref<InstanceType<typeof ElInput>>();
    const { getResourceTotalCountByAuthCenterType, isFunctionAvaliable } = useResourceUsage();
    const { company } = usePermisson();
    const isUserVip = computed(() => !!company.value?.isVIP); // 是VIP


    const state = reactive({
      displayModelTypeList: [] as DisplayModelTypeList,
      isModelIncrement: false, // 有公模增值服务
      modelLimit: getResourceTotalCountByAuthCenterType('material3DPreview'),
      searchText: '',
    });

    const isEmpty = computed(() => state.displayModelTypeList.every(modelType => !modelType.isShow));


    const getModelDisabled = (model: materialApi.Model): boolean => {
      return (!isUserVip.value && !state.isModelIncrement) ? !!model.isVip : false;
    };


    const isModelSelected = (model: SelectableModel) => model.isChecked || model.isIndeterminate;

    const setModelDisabledByLimit = () => {
      if (isUserVip.value) return;
      const modelList = state.displayModelTypeList.reduce((_modelList, modelType) => {
        _modelList = [..._modelList, ...modelType.modelProp];
        return _modelList;
      }, [] as SelectableModel[]);
      const hasSelectedModelNumber = modelList.filter(model => isModelSelected(model)).length;
      const isLimit = hasSelectedModelNumber >= state.modelLimit;
      modelList.forEach(model => {
        model.isDisabled = isLimit ? !isModelSelected(model) : getModelDisabled(model);
      });
    };

    watch(() => props.modelValue, () => {
      state.displayModelTypeList = props.modelValue;
    }, { immediate: true });

    watch(() => state.displayModelTypeList, () => {
      setModelDisabledByLimit();
      emit('update:modelValue', state.displayModelTypeList);
    }, { deep: true });


    const filterDisplayModelTypeList = (modelName: string) => {
      state.displayModelTypeList.forEach(modelType => {
        modelType.modelProp.forEach(model => {
          modelType.isShow = false;
          model.isShow = model.name.includes(modelName);
          if (model.isShow) modelType.isShow = true;
        });
      });
    };

    const search = (searchText: string) => {
      console.log(searchText);
      inputVm.value?.blur();
      filterDisplayModelTypeList(searchText);
    };


    onCreated(async () => {
      state.isModelIncrement = await isFunctionAvaliable('PREVIEW');
      // state.displayModelTypeList = await apiModelTypeList2DisplayModelTypeList();
    });
    return {
      ...toRefs(state), inputVm, search, isEmpty,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.model-select-pane {
  height: 500px;

  .filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10px;
  }
  .model-type-ul {
    .model-type-li {
      + & {
        margin-top: 20px;
      }
      .title {
        color: #222222;
        padding-bottom: 8px;
        font-weight: 400;
      }
      .model-ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
        .model-li {
        }
      }
    }
  }
}
</style>
