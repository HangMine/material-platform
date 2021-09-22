<template>
  <div class="fields-filter">
    <ul class="filter-ul">
      <template v-for="(item, i) of filterData" :key="i">
        <li v-if="item.show !== false" class="filter-li">
          <div class="title">{{ item.title }}</div>
          <slot :name="item.key">
            <ul :class="{ 'year-season': ['yearSeason'].includes(item.key) }" class="options-ul">
              <li
                v-for="(option, i) of item.options"
                :key="i"
                class="options-li"
                :class="{ active: option.isChecked }"
                @click="handleClickOption(item, option)"
              >
                <span v-if="option.color" class="color" :style="{ 'background-color': option.color }"></span>
                {{ option.title }}
              </li>
            </ul>
          </slot>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { falsy, unFalsy } from '@/components/form/HForm/utils';
import { t } from '@/i18n';
import onCreated from '@/utils/vue/onCreated';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch, nextTick,
} from 'vue';
import { bemergedFieldsKeys } from '@/pages/components/material/components/MaterialForm/utils';
import { objUtil } from '@/utils/util';
import { FilterItem, FilterOption } from '../../useFilter';


export const getOptionItemWithAll = (title = t('all'), isChecked = true) => ({
  key: '',
  title,
  isChecked,
});

export default defineComponent({
  name: 'fields-filter',
  components: {},
  props: {
    filterItems: {
      type: Array as PropType<FilterItem[]>,
      required: true,
    },
    modelValue: {
      type: Object as PropType<Obj>,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue', 'click-fields'],
  setup(props, { emit, slots }) {
    const state = reactive({
      filterData: [] as FilterItem[],
      filterParams: {} as Obj,
    });
    // 设置checked
    const setChecked = (item: FilterItem, option: FilterOption) => {
      const isMutiple = item.multiple;
      // 点击了[全部]按钮
      if (option.key === '' && !option.isChecked && isMutiple) {
        item.options.forEach(_option => {
          _option.isChecked = _option.key === option.key;
        });
        return;
      }
      item.options.forEach(_option => {
        if (isMutiple) {
          if (_option.key === option.key) {
            _option.isChecked = !_option.isChecked;
          }
        } else {
          _option.isChecked = _option.key === option.key;
        }
      });
      // 点击其它按钮联动[全部]按钮
      if (isMutiple) {
        const isAll = item.options.filter(_option => falsy(_option.key)).every(_option => !_option.isChecked);
        item.options[0].isChecked = isAll;
      }
    };
    // 通过modelValue设置预设值时同步到filterData
    const setFilterDataChecked = (params: typeof props.modelValue) => {
      Object.entries(params).forEach(([key, value]) => {
        const filterItem = state.filterData.find(item => item.key === key);
        if (!filterItem || !filterItem.options) return;
        if (filterItem?.multiple) {
          // 多选
          filterItem?.options.forEach(option => {
            if (Array.isArray(value) && value.includes(option.key)) setChecked(filterItem, option);
          });
        } else {
          //  单选
          filterItem?.options.forEach(option => {
            const _value = Array.isArray(value) ? value[0] : value;
            if (_value === option.key) setChecked(filterItem, option);
          });
        }
      });
    };

    watch(() => props.filterItems, () => {
      state.filterData = props.filterItems;
      setFilterDataChecked(props.modelValue);
    }, { immediate: true });

    watch(() => props.modelValue, () => {
      state.filterParams = props.modelValue;
    }, { immediate: true });
    watch(() => state.filterParams, () => {
      emit('update:modelValue', state.filterParams);
    });
    const getParams = () => {
      const bemergedFieldsKeysObj = bemergedFieldsKeys.reduce((obj, key) => {
        obj[key] = true;
        return obj;
      }, {} as Record<string, boolean>);

      const getFilterParams = () => {
        return state.filterData.reduce((obj, _item) => {
          let value = (_item.options || [])
            .filter(option => option.key !== '' && option.isChecked)
            .map(option => option.key)
            .filter(item => unFalsy(item));
          if (bemergedFieldsKeysObj[_item.key]) value = value[0] || '';
          obj[_item.key] = value;
          return obj;
        }, {} as Obj);
      };
      const filterParams = getFilterParams();
      const slotsKeys = Object.keys(slots); // 如果传了slot,参数以slot为准
      return { ...state.filterParams, ...objUtil.omit(filterParams, slotsKeys) };
    };

    const handleClickOption = async (item: FilterItem, option: FilterOption) => {
      setChecked(item, option);
      state.filterParams = getParams();
      await nextTick(); // 在state.filterParams同步出去后再抛出事件
      emit('click-fields', state.filterParams);
    };


    return {
      ...toRefs(state), handleClickOption,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./common";
.fields-filter {
  @include filterUl();
}
</style>
