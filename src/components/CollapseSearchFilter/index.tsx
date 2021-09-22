import {
  defineComponent, reactive, toRefs, onMounted, Slot, computed, Teleport, Ref, onBeforeUnmount, ref, watch, nextTick, onUnmounted,
} from 'vue';
import {
  materialStatusOptions, colorFamilyOptions,
} from '@/models/Material';
import {
  options as searchOptions, getOptions, getYearSeasonOptions, yearSeasonBreak,
} from '@/pages/components/material/components/MaterialForm/utils';
import CategoryCascader from '@/components/form/cascader/CategoryCascader.vue';
import DictionaryAddressItemSelector from '@/components/form/DictionaryAddressItemSelector.vue';
import RangeInput from '@/components/form/RangeInput.vue';
// import deepCopy from '@/utils/deep-copy';
import fieldMap from '@/utils/field-map';
import can from '@/utils/can';
import { useRoute } from 'vue-router';
import { useI18n, t } from '@/i18n/index';

import useFilter from '@/pages/components/material/useFilter';
import { FormItem, FormItems, Options } from '../form/HForm/type';
import HForm from '../form/HForm/index.vue';
import './index.scss';
import { resetParams } from '../form/HForm/utils';
import InputWithUnit from './components/InputWithUnit.vue';
import useCollapseChange from './composables/useCollapseChange';


const searchValidCodeMap = {
  '/main/market': '0012',
  '/main/collection/materials': '0018',
  '/main/material-manage': '0009',
};

const filterValidCodeMap = {
  '/main/market': '0010',
  '/main/collection/materials': '0019',
  '/main/material-manage': '0008',
};

// 单位相关的表单项
const unitFormItemList = [
  'sampleMoqUnit',
  'moqUnit',
  'samplePriceCurrency',
  'priceCurrency',
  'leadTimeUnit',
  'grammageUnit',
  'thicknessUnit',
  'widthUnit',
];

const isEmpty = (val: number | string | null | undefined) => {
  return !val && val !== 0;
};

const CollapseSearchFilter = defineComponent({
  name: 'collapse-search-filter',
  props: {
    form: {
      type: Array as () => FormItems,
    },
    handleChange: {
      type: Function,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
    },
    // 是否公开市场页面
    // isMarketPage: {
    //   type: Boolean,
    //   default: false,
    // },
    // 是否材料管理页面
    isHomePage: {
      type: Boolean,
      default: false,
    },
    isMarketPage: {
      type: Boolean,
      default: false,
    },
    // 是否只显示筛选触发按钮
    onlyTrigger: {
      type: Boolean,
      default: false,
    },
    // 展开遮罩的目标挂载对象
    maskTarget: {
      type: String,
      default: '#hTableWrap',
    },
  },
  setup(props, { emit, slots }) {
    const { onLangChange } = useI18n();
    const {
      isCollapsed,
      handleCollapseStatusChange,
    } = useCollapseChange();

    const { filterData, filedsParams, setFilterData } = useFilter({ autoInit: false, type: 'supplier' });

    const state = reactive({
      // 表单配置
      formData: [] as FormItems,
      // 静止的表单项配置
      staticFormData: [] as FormItems,
      // 折叠的表单项配置
      collapseFormData: [] as FormItems,
      // 静止的表单参数
      staticFormParams: {} as {[key: string]: any},
      // 折叠的表单参数
      filedsParams,

      staticFormSlot: {} as {[key: string]: Slot},
      collapseFormSlot: {} as {[key: string]: Slot},

    });

    // const validateCanForRoute = () => {
    //   const route = useRoute();
    //   switch (route.path) {
    //     case '/main/market': return can('0012');
    //     case '/main/collection/materials': return can('0025');
    //     case '/main/material-manage': return can('0009');
    //     default: return true;
    //   }
    // };

    const handleCommonChange = () => {
      if (!can(searchValidCodeMap)) {
        return;
      }
      // 根据后端入参要求格式化并深拷贝搜索条件
      const _filedsParams = Object.entries(state.filedsParams).reduce((obj: Obj, [key, val]) => {
        if (key === 'categoryId') {
          // const categoryIds = (val as {0: string, 1: string}[]).map(e => e[1]);
          // const categoryId = val?.[2] || val?.[1] || '';
          obj[key] = val ? (val as {0: string, 1: string}[]).map(e => e[1]) : [];
          // state.filedsParams.categoryId = categoryId ? [categoryId] : [];
        } else if (['tag', ...unitFormItemList].includes(key)) {
          // 除tag和单位项外, 其他项后端要求为数组
          obj[key] = val;
        } else if (Array.isArray(val)) {
          obj[key] = [...val.filter(e => !isEmpty(e))];
          const _item = obj[key];
          if (_item.length === 2 && _item[0] > _item[1]) {
            // if (isEmpty(_item[0]) || isEmpty(_item[1])) {
            //   isEmpty(_item[0]) && (_item[0] = 0);
            //   isEmpty(_item[1]) && (_item.length = 1); // 如果只有最小值, 则数组改为单一元素
            // } else if (_item[0] > _item[1]) {
            // 前值大于后值时交换位置, 并修改到表单数据中
            obj[key] = [_item[1], _item[0]];
            state.filedsParams[key] = [_item[1], _item[0]];
            // }
          }
        } else if (typeof val === 'string' || typeof val === 'number') {
          obj[key] = !isEmpty(val) ? [val] : [];
        }
        return obj;
      }, {});
      const searchParams = { ...state.staticFormParams, ..._filedsParams };
      props.handleChange(searchParams);
      isCollapsed.value = true;
    };
    // const handleCascaderChange = (catergorys:string[]) => {
    //   const categoryId = catergorys?.[2] || catergorys?.[1] || '';
    //   state.filedsParams.categoryId = categoryId ? [categoryId] : [];
    //   // handleCommonChange();
    // };
    // const handleAddressChange = (val: string) => {
    //   state.filedsParams.supplierLocation = val;
      // handleCommonChange();
      // if (type === 'country') {
      //   const cityFormItem = configList.find(data => data.key === 'province');
      //   console.log(cityFormItem, configList);
      //   if (cityFormItem) {
      //     cityFormItem.show = true;
      //   }
      // }
    // };
    const getDefaultFormItemData = () => {
      setFilterData();
      return [{
        key: 'keywords',
        title: '',
        placeholder: t('public.form.input_keyword'),
        prefixIcon: 'i-r-sousuo-16',
        // onKeyup(e: KeyboardEvent) {
        //   if (e.key === 'Enter') {
        //     handleCommonChange();
        //   }
        // },
        onChange() {
          handleCommonChange();
        },
      },
      // 全部材料状态
      !props.isMarketPage ? {
        key: 'tag',
        title: '',
        type: 'select',
        collapsed: true,
        placeholder: t('public.form.all_material_status'),
        options: materialStatusOptions as Options,
      } : null,
      ...filterData.value,
      props.isHomePage ? null : {
        key: 'supplierLocation',
        title: '',
        type: 'select',
        collapsed: true,
        slot: () => (
          <DictionaryAddressItemSelector
            vModel={state.filedsParams.supplierLocation}
            parentId="49"
            type="province"
            placeholder={t('public.form.all_supplier_address')}
            clearable
          ></DictionaryAddressItemSelector>),
      },
      props.isHomePage ? {
        key: 'hasFile',
        title: '',
        type: 'select',
        collapsed: true,
        // value: '',
        placeholder: t('public.form.wether_upload_4dfile'),
        options: getOptions([{
          id: 1,
          name: '是',
        }, {
          id: 0,
          name: '否',
        }], 'normalBoolean'),
      } : null,
      ];
    };


    // 处理搜索表单数据
    const setFormData = async () => {
      state.staticFormData = [];
      state.collapseFormData = [];
      const formItemData = props.form ?? getDefaultFormItemData();
      formItemData.forEach(item => {
        if (!item) {
          return;
        }
        const _item = {
          // 增加事件处理
          // onChange() {
          //   handleCommonChange();
          // },
          ...item,
        };
        state[item.collapsed !== true ? 'staticFormData' : 'collapseFormData'].push(_item);
        const slot = slots[item.key] ?? item.slot;
        if (slot) {
          state[item.collapsed !== true ? 'staticFormSlot' : 'collapseFormSlot'][item.key] = slot;
        }
      });
    };
    // 是否有正在搜索项
    const isFiltering = computed(() => {
      return Object.entries({ ...state.filedsParams })
        .some(([key, val]) => (!unitFormItemList.includes(key) && (Array.isArray(val) ? val.length > 0 : !!val)));
    });

    setFormData();


    fieldMap.onToggle(() => {
      setFormData();
    });

    const clearLangChange = onLangChange(async () => {
      // 强行刷新
      state.staticFormData = [];
      state.collapseFormData = [];
      await nextTick();
      setFormData();
    });

    onUnmounted(() => {
      clearLangChange();
    });

    const handleReset = () => {
      state.staticFormParams = resetParams(state.staticFormData);
      state.filedsParams = resetParams(state.collapseFormData);
      // state.staticFormParams = deepCopy(initStaticFormData);
      // state.filedsParams = deepCopy(initCollapseFormData);
    };
    return {
      ...toRefs(state),
      isCollapsed,
      handleCollapseStatusChange,
      handleCommonChange,
      handleReset,
      isFiltering,
    };
  },
  render() {
    return (
      <div class={['collapse-search-filter', { 'only-trigger': this.onlyTrigger }]}>
        <div class="static-form flex">
          {!this.onlyTrigger && <HForm
            data={this.staticFormData}
            vModel={this.staticFormParams}
            inline=""
            size={this.size || 'small'}
            v-slots={this.staticFormSlot}
          >
            {/* {SearchBtn} */}
          </HForm>}
          <el-button
            type={this.onlyTrigger ? 'text' : 'default'}
            class={['filter-btn', { 'is-filtering': this.isFiltering }]}
            onClick={($event: Event) => can(filterValidCodeMap) && this.handleCollapseStatusChange($event)}>
            <i class="iconfont i-r-shaixuan-nor"></i>
            <span class="btn-inner-text">&nbsp;{t('public.form.screen')}</span>
          </el-button>
        </div>
        {/* <el-collapse-transition> */}
        <div class={['collapse-form', { 'is-open': !this.isCollapsed }]} onClick={($event) => $event.stopPropagation()}>
          <HForm
            data={this.collapseFormData}
            vModel={this.filedsParams}
            inline=""
            size={this.size || 'small'}
            v-slots={this.collapseFormSlot}
          >
            {/* {SearchBtn} */}
          </HForm>
          <div class="handler-btns-bar flex-justify-flex-end">
            <el-button onClick={this.handleReset}>{t('material-manage.reset')}</el-button>
            <el-button type="primary" onClick={this.handleCommonChange}>{t('confirm')}</el-button>
          </div>
        </div>
        {/* </el-collapse-transition> */}
        {!this.isCollapsed && (<Teleport to={this.maskTarget}>
          <div class="table-mask el-loading-mask">
          </div>
        </Teleport>)}
      </div>
    );
  },
});


export default CollapseSearchFilter;
