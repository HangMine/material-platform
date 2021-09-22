<template>
  <div class="merchant-home-display" v-loading="loading">
    <template v-for="(item, i) of sections" :key="i">
      <!-- category-section -->
      <section v-if="item.key === 'categorySection' && item.active" class="category-section">
        <div class="title">{{ $t("merchant.populor_series") }}</div>
        <div class="content">
          <div class="left">
            <div v-for="(item, i) of item.dragList" :key="i" class="img-wrap">
              <base-image :src="item.url"></base-image>
            </div>
          </div>
          <div class="right">
            <div v-for="(item, i) of item.fixList" :key="i" class="img-wrap">
              <base-image :src="item.url"></base-image>
            </div>
          </div>
        </div>
      </section>
      <!-- category-banner -->
      <section v-else-if="item.key === 'categoryBanner' && item.active" class="category-banner is-banner">
        <base-image
          v-for="(item, i) of item.imgList"
          :key="i"
          :src="item.url"
          :style="{ height: '350px' }"
        ></base-image>
      </section>
      <!-- 商家推荐 -->
      <section
        v-else-if="item.key === 'hotMaterial' && item.active"
        v-loading="materialLoading"
        class="business-recommend drag-area"
      >
        <h3 class="title flex-space-between">
          {{ $t("merchant.merchant_recommendation") }}
          <!-- <span class="more flex-center" @click="goMerchantMaterialList"
            >MORE <i class="more-icon i-s-bofanganniu-18"></i>
          </span> -->
        </h3>
        <MaterialTileList
          :radius="radius"
          :data="hotMaterialList"
          showHeader
          showTitle
          showPrice
          useGridSlice
        ></MaterialTileList>
      </section>

      <!-- main-video -->
      <section v-else-if="item.key === 'mainVideo' && item.active" class="main-video drag-area">
        <div class="main-video-box" :style="videoBg"></div>
        <div class="main-video-content">
          <Video class="display-video" :src="item.video.url" type="default" controls></Video>
        </div>
      </section>

      <!-- 主营产品 -->
      <section
        v-else-if="item.key === 'mainMaterial' && item.active"
        v-loading="materialLoading"
        class="main-material drag-area"
      >
        <h3 class="title flex-space-between">
          {{ $t("merchant.main_product") }}
          <!-- <span class="more flex-center" @click="goMerchantMaterialList"
            >MORE <i class="more-icon i-s-bofanganniu-18"></i>
          </span> -->
        </h3>
        <div class="content flex">
          <div class="left">
            <div v-for="(item, i) of item.imgList" :key="i" class="img-wrap">
              <base-image :src="item.url" hasSwitch></base-image>
            </div>
          </div>
          <div class="right">
            <MaterialTileList
              :radius="radius"
              :data="newMaterialList"
              showHeader
              showTitle
              showPrice
              :style="{ 'grid-template-columns': undefined }"
            ></MaterialTileList>
          </div>
        </div>
      </section>
      <!-- 主营产品-banner -->
      <section
        v-else-if="item.key === 'mainMaterialBanner' && item.active"
        class="main-material-banner is-banner drag-area"
      >
        <base-image
          v-for="(item, i) of item.imgList"
          :key="i"
          :src="item.url"
          :style="{ height: '300px' }"
        ></base-image>
      </section>
      <!-- 关于我们 -->
      <section v-else-if="item.key === 'aboutUs' && item.active" class="about-us drag-area">
        <div class="title">{{ $t("merchant.aboutUs") }}</div>
        <div class="content about-us-content">
          <div class="left">
            <base-image
              v-for="(item, i) of item.imgList"
              :key="i"
              :src="item.url"
              :style="{ height: '400px' }"
            ></base-image>
          </div>
          <div class="right">
            <div class="about-us-text scrollable-y">
              {{ item.text }}
            </div>
          </div>
        </div>
      </section>
      <!-- 合作品牌 -->
      <section
        v-else-if="item.key === 'cooperationBrands' && item.active && item.brandList.length"
        class="cooperation-brands drag-area"
      >
        <div class="title">{{ $t("merchant.cooperationBrands") }}</div>
        <div class="content">
          <div class="brand" v-for="(item, i) of item.brandList" :key="i" :style="{ width: '200px', height: '110px' }">
            <base-image :src="item.url"> </base-image>
            <div class="brand-title over-text">{{ item.name }}</div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script lang="ts">
import { getContextUser } from '@/loaders/context';
import { MaterialList } from '@/models/Material';
import onCreated from '@/utils/vue/onCreated';
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import * as materialApi from '@/api/material';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import usePermisson from '@/utils/uses/use-permisson';
import Video from '@/components/video/index.vue';
import { Sections, fetchSections, useVideoBg } from './utils';


export default defineComponent({
  name: 'merchant-home-display',
  components: { MaterialTileList, Video },
  props: {
    orgId: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const { company } = usePermisson();
    const { bgURL, videoBg, setVideoBg } = useVideoBg();

    const state = reactive({
      loading: false,
      sections: [] as Sections,
      materialLoading: false,
      radius: 0,
      hotMaterialList: [] as MaterialList,
      newMaterialList: [] as MaterialList,
    });
    const fetchMaterialList = async (params: Obj = {}) => {
      return (await materialApi.fetchMarketMaterialList({
        keywords: '',
        page: 1,
        size: 10,
        fields: {
          tag: '已上架',
          categoryId: [],
          orgId: props.orgId,
        },
        ...params,
      })).records;
    };
    const setMaterialList = async () => {
      try {
        state.materialLoading = true;
        [state.hotMaterialList, state.newMaterialList] = await Promise.all(
          [fetchMaterialList({ sortType: 1, sort: 2, size: 12 }), fetchMaterialList({ size: 6 })],
        );
      } finally {
        state.materialLoading = false;
      }
    };
    const goMerchantMaterialList = () => {
      console.log(11);
    };


    onCreated(async () => {
      try {
        state.loading = true;
        const [sections] = await Promise.all([fetchSections({ orgId: props.orgId || company.value?.id || '' }), setMaterialList()]);
        state.sections = sections;
        const videoSection = state.sections.find(item => item.key === 'mainVideo');
        setVideoBg(videoSection.video.url);
      } finally {
        state.loading = false;
      }
    });
    return {
      ...toRefs(state), bgURL, videoBg, goMerchantMaterialList,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "common";
.merchant-home-display {
  background-color: white;
  .main-material {
    padding-bottom: 70px !important;
  }
  .cooperation-brands {
    .content {
      .brand {
        + .brand {
          margin-left: 10px;
        }
        /deep/.el-image {
          height: 100%;
        }
      }
    }
  }

  .main-video {
    .main-video-content {
      .video-wrap {
        background: transparent;
        position: absolute;
      }
    }
  }

  @include sectionShare();
  .el-image {
    height: auto;
    border-radius: 0px;
  }
  .business-recommend {
    /deep/.material-tile-item {
      border-radius: 8px !important;
    }
  }
}
</style>
