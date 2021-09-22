<template>
  <div class="material-form scrollable-y" :class="{ 'is-add': isAdd }">
    <h3 class="title" :h-scroll="fieldMap.getWithKey('categoryId')">{{ fieldMap.getWithKey("categoryId") }}</h3>
    <MaterialType v-model="category" ref="materialTypeVm"></MaterialType>
    <h3 class="title" :h-scroll="$t('material-manage.form.basic_info')">
      {{ $t("material-manage.form.basic_info") }}
      <small>{{ addPercentTitle(infoPercent.base) }}</small>
    </h3>

    <UpDown :height="220" :expendBtnText="$t('material-manage.expand_all')" isObserve>
      <template #default>
        <HForm :data="baseFormData" v-model="baseForm" size="small" :ref="handleRef" :gutter="30" :transition="true">
          <template #designContent>
            <InputTag
              v-model="baseForm.designContent"
              :placeholder="$t('material-manage.form.enter_to_tag')"
            ></InputTag>
          </template>
        </HForm>
      </template>
    </UpDown>

    <h3 class="title" :h-scroll="$t('material-manage.form.business_info')">
      {{ $t("material-manage.form.business_info") }}
      <small>{{ addPercentTitle(infoPercent.business) }}</small>
    </h3>
    <UpDown :height="144" :expendBtnText="$t('material-manage.expand_all')" isObserve>
      <template #default>
        <HForm
          :data="businessFormData"
          v-model="businessForm"
          size="small"
          :ref="handleRef"
          :transition="true"
          :gutter="30"
        >
        </HForm>
      </template>
    </UpDown>

    <template v-if="featureFormData.length">
      <SdCollapse>
        <template #collpase-btn="{ handleActiveStatusChange }">
          <h3
            class="title"
            :h-scroll="$t('material-manage.form.material_properties')"
            @click="handleActiveStatusChange"
          >
            <span class="append-icon-arrow">{{ $t("material-manage.form.material_properties") }}</span>
            <small>{{ addPercentTitle(infoPercent.feature) }}</small>
          </h3>
        </template>
        <template #default="{ isCollapse }">
          <HForm
            v-show="!isCollapse"
            :data="featureFormData"
            v-model="featureForm"
            size="small"
            :ref="handleRef"
            :gutter="30"
          ></HForm>
        </template>
      </SdCollapse>
    </template>

    <template v-if="otherFormData.length">
      <SdCollapse>
        <template #collpase-btn="{ handleActiveStatusChange }">
          <h3 class="title" :h-scroll="$t('material-manage.form.other_properties')" @click="handleActiveStatusChange">
            <span class="append-icon-arrow">{{ $t("material-manage.form.other_properties") }}</span>
            <small>{{ addPercentTitle(infoPercent.other) }}</small>
          </h3>
        </template>
        <template #default="{ isCollapse }">
          <HForm
            v-show="!isCollapse"
            :data="otherFormData"
            v-model="otherForm"
            size="small"
            :ref="handleRef"
            class="flex-wrap"
            :gutter="30"
          >
          </HForm>
        </template>
      </SdCollapse>
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, markRaw, toRef, onBeforeUpdate, watch, PropType, Ref, nextTick, onMounted,
} from 'vue';
import Material, { MaterialDetail } from '@/models/Material';
import HForm from '@/components/form/HForm/index.vue';
import InputTag from '@/components/form/InputTag.vue';
import AppError, { NoQuatoError } from '@/utils/error';
import SdCollapse from '@/components/collapse/SdCollapse';
import * as materialApi from '@/api/material';

import deepCopy from '@/utils/deep-copy';
import fieldMap from '@/utils/field-map';
import usePermisson from '@/utils/uses/use-permisson';
import useResourceUsage from '@/utils/uses/use-resource-usage';
import UpDown from '@/components/upDown/base.vue';
import MaterialType from './MaterialType.vue';
import {
  options, useFormData, Category, getModelPercent,
} from './utils';


type ApplicablePartsOptions = { value: string, label: string, disabled: boolean, children?: ApplicablePartsOptions }[];

const allModelObj: Record<string, materialApi.ModelTypeItem> = {};
const allModelPartsObj: Record<string, materialApi.Part> = {};


export default defineComponent({
  name: 'material-form',
  components: {
    MaterialType, HForm, InputTag, SdCollapse, UpDown,
  },
  props: {
    attributeInfo: {
      type: Object as PropType<MaterialDetail['attributeInfo']>,
    },
    isAdd: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['category-change'],
  setup(props, { emit }) {
    const isCollapseVisible = ref<Boolean>(props.visible);
    if (!props.visible) {
      const unwatchVisibleChange = watch(() => props.visible, async (val) => {
        if (val) {
          isCollapseVisible.value = val;
          await nextTick();
          unwatchVisibleChange();
        }
      });
    }

    const state = reactive({
      category: {
        big: {},
        middle: {},
      } as unknown as Category,
      baseForm: {},
      businessForm: {},
      featureForm: {},
      physicalForm: {},
      otherForm: {},
      applicablePartsOptions: [] as ApplicablePartsOptions,
      showApplicablePartsCascader: false,
      showAllApplicablePartsValue: false,
    });


    const addPercentTitle = (infoPercent: number) => {
      return `信息完善度${infoPercent}%`;
    };

    const infoPercent = computed(() => {
      return {
        base: getModelPercent(state.baseForm),
        business: getModelPercent(state.businessForm),
        feature: getModelPercent(state.featureForm),
        other: getModelPercent(state.otherForm),
      };
    });

    const compAttributeInfo = computed(() => props.attributeInfo);

    const {
      baseFormData, businessFormData, featureFormData, otherFormData,
    } = useFormData(toRef(state, 'category'), compAttributeInfo as unknown as Ref<Obj>);


    const calcCollapsedFormData = (formData, isCollapse) => {
      // console.log(formData.map(item => {
      //   const isHide = isCollapse && !item.keepVisible;
      //   if (!item.formItemProps) {
      //     item.formItemProps = {};
      //   }
      //   item.formItemProps.style = { ...item.formItemProps.style, ...{ display: isHide ? 'none' : 'inline-block' } };
      //   return item;
      // }));
      return formData.map(item => {
        const isHide = isCollapse && !item.keepVisible;
        if (!item.formItemProps) {
          item.formItemProps = {};
        }
        item.formItemProps.style = {
          ...item.formItemProps.style,
          ...{
            display: isHide ? 'none' : 'inline-block',
          },
        };
        return item;
      });
    };
    // const computedBaseFormData = computed(() => {
    //   return calcCollapsedFormData(baseFormData.value);
    // });

    const materialTypeVm = ref<InstanceType<typeof MaterialType>>();
    const hformVms = ref<InstanceType<typeof HForm>[]>([]);
    watch(hformVms, () => {
      emit('category-change'); // 方便外部获取h-scroll
    });
    const handleRef = (hformVm: InstanceType<typeof HForm> | null) => {
      if (hformVm) hformVms.value.push(hformVm);
    };
    // 确保在每次更新之前重置ref
    onBeforeUpdate(() => {
      hformVms.value = [];
    });

    const getApplicablePartsName = (values: [string, string]) => {
      const [modelId, partCode] = values;
      return `${allModelObj[modelId]?.name || ''}/${allModelPartsObj[partCode]?.name || ''}`;
    };

    const validateAllForm = async () => {
      await Promise.all([materialTypeVm.value, ...hformVms.value].map(vm => vm?.validate()));
    };

    const clearValidateAllForm = async () => {
      await Promise.all([materialTypeVm.value, ...hformVms.value].map(vm => vm?.clearValidate()));
    };


    const mergeForm = () => {
      const {
        category, baseForm, businessForm, featureForm, physicalForm, otherForm,
      } = state;
      const getCategoryId = () => category.middle.id;
      return {
        ...compAttributeInfo.value, // 带上接口原先返回的不属于表单的参数
        categoryId: getCategoryId(),
        infoPercent: infoPercent.value, // 信息完善度的参数
        ...baseForm,
        ...businessForm,
        ...featureForm,
        ...physicalForm,
        ...otherForm,
      };
    };

    const handleParams = (allFormParams: Obj) => {
      Object.entries(allFormParams).forEach(([key, value]) => {
        // 需要处理的特殊值
        switch (key) {
          case 'applicableProduct':
            allFormParams[key] = JSON.stringify(value);
            return;
          case 'sampleMoq':
          case 'moq':
          case 'samplePrice':
          case 'price':
          case 'developmentCycle':
          case 'leadTime':
          case 'averageSize':
          case 'grammage':
          case 'thickness':
          case 'width':
          case 'oilContent':
            allFormParams[key] = +value ? ((+value).toFixed(2)) : '';
            return;
          // case 'applicableParts':
          //   {
          //     const modelPartMap: Record<string, string[]> = {};
          //     (value || []).forEach((item: [string, string]) => {
          //       const [modelId, partCode] = item;
          //       modelPartMap[modelId] = [...(modelPartMap[modelId] || []), partCode];
          //     });
          //     const result = Object.entries(modelPartMap).map(([modelId, partCodes]) => {
          //       const model = deepCopy(allModelObj[modelId]);
          //       const filterModelProp = userModelPermission.value === 'BASE' ? model.modelProp.filter(_item => {
          //         return !_item.isVip;
          //       }) : model.modelProp;
          //       filterModelProp.forEach((_item: any) => {
          //         _item.partProp = _item.partProp.filter((__item: materialApi.Part) => partCodes.includes(__item.code));
          //       });
          //       return {
          //         ...model,
          //         modelProp: filterModelProp,
          //       };
          //     });
          //     allFormParams[key] = result;
          //   }
          //   break;
          case 'designContent':
            allFormParams[key] = value.join();
            break;
          default:
            break;
        }
      });
    };


    // 外部调用
    const form2ApiParams = async () => {
      await validateAllForm();
      const allFormParams = mergeForm();
      handleParams(allFormParams);
      return allFormParams;
    };

    // 外部调用
    const reset = async (category: Category = { big: {}, middle: {} } as Category) => {
      // 编辑
      state.category.big = category.big;
      await nextTick(); // 在big的watch之后触发
      state.category.middle = category.middle;
      await clearValidateAllForm();
    };

    return {
      ...toRefs(state),
      options,
      infoPercent,
      materialTypeVm,
      handleRef,
      baseFormData,
      businessFormData,
      featureFormData,
      otherFormData,
      addPercentTitle,
      form2ApiParams,
      reset,
      isCollapseVisible,
      // computedBaseFormData,
      calcCollapsedFormData,
      allModelObj,
      allModelPartsObj,
      getApplicablePartsName,
      fieldMap,
    };
  },
});
</script>
<style lang="scss">
.applicableParts-popover {
  padding: 0 !important;
  .applicableParts-panel {
    border: none !important;
  }
}
.material-form {
  .el-form-item {
    margin-bottom: 16px !important;
  }
  &.is-add {
    max-height: 559px;
    min-height: 359px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .sd-collapse {
    .btn-bottom {
      padding-top: 4px;
    }
  }
  .material-upload-has-unit {
    width: calc(50% - 128px) !important;
    padding-right: 10px !important;
    &.double {
      width: calc(50% - 256px) !important;
      + .el-form-item {
        width: 128px !important;
        padding-right: 10px !important;

        + .el-form-item {
          width: 128px !important;
          .el-form-item__label {
            display: none;
            padding-right: 0;
          }
        }
        .el-form-item__label {
          display: none;
          padding-right: 0;
        }
      }
    }
    + .el-form-item {
      width: 128px !important;
      .el-form-item__label {
        display: none;
        padding-right: 0;
      }
    }
  }
  .el-slider {
    padding: 0 20px 20px;
    // margin-bottom: 20px;
    .el-slider__marks-text {
      white-space: nowrap;
    }
  }
}
</style>
<style lang="scss" scoped>
// @import 'url'
.material-form {
  /deep/.up-down-base {
    .up-down-wrap {
      overflow-x: hidden;
    }
    .footer {
      .default-text {
        font-size: 14px;
        color: #2878ff;
      }
    }
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #222222;
    height: 24px;
    line-height: 24px;
    margin: 20px 0;
    > small {
      color: #999999;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .el-form-item {
    display: inline-block;
    width: 50%;
    min-height: 65px;
    padding-right: 20px;
    vertical-align: top;

    /deep/ .el-form-item__label {
      float: none;
    }
    /deep/ .el-select {
      width: 100%;
    }
  }
  .form-item-flex {
    /deep/.el-form-item__content {
      display: flex;
    }
    .unit-select {
      width: 128px;
      margin-left: 10px;
    }
  }
  .applicableParts-input-wrap {
    z-index: 1;
    position: relative;
    display: inline-block;
    height: 32px;
    width: 100%;
    vertical-align: top;
    .applicableParts-input {
      background: white;
      position: absolute;
      width: 100%;
      min-height: 32px;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      border: 1px solid #dddddd;
      border-radius: 3px;
      padding: 3px 6px;

      .add-applicableParts {
        flex-shrink: 0;
      }

      .applicableParts-items {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      .applicableParts-item {
        display: inline-block;
        white-space: nowrap;
        margin: 2px 0 2px 6px;
        .el-tag {
          display: flex;
          align-items: center;
          .el-select__tags-text {
            max-width: 80px;
            text-align: center;
          }
          .el-tag__close {
            background-color: #c0c4cc;
            right: -7px;
            top: 0;
            color: #ffffff;
          }
        }
      }
      .applicableParts-number {
        margin-left: 5px;
        flex-shrink: 0;
        cursor: pointer;
        .del-icon {
          font-size: 12px;
          transform: scale(0.8);
          display: inline-block;
        }
      }
    }
  }
}
</style>
