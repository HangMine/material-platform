<template>
  <div class="buyer-home">
    <TopContent>
      <!-- <Search @search="textSearch">
        <template #append-icon>
          <ImageSearch @search="imageSearch">
            <span class="image-search-text"> <i class="image-search-icon i-r-shitu-16"></i>识图 </span>
          </ImageSearch>
        </template>
      </Search> -->
      <div class="category">
        <ul class="category-ul">
          <li v-for="(item, i) of category" :key="i" class="category-li" @click="goSearchBase(item)">
            <div class="title">
              {{ item.name }}
              <i class="i-r-you-12"></i>
            </div>
            <over-text class="child-category">
              <span>{{ item.matchResult?.map((_item) => _item.name).join("/") }}</span>
            </over-text>
          </li>
        </ul>
      </div>
    </TopContent>
    <div class="home-main">
      <section v-loading="loading" class="hot-material">
        <h3 class="title flex-space-between" :style="getTitleBgStyle('hot')">
          {{ $t("buyer.popular_material")
          }}<span class="more flex-center" @click="goMarket('1')"
            >MORE <i class="more-icon i-s-bofanganniu-18"></i>
          </span>
        </h3>
        <MaterialTileList :data="hotMaterialList" showHeader showTitle showPrice useGridSlice></MaterialTileList>
      </section>
      <section v-loading="loading" class="new-material">
        <h3 class="title flex-space-between" :style="getTitleBgStyle('new')">
          {{ $t("buyer.new_material")
          }}<span class="more flex-center" @click="goMarket()">MORE <i class="more-icon i-s-bofanganniu-18"></i> </span>
        </h3>
        <div class="content flex">
          <div class="left">
            <img :src="require('@/assets/img/buyer/pic-zhiwu.png')" :style="{ fit: 'contain' }" />
          </div>
          <div class="right">
            <MaterialTileList
              :data="newMaterialList"
              showHeader
              showTitle
              showPrice
              :style="{ 'grid-template-columns': undefined }"
            ></MaterialTileList>
          </div>
        </div>
      </section>

      <section class="hot-merchant" v-loading="mrechantLoading">
        <h3 class="title flex-space-between" :style="getTitleBgStyle('leather')">
          {{ $t("buyer.select_merchant")
          }}<span class="more flex-center" @click="goMerchant()"
            >MORE <i class="more-icon i-s-bofanganniu-18"></i>
          </span>
        </h3>
        <MerchantTileList :data="merchantList"></MerchantTileList>
      </section>
      <section class="about-us">
        <div class="title" :style="getTitleBgStyle('about_us')">
          <h3>{{ $t("buyer.about_us") }}</h3>
          <small class="sub-title">ABOUT US</small>
        </div>

        <div class="content">
          <div class="left">
            <base-image :src="require('@/assets/img/buyer/pic_about_us@2x.png')" fit="contain"></base-image>
          </div>
          <div class="right">
            <h2 class="about-us-title">{{ $t("buyer.material_librarys") }} <span class="sub-title">idealab</span></h2>
            <p>
              {{ $t("buyer.subject1") }}
            </p>
            <p>
              {{ $t("buyer.subject2") }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <Qrcode></Qrcode>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-dynamic-require */
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted,
} from 'vue';
import ImageSearch from '@/components/search/ImageSearch.vue';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import { MaterialList } from '@/models/Material';
import { MerchantList } from '@/models/Merchant';
import * as materialApi from '@/api/material';
import MerchantTileList from '@/pages/components/merchant/components/List/index.vue';
import { fetchMerchantInfo } from '@/api/merchant';
import { searchBaseImage } from '@/pages/components/material/utils';
import { useRoute, useRouter } from 'vue-router';
import useHeader from '@/pages/components/Header/components/useHeader';
import TopContent from './components/TopContent.vue';
import Qrcode from './components/Qrcode.vue';

export default defineComponent({
  name: 'buyer-home',
  components: {
    TopContent, MaterialTileList, MerchantTileList, Qrcode,
  },
  props: {},
  setup(props, { emit }) {
    const router = useRouter();
    const header = useHeader();
    const state = reactive({
      hotMaterialList: [] as MaterialList,
      newMaterialList: [] as MaterialList,
      merchantList: [] as MerchantList,
      loading: false,
      mrechantLoading: false,
      category: [] as materialApi.Category,
    });
    const getTitleBgStyle = (imgKey: 'about_us' | 'hot' | 'new' | 'leather') => {
      return {
        'background-image': `url(${require(`@/assets/img/buyer/pic_English_${imgKey}@2x.png`)})`,
      };
    };
    const textSearch = (searchText: string) => {
      header.keywords = searchText;
      router.push('/search/base');
    };
    const imageSearch = (file: File | undefined, clearFile: () => void) => {
      if (file) searchBaseImage(file);
      // clearFile();
    };
    const fetchMaterialList = async (params: Obj = {}) => {
      return (await materialApi.fetchMarketMaterialList({
        keywords: '',
        page: 1,
        size: 10,
        fields: {
          categoryId: [],
        },
        ...params,
      })).records;
    };

    const fetchMerchant = async () => {
      try {
        state.mrechantLoading = true;
        return await fetchMerchantInfo({ keywords: '', fields: {} });
      } finally {
        state.mrechantLoading = false;
      }
    };


    const setMaterialList = async () => {
      try {
        state.loading = true;
        [state.hotMaterialList, state.newMaterialList] = await Promise.all(
          [fetchMaterialList({ sortType: 1, sort: 2, size: 12 }), fetchMaterialList({ size: 6 })],
        );
      } finally {
        state.loading = false;
      }
    };

    const setMerchantList = async () => {
      state.merchantList = (await fetchMerchant()).slice(0, 6);
    };

    const setCategory = async () => {
      state.category = await materialApi.fetchCategoryByLevel();
      // state.category = [{
      //   id: '1',
      //   name: '纺织品',
      //   matchResult: [{
      //     id: '11',
      //     name: '纺织',
      //   }, {
      //     id: '12',
      //     name: '纺织',
      //   }],
      // }, {
      //   id: '1',
      //   name: '纺织品',
      //   matchResult: [{
      //     id: '11',
      //     name: '纺织',
      //   }, {
      //     id: '12',
      //     name: '纺织',
      //   }],
      // }, {
      //   id: '1',
      //   name: '纺织品',
      //   matchResult: [{
      //     id: '11',
      //     name: '纺织',
      //   }, {
      //     id: '12',
      //     name: '纺织',
      //   }],
      // }, {
      //   id: '1',
      //   name: '纺织品',
      //   matchResult: [{
      //     id: '11',
      //     name: '纺织',
      //   }, {
      //     id: '12',
      //     name: '纺织',
      //   }],
      // }];
    };

    const goMarket = (defaultSortType?: string) => {
      router.push({
        path: '/search/base',
        query: {
          defaultSortType,
        },
      });
    };

    const goMerchant = () => {
      router.push({
        path: '/merchant/home',
      });
    };

    const goSearchBase = (item: materialApi.CategoryItem) => {
      router.push({
        path: '/search/base',
        query: {
          categoryId: item.id,
        },
      });
    };


    onMounted(async () => {
      await Promise.all([setMaterialList(), setMerchantList(), setCategory()]);
    });
    return {
      ...toRefs(state), textSearch, imageSearch, getTitleBgStyle, goMarket, goMerchant, goSearchBase,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.buyer-home {
  .category {
    padding: 0 20px;
    background-color: white;
    height: 100%;
    width: 248px;
    position: relative;
    left: 190px;
    .category-ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      .category-li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & + .category-li {
          border-top: 1px solid #dddddd;
        }
        &:hover {
          .title {
            color: $color-primary;
          }
        }
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #222222;
          line-height: 18px;
          font-size: 16px;
          font-weight: bold;
          transition: color 0.2s;

          > i {
            font-size: 12px;
            color: #dddddd;
          }
        }
        /deep/.child-category {
          font-size: 12px;
          color: #999999;
          line-height: 18px;
          padding-top: 12px;
        }
      }
    }
  }
  .image-search-text {
    color: #ffffff;
    cursor: pointer;
    i {
      padding-right: 5px;
    }
  }
  .home-main {
    max-width: 1850px;
    margin: 0 auto;
  }
  section {
    padding: 40px 80px 80px 80px;
    &.hot-material {
      padding-top: 40px;
      background-image: url("~@/assets/img/buyer/pic_背景图_酷黑_真皮.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right top;
    }
    // &.hot-material,
    // &.hot-merchant {
    //   background: #f2f3f5;
    // }
    &.new-material {
      background-color: white;
      padding-bottom: 0;
      /deep/.material-list {
        grid-template-columns: repeat(3, minmax(160px, 420px));
        padding-bottom: 20px;
      }
      .content {
        .left {
          width: 34%;
          min-width: 460px;
          max-width: 542px;
          align-self: stretch;
          margin-right: 140px;
          > img {
            width: 100%;
            // height: 100%;
          }
        }
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
    &.about-us {
      padding-bottom: 100px;
      background-color: white;

      .content {
        display: flex;
        .left {
          flex-shrink: 0;
          width: calc(33.3% + 30px);
          padding-left: 30px;
        }
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #666666;
          font-size: 12px;
          line-height: 28px;
          padding-left: 30px;
          .about-us-title {
            font-size: 30px;
            color: #222222;
            padding-bottom: 12px;
          }
          .sub-title {
            font-size: 16px;
            padding-left: 10px;
          }
          p {
            padding-top: 24px;
            font-size: 14px;
          }
        }
      }
    }
    > .title {
      padding: 40px 0;
      font-size: 23px;
      background-size: contain;
      background-repeat: no-repeat;
      .more {
        color: #666666;
        font-size: 12px;
        cursor: pointer;
        .more-icon {
          font-size: 12px;
          transform: scale(0.5);
        }
      }
    }
    .sub-title {
      color: #666666;
      line-height: 16px;
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
