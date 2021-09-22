<template>
  <div class="merchant-detail-banner">
    <sd-breadcrumb
      backPath="auto"
      :data="[
        {
          title: $t('compony-info.compony_page'),
        },
      ]"
    ></sd-breadcrumb>
    <div class="logo-wrap">
      <base-image :src="merchant.logo"></base-image>
    </div>
    <h3 class="title">
      {{ merchant.name }}
    </h3>
    <div class="btns flex">
      <el-button size="small" type="primary" @click.stop="$can('0032') && followMerchant()">
        <span>
          <i v-if="!merchant.isFollow" class="i-r-jiahao"></i>
          {{ merchant.isFollow ? $t("compony-info.cancel_follow") : $t("compony-info.follow") }}
        </span>
      </el-button>
    </div>
    <div class="follow-text">{{ merchant.followCount }}{{ $t("merchant.personal_al_follow") }}</div>
  </div>
</template>

<script lang="ts">
import { MerchantItem } from '@/models/Merchant';
import useMerchantItem from '@/pages/components/merchant/components/Item/useMerchantItem';
import usePermisson from '@/utils/uses/use-permisson';
import { dialog } from '@/utils/vue/dialog';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { useRouter } from 'vue-router';
import MerchantInfo from '../../components/Info.vue';

export default defineComponent({
  name: 'merchant-detail-banner',
  components: {},
  props: {
    merchant: {
      type: Object as PropType<MerchantItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const state = reactive({});
    const { user } = usePermisson();
    const { applyCooperation, followMerchant } = useMerchantItem(props);

    const isSelf = computed(() => {
      return user.value?.companyId === props.merchant.id;
    });
    return {
      ...toRefs(state), isSelf, applyCooperation, followMerchant,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant-detail-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 330px;
  background-image: url("~@/assets/img/merchant/banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  .sd-breadcrumb {
    position: absolute;
    left: 40px;
    top: 0;
    color: #cccccc;
    border-bottom: none;
    .el-divider {
      background-color: #cccccc;
    }
    /deep/.el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #cccccc;
    }
  }
  .logo-wrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
  .title {
    font-size: 20px;
    color: #ffffff;
    line-height: 28px;
    padding-top: 20px;
  }
  .info-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-size: 12px;
    color: #ffffff;
    line-height: 16px;
    height: 20px;
    margin-top: 8px;
    padding: 0 12px;
    font-weight: 200;
    cursor: pointer;
    > i {
      transform: scale(0.6);
    }
  }
  .btns {
    padding-top: 20px;
  }
  .follow-text {
    margin-top: 10px;
    font-size: 12px;
    color: #cccccc;
    line-height: 18px;
  }
}
</style>
