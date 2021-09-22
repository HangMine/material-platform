<template>
  <div class="color-selector-dialog-form">
    <!-- <el-input prefix-icon="i-r-sousuo-16" size="mini" placeholder="请输入标准色号"></el-input> -->
    <!-- <el-autocomplete
      prefix-icon="i-r-sousuo-16"
      size="mini"
      placeholder="请输入标准色号"
      v-model="searchText"
      :fetch-suggestions="handleSearch"
      @select="handleSelectSearchResult"
    ></el-autocomplete> -->
    <el-select
      class="search-input-bar"
      size="mini"
      prefix-icon="i-r-sousuo-16"
      v-model="searchText"
      filterable
      remote
      reserve-keyword
      :placeholder="$t('public.form.input_standard_color')"
      :remote-method="handleSearch"
      :loading="loading"
      @change="handleSelectSearchResult"
    >
      <template #prefix>
        <i class="icon i-r-sousuo-16"></i>
      </template>
      <el-option
        v-for="item in searchResultOptions"
        :key="item.name"
        :label="item.name"
        :value="`rgb(${item.r},${item.g},${item.b})`"
      >
        <div class="flex-vertical-center">
          <div class="color-preview-legend" :style="{ backgroundColor: `rgb(${item.r},${item.g},${item.b})` }"></div>
          <span>{{ item.name }}</span>
        </div>
      </el-option>
    </el-select>
    <div class="flex">
      <color-picker :colorInstance="colorInstance" @refreshColor="createColor" ref="colorPickerVm" />
      <color-input
        :colorInstance="colorInstance"
        @refreshColor="createColor"
        @changeValue="handleInputColor"
        ref="colorInputVm"
      />
    </div>
    <footer>
      <el-button @click="handleCancel">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" @click="handleConfirm">{{ $t("public.dialog.confirm") }}</el-button>
    </footer>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, watch,
} from 'vue';
import { fetchColorLibrary, ColorLibraryItem } from '@/api/materialMenu';
import ColorPicker from './color-picker/index.vue';
import ColorInput from './color-input/index.vue';
import Color, { cmyk2rgb } from './color-picker/color';

export default defineComponent({
  name: 'color-selector-dialog',
  components: { ColorPicker, ColorInput },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:visible', 'change'],
  setup(props, { emit }) {
    const colorInstance = ref<InstanceType<typeof Color>>();

    const searchText = ref<string>('');
    const loading = ref<boolean>(false);
    const searchResultOptions = ref<ColorLibraryItem[]>([]);
    const colorPickerVm = ref<InstanceType<typeof ColorPicker>>();
    const colorInputVm = ref<InstanceType<typeof ColorInput>>();

    const createColor = (options?: { type: string, value: string }) => {
      const oldValue = colorInstance.value?.value || 'rgb(255,0,0)';
      const oldFormat = colorInstance.value?.format || 'rgb';
      colorInstance.value = new Color({
        enableAlpha: false,
        format: options?.type || oldFormat,
      });
      colorInstance.value?.fromString(options?.value || oldValue);
      return colorInstance;
    };

    createColor();

    const handleInputColor = (newColor) => {
      colorInstance.value?.fromString(newColor || 'rgb(255,0,0)');
      searchText.value = '';
      searchResultOptions.value = [];
    };

    const reset = () => {
      searchText.value = '';
      searchResultOptions.value = [];
      createColor({ type: 'rgb', value: 'rgb(255,0,0)' });
    };

    watch(() => props.modelValue, val => {
      // handleInputColor(val);
      colorInstance.value?.fromString(val);
    });

    watch(() => colorInstance.value?.value, (val) => {
      emit('update:modelValue', val);
    });

    const handleSearch = async (queryString: string) => {
      searchResultOptions.value = queryString ? (await fetchColorLibrary({
        page: 1,
        size: 1000,
        // colorPage: 1,
        keywords: queryString,
        fields: {
        },
      })).records : [];
    };

    const handleSelectSearchResult = (val) => {
      colorInstance.value?.fromString(val);
    };

    const handleConfirm = () => {
      // 向外提交的是_rgbValue
      emit('update:modelValue', colorInstance.value?._rgbValue);
      emit('change', colorInstance.value?._rgbValue);
      emit('update:visible', false);
      reset();
    };

    const handleCancel = () => {
      emit('update:visible', false);
      reset();
    };


    return {
      loading,
      handleInputColor,
      colorInstance,
      createColor,
      searchText,
      handleSearch,
      handleSelectSearchResult,
      searchResultOptions,
      handleConfirm,
      handleCancel,
      reset,
      colorPickerVm,
      colorInputVm,
    };
  },
});
</script>
<style lang="scss">
.color-selector-dialog-form {
  .search-input-bar {
    width: 100%;
    margin-bottom: 12px;
    .el-input .el-input__prefix {
      left: 8px;
      color: #666;
      .icon {
        font-size: 14px;
      }
    }
  }
  .color-input {
    margin-left: 4px;
  }
}
.color-preview-legend {
  width: 40px;
  height: 28px;
  border: 1px solid #000;
  margin-right: 10px;
}
</style>
