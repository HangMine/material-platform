<template>
  <div class="merchant-info">
    <div class="logo-wrap">
      <base-image :src="companyInfo.logo"></base-image>
    </div>
    <div class="name">
      {{ companyInfo.name }}
    </div>
    <div class="industry">
      {{ companyInfo.industry }}
    </div>

    <div class="block">
      <div class="title">{{ $t("material-manage.form.basic_info") }}</div>
      <ul class="block-ul">
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.management_model") }}</div>
          <div class="field-value">{{ computedBusinessModel }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.management_range") }}</div>
          <div class="field-value">{{ companyInfo.businessScope }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.cooperation_brand") }}</div>
          <div class="field-value">{{ companyInfo.cooperationBrand }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.main_product") }}</div>
          <div class="field-value">{{ computedLeadingProduct }}</div>
        </li>
      </ul>
    </div>
    <div class="block">
      <div class="title">{{ $t("compony-info.contact_info") }}</div>
      <ul class="block-ul">
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.contact_email") }}</div>
          <div class="field-value">{{ companyInfo.creatorMail }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.phone") }}</div>
          <div class="field-value">{{ companyInfo.creatorPhone }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.telephone") }}</div>
          <div class="field-value">{{ companyInfo.landline }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.contact") }}</div>
          <div class="field-value">{{ companyInfo.creatorName }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.location") }}</div>
          <div class="field-value">{{ computedAddress }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.detail_address") }}</div>
          <div class="field-value">{{ companyInfo.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchUserCompanyID } from '@/api/account';
import CompanyInfo from '@/models/Company';
import { MerchantItem } from '@/models/Merchant';
import onCreated from '@/utils/vue/onCreated';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import translate from '@/utils/translate';

export default defineComponent({
  name: 'merchant-info',
  dialogify: {
    props: {
      title: '',
    },
  },
  components: {},
  props: {
    merchant: {
      type: Object as PropType<MerchantItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      companyInfo: {} as CompanyInfo,
      computedBusinessModel: {},
      computedLeadingProduct: {},
      computedAddress: {},
    });

    onCreated(async () => {
      const companyInfo = await fetchUserCompanyID(props.merchant.id);
      state.companyInfo = companyInfo;
      state.computedBusinessModel = await translate.businessModel(companyInfo.businessModel);
      state.computedLeadingProduct = await translate.leadingProduct(companyInfo.leadingProduct);
      state.computedAddress = await translate.address([
        companyInfo.addressCountry, companyInfo.addressProvince, companyInfo.addressCity,
      ]);
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant-info {
  padding: 30px;
  padding-top: 12px;
  .logo-wrap {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
  .name {
    font-size: 16px;
    color: #222222;
    line-height: 22px;
    padding-top: 10px;
  }
  .industry {
    font-size: 12px;
    color: #999999;
    line-height: 18px;
  }
  .block {
    + .block {
      border-top: 1px solid #e7e7e7;
      margin-top: 24px;
    }
    .title {
      font-size: 16px;
      color: #333333;
      line-height: 22px;
      padding-top: 24px;
    }
    .block-ul {
      .block-li {
        display: inline-block;
        vertical-align: top;
        width: 50%;
        padding-top: 24px;
        .field-name {
          font-size: 12px;
          color: #999999;
          line-height: 18px;
        }
        .field-value {
          color: #333333;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
