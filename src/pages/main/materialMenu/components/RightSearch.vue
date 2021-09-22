<template>
  <div class="left-search">
    <p class="input-search">
      <el-input
        :placeholder="$t('public.form.input_keyword')"
        prefix-icon="i-r-sousuo-16"
        size="small"
        v-model="inputValue"
        clearable
        @change="inputEnter"
      >
      </el-input>
    </p>
    <p class="select-search" v-if="['colorLibrary', 'pantoneLibrary'].includes(type)">
      <el-select
        size="small"
        clearable="true"
        @change="selectChange"
        v-model="selectValue"
        :placeholder="$t('folder.all_color_system')"
      >
        <el-option v-for="item in colorSystemOption" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </p>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, PropType,
} from '@vue/runtime-core';
import { t } from '@/i18n/index';

export default defineComponent({
  name: '',
  conponents: {},
  props: {
    type: {
      type: String as PropType<'colorLibrary' | 'pantoneLibrary'>,
      required: true,
    },
    newBuildName: {
      type: String,
      default: t('folder.color_card_book'),
    },
    keywords: {
      type: String,
    },
  },
  emits: ['inputChange', 'selectChange', 'refreshList'],
  setup(props, { emit }) {
    const state = reactive({
      inputValue: props.keywords || '',
      selectValue: '',
      colorSystemOption: [
        { label: '黑色', value: '黑色' },
        { label: '灰色', value: '灰色' },
        { label: '白色', value: '白色' },
        { label: '红色', value: '红色' },
        { label: '橙色', value: '橙色' },
        { label: '黄色', value: '黄色' },
        { label: '绿色', value: '绿色' },
        { label: '青色', value: '青色' },
        { label: '蓝色', value: '蓝色' },
        { label: '紫色', value: '紫色' },
      ],
    });

    const inputEnter = () => {
      emit('inputChange', state.inputValue);
    };
    const selectChange = () => {
      // console.log(state.selectValue, 'state.selectValue');
      emit('selectChange', state.selectValue);
    };
    return {
      ...toRefs(state), inputEnter, selectChange,
    };
  },
});
</script>
<style lang="scss">
.left-search {
  display: flex;
  align-items: center;
  .el-button:focus {
    background-color: #fff !important;
    border: 1px solid #dcdfe6;
    color: #666;
  }
  .el-button:hover {
    color: $color-primary;
    border-color: #b3ebe9;
    background-color: #e6f8f8;
  }

  .select-search {
    margin-left: 12px;
  }
  .el-input--prefix .el-input__inner {
    padding-left: 26px;
  }
  .el-input__prefix {
    left: 8px;
    color: #666666;
  }
  .el-select .el-input {
    .el-input__inner {
      &::placeholder {
        color: #222 !important;
      }
    }
  }
}
</style>
