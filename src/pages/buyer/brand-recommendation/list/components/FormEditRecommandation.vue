<template>
  <div class="form-edit-recommadation" v-loading="loading">
    <div class="dialog-title">{{ submitType === "add" ? $t("folder.new_built") : $t("edit") }}推荐会</div>
    <el-form
      size="small"
      class="form-edit-recommadation"
      label-position="top"
      ref="formRef"
      :model="formData"
      :rules="formRules"
    >
      <el-form-item label="推荐会名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入会议名称" show-word-limit :maxlength="20"></el-input>
      </el-form-item>
      <el-form-item label="推荐会起止时间" prop="endTime">
        <el-date-picker
          prefix-icon="el-icon-time"
          v-model="dateRange"
          type="daterange"
          range-separator="&rarr;"
          @change="handleDatePickerChange"
        >
        </el-date-picker>
      </el-form-item>
      <ImageUploader v-model:imageUrl="formData.cover" prop="cover">
        <template #label>
          <div class="flex-vertical-center">
            <label class="">设置封面</label>
            <IconTip
              placement="bottom"
              popper-class="upload-logo-tooltip"
              :sizeLimit="2 * 1024 * 1024"
              content="支持JPG/JPEG/PNG，大小不超过2M"
            ></IconTip>
          </div>
        </template>
      </ImageUploader>
    </el-form>
    <div class="dialog-buttons">
      <el-button @click="$emit('cancel')">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" @click="handleSubmit" :disabled="!isSubmitable">{{
        $t("public.dialog.confirm")
      }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, Ref,
} from 'vue';
import dayjs from 'dayjs';
import IconTip from '@/components/tip/IconTip.vue';
import { RecommendationItem, addBrandRecommendation, editBrandRecommendation } from '@/api/recommendation';
// import useFormValidation, { Form } from '@/utils/use-form-validation';
import validFilled from '@/utils/validators/valid-filled';
import { ElForm } from 'element-plus';
import { validator2ElemRules } from '@/utils/validators/utils/validator-to-elem-rule';
import { getRelativePathFromUrl } from '@/utils/normalize-component';
import ImageUploader from './ImageUploader.vue';

export default defineComponent({
  name: 'form-edit-recommadation',
  components: { ImageUploader, IconTip },
  props: {
    submitType: {
      type: String as PropType<'add' | 'edit'>,
      default: 'add',
    },
    editItem: {
      type: Object as PropType<RecommendationItem>,
      default: () => ({
        name: '',
        cover: '',
        startTime: null,
        endTime: null,
      }),
    },
  },
  dialogify: {
    props: {
      title: '',
      width: '590px',
      closeOnClickModal: false,
    },
  },
  setup(props, { emit }) {
    const formRef = ref<InstanceType<typeof ElForm>>();
    const state = reactive({
      loading: false,
      formData: props.editItem,
      dateRange: props.editItem.startTime && props.editItem.endTime ? [props.editItem.startTime, props.editItem.endTime] : [],
    });

    const formRules = {
      name: validator2ElemRules([validFilled], { trigger: 'change' }),
      cover: validator2ElemRules([validFilled], { trigger: 'change' }),
      endTime: validator2ElemRules([validFilled], { trigger: 'change' }),
    };

    const isSubmitable = computed(() => {
      return Object.keys(formRules).every((key) => {
        return !!state.formData[key as keyof typeof formRules];
      });
    });
    // 当前版本的element-plus的date-picker组件的value-format属性无效, 所以自己用change转换
    const handleDatePickerChange = (value: [Date, Date] | null) => {
      if (!value) {
        state.formData.startTime = null;
        state.formData.endTime = null;
        return;
      }
      const [startTimeStamp, endTimeStamp] = value;
      state.formData.startTime = dayjs(startTimeStamp).format('YYYY-MM-DD');
      state.formData.endTime = dayjs(endTimeStamp).format('YYYY-MM-DD');
    };


    const handleSubmit = async () => {
      formRef.value!.validate(async (valid) => {
        if (valid) {
          const _fn = props.submitType === 'add' ? addBrandRecommendation : editBrandRecommendation;
          try {
            state.loading = true;
            // 编辑时返回的完整cover字段直接提交会超长,需要截取出其中有效path片段
            await _fn({ ...state.formData, cover: getRelativePathFromUrl(state.formData.cover) });
            emit('confirm');
          } finally {
            state.loading = false;
          }
        }
      });
    };
    return {
      formRef,
      formRules,
      handleSubmit,
      ...toRefs(state),
      handleDatePickerChange,
      isSubmitable,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
.form-edit-recommadation {
  // position: relative;
  .el-date-editor {
    width: 100%;
    .el-range-input {
      width: 43% !important;
    }
    .el-range-separator {
      color: #999;
    }
  }
  .el-form-item__label {
    line-height: 20px;
    padding-bottom: 4px;
  }
  .dialog-title {
    font-size: 16px;
    position: relative;
    top: -20px;
    color: #333333;
  }
  .dialog-buttons {
    padding-top: 20px;
    text-align: right;
  }
}
</style>

