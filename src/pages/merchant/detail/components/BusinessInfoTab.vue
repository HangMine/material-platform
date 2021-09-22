<template>
  <div class="business-info-tab">
    <div class="block">
      <div class="top-info">
        <div class="compony-name">{{ companyInfo.name }}</div>
        <div class="first-field" v-if="companyInfo.industry">
          <p class="field-title">{{ $t("compony-info.compony_introduce") }}</p>
          <p class="field-content">{{ companyInfo.industry }}</p>
        </div>
      </div>

      <div class="title">{{ $t("material-manage.form.basic_info") }}</div>
      <ul class="block-ul">
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.compony_name") }}</div>
          <div class="field-value">{{ companyInfo.name }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.management_model") }}</div>
          <div class="field-value">{{ computedBusinessModel }}</div>
        </li>

        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.main_product") }}</div>
          <div class="field-value">{{ computedLeadingProduct }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.location") }}</div>
          <div class="field-value">{{ computedAddress }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.detail_address") }}</div>
          <div class="field-value">{{ companyInfo.address }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.delivery_place") }}</div>
          <div class="field-value">{{ sendAddressCnText }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.cooperation_brand") }}</div>
          <div class="field-value">{{ companyInfo.cooperationBrand }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.register_code") }}</div>
          <div class="field-value">{{ companyInfo.certificateCode }}</div>
        </li>
      </ul>
    </div>
    <div class="block">
      <div class="title">{{ $t("compony-info.contact_info") }}</div>
      <ul class="block-ul">
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.contact") }}</div>
          <div class="field-value">{{ companyInfo.creatorName }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.phone") }}</div>
          <div class="field-value">{{ companyInfo.creatorPhone }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.contact_email") }}</div>
          <div class="field-value">{{ companyInfo.creatorMail }}</div>
        </li>
        <li class="block-li">
          <div class="field-name">{{ $t("compony-info.telephone") }}</div>
          <div class="field-value">{{ companyInfo.landline }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, PropType,
} from '@vue/runtime-core';
import { CompanyInfo } from '@/models/Company';
import { MerchantItem } from '@/models/Merchant';
import onCreated from '@/utils/vue/onCreated';
import translate from '@/utils/translate';

export default defineComponent({
  name: '',
  components: {

  },
  props: {
    merchant: {
      type: Object as PropType<MerchantItem>,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      companyInfo: {} as CompanyInfo,
      computedBusinessModel: {},
      computedLeadingProduct: {},
      computedAddress: {},
      sendAddressCnText: '',
    });
    onCreated(async () => {
      console.log(props.merchant, 'merchant');
      state.companyInfo = props.merchant;
      state.computedBusinessModel = await translate.businessModel(state.companyInfo.businessModel);
      state.computedLeadingProduct = await translate.leadingProduct(state.companyInfo.leadingProduct);
      state.computedAddress = await translate.address([
        state.companyInfo.addressCountry, state.companyInfo.addressProvince, state.companyInfo.addressCity,
      ]);
      state.sendAddressCnText = (state.companyInfo.sendAddressRespList || []).map(({ country, province }) => `${country}-${province}`).join(',');
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scoped>
.business-info-tab {
  background: #fff;
  margin: 0 40px;
  padding: 20px 60px 40px;
  .top-info {
    border-bottom: 1px solid #e7e7e7;
    .compony-name {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .first-field {
      .field-title {
        color: #999;
        font-size: 12px;
      }
      .field-content {
        margin: 4px 0 24px;
      }
    }
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
        width: 33%;
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
