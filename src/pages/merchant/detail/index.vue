
<template>
  <div class="merchant-detail" v-loading="loading">
    <Banner v-if="currentMerchant" :merchant="currentMerchant"></Banner>
    <el-tabs v-if="currentMerchant" v-model="tab" class="merchant-detail-tabs sd-tabs flex-1">
      <el-tab-pane :label="$t('material.others.home')" name="home">
        <MerchantDiy v-if="isDiy"></MerchantDiy>
        <Display v-else :orgId="currentMerchant.id"></Display>
      </el-tab-pane>
      <el-tab-pane lazy :label="$t('merchant.all_material')" name="allMaterial">
        <AllMaterial
          v-if="tab === 'allMaterial'"
          :merchant="currentMerchant"
          :defaultParams="allMaterialDefaultParams"
        ></AllMaterial>
      </el-tab-pane>
      <el-tab-pane lazy :label="$t('folder.material_book')" name="materialBook">
        <MaterialBook :merchant="currentMerchant"></MaterialBook>
      </el-tab-pane>
      <el-tab-pane lazy :label="$t('buyer.new_material')" name="newMaterial">
        <NewMaterial :merchant="currentMerchant" @go-merchant-all-material="goMerchantAllMateiral"></NewMaterial>
      </el-tab-pane>
      <el-tab-pane lazy :label="$t('compony-info.compony_info')" name="info">
        <BusinessInfoTab :merchant="currentMerchant"></BusinessInfoTab>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-valid-default-prop */
/* eslint-disable max-len */
import { MerchantItem } from '@/models/Merchant';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, nextTick,
} from 'vue';
import { useRouter } from 'vue-router';
import { ElInput } from 'element-plus';
import MerchantDiy from '@/pages/components/merchant/components/Diy/Edit.vue';
import usePermisson from '@/utils/uses/use-permisson';
import { fetchMerchantInfoByOrgId } from '@/api/merchant';
import onCreated from '@/utils/vue/onCreated';
import Banner from './components/banner.vue';
import Display from './components/display.vue';
import AllMaterial from './components/AllMaterial.vue';
import MaterialBook from './components/MaterialBook.vue';
import NewMaterial from './components/NewMaterial.vue';
import BusinessInfoTab from './components/BusinessInfoTab.vue';

export default defineComponent({
  name: 'merchant-detail',
  components: {
    Banner, Display, AllMaterial, MaterialBook, NewMaterial, BusinessInfoTab, MerchantDiy,
  },
  props: {
    tab: {
      type: String,
    },
    merchant: {
      type: String,
    },
    isDiy: {
      type: Boolean,
      default: false,
    },
    orgId: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const searchInputVm = ref<InstanceType<typeof ElInput>>();
    const router = useRouter();
    const { company } = usePermisson();

    const state = reactive({
      currentMerchant: tryParseJson(props.merchant) || {} as MerchantItem,
      tab: props.tab || 'home',
      tabList: [{
        id: 'home',
        name: '首页',
      }, {
        id: 'allMaterial',
        name: '全部材料',
      }, {
        id: 'materialBook',
        name: '材料册',
      }, {
        id: 'newMaterial',
        name: '材料上新',
      }, {
        id: 'info',
        name: '商家信息',
      }],
      loading: false,
      allMaterialDefaultParams: {},
    });

    const goMerchantAllMateiral = async (yearSeason: string) => {
      state.tab = 'allMaterial';
      state.allMaterialDefaultParams = {
        yearSeason: [yearSeason],
      };
      // await nextTick();
      // state.allMaterialDefaultParams = {};
    };

    const setMerchantList = async () => {
      try {
        state.loading = true;
        state.currentMerchant = (await fetchMerchantInfoByOrgId({
          orgId: props.orgId || company.value?.id || '',
        }));
      } finally {
        state.loading = false;
      }
    };


    const returnObj = {
      ...toRefs(state),
      searchInputVm,
      goMerchantAllMateiral,
    };

    onCreated(async () => {
      if (props.isDiy || props.orgId) {
        await setMerchantList();
      }
    });

    if (!props.merchant && !props.isDiy && !props.orgId) {
      // 直接通过路由访问时回退到首页
      router.push('/main/home');
      return returnObj;
    }


    return returnObj;
  },
});
</script>
<style lang="scss" scoped>
@import "~@/pages/components/merchant/components/Diy/common.scss";
.merchant-detail {
  .merchant-detail-tabs {
    @include minMaxWidth();
    margin: 0 auto;
    /deep/.el-tabs__header {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f2f3f5;
      height: 50px;
    }
  }
}
</style>

