/* eslint-disable no-restricted-syntax */
<template>
  <div class="merchant-new-material">
    <template v-if="tablist.length">
      <div class="row" v-for="(item, index) in tablist" :key="index">
        <div class="top-title flex-space-between">
          <p class="title">{{ item.key }}</p>
          <p class="more" @click="goMerchantAllMateiral(item.key)">MORE<icon class="iconfont i-r-you-12"></icon></p>
        </div>
        <div class="list">
          <MaterialTileList
            gridColoumn="repeat(5,19%)"
            :data="item.arr"
            showHeader
            showTitle
            showPrice
          ></MaterialTileList>
        </div>
      </div>
    </template>

    <template v-else>
      <BlockError
        :error="{
          message: $t('empty-page-tip.no_data'),
          code: '404',
        }"
      ></BlockError>
    </template>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted, PropType,
} from '@vue/runtime-core';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import { fetchMerchantBelongNewMaterialList } from '@/api/material';
import { MaterialListItem } from '@/models/Material';
import { MerchantItem } from '@/models/Merchant';
import BlockError from '@/components/error/BlockError.vue';

type MaterialSearchResponse = {
  materialSearchResponse: MaterialListItem
};
type TablistType = {
  key: string,
  arr: MaterialSearchResponse[],

};

export default defineComponent({
  name: '',
  components: { MaterialTileList, BlockError },
  props: {
    merchant: {
      type: Object as PropType<MerchantItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      tablist: [] as TablistType[],
      materialList: [],
    });
    const getList = async () => {
      const res = await fetchMerchantBelongNewMaterialList({
        fields: { orgId: props.merchant.id },
        keywords: '',
      });
      if (res) {
        const resArr = Object.entries(res);
        resArr.forEach(item => {
          const arr = [] as MaterialSearchResponse[];
          item[1].forEach((ele) => {
            arr.push(ele.materialSearchResponse);
          });
          state.tablist.push({ key: item[0], arr });
        });

        state.tablist.forEach(item => {
          item.arr.slice(0, 5);
        });
      }
    };
    const goMerchantAllMateiral = (yearSeason: string) => {
      emit('go-merchant-all-material', yearSeason);
    };
    onMounted(async () => {
      await getList();
    });

    return { ...toRefs(state), goMerchantAllMateiral };
  },
});
</script>
<style lang="scss">
.merchant-new-material {
  .row {
    background: #fff;
    padding: 32px 80px 48px;
    margin-bottom: 20px;
    .top-title {
      margin-bottom: 32px;
      .title {
        font-size: 24px;
      }
      .more {
        font-size: 12px;
        color: #666666;
        cursor: pointer;
      }
    }
    .list {
      .material-list {
        grid-row: 5;
      }
    }
  }
}
</style>
