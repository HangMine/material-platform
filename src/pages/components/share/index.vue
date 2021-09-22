<template>
  <div class="material-share-config" v-loading="loading">
    <div class="main flex">
      <div class="left">
        <ShareContent
          :folderInfo="folderInfo"
          :materials="materials"
          :shareType="shareType"
          :folderId="folderId"
          :qrcodeDataUrl="qrcodeDataUrl"
          ref="shareContentVm"
        ></ShareContent>
      </div>
      <div class="right">
        <h4 class="title">{{ $t("share.share_valid") }}</h4>
        <div>
          <el-radio v-model="type" :label="1">{{ $t("share.public") }}</el-radio>
        </div>
        <div>
          <el-radio v-model="type" :label="2">{{ $t("share.validate") }}</el-radio>
          <el-input v-if="type === 2" v-model="code" size="small" disabled class="share-pw"></el-input>
        </div>
        <h4 class="title">{{ $t("share.term_of_validity") }}</h4>
        <el-select size="small" v-model="validityType">
          <el-option v-for="item in validityTypeOptions" :key="item.key" :label="item.label" :value="item.key">
          </el-option>
        </el-select>
        <template v-if="shareType !== 'colorCardShare' && showIsSync">
          <h4 class="title">
            <span>{{ $t("share.update_state") }} </span>
            <IconTip placement="bottom" :size="12">
              <template #content> {{ $t("share.live_updates") }}<br />{{ $t("share.no_updates") }} </template>
            </IconTip>
          </h4>
          <div>
            <el-radio v-model="isSync" :label="1">{{ $t("share.live_update") }}</el-radio>
          </div>
          <div>
            <el-radio v-model="isSync" :label="0">{{ $t("share.no_update") }}</el-radio>
          </div>
        </template>

        <!-- <h4 class="title">
          <span> 被分享权限 </span>
          <IconTip
            placement="bottom"
            :size="12"
          >
            <template #content>
              允许被分享 ：被分享者可分享给其他人<br />不允许：被分享者不允许分享给其他人
            </template>
          </IconTip>
        </h4>
        <div>
          <el-radio v-model="isAgain" :label="1">允许被分享</el-radio>
        </div> -->
        <!-- <div>
          <el-radio v-model="isAgain" :label="0">不允许</el-radio>
        </div> -->
        <h4 class="title">{{ $t("share.share_introduce") }}</h4>
        <el-input v-model="subject" type="textarea" :rows="3" :maxlength="200" show-word-limit></el-input>
      </div>
    </div>
    <div class="footer">
      <el-button :disabled="shareType !== 'colorCardShare' && !isLoadedEnd" @click="downImg">{{
        $t("share.down_picture")
      }}</el-button>
      <el-button :disabled="shareType !== 'colorCardShare' && !isLoadedEnd" @click="copyImg">{{
        $t("share.copy_picture")
      }}</el-button>
      <el-button type="primary" @click="copyLink">{{ $t("share.copy_link") }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { MaterialDetail, MaterialList } from '@/models/Material';
import {
  defineComponent, reactive, computed, ref, toRefs, markRaw, PropType, onUnmounted, nextTick, watch,
} from 'vue';
import * as shareApi from '@/api/share';
import { copy } from '@/components/sd-table/utils';
import { ElMessage } from 'element-plus';
import dom2image from 'dom-to-image';
import { download } from '@/utils/util';
import env from '@/utils/envs';
import { ShareLinkParams } from '@/api/share';
import IconTip from '@/components/tip/IconTip.vue';
import { getMiniProgramQrCodeData } from '@/api/material';
import AppError from '@/utils/error';
import { t } from '@/i18n/index';
import ShareContent from './ShareContent/index.vue';
import { isLoadedEnd } from './ShareContent/utils';

const validityTypeOptions = computed(() => {
  return [{
    key: 1,
    label: t('share.permanent'),
  }, {
    key: 2,
    label: t('share.one_day'),
  }, {
    key: 3,
    label: t('share.one_week'),
  }, {
    key: 4,
    label: t('share.one_month'),
  }];
});

const createRandomString = () => {
  const upEnArr = [...new Array(26)].map((_, i) => 65 + i);
  const downEnArr = [...new Array(26)].map((_, i) => 97 + i);
  const numArr = [...new Array(10)].map((_, i) => 48 + i);
  const arr = [...upEnArr, ...downEnArr, ...numArr];
  const randomIndexArr = [...new Array(4)].map(() => String.fromCharCode(arr[Math.round(Math.random() * (arr.length - 1))]));
  return randomIndexArr.join('');
};

export default defineComponent({
  name: 'material-share-config',
  dialogify: {
    props: {
      width: '440px',
      title: t('share.share'),
      customClass: 'share-config-dialog',
    },
  },
  components: { ShareContent, IconTip },
  props: {
    materials: {
      type: Array as PropType<MaterialList>,
      required: true,
    },
    showConfig: {
      type: Boolean,
      default: false,
    },
    shareInfo: {
      type: Object as PropType<AsyncReturnType<typeof shareApi.fetchShareConfig>['data']>,
    },
    shareType: {
      type: String,
      default: 'material',
    },
    folderId: {
      type: String,
    },
    folderInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const shareContentVm = ref<InstanceType<typeof ShareContent>>();
    const state = reactive({
      type: 1,
      validityType: 1,
      code: createRandomString(),
      isSync: 1,
      isAgain: 1,
      subject: '',
    } as ShareLinkParams);
    const loading = ref(false);
    const qrcodeDataUrl = ref('');
    const showIsSync = computed(() => props.materials.every(item => item.tag !== '已上架'));
    watch(() => state.type, () => {
      state.code = createRandomString();
    });
    const getImgUrl = async (urlType = 'png') => {
      const domNode = shareContentVm.value?.$el;
      // console.log(shareContentVm, 'shareContentVm');
      const scale = 2;
      // console.log(domNode, 'domNode');
      const _fn = urlType === 'blob' ? dom2image.toBlob : dom2image.toPng;
      // 下载图不清晰,二维码扫不出,所以放大两倍后再下载
      const dataUrl = await _fn(domNode, {
        width: domNode.offsetWidth * scale,
        height: domNode.offsetHeight * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${domNode.offsetWidth}px`,
          height: `${domNode.offsetHeight}px`,
        },
      });
      return dataUrl;
    };

    const getQrcodeImage = async (shareId: string) => {
      let scene = shareId;
      if (props.shareType === 'folderShare') {
        scene = `${shareId},materialBook`;
      }
      qrcodeDataUrl.value = await getMiniProgramQrCodeData('pages/share/share-check', scene, 280);
    };
    const getShareData = async () => {
      const { shareInfo } = props;
      if (shareInfo) {
        throw AppError.abort;
      }
      const params = {
        ...state,
        code: state.type === 2 ? state.code : undefined,
      };
      if (props.shareType === 'folderShare') {
        const { data: { shareId, code } } = await shareApi.createMaterialShareUrl({
          ...params,
          catalogId: props.folderInfo.catalogId,
          materialBookName: props.folderInfo.name,
          isShared: props.folderInfo.isShared,
        });
        return { shareId, code };
      } if (props.shareType === 'colorCardShare') {
        const { data: { shareId, code } } = await shareApi.createColorCardShare({
          ...params,
          relateId: props.folderInfo.id,
        });
        return { shareId, code };
      }

      const { data: { shareId, code } } = await shareApi.createShareLink({ ...params, catalogIds: props.materials.map(item => item.catalogId) });
      return { shareId, code };


      // const { data: { shareId, code } } = await shareApi.createMaterialShareUrl(params);
    };

    const downImg = async () => {
      try {
        loading.value = true;
        const { shareId } = await getShareData();
        await getQrcodeImage(shareId);
        await nextTick();
        const imgUrl = await getImgUrl();
        const imgName = props.materials.slice(0, 3).map(item => item.name).join();
        console.log(imgUrl, 'imgUrl');
        download(imgUrl, imgName);
      } finally {
        loading.value = false;
      }
    };

    const copyImg = async () => {
      try {
        loading.value = true;
        const { shareId } = await getShareData();
        await getQrcodeImage(shareId);
        await nextTick();
        const imgBlob = await getImgUrl('blob');
        const result = await navigator.permissions.query({ name: 'clipboard-write' });
        // console.log('copyImgResult', result);
        if (result.state === 'granted') {
          // @ts-ignore
          await navigator.clipboard.write([
            // @ts-ignore
            new window.ClipboardItem({
              [imgBlob.type]: imgBlob,
            }),
          ]);
          ElMessage.success(t('share.copy_success'));
        } else if (result.state === 'denied') {
          throw new Error(t('share.copy_fail_no_valid'));
        }
      } catch (error) {
        console.log(error);
        ElMessage.error(t('share.copy_fail_browser_low'));
      } finally {
        loading.value = false;
      }
    };


    const copyLink = async () => {
      console.log('await getShareData()');
      try {
        loading.value = true;
        const { shareId, code } = await getShareData();
        if (props.shareType === 'folderShare') {
          const copyStr = `${window.location.host}
          /share?shareLinkType=${props.shareType}&shareId=${shareId}${code ? `\n${t('share.visit_password')}：${code}` : ''}`;
          copy(copyStr);
        } else if (props.shareType === 'colorCardShare') {
          const copyStr = `${window.location.host}/share?shareLinkType=${props.shareType}&shareId=${shareId}${code ? `\n访问密码：${code}` : ''}`;
          copy(copyStr);
        } else {
          const copyStr = `${window.location.host}/share?shareId=${shareId}${code ? `\n${t('share.visit_password')}：${code}` : ''}`;
          copy(copyStr);
        }
        state.type = 1;

        ElMessage.success(t('share.copy_success'));
      } finally {
        loading.value = false;
      }
    };

    return {
      ...toRefs(state), isLoadedEnd, loading, shareContentVm, validityTypeOptions, downImg, copyImg, copyLink, qrcodeDataUrl, showIsSync,
    };
  },
});
</script>
<style lang="scss">
.share-config-dialog {
  .el-dialog__body {
    padding: 0;
  }
}
</style>
<style lang="scss" scoped>
// @import 'url'
.material-share-config {
  .main {
    justify-content: center;
    overflow: hidden;
    .left {
      width: 375px;
      flex-shrink: 0;
      margin-bottom: -90px;
      .share-frame {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      padding: 40px 30px 20px 30px;

      .title {
        display: flex;
        align-items: center;
        margin: 20px 0 10px 0;
        > span {
          margin-right: 4px;
        }
      }
      /deep/ .el-select {
        width: 100%;
      }
      /deep/ .el-radio {
        margin: 5px 0;
      }
      .share-pw {
        width: 60px;
        padding-left: 5px;
        /deep/ .el-input__inner {
          padding: 0 10px;
        }
      }
    }
  }
  .footer {
    text-align: right;
    height: 82px;
    line-height: 82px;
    padding-right: 30px;
  }
}
</style>
