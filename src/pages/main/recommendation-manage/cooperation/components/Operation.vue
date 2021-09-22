<template>
  <div class="cooperation-operation" v-loading="loading">
    <h4 class="title">{{ $t("recommendation.cooperation.operation.descript") }}</h4>
    <el-input
      type="textarea"
      :rows="5"
      :maxlength="500"
      :disabled="type === 'update'"
      show-word-limit
      v-model="cooperationExplain"
    ></el-input>
    <h4 class="title required">
      {{ $t("recommendation.cooperation.operation.upload-file") }}
      <IconTip
        :content="$t('material-manage.upload.file_limit', { limit: '100M' })"
        placement="bottom-start"
        :iconStyle="{ color: '#ccc', fontWeight: '100' }"
        :size="12"
      ></IconTip>
    </h4>
    <div class="file-upload-wrap">
      <EmptyWrap :data="documents">
        <template v-for="(document, i) of documents" :key="i">
          <FileUpload
            :options="{ types: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'png', 'jpg', 'jpeg'] }"
            :validOptions="['pdf', 'word', 'sheet', 'ppt', 'img']"
            :modelValue="documents[i]"
            @update:modelValue="(document) => documentChage(document, i)"
          >
            <template #append>
              <over-text class="upload-title">{{ document.name }}</over-text>
            </template>
          </FileUpload>
        </template>
      </EmptyWrap>
    </div>
    <div class="footer">
      <span class="date">
        <i class="i-r-shijian-16"></i> {{ $t("recommendation.cooperation.operation.date") }}: {{ date }}
      </span>
      <div class="dialog-buttons">
        <el-button type="default" @click="cancel">{{ $t("public.dialog.cancel") }}</el-button>
        <el-button type="primary" :class="{ 'h-disabled': isConfirmDisabled }" @click="confirm">{{
          $t("public.dialog.confirm")
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import FileList from '@/components/form/upload/FileList.vue';
import FileUpload from '@/components/form/upload/FileUpload.vue';
import { validateFiles } from '@/pages/components/material/utils';
import dayjs from 'dayjs';
import IconTip from '@/components/tip/IconTip.vue';
import {
  commitCooperation, CooperationDetail, CooperationListItem, fetchCooperationDetail, updateCooperation,
} from '@/api/recommendation';
import { UploadItem } from '@/components/form/upload/utils';
import onCreated from '@/utils/vue/onCreated';
import EmptyWrap from '@/components/error/EmptyWrap.vue';
import AppError from '@/utils/error';
import { apiUploadList2UploadList, CooperationUploadItem, uploadList2ApiUploadList } from './utils';

export default defineComponent({
  name: 'cooperation-operation',
  dialogify: {
    props: {
      width: '516px',
    },
  },
  components: { FileUpload, IconTip, EmptyWrap },
  props: {
    type: {
      type: String as PropType<'commit' | 'update'>,
      default: 'commit',
    },
    item: {
      type: Object as PropType<CooperationListItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      detail: {} as CooperationDetail,
      cooperationExplain: '',
      documents: [{
        item: undefined,
        url: '',
        name: '产能表',
      }, {
        item: undefined,
        url: '',
        name: '企业介绍',
      }, {
        item: undefined,
        url: '',
        name: '资质图',
      }, {
        item: undefined,
        url: '',
        name: '市场愿景',
      }] as CooperationUploadItem[],
    });

    const isConfirmDisabled = computed(() => !state.documents.some(document => document.url));
    const date = computed(() => (state.detail?.gmtCreateTime ? dayjs(state.detail.gmtCreateTime).format('YYYY-MM-DD') : ''));
    const documentChage = async (document: CooperationUploadItem, index: number) => {
      const _validateFiles = validateFiles({ limit: 100 * 1024 * 1024 });
      if (document.item) {
        // 新增或编辑文件时才需要校验
        const files = document.item ? [document.item] : [];
        try {
          await _validateFiles([], state.documents);
        } catch (error) {
          state.documents[index] = {
            ...state.documents[index],
            item: undefined,
            url: '',
          };

          throw error;
        }
      }
      state.documents[index] = document;
    };

    const cancel = () => {
      emit('cancel');
    };

    const confirm = async () => {
      try {
        state.loading = true;
        const fetchFn = props.type === 'commit' ? commitCooperation : updateCooperation;
        const params = {
          id: props.item.id,
          cooperationExplain: state.cooperationExplain,
          documents: await uploadList2ApiUploadList(state.documents),
        };
        await fetchFn(params);
        emit('confirm');
      } finally {
        state.loading = false;
      }
    };
    const fetchDetail = async () => {
      try {
        state.loading = true;
        const details = (await fetchCooperationDetail({ ids: [props.item.id] }));
        if (!details?.length) return;
        state.detail = details[0] || {};
        const { cooperationExplain, documents } = state.detail;
        // TODO: 提交时暂时前端写死
        if (props.type !== 'commit' && documents.length) state.documents = apiUploadList2UploadList(documents);
        state.cooperationExplain = cooperationExplain;
      } finally {
        state.loading = false;
      }
    };
    onCreated(async () => {
      await fetchDetail();
    });
    return {
      ...toRefs(state), isConfirmDisabled, validateFiles, date, cancel, confirm, documentChage,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.cooperation-operation {
  .title {
    padding-top: 10px;
    color: #222222;
    line-height: 30px;
    font-weight: 400;
    &:first-child {
      padding-top: 0;
    }
  }
  .file-upload-wrap {
    .file-upload {
      display: inline-block;
      /deep/.upload-title {
        font-size: 12px;
        color: #666666;
        line-height: 24px;
        height: 24px !important;
      }
      + .file-upload {
        margin-left: 8px;
      }
    }
    /deep/.default-upload-list-add {
      border: none;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    .date {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #999999;
      line-height: 18px;
      > i {
        padding-right: 5px;
      }
    }
  }
}
</style>
