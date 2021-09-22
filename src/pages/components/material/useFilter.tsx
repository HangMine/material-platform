import { fetchChildCategory } from '@/api/material';
import { FormItems, FormItem } from '@/components/form/HForm/type';
import { t } from '@/i18n';
import { colorFamilyArr, colorFamilyMap } from '@/models/Material';
import deepCopy from '@/utils/deep-copy';
import {
  onMounted,
  reactive, toRefs,
} from 'vue';
import CategoryCascader from '@/components/form/cascader/CategoryCascader.vue';
import InputWithUnit from '@/components/CollapseSearchFilter/components/InputWithUnit.vue';
import {
  getAllFormItemsObj, getBaseFormItems, getFeatureFormItems, getOptions,
} from './components/MaterialForm/utils';

export type FilterOption = {
  key: string,
  title: string,
  color?: string,
  isChecked?: boolean
};

export type FilterItem = FormItem & {
  key: string,
  title: string,
  options: FilterOption[],
  multiple: boolean,
  show?: boolean
  collapse?:boolean
};


const getOptionItemWithAll = (title = t('all'), isChecked = true) => ({
  key: '',
  title,
  isChecked,
});

const options2FilterOptions = (_options: FormItem['options']) => {
  return [getOptionItemWithAll(), ..._options].map(option => {
    const isChecked = false;
    return {
      isChecked,
      ...option,
    };
  });
};


type FilterType = 'buyer'|'supplier';

type Option = {
  autoInit: boolean,
  props?: Partial<{
    categoryId: string,
    defaultParams: Obj,
  }>,
  type?: FilterType
};

const defaultOption = {
  autoInit: true,
  props: {},
  type: 'buyer' as FilterType,
};


const useFilter = (config: Option = defaultOption) => {
  const { props } = config;
  const state = reactive({
    filterData: [] as FilterItem[],
    filedsParams: {
      applicableProduct: [],
      categoryId: props?.categoryId ? [props.categoryId] : [],
      yearSeason: props?.defaultParams?.yearSeason ?? [],
      colorFamily: [],
      isInStock: [],
      moq: [''],
      moqUnit: '码',
      price: [],
      priceCurrency: '人民币',
      functionPurpose: [],
      postProcessing: [],
      environmentProtectionType: [],
      recommendParts: [],
    } as Obj,
    apiCatetorys: [] as FilterOption[],
  });
  // 处理需要根据监听变化的filterData
  const handleWatchedFilterData = (categoryId: string, needHandleFormItems: FilterItem[]) => {
    const categoryItem = state.apiCatetorys.find(item => item.id === categoryId);
    const needHandleFormItemsObj = needHandleFormItems.reduce((obj, formItem) => {
      obj[formItem.key] = formItem;
      return obj;
    }, {} as Record<FormItem['key'], FormItem>);
    const newFormItemsObj = [...getBaseFormItems(categoryItem), ...getFeatureFormItems(categoryItem)].reduce((obj, formItem) => {
      obj[formItem.key] = formItem;
      return obj;
    }, {} as Record<FormItem['key'], FormItem>);

    const needHandledKeys = ['functionPurpose', 'postProcessing',
      'manufacturingProcess', 'classification', 'surfaceTreatment',
      'type', 'productName',
      'appearance', 'surfaceTreatment'];
    needHandledKeys.forEach(key => {
      const needHandledFormItem = needHandleFormItemsObj[key];
      const newFormItem = newFormItemsObj[key];
      if (!needHandledFormItem || !newFormItem) return;
      needHandledFormItem.show = newFormItem.show;
      needHandledFormItem.options = options2FilterOptions(newFormItem.options);
    });
  };
  const formItem2BuyerFormItem = (formItem: FormItem) => {
    const filterItem = (deepCopy(formItem) as FilterItem);
    if (!filterItem.options) return filterItem;

    switch (formItem.key) {
      case 'yearSeason':
        {
          const filterOptions = options2FilterOptions(filterItem.options);
          filterItem.options = filterOptions.slice(0, 20);
        }
        break;
      case 'isInStock':
        filterItem.options = [getOptionItemWithAll(t('material-manage.form.no_valid')), ...filterItem.options].map(option => {
          const isChecked = false;
          return {
            isChecked,
            ...option,
          };
        });
        break;
      case 'colorFamily':
        filterItem.options = options2FilterOptions(filterItem.options).map(option => ({ ...option, color: colorFamilyMap[option.key] }));
        break;
      case 'moqUnit':
      case 'priceCurrency':
        break;
      default:
        filterItem.options = options2FilterOptions(filterItem.options);
        break;
    }

    return filterItem;
  };
  const formItem2SupplierFormItem = (formItem:FormItem) => {
    const filterItem = (deepCopy(formItem) as FilterItem);
    const filterFormItemsObj = state.filterData.reduce((obj, _formItem) => {
      obj[_formItem.key] = _formItem;
      return obj;
    }, {} as Record<FormItem['key'], FormItem>);
    const getFormItem = (formItemKey:string, propKey:string, fallbackValue:any = []) => {
      const _formItem = filterFormItemsObj?.[formItemKey];
      return _formItem?.[propKey] || fallbackValue;
    };
    switch (formItem.key) {
      case 'categoryId':
        filterItem.type = 'cascader';
        filterItem.slot = () => (
          <CategoryCascader
            multiple
            collapse-tags
            vModel={state.filedsParams.categoryId}
            clearable
          ></CategoryCascader>);
        break;
      case 'moq':
      case 'price': {
        const keyMaps = {
          moq: {
            key: 'moq',
            unitKey: 'moqUnit',
          },
          price: {
            key: 'price',
            unitKey: 'priceCurrency',
          },
        };
        const keyMapItem = keyMaps[formItem.key];
        const { key, unitKey } = keyMapItem;
        filterItem.slot = () => (
          <div class="flex">
            <InputWithUnit
              vModels={[
                [state.filedsParams[key]],
                [state.filedsParams, 'unit'],
              ]}
              placeholder={getFormItem(key, 'title', '')}
              unitOptions={getFormItem(unitKey, 'options')}
            ></InputWithUnit>
          </div>
        );
      }

        break;
      case 'isInStock':
        filterItem.type = 'select';
        break;
      default:
        break;
    }
    filterItem.placeholder = filterItem.title;
    filterItem.collapsed = true;
    filterItem.rules = undefined;
    return filterItem;
  };
  const getFilterFormItems = () => {
    const getCategoryFormItem = () => {
      return {
        key: 'categoryId',
        title: t('material-manage.form.material_type'),
        options: getOptions(state.apiCatetorys, 'category', 'material'),
      };
    };
    const getColorFamilyFormItem = () => {
      const getColorFamilyOptions = () => {
        return colorFamilyArr.map((value) => ({
          key: value,
          title: value,
        }));
      };
      const colorFamilyFormItem = {
        key: 'colorFamily',
        title: t('material-manage.colors'),
        multiple: true,
        options: getColorFamilyOptions(),
      };
      return colorFamilyFormItem;
    };


    const filterKeys = ['applicableProduct', 'categoryId', 'yearSeason', 'colorFamily', 'isInStock', 'moq', 'price', 'functionPurpose',
      'postProcessing', 'environmentProtectionType', 'recommendParts',
      'manufacturingProcess', 'classification', 'surfaceTreatment',
      'type', 'productName',
      'appearance', 'surfaceTreatment',
    ];


    const allFormItemsObj = getAllFormItemsObj();

    const categoryItemFormItem = getCategoryFormItem();

    const filterFormItems = filterKeys.reduce((arr, key) => {
      const formItem = allFormItemsObj[key];
      let willPushItems: FormItems = [];
      const getUnshowFormItem = (_formItem: FormItem) => {
        return { show: false, ..._formItem };
      };
      switch (key) {
        case 'categoryId':
          willPushItems = [categoryItemFormItem];
          break;
        case 'colorFamily':
          willPushItems = [getColorFamilyFormItem()];
          break;
        case 'moq':
          willPushItems = [formItem, getUnshowFormItem(allFormItemsObj.moqUnit)];
          break;
        case 'price':
          willPushItems = [formItem, getUnshowFormItem(allFormItemsObj.priceCurrency)];
          break;
        case 'functionPurpose':
        case 'postProcessing':
          {
            const [categoryId] = state.filedsParams.categoryId;
            handleWatchedFilterData(categoryId, [formItem]);
            willPushItems = [formItem];
          }
          break;
        default:
          willPushItems = [formItem];
          break;
      }
      return [...arr, ...willPushItems];
    }, [] as FormItems);

    return filterFormItems;
  };

  const setFilterData = (type: FilterType = config.type) => {
    const filterFormItems = getFilterFormItems();
    if (type === 'buyer') {
      state.filterData = filterFormItems.map(formItem => formItem2BuyerFormItem(formItem));
    } else {
      state.filterData = filterFormItems.map(formItem => formItem2SupplierFormItem(formItem));
    }
  };

  const fetchApiCatetorys = async () => {
    const apiCatetorys = ((await fetchChildCategory({ pId: '-1' }, true)).data || []) as unknown as FilterOption[];
    state.apiCatetorys = apiCatetorys;
  };

  const init = async () => {
    await fetchApiCatetorys();
    setFilterData();
  };

  onMounted(async () => {
    if (config.autoInit) {
      await init;
    }
  });

  return {
    ...toRefs(state), setFilterData, handleWatchedFilterData, init,
  };
};

export default useFilter;
