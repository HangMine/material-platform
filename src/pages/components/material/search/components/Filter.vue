<template>
  <div class="material-search-filter">
    <!-- <div class="filter-wrap" :style="filterWrapStyle"> -->
    <UpDown :height="185" ref="upDownVm">
      <FieldsFilter :filterItems="filterData" v-model="filedsParams" @click-fields="search" ref="fieldsFilterVm">
        <template #moq>
          <div class="filter-select">
            <el-input
              class="input"
              size="small"
              placeholder="最少起订量"
              v-model="filedsParams.moq[0]"
              :oninput="onNumberInput"
              @change="search"
            ></el-input>
            <el-select class="select" size="small" v-model="filedsParams.moqUnit" @change="search">
              <el-option v-for="item in moqUnitFormItemOptions" :key="item.key" :label="item.title" :value="item.key">
              </el-option>
            </el-select>
          </div>
        </template>
        <template #price>
          <div class="filter-select">
            <RangeInput
              class="input"
              v-model:fromValue="filedsParams.price[0]"
              v-model:toValue="filedsParams.price[1]"
              :fromPlaceholder="`${$t('public.form.lowest')}${$t('public.form.price')}`"
              :toPlaceholder="`${$t('public.form.highest')}${$t('public.form.price')}`"
              @change="search"
            ></RangeInput>
            <el-select class="select" size="small" v-model="filedsParams.priceCurrency" @change="search">
              <el-option
                v-for="item in priceCurrencyFormItemOptions"
                :key="item.key"
                :label="item.title"
                :value="item.key"
              >
              </el-option>
            </el-select>
          </div>
        </template>
      </FieldsFilter>
      <template #footer="{ isOpen, toggleOpen }">
        <span v-show="isOpen" class="close-filter-btn" @click="diyToggleOpen(isOpen, toggleOpen)">
          {{ $t("material-manage.put_away") }}<i class="i-r-shang-12"></i>
        </span>
        <!-- </div> -->
        <ul v-show="!isOpen" class="filter-ul more-filter">
          <li class="filter-li">
            <div class="title">{{ $t("material-manage.advance_option") }}</div>
            <div class="more" @click="diyToggleOpen(isOpen, toggleOpen)">
              {{ $t("material-manage.btn.more") }} <i class="i-r-xia-12"></i>
            </div>
          </li>
        </ul>
      </template>
    </UpDown>

    <div class="bottom">
      <ul class="sort-ul">
        <li class="sort-li" v-for="(item, i) of sorts" :key="i" @click="handleClickSort(item)">
          <el-divider v-if="i !== 0" direction="vertical"></el-divider>
          <span class="sort-title-wrap" :class="{ active: item.isChecked }">
            <span class="sort-title">{{ item.title }}</span>
            <i
              v-if="i !== 0"
              :class="{
                'i-s-xiajiantou-12': !item.isChecked || (item.isChecked && item.sort === 2),
                'i-s-shangjiantou-12': item.isChecked && item.sort === 1,
              }"
            ></i>
          </span>
        </li>
      </ul>
      <div class="right">
        <el-tooltip class="item" effect="light" :content="$t('material-manage.card_view')" placement="bottom">
          <i
            class="i-r-kapianshitu-16"
            :class="{ active: imgTypeKey === 'imgUrl_crease_v2' }"
            @click="chageImgTypeKey('imgUrl_crease_v2')"
          ></i>
        </el-tooltip>
        <el-tooltip class="item" effect="light" :content="$t('material-manage.fold_view')" placement="bottom">
          <i
            class="i-r-zhezhoutu-16"
            :class="{ active: imgTypeKey === 'imgUrl_crease' }"
            @click="chageImgTypeKey('imgUrl_crease')"
          ></i>
        </el-tooltip>
        <el-popover v-model:visible="showSamplePrice" placement="bottom" width="auto" trigger="click">
          <div class="filter-sample-price-pop">
            <div class="form-wrap">
              <div class="input-wrap">
                <input
                  type="text"
                  v-model="samplePrice[0]"
                  :placeholder="$t('material-manage.low_price')"
                  :oninput="onNumberInput"
                />
                <span> - </span>
                <input
                  type="text"
                  v-model="samplePrice[1]"
                  :placeholder="$t('material-manage.high_price')"
                  :oninput="onNumberInput"
                />
              </div>
              <el-select v-model="samplePriceCurrency" size="small" :popper-append-to-body="false">
                <el-option v-for="item in samplePriceUnitOption" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </div>

            <div class="btns">
              <el-button type="default" @click="clearSamplePrice">{{ $t("clean") }}</el-button>
              <el-button type="primary" @click="search">{{ $t("public.dialog.confirm") }}</el-button>
            </div>
          </div>
          <template #reference>
            <div class="price-btn">
              <i class="i-r-jiage-16"></i>
              <span>
                {{ samplePriceText }}
              </span>
            </div>
          </template>
        </el-popover>
        <span class="filter-page">
          <i class="i-r-zuo-12" :class="{ 'h-disabled': pageOption.page === 1 }" @click="prevPage"></i>
          <span class="page-text">{{ pageOption.page }}/{{ pageOption.totalPage }}</span>
          <i
            class="i-r-you-12"
            :class="{ 'h-disabled': pageOption.page === pageOption.totalPage }"
            @click="nextPage"
          ></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchChildCategory } from '@/api/material';
import { colorFamilyArr, colorFamilyMap } from '@/models/Material';
import useHeader from '@/pages/components/Header/components/useHeader';
import deepCopy from '@/utils/deep-copy';
import { getPx } from '@/utils/util';
import deepmerge from 'deepmerge';
import {
  defineComponent, reactive, computed, ref, toRefs, watch, markRaw, PropType, onMounted, nextTick,
} from 'vue';
import { t, useI18n } from '@/i18n/index';
import { FormItem, FormItems } from '@/components/form/HForm/type';
import RangeInput from '@/components/form/RangeInput.vue';
import fieldMap from '@/utils/field-map';
import UpDown from '@/components/upDown/base.vue';
import useFilter from '@/pages/components/material/useFilter';
import {
  getAllFormItems,
  getAllFormItemsObj,
  getBaseFormItems, getBusinessFormItems, getFeatureFormItems, getOptions, onNumberInput, options, getPriceParams,
} from '../../components/MaterialForm/utils';
import FieldsFilter, { FilterItem, FilterOption } from './FieldsFilter.vue';


export type ImgTypeKey = 'imgUrl_crease' | 'imgUrl_crease_v2';

const getOptionItemWithAll = (title = t('all'), isChecked = true) => ({
  key: '',
  title,
  isChecked,
});


export default defineComponent({
  name: 'material-search-filter',
  components: { FieldsFilter, RangeInput, UpDown },
  props: {
    pageOption: {
      type: Object as PropType<{ page: number, totalPage: number, size?: number, total?: number }>,
      required: true,
    },
    imgTypeKey: {
      type: String as PropType<ImgTypeKey>,
      default: 'imgUrl_crease_v2',
    },
    params: {
      type: Object,
    },
    defaultSortType: {
      type: String as PropType<'1' | '2' | '3'>,
    },
    initSearch: {
      type: Boolean,
      default: false,
    },
    categoryId: {
      type: String,
    },
    defaultParams: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['search', 'img-type-change'],
  setup(props, { emit }) {
    const upDownVm = ref<InstanceType<typeof UpDown>>();
    const fieldsFilterVm = ref<HTMLUListElement>();
    const { onLangChange } = useI18n();
    const {
      filterData, filedsParams, setFilterData, handleWatchedFilterData, init,
    } = useFilter({ autoInit: false, props });

    const state = reactive({
      filterData,
      filedsParams,
      sorts: [
        {
          title: t('material-manage.form.default'),
          sortType: undefined,
          sort: undefined,
          isChecked: !props.defaultSortType,
        },
        {
          title: t('material-manage.form.view_number'),
          sortType: 1,
          sort: props.defaultSortType === '1' ? 2 : undefined,
          isChecked: props.defaultSortType === '1',

        }, {
          title: t('material-manage.form.collect_number'),
          sortType: 2,
          sort: props.defaultSortType === '1' ? 2 : undefined,
          isChecked: props.defaultSortType === '2',

        }, {
          title: t('material-manage.form.share_number'),
          sortType: 3,
          sort: props.defaultSortType === '1' ? 2 : undefined,
          isChecked: props.defaultSortType === '3',

        }],
      samplePrice: ['', ''],
      samplePriceCurrency: t('material-manage.form.rmb'),
      samplePriceUnitOption: markRaw(options.priceUnit),
      showSamplePrice: false,
      isFilterWrapOpen: false,
      imgTypeKey: props.imgTypeKey,
    });


    const samplePriceText = computed(() => {
      const { samplePrice } = state;
      return samplePrice.some(item => item) ? `${samplePrice[0]}-${samplePrice[1]}` : t('material-manage.form.sample_price');
    });

    const moqUnitFormItemOptions = computed(() => {
      const moqUnitFormItem = state.filterData.find(item => item.key === 'moqUnit');
      return moqUnitFormItem?.options || [];
    });

    const priceCurrencyFormItemOptions = computed(() => {
      const priceCurrencyFormItem = state.filterData.find(item => item.key === 'priceCurrency');
      return priceCurrencyFormItem?.options || [];
    });

    const setDefaultParams = () => {
      Object.entries(props.defaultParams).forEach(([key, value]) => {
        if (value) state.filedsParams[key] = value;
      });
    };

    watch(() => props.defaultParams, () => {
      setDefaultParams();
    }, { immediate: true, deep: true });


    onLangChange(() => {
      setFilterData();
    });


    const filterWrapStyle = computed(() => {
      return {
        height: state.isFilterWrapOpen ? getPx(fieldsFilterVm.value?.$el.clientHeight || 'auto') : '185px',
      };
    });

    watch(() => state.filedsParams.categoryId, async (categoryIdArr, oldCategoryIdArr) => {
      if (JSON.stringify(categoryIdArr) === JSON.stringify(oldCategoryIdArr)) return; // 点击任何选项都会触发该watch
      const [categoryId] = categoryIdArr;
      handleWatchedFilterData(categoryId, state.filterData);
      await nextTick(); // 在根据filterData渲染完之后才重新计算高度
      upDownVm.value?.setCurrentHeight();
    });


    const getParams = (inParams: Obj = {}) => {
      const currentSort = state.sorts.find(sort => sort.isChecked)!;
      const sortParams = {
        sortType: currentSort.sortType,
        sort: currentSort.sort,
      };

      const getSamplePriceParams = () => {
        const getSamplePrice = () => {
          if (!state.samplePrice.filter(Boolean).length) return [];
          const { samplePrice } = state;
          const result = !samplePrice[1] ? samplePrice.slice(0, 1) : samplePrice;
          return result.map(item => +item);
        };
        const samplePrice = getSamplePrice();
        const samplePriceParams = {
          samplePrice,
          samplePriceCurrency: samplePrice.length ? state.samplePriceCurrency : '',
        };
        return samplePriceParams;
      };


      const defaultPageParams = {
        page: 1, // 默认在选中条件时会跳转到第一页
        size: props.pageOption.size,
      };
      const {
        moq, moqUnit, price, priceCurrency,
      } = state.filedsParams;
      const fieldsParams = {
        ...state.filedsParams,
        ...getPriceParams({ moq }, { moqUnit }),
        ...getPriceParams({ price }, { priceCurrency }),
      };
      const apiParams = {
        ...defaultPageParams,
        ...sortParams,
        fields: {
          ...fieldsParams,
          ...getSamplePriceParams(),
        },
      };
      const computedParams = deepmerge(apiParams, inParams, props.params);
      return computedParams;
    };


    const toggleFilterWrap = () => {
      state.isFilterWrapOpen = !state.isFilterWrapOpen;
    };

    const chageImgTypeKey = (imgTypeKey: ImgTypeKey) => {
      state.imgTypeKey = imgTypeKey;
      emit('img-type-change', imgTypeKey);
    };


    const handleClickSort = (item: GetArrayItem<typeof state.sorts>) => {
      const normalSorts = state.sorts.filter(sort => sort.title !== t('material-manage.form.default'));
      if (item.title === t('material-manage.form.default')) {
        if (!item.isChecked) {
          item.isChecked = true;
          normalSorts.forEach(sort => {
            sort.isChecked = false;
            sort.sort = undefined;
          });
        }
      } else {
        switch (item.sort) {
          case undefined:
            item.sort = 2;
            item.isChecked = true;
            break;
          case 2:
            item.sort = 1;
            item.isChecked = true;
            break;
          case 1:
            item.sort = undefined;
            item.isChecked = false;
            break;
          default:
            break;
        }
        normalSorts.filter(sort => sort.title !== item.title).forEach(sort => {
          sort.isChecked = false;
          sort.sort = undefined;
        });
        state.sorts[0].isChecked = normalSorts.every(sort => !sort.isChecked);
      }
      emit('search', getParams());
    };

    const clearSamplePrice = () => {
      state.samplePrice = ['', ''];
    };


    const search = () => {
      state.showSamplePrice = false;
      emit('search', getParams());
    };

    const prevPage = () => {
      if (props.pageOption.page === 1) return;
      const _prevPage = Math.max(1, props.pageOption.page - 1);
      emit('search', getParams({ page: _prevPage }));
    };

    const nextPage = () => {
      if (props.pageOption.page === props.pageOption.totalPage) return;
      const _nextPage = Math.min(props.pageOption.totalPage, props.pageOption.page + 1);
      emit('search', getParams({ page: _nextPage }));
    };

    const diyToggleOpen = (isOpen: boolean, toggleOpen: () => void) => {
      toggleOpen();
    };


    onMounted(async () => {
      await init();
      if (props.initSearch) {
        emit('search', getParams());
      }
    });


    return {
      ...toRefs(state),
      samplePriceText,
      moqUnitFormItemOptions,
      priceCurrencyFormItemOptions,
      fieldsFilterVm,
      upDownVm,
      filterWrapStyle,
      toggleFilterWrap,
      chageImgTypeKey,
      handleClickSort,
      search,
      clearSamplePrice,
      onNumberInput,
      prevPage,
      nextPage,
      diyToggleOpen,
      fieldMap,
    };
  },

});
</script>
<style lang="scss">
.filter-sample-price-pop {
  .form-wrap {
    display: flex;
    align-items: center;
    .input-wrap {
      display: flex;
      width: 250px;
      height: 32px;
      opacity: 1;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 5px;
      padding: 0 10px;
      > span {
        width: 20px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > input {
        display: inline-block;
        width: 100%;
        flex: 1;
        border: none;
        outline: none;
        background-color: transparent;
        text-align: center;
        &::placeholder {
          color: #999999;
        }
      }
    }
    .el-select {
      width: 100px;
      margin-left: 10px;
    }
  }

  .btns {
    text-align: right;
    margin-top: 10px;
  }
}
</style>
<style lang="scss" scoped>
@import "./common";
.material-search-filter {
  position: relative;
  background: #ffffff;
  border-radius: 8px;
  /deep/.up-down-base {
    .footer {
      position: relative;
    }
  }
  .filter-wrap {
    position: relative;
    overflow: hidden;
    transition: height 0.3s;
  }
  .filter-select {
    display: flex;
    align-items: center;
    padding-left: 15px;
    .input {
      width: 180px;
    }
    .select {
      width: 90px;
      margin-left: 4px;
    }
    .el-input--small {
      font-size: 12px;
    }
  }
  @include filterUl();
  .close-filter-btn {
    position: absolute;
    right: 30px;
    bottom: 20px;
    color: $color-primary;
    cursor: pointer;
    display: flex;
    align-items: center;
    > i {
      font-size: 12px;
      padding-left: 3px;
    }
  }
  .bottom {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #eeeeee;
    padding: 0 30px;
    .sort-ul {
      display: flex;
      .sort-li {
        display: flex;
        align-items: center;
        .sort-title-wrap {
          cursor: pointer;
          display: flex;
          align-items: center;
          color: #999999;
          &.active {
            color: $color-primary;
          }
          .sort-title {
            padding-right: 5px;
          }
          > i {
            font-size: 12px;
            // color: #7a7a87;
          }
        }
        .el-divider--vertical {
          margin: 0 16px;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      > i {
        margin-right: 16px;
        cursor: pointer;
        color: #999999;
        font-size: 18px;
        &.active {
          color: #222222;
        }
      }
      .price-btn,
      .filter-page {
        font-size: 12px;
        display: flex;
        align-items: center;
        border: 1px solid #dddddd;
        border-radius: 5px;
        background: #ffffff;
        padding: 6px 16px;
        > i {
          font-size: 14px;
          position: relative;
          bottom: 1px;
        }
      }
      .price-btn {
        cursor: pointer;
        > i {
          font-size: 16px;
          padding-right: 2px;
        }
        > span {
          vertical-align: baseline;
        }
        &:hover {
          color: $color-primary;
          border-color: $color-primary;
        }
      }
      .filter-page {
        margin-left: 8px;
        > i {
          font-size: 12px;

          cursor: pointer;
          &:hover {
            color: $color-primary;
          }
        }
        .page-text {
          padding: 0 8px;
        }
      }
    }
  }
}
</style>
