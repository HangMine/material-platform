<template>
  <div class="flex preview-detail-container">
    <MediaCarousel
      v-bind="$attrs"
      withColorPicker
      :material="material"
      :catalogId="catalogId"
      :autoplay="false"
    ></MediaCarousel>

    <div class="material-detail-text-wrap">
      <div class="material-detail-text scrollable-y">
        <h2 class="section-title">
          {{ material.attributeInfo.name }}
        </h2>
        <div class="merchant" @click="goMerchantDetail">
          <div class="left">
            <div class="logo-wrap">
              <base-image :src="supplierInfo.supplierLogo"></base-image>
            </div>
            <div class="name">{{ supplierInfo.supplierName }}</div>
          </div>
          <i class="i-r-you-12"></i>
        </div>
        <!-- 基础属性 -->
        <div class="section-title-pre">{{ $t("material-manage.form.basic_properties") }}</div>
        <UpDown class="detail-up-down" :height="320">
          <ul class="field-list" style="margin-top: 20px">
            <li class="field-item">
              <FromFieldText :label="fieldMap.getWithKey('categoryId')" :content="materialTypeContent" />
            </li>
            <li v-for="field in baseFields" :key="field.key" class="field-item">
              <FromFieldText :label="fieldMap.getWithKey(field.key)" :content="field.value" :units="field.units" />
            </li>
          </ul>
        </UpDown>
        <div class="divide-line"></div>

        <!-- 业务属性 -->
        <template v-if="businessFields.length">
          <div class="section-title-pre padding-top-init">{{ $t("material-manage.form.business_properties") }}</div>
          <UpDown class="detail-up-down" :height="320">
            <ul class="field-list" style="margin-top: 20px">
              <li v-for="field in businessFields" :key="field.key" class="field-item margin-bottom-init">
                <FromFieldText :label="fieldMap.getWithKey(field.key)" :content="field.value" :units="field.units" />
              </li>
            </ul>
          </UpDown>
          <div class="divide-line"></div>
        </template>

        <!-- 材料特征属性 -->
        <template v-if="featureFields.length">
          <div class="section-title-pre">{{ $t("material-manage.form.material_properties") }}</div>
          <UpDown class="detail-up-down" :height="320">
            <ul class="field-list" style="margin-top: 20px">
              <li v-for="field in featureFields" :key="field.key" class="field-item">
                <FromFieldText :label="fieldMap.getWithKey(field.key)" :content="field.value" :units="field.units" />
              </li>
            </ul>
          </UpDown>
          <div class="divide-line"></div>
        </template>

        <!-- 其它属性 -->
        <template v-if="otherFields.length">
          <div class="section-title-pre">{{ $t("material-manage.form.other_info") }}</div>
          <UpDown class="detail-up-down" :height="320">
            <ul class="field-list" style="margin-top: 20px">
              <li v-for="field in otherFields" :key="field.key" class="field-item">
                <FromFieldText :label="fieldMap.getWithKey(field.key)" :content="field.value" :units="field.units" />
              </li>
            </ul>
          </UpDown>
          <div class="divide-line"></div>
        </template>

        <!-- 附件文档信息 -->
        <template v-if="uploadDocs?.length">
          <div class="section-title-pre doc-list-titile">{{ $t("material-manage.form.file_info") }}</div>
          <ul class="doc-list">
            <li v-for="docInfo in uploadDocs" :key="docInfo.name" class="doc-item">
              <div class="doc-list-icon">
                <base-image :src="type2Img(docInfo.name)" fit="contain"></base-image>
              </div>
              <span class="doc-item-name text-one-line">{{ docInfo.name }}</span>
              <i class="i-r-xiazai-16 doc-item-download" @click="downloadByURL(docInfo.url, docInfo.name)"></i>
            </li>
          </ul>
        </template>
        <time-info
          :showCreator="!fromShare"
          :creator="material?.attributeInfo?.creator || ''"
          :uploaded="material?.attributeInfo?.gmtCreateTime || ''"
          :updated="material?.attributeInfo?.gmtModifyTime || material?.attributeInfo?.gmtCreateTime || ''"
          style="margin-top: 20px"
        />
      </div>
      <div class="fix-footer">
        <div
          v-if="!isSelfMaterial"
          class="icon-button sd-button"
          :class="{ like: material?.isCollect }"
          @click="collect"
        >
          <i :class="material?.isCollect ? 'i-s-shoucangon-12' : 'i-r-shoucang-12'"></i>
          {{ material?.isCollect ? $t("folder.cancel_collect") : $t("folder.collection") }}
        </div>
        <div class="icon-button sd-button primary" type="primary" @click="$needFillInfo() && apply()">
          <i class="i-r-shenqing-12"></i> {{ $t("application_list.apply") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import getExt from '_/get-ext';
import { downloadByURL } from '@/utils/util';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import BaseImage from '@/components/base/Image.vue';
import {
  computed, defineComponent, PropType, reactive, toRefs, watch,
} from 'vue';
import MediaCarousel from '@/components/media-carousel/index.vue';
import fieldMap from '@/utils/field-map';
import { getContextUser } from '@/loaders/context';
import { cancelCollectMaterial, fetchMaterial } from '@/api/material';
import { ElMessage } from 'element-plus';
import { dialog } from '@/utils/vue/dialog';
import AddToFolder from '@/pages/components/FolderList/components/AddToFolder.vue';
import ApplySample from '@/pages/main/applyRecord/components/dialog/applySample.vue';
import usePermisson from '@/utils/uses/use-permisson';
import { useRouter } from 'vue-router';
import { t } from '@/i18n/index';
import UpDown from '@/components/upDown/base.vue';
import { FormItems } from '@/components/form/HForm/type';
import { MaterialDetail } from '@/models/Material';
import { addDisplayUnit, getDisplayPrice } from '../utils';
import TimeInfo from './TimeInfo.vue';
import FromFieldText from './FromFieldText.vue';
import {
  addFormItemDidplayValue, getBaseFormItems, getBusinessFormItems, getFeatureFormItems, getOtherFormItems,
} from './MaterialForm/utils';

export default defineComponent({
  name: 'MaterialDetailText',
  components: {
    MediaCarousel,
    FromFieldText,
    TimeInfo,
    BaseImage,
    UpDown,
  },
  props: {
    material: {
      type: Object as PropType<MaterialDetail>,
      required: true,
    },
    materialTypeContent: {
      type: String,
    },
    catalogId: {
      type: String,
      required: true,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    // 是否来自分享页的材料
    fromShare: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const state = reactive({
      carousel: null,
      baseFields: [] as FormItems,
      businessFields: [] as FormItems,
      featureFields: [] as FormItems,
      otherFields: [] as FormItems,
      uploadDocs: [],
    });

    const user = computed(() => getContextUser());
    const supplierInfo = computed(() => props.material?.supplierInfo || {});
    const { isSupplier, isBuyer } = usePermisson();


    console.log('props.material', props.material);

    const getFields = (type: 'base' | 'business' | 'feature' | 'other') => {
      const { attributeInfo } = props.material;

      const handleFormItems = (formItems: FormItems) => {
        // 处理需要特殊显示的字段
        return formItems.filter(formItem => {
          let isHide = false;
          switch (formItem.key) {
            case 'name':
              isHide = true;
              break;
            case 'samplePrice':
            case 'price':
              // 有货币单位的价格属性
              formItem.value = getDisplayPrice(props.material, formItem.key);
              break;
            case 'sampleMoq':
            case 'moq':
            case 'developmentCycle':
            case 'leadTime':
            case 'averageSize':
            case 'grammage':
            case 'thickness':
            case 'width':
            case 'length':
            case 'oilContent':
              formItem.value = addDisplayUnit(props.material, formItem.key);
              break;
            default:
              {
                const isUnit = `${formItem.key}`.includes('Unit');
                const isCurrency = `${formItem.key}`.includes('Currency');
                isHide = !!(isUnit || isCurrency);
              }
              break;
          }
          return !isHide;
        });
      };

      switch (type) {
        case 'base':
          return handleFormItems(addFormItemDidplayValue(getBaseFormItems(), attributeInfo));
        case 'business':
          return handleFormItems(addFormItemDidplayValue(getBusinessFormItems(), attributeInfo));
        case 'feature':
          return handleFormItems(addFormItemDidplayValue(getFeatureFormItems(), attributeInfo));
        case 'other':
          return handleFormItems(addFormItemDidplayValue(getOtherFormItems(), attributeInfo));
        default:
          return [];
      }
    };

    watch(
      () => props.material,
      (val, oldVal) => {
        state.baseFields = getFields('base');
        state.businessFields = getFields('business');
        state.featureFields = getFields('feature');
        state.otherFields = getFields('other');
        state.uploadDocs = val?.enclosureInfo?.docs || [];
      },
      { deep: true, immediate: true },
    );

    const type2Img = (file: File) => {
      switch (getExt(file)) {
        case 'pdf':
          return require('@/assets/img/file/pdf.png');
        case 'doc':
        case 'docx':
          return require('@/assets/img/file/word.png');
        case 'xls':
        case 'xlsx':
          return require('@/assets/img/file/xlsx.png');
        case 'ppt':
        case 'pptx':
          return require('@/assets/img/file/pptx.png');
        default:
          return require('@/assets/img/file/ohter.png');
      }
    };

    const isSelfMaterial = computed(() => {
      return user?.value?.id === props.material.attributeInfo.creator;
    });

    const collect = async () => {
      const isCollected = props.material.isCollect;

      if (isCollected) {
        await cancelCollectMaterial([props.material.originalCId]);
        props.material.isCollect = !isCollected;
      } else {
        if (user?.value?.id === props.material.attributeInfo.creator) {
          throw new Error(t('eleMessage.do_not_collect_own', { name: t('folder.material') }));
        }
        await dialog({
          is: AddToFolder,
          props: {
            receiveType: 'collect',
            detailId: props.material.originalCId,
            title: t('menu-management.favorites'),
          },
        });
        // props.folderFloatType = 'collection';
        // props.isCollectFloatOpened = true;
        props.material.isCollect = true;
      }
    };
    const apply = async () => {
      console.log(props.material, 'props.material');
      // const res = (await fetchMaterial(props.catalogId)).data;
      const _row = props.material.attributeInfo;
      if (user?.value?.id === _row.creator) {
        ElMessage.error(t('eleMessage.do_not_apply_own'));
        return;
      }
      if (props.material.isApply) {
        ElMessage.warning(t('eleMessage.al_apply'));
        return;
      }

      await dialog(
        {
          is: ApplySample,
          props: {
            placeholder: '请输入',
            submitType: 'applySample',
            appendRequestParams: {
              approver: _row.creator,
              applyType: 2,
              sampleId: _row.catalogId,
              originalCId: props.material.originalCId,
              sampleName: _row.name,
              categoryId: _row.categoryId,
              approverOrgId: _row.orgId,
            },
          },
        },
        {
          props: { title: t('application_list.application_sample') },
        },
      );
    };

    const goMerchantDetail = () => {
      const {
        supplierId: id, supplierLogo: logo, supplierName: name, count, industry, isCooperation, isFollow, followCount,
      } = supplierInfo.value;
      router.push({
        name: 'MerchantDetail',
        params: {
          merchant: JSON.stringify({
            id,
            logo,
            name,
            resourceCount: count,
            industry,
            isCooperation,
            isFollow,
            followCount,
          }),
        },
      });
      emit('cancel');
    };

    return {
      ...toRefs(state),
      isSelfMaterial,
      type2Img,
      downloadByURL,
      fieldMap,
      user,
      supplierInfo,
      collect,
      apply,
      goMerchantDetail,
    };
  },
});
</script>

<style lang="scss" scoped>
.preview-detail-container {
  height: 700px;
  border-radius: 4px;
  overflow: hidden;
}
.material-detail-text-wrap {
  position: relative;
  margin-top: 40px;

  .material-detail-text {
    width: 300px;
    background: #ffffff;
    height: calc(100% - 90px);

    /deep/.detail-up-down {
      .default-text {
        height: 24px;
        display: inline-block;
        line-height: 24px;
        padding: 0 27px;
      }
    }

    .section-title {
      font-size: 20px;
      color: #333;
      padding: 0 23px 0 30px;
    }
    .merchant {
      background: #f3f2f2;
      border-radius: 4px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 5px 10px 0 23px;
      padding: 0 10px;
      cursor: pointer;
      .left {
        display: flex;
        align-items: center;
        .logo-wrap {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 5px;
        }
        .name {
          font-size: 12px;
          color: #666666;
          line-height: 17px;
          position: relative;
          bottom: -1px;
        }
      }

      > i {
        font-size: 12px;
        transform: scale(0.7);
      }
    }
    .section-title-pre {
      font-size: 16px;
      color: #222222;
      padding: 20px 0px 0 30px;
      &.doc-list-titile {
        padding: 16px 0px 4px 30px;
      }
    }
    .padding-top-init {
      padding-top: 0;
    }
    .doc-list {
      margin: 0 30px 0 30px;
      line-height: 32px;
      .doc-item {
        display: flex;
        align-items: center;
        padding: 12px 0 12px 0;
        font-size: 12px;
        color: #666666;
        border-bottom: 1px solid #dddddd;
        position: relative;
        &:last-child {
          border-bottom: none;
        }
        .doc-item-download {
          font-size: 16px;
          position: absolute;
          right: 0;
          cursor: pointer;
        }
        .doc-list-icon {
          width: 32px;
          height: 32px;
          padding: 3px 4px;
          border: 1px solid #dddddd;
          border-radius: 5px;
          margin-right: 4px;
          .el-image {
            border-radius: 0;
          }
        }
      }
      .doc-item-name {
        padding-right: 20px;
      }
    }
  }
  .fix-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 90px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    .i-s-shoucangon-12 {
      color: #ff6678;
    }
    .sd-button {
      padding: 13px 30px;
      font-size: 16px;
    }
  }
}

.divide-line {
  width: 240px;
  height: 1px;
  background: #dddddd;
  margin: 30px 0;
  margin-left: 30px;
}
.field-list {
  padding: 0 23px 0 30px;
  display: flex;
  flex-wrap: wrap;
  .field-item {
    width: 100%;
    padding-right: 10px;
    margin-bottom: 20px;
    &.full {
      width: 100%;
    }
  }
  .margin-bottom-init:last-child {
    margin-bottom: 0;
  }
  .form-field-notes {
    .content-box,
    .content {
      white-space: initial;
      text-overflow: initial;
      overflow: initial;
    }
  }
}
</style>
