<template>
  <div class="merchant-list-item" @click="goMerchantDetail">
    <div class="info">
      <div class="info-content">
        <div class="logo-wrap">
          <base-image :src="merchant.logo"></base-image>
        </div>
        <div class="info-right">
          <div class="content">
            <div class="title">
              <over-text>
                {{ merchant.name }}
              </over-text>
            </div>
            <div class="des over-text-2">
              {{ merchant.industry }}
            </div>
            <div class="resource">
              <span class="account">
                {{ merchant.resourceCount }}
              </span>
              资源
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="resource">
              <span class="account">
                {{ merchant.followCount }}
              </span>
              关注量
            </div>
          </div>
          <div class="btns">
            <el-button size="small" type="primary" @click.stop="$can('0032') && followMerchant()">
              <span>
                <i v-if="!merchant.isFollow" class="i-r-jiahao"></i>
                {{ merchant.isFollow ? $t("compony-info.cancel_follow") : $t("compony-info.follow") }}
              </span>
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="material-list-wrap">
      <MaterialTileList :data="merchant.materialList" disabled :style="materialListStyle"></MaterialTileList>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { MerchantItem } from '@/models/Merchant';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import useMerchantItem from './useMerchantItem';

export default defineComponent({
  name: 'merchant-list-item',
  components: { MaterialTileList },
  props: {
    merchant: {
      type: Object as PropType<MerchantItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { applyCooperation, followMerchant, goMerchantDetail } = useMerchantItem(props);
    const materialListStyle = {
      'grid-template-columns': 'repeat(4, 1fr)',
      gap: '20px',
    };
    return {
      materialListStyle, applyCooperation, followMerchant, goMerchantDetail,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant-list-item {
  display: flex;
  padding: 24px;
  cursor: pointer;
  transition: border 0.2s;
  // border: 1px solid transparent;
  // &:hover {
  //   border: 1px solid $color-primary;
  // }
  + .merchant-list-item {
    border-top: 1px solid #e7e7e7;
  }

  .info {
    display: flex;
    align-items: center;
    padding-right: 20px;
    width: 370px;
    flex-shrink: 0;
    .info-content {
      display: flex;
      flex: 1;
      min-width: 0;
      .logo-wrap {
        flex-shrink: 0;
        width: 75px;
        height: 75px;
        margin-right: 24px;
        border-radius: 50%;
        overflow: hidden;
      }
      .info-right {
        flex: 1;
        min-width: 0;
        .title {
          font-size: 18px;
          font-weight: bold;
          color: #222222;
          line-height: 26px;
        }
        .des {
          color: #666666;
          line-height: 20px;
          padding-top: 10px;
        }
        .resource {
          display: inline-block;
          color: #222222;
          line-height: 20px;
          padding-top: 10px;
          .el-divider {
            margin: 0 2px;
          }
          .account {
            font-weight: bold;
          }
        }
        .btns {
          padding-top: 24px;
          span {
            display: flex;
            align-items: center;
          }
          i {
            font-size: 12px;
            padding-right: 2px;
          }
        }
      }
    }
  }

  .material-list-wrap {
    padding-top: 12px;
    flex: 1;
  }
}
</style>
