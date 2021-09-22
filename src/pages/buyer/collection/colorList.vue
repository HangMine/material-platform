<template>
  <div class="buyer-collection-list">
    <ImageTypeSearchBar v-model="imgTypeKey" @search="search" :hideImgType="true">
      <sd-breadcrumb
        :data="breadcrumbData"
        backPath="/buyer/collection/folders?activeName='colorCardCollect'"
      ></sd-breadcrumb>
    </ImageTypeSearchBar>
    <ColorLibrary :keywords="keywords" :detailId="detailId" :noBtn="true" :hasTopNav="false"></ColorLibrary>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import ImageTypeSearchBar from '@/pages/components/material/components/ImageTypeSearchBar.vue';
import { ImgTypeKey } from '@/pages/components/material/search/components/Filter.vue';

import ColorLibrary from '@/pages/main/materialMenu/components/ColorLibrary.vue';
import { t } from '@/i18n/index';

export default defineComponent({
  name: 'buyer-collection-list',
  components: { ImageTypeSearchBar, ColorLibrary },
  props: {
    colorBookName: {
      type: String,
      required: true,
    },
    detailId: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      imgTypeKey: 'imgUrl_crease_v2' as ImgTypeKey,
      keywords: '',
      breadcrumbData: [
        {
          path: '/buyer/collection/folders?id="222"',
          title: t('folder.color_card_book'),
        }, {
          path: '',
          title: props.colorBookName,
        },
      ],
    });
    const search = async (keywords: '') => {
      state.keywords = keywords;
    };

    return {
      ...toRefs(state), search,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.buyer-collection-list {
  .img-type-search-bar {
    background: transparent;
    padding: 0 40px;
    .sd-breadcrumb {
      margin-bottom: 0;
      /deep/.el-breadcrumb__item {
        .el-breadcrumb__inner {
          color: #999999 !important;
        }
        &:last-child {
          .el-breadcrumb__inner {
            color: #222 !important;
          }
        }
      }
    }
  }
  /deep/.color-library > .wrap {
    background: transparent !important;
    box-shadow: none;
    padding: 0 80px;
    padding-top: 20px;
    .pagination {
      background: transparent;
    }
  }
}
</style>
