<template>
  <div class="merchant-tile-item" @click="goMerchantDetail">
    <div class="header flex-space-between">
      <div class="logo-wrap">
        <base-image :src="merchant.logo"></base-image>
      </div>
      <div class="content flex-1">
        <div class="title">
          <over-text>
            {{ merchant.name }}
          </over-text>
        </div>
        <div class="des">
          <over-text>
            {{ merchant.industry }}
          </over-text>
        </div>
      </div>
      <div class="btns flex">
        <!-- <el-button :disabled="merchant.isCooperation" size="small" @click.stop="$can('0031') && applyCooperation()"
          ><span>
            <i class="i-r-hezuo-12"></i>
            {{ merchant.isCooperation ? $t("compony-info.al_cooperation") : $t("compony-info.cooperation") }}
          </span>
        </el-button> -->
        <el-button size="small" type="primary" @click.stop="$can('0032') && followMerchant()"
          ><span>
            <i v-if="!merchant.isFollow" class="i-r-jiahao"></i>
            {{ merchant.isFollow ? $t("compony-info.cancel_follow") : $t("compony-info.follow") }}
          </span>
        </el-button>
      </div>
    </div>
    <div class="body">
      <MaterialTileList :data="merchant.materialList" disabled :style="MaterialTileStyle"></MaterialTileList>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType,
} from 'vue';
import { MerchantItem } from '@/models/Merchant';
import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import useMerchantItem from './useMerchantItem';

export default defineComponent({
  name: 'merchant-tile-item',
  components: { MaterialTileList },
  props: {
    merchant: {
      type: Object as PropType<MerchantItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { applyCooperation, followMerchant, goMerchantDetail } = useMerchantItem(props);

    const MaterialTileStyle = {
      'grid-template-columns': 'repeat(3, 1fr)',
      gap: '10px',
    };

    return {
      MaterialTileStyle, applyCooperation, followMerchant, goMerchantDetail,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant-tile-item {
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  .header {
    .logo-wrap {
      width: 48px;
      height: 48px;
      margin-right: 8px;
      border-radius: 50%;
      overflow: hidden;
    }
    .content {
      min-width: 0;
      padding-right: 10px;
      .title {
        font-size: 18px;
        color: #222222;
        line-height: 24px;
      }
      .des {
        color: #999999;
        line-height: 20px;
      }
    }
    .btns {
      .btn {
        width: 28px;
        height: 28px;
        border: 1px solid #979797;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          border: 1px solid $color-primary;
          color: $color-primary;
        }
        + .btn {
          margin-left: 12px;
        }
      }
    }
  }
  .body {
    padding-top: 10px;
  }
}
</style>
