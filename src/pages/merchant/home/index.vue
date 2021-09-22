<template>
  <div class="merchant-home" v-loading="loading">
    <div class="merchant-home-filter">
      <FieldsFilter
        :filterItems="filterItems"
        v-model="filedsParams"
        @click-fields="search"
        ref="fieldsFilterVm"
      ></FieldsFilter>

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
          <!-- <span class="iconfont i-r-fuwei-12"></span>
          <span>发货地</span> -->
          <DictionaryAddressMultipleSelector @getCity="getCity"></DictionaryAddressMultipleSelector>
        </div>
      </div>
    </div>
    <div class="merchant-home-list">
      <MerchantList type="list" :data="merchantList"></MerchantList>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchMerchantInfo } from '@/api/merchant';
import { MerchantList as MerchantListType } from '@/models/Merchant';
import onCreated from '@/utils/vue/onCreated';
import MerchantList from '@/pages/components/merchant/components/List/index.vue';
import { t } from '@/i18n/index';

import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import FieldsFilter, { FilterItem, getOptionItemWithAll } from '@/pages/components/material/search/components/FieldsFilter.vue';
import DictionaryAddressMultipleSelector from '@/pages/components/material/search/components/DictionaryAddressMultipleSelector.vue';
import * as dictionaryApi from '@/api/dictionary';
import deepmerge from 'deepmerge';

export default defineComponent({
  name: 'merchant-home',
  components: { MerchantList, FieldsFilter, DictionaryAddressMultipleSelector },
  props: {
    params: {
      type: Object,
      default: () => ({}),
    },
    defaultSortType: {
      type: String as PropType<'1' | '2' | '3'>,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      city: '',
      merchantList: [] as MerchantListType,
      loading: false,

      filterItems: [] as FilterItem[],
      filedsParams: {
        products: [],
        managements: [],
      },
      sorts: [
        {
          title: t('material-manage.form.default'),
          sortType: undefined,
          sort: undefined,
          isChecked: !props.defaultSortType,
        },
        {
          title: '最近活跃',
          sortType: 1,
          sort: props.defaultSortType === '1' ? 2 : undefined,
          isChecked: props.defaultSortType === '1',

        }, {
          title: '关注最多',
          sortType: 2,
          sort: props.defaultSortType === '1' ? 2 : undefined,
          isChecked: props.defaultSortType === '2',

        }, {
          title: '材料最多',
          sortType: 3,
          sort: props.defaultSortType === '1' ? 2 : undefined,
          isChecked: props.defaultSortType === '3',

        }],
    });
    const setFilterItems = async () => {
      const [apiBeadingProduct, apiBusinessModel] = await Promise.all(
        [dictionaryApi.getDictionaryByTypeCode('leadingProduct'), dictionaryApi.getDictionaryByTypeCode('businessModel')],
      );
      const leadingProductList = apiBeadingProduct.data;
      const businessModelList = apiBusinessModel.data;
      const getOptions = (list: typeof leadingProductList | typeof businessModelList) => {
        return [getOptionItemWithAll(), ...list.map(item => ({
          key: item.itemValue,
          title: item.label,
          isChecked: false,
        }))];
      };
      state.filterItems = [{
        key: 'products',
        title: '主营产品',
        options: getOptions(leadingProductList),
        multiple: true,
      }, {
        key: 'managements',
        title: '经营模式',
        options: getOptions(businessModelList),
        multiple: true,
      }];
    };


    const getParams = () => {
      const currentSort = state.sorts.find(sort => sort.isChecked)!;
      const sortParams = {
        sortType: currentSort.sortType,
        sort: currentSort.sort,
      };

      const params = {
        ...sortParams,
        fields: {
          ...state.filedsParams,

          provinceId: state.city,
        },
        materialTotal: 4,
      };
      const computedParams = deepmerge(params, props.params);
      return computedParams;
    };
    const setMerchantList = async () => {
      try {
        state.loading = true;
        state.merchantList = (await fetchMerchantInfo(getParams()));
      } finally {
        state.loading = false;
      }
    };
    const getCity = (value: string) => {
      state.city = value;
      setMerchantList();
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
      setMerchantList();
    };
    const search = () => {
      setMerchantList();
    };
    onCreated(async () => {
      await Promise.all([setFilterItems(), setMerchantList()]);
    });
    return {
      ...toRefs(state), search, handleClickSort, getCity,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant-home {
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  position: relative;
  border-radius: 8px;
  .merchant-home-filter {
    background: #ffffff;
    margin-top: 20px;
    border-radius: 8px;

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
        > i {
          margin-right: 16px;
          cursor: pointer;
          color: #999999;
          font-size: 18px;
          &.active {
            color: #222222;
          }
        }
      }
    }
  }
  .merchant-home-list {
    background: #ffffff;
    margin-top: 20px;
  }
}
</style>
