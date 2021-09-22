<template>
  <div v-loading="loading" class="merchant-detail__all-material">
    <MaterialSearch
      :params="searchParams"
      :defaultParams="defaultParams"
      :defaultSortType="defaultSortType"
      :categoryId="categoryId"
      :fetchFn="fetchFn"
    ></MaterialSearch>
  </div>
</template>

<script lang="ts">
import { fetchUserCompanyID } from '@/api/account';
import { fetchMerchantBelongMaterialList } from '@/api/material';
import { MaterialList } from '@/models/Material';
import { MerchantItem } from '@/models/Merchant';
import usePage from '@/pages/components/material/usePage';
import { getHomeRedirect } from '@/pages/login/utils/loginStore';
import AppError from '@/utils/error';
import onCreated from '@/utils/vue/onCreated';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { useRouter } from 'vue-router';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import { ImgTypeKey } from '@/pages/components/material/search/components/Filter.vue';
import { ElInput } from 'element-plus';
import useHeader from '@/pages/components/Header/components/useHeader';
import MaterialSearch from '@/pages/components/material/search/index.vue';

export default defineComponent({
  name: 'merchant-detail__all-material',
  components: { MaterialSearch },
  props: {
    merchant: {
      type: Object as PropType<MerchantItem>,
      required: true,
    },
    defaultSortType: {
      type: String as PropType<'1' | '2' | '3'>,
    },
    categoryId: {
      type: String,
    },
    defaultParams: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const searchInputVm = ref<InstanceType<typeof ElInput>>();
    const header = useHeader();

    const state = reactive({
      loading: false,
      searchParams: {
        keywords: header.keywords,
      },
    });

    const fetchFn = async (params: Obj) => {
      const newParams = {
        ...params,
        fields: {
          ...params.fields,
          orgId: props.merchant.id,
        },
      };
      return fetchMerchantBelongMaterialList(newParams);
    };


    const returnObj = {
      ...toRefs(state),
      searchInputVm,
      fetchFn,
    };


    return returnObj;
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant-detail__all-material {
  @include layout-elastic-center-container();

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    height: 50px;
    background: #ffffff;
    .right {
      display: flex;
      align-items: center;
      .img-type-search-bar {
        padding: 0;
      }
    }
  }
  .material-list-wrap {
    padding: 40px 80px;
  }
  .about-us {
    padding: 60px 110px;
    background-color: white;
    > .title {
      color: #222222;
      font-size: 22px;
      line-height: 36px;
      font-weight: 400;
      > .sub-title {
        color: #666666;
        line-height: 16px;
        font-size: 12px;
        font-weight: 400;
      }
    }

    .content {
      position: relative;
      display: flex;
      height: 420px;
      margin-top: 60px;
      .left {
        width: 45%;
        flex-shrink: 0;
        text-align: right;
        .img-wrap {
          margin-left: 40%;
        }
      }
      .right {
        flex: 1;
        color: #666666;
        font-size: 12px;
        line-height: 28px;
        padding-left: 110px;
        padding-right: 90px;
        .about-us-title {
          font-size: 60px;
          line-height: 64px;
          color: #222222;
          padding-bottom: 12px;
          padding-top: 20px;
        }
        p {
          padding-top: 24px;
          color: #666666;
          line-height: 29px;
        }
      }
      .left-decoration,
      .right-decoration {
        color: rgba(153, 153, 153, 0.5);
        font-size: 16px;
        .line {
          background: rgba(153, 153, 153, 0.5);
        }
      }
      .left-decoration {
        position: absolute;
        left: 6px;
        bottom: 0;
        display: flex;
        align-items: center;
        transform: rotate(-90deg);
        transform-origin: left;
        .line {
          width: 320px;
          height: 1px;
          margin-right: 10px;
        }
      }
      .right-decoration {
        position: absolute;
        right: 6px;
        bottom: 0;
        display: flex;
        align-items: center;
        transform: rotate(90deg);
        transform-origin: right;
        > span {
          transform: rotate(180deg) scale(0.8);
          font-size: 12px;
        }
        .line {
          width: 33px;
          height: 1px;
          margin-right: 5px;
          &:nth-of-type(1) {
            margin-right: 2px;
          }
          &:nth-of-type(2) {
            margin-left: 2px;
          }
        }
      }
    }
  }
}
</style>
