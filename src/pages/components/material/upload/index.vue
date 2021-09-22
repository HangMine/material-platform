<template>
  <div class="material-upload">
    <reactive-loading :visible="loading" :text="loadingText || uploadedPercentage"></reactive-loading>
    <Steps class="material-steps" v-model="step">
      <Step>{{ $t("material-manage.upload.choose_file") }}</Step>
      <Step>{{ $t("material-manage.upload.add_color_card") }}</Step>
      <Step>{{ $t("material-manage.upload.select_model") }}</Step>
      <Step>{{ $t("material-manage.upload.add_info") }}</Step>
    </Steps>

    <div v-show="step === 0" class="upload-files">
      <Upload
        v-model="fileForm.material"
        :options="{ types: ['4ddat', 'admf'] }"
        :validOptions="['material']"
        :defaultImg="require('@/assets/img/file/4ddat.png')"
      >
        <template #default="{ upload, url, close }">
          <div class="upload-main">
            <div class="upload-main-content">
              <template v-if="url">
                <div class="img" :style="{ backgroundImage: `url('${url}')` }" />
                <p class="upload-title">{{ fileForm.material?.name || "" }}</p>
                <el-button class="upload-btn" @click="upload">{{
                  $t("material-manage.upload.upload_again")
                }}</el-button>
                <i class="close-icon hover-link el-icon-close" @click.stop="close"></i>
              </template>
              <template v-else>
                <div class="icon-wrap">
                  <i class="i-l-shangchuantubiao-34"></i>
                </div>
                <h3 class="upload-title bold">{{ $t("material-manage.upload.drag_material_here") }}</h3>
                <p class="upload-des">{{ $t("material-manage.upload.support_4ddat") }}</p>
                <el-button class="upload-btn" type="primary" @click="upload">{{
                  $t("material-manage.upload.choose_file")
                }}</el-button>
              </template>
            </div>
          </div>
        </template>
      </Upload>
      <ul class="card-container">
        <li>
          <ListCard class="img-list-card" type="img" :isEmpty="!fileForm.imgList.length" @click-empty="clickImgEmpty()">
            <UploadList
              :modelValue="fileForm.imgList"
              @update:modelValue="setImgList"
              :maxLength="6"
              fit="cover"
              ref="imgUploadListVm"
            >
              <template #append="{ item, i }">
                <over-text class="upload-title">{{ item.name }}</over-text>
                <el-tooltip
                  :content="`${
                    item.isReal
                      ? $t('material-manage.upload.cancel_take_picture')
                      : $t('material-manage.upload.set_take_picture')
                  }`"
                  placement="bottom"
                  effect="light"
                >
                  <span class="is-real-icon-wrap" :class="{ 'is-real': item.isReal }">
                    <i
                      :class="`${item.isReal ? 'i-r-shezhiyanseoff-14' : 'i-s-shezhiyanseon-14'}`"
                      @click="toggleIsReal(item, i)"
                    ></i>
                  </span>
                </el-tooltip>
              </template>
            </UploadList>
          </ListCard>
        </li>
        <li>
          <ListCard type="video" :isEmpty="!fileForm.videoList.length" @click-empty="clickVideoEmpty()">
            <VideoList v-model="fileForm.videoList" :maxLength="3" ref="videoUploadListVm">
              <template #append="{ item }">
                <over-text class="upload-title">{{ item.name }}</over-text>
              </template>
            </VideoList>
          </ListCard>
        </li>
        <li>
          <ListCard type="file" :isEmpty="!fileForm.fileList.length" @click-empty="clickFileEmpty()">
            <FileList v-model="fileForm.fileList" :validate="validateFiles()" ref="fileUploadListVm">
              <template #append="{ item }">
                <over-text class="upload-title">{{ item.name }}</over-text>
              </template>
            </FileList>
          </ListCard>
        </li>
      </ul>
    </div>

    <ColorCard v-show="step === 1" v-model="colorInfos" ref="colorCardVm"></ColorCard>

    <ModelSelectPane v-show="step === 2" v-model="displayModelTypeList" ref="modelSelectPaneVm"></ModelSelectPane>

    <MaterialForm
      v-if="showMaterialForm"
      v-show="step === 3"
      isAdd
      ref="materialFormVm"
      :visible="step === 3"
    ></MaterialForm>

    <div class="footer">
      <el-button @click="cancel">{{ $t("cancel") }}</el-button>
      <el-button v-if="step !== 0" @click="prevStep">{{ $t("previous_step") }}</el-button>
      <el-button type="primary" :disabled="confirmBtn.disabled" :loading="loading" @click="confirm">{{
        confirmBtn.title
      }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch, toRef, onMounted, onBeforeUnmount, nextTick,
} from 'vue';
import Steps from '@/components/steps/index.vue';
import Step from '@/components/steps/Step.vue';
import Upload from '@/components/form/upload/index.vue';
import UploadList from '@/components/form/upload/UploadList.vue';
import VideoList from '@/components/form/upload/VideoList.vue';
import FileList from '@/components/form/upload/FileList.vue';
import * as api from '@/api/material';
import { dialog } from '@/utils/vue/dialog';

import AppError from '@/utils/error';
import {
  UploadItems, UploadItem,
} from '@/components/form/upload/utils';
import ModelPreviewGenerater from '@/utils/ModelPreviewGenerater';
import { t } from '@/i18n/index';
import MaterialForm from '../components/MaterialForm/index.vue';
import ColorCard from '../components/ColorCard/index.vue';
import ModelSelectPane from '../model/SelectPane.vue';
import {
  Color, Colors, getDefaultColor, getColorSystem,
} from '../components/ColorCard/utils';
import {
  getRenderingInfo, getEnclosureInfo, failList, validateFiles, loading, getUploadSizeStat, uploadedPercentage, handle4ddatChage,
} from '../utils';
import UploadResult from '../components/UploadResult/index.vue';
import { DisplayModelTypeList, useModelUtils } from '../model/utils';
import ListCard from './components/ListCard.vue';
import ReactiveLoading from './components/ReactiveLoading.vue';


export type UploadImgItem = UploadItem & { isReal: 1 | 0 };
export type UploadImgItems = UploadImgItem[];

export default defineComponent({
  name: 'material-upload',
  dialogify: {
    props: {
      title: t('material-manage.upload.upload_file'),
      width: '1200px',
      closeOnClickModal: false,
    },
  },
  components: {
    Steps, Step, Upload, UploadList, VideoList, ListCard, FileList, ColorCard, ModelSelectPane, MaterialForm, ReactiveLoading,
  },
  props: {},
  emits: ['cancel', 'confirm', 'reupload'],
  setup(props, { emit }) {
    const modelSelectPaneVm = ref<InstanceType<typeof ModelSelectPane>>();
    const imgUploadListVm = ref<InstanceType<typeof UploadList>>();
    const videoUploadListVm = ref<InstanceType<typeof VideoList>>();
    const fileUploadListVm = ref<InstanceType<typeof FileList>>();
    const colorCardVm = ref<InstanceType<typeof ColorCard>>();
    const materialFormVm = ref<InstanceType<typeof MaterialForm>>();
    const previewGenerater = new ModelPreviewGenerater();

    const { displayModelTypeList2ApiModelTypeList, apiModelTypeList2DisplayModelTypeList } = useModelUtils();

    const state = reactive({
      step: 0,
      fileForm: {
        material: undefined as File | undefined,
        imgList: [] as UploadImgItems,
        videoList: [] as UploadItems,
        fileList: [] as UploadItems,
      },
      loadingText: '',
      showMaterialForm: true, // reset的时候修改
      displayModelTypeList: [] as DisplayModelTypeList,
    });

    const colorInfos = ref<Colors>([]);

    watch(() => state.fileForm.material, async (materialFile) => {
      try {
        loading.value = true;
        await handle4ddatChage(materialFile, colorInfos);
      } finally {
        loading.value = false;
      }
    });
    const confirmBtn = computed(() => {
      const { step, fileForm } = state;
      const {
        material, imgList, videoList, fileList,
      } = fileForm;

      let title = t('public.dialog.next');
      if (step === 3) {
        title = t('public.dialog.complete');
      } else if (step === 0 && !material && !imgList.length && !videoList.length && !fileList.length) {
        title = t('public.dialog.skip');
      }

      return {
        title,
        disabled: step === 2 && !displayModelTypeList2ApiModelTypeList(state.displayModelTypeList).length,
      };
    });

    const setImgList = (imgList: UploadImgItems) => {
      imgList.forEach((item) => {
        const { isReal } = item;
        item.isReal = isReal === undefined ? 0 : isReal;
      });
      state.fileForm.imgList = imgList;
    };

    const toggleIsReal = (imgItem: UploadImgItem, i: number) => {
      imgItem.isReal = imgItem.isReal === 0 ? 1 : 0;
    };

    const reset = async () => {
      loading.value = false;
      state.step = 0;
      state.fileForm = {
        material: undefined,
        imgList: [],
        videoList: [],
        fileList: [],
      };
      colorInfos.value = [];
      state.loadingText = '';
      if (colorCardVm.value) colorCardVm.value.currentColor = '';
      state.showMaterialForm = false;
      await nextTick();
      state.showMaterialForm = true;
      // await materialFormVm.value?.reset();
    };

    const nextStep = (step?: number) => {
      state.step = step ?? (state.step + 1);
    };
    const clickImgEmpty = async () => {
      await imgUploadListVm.value?.uploadVm?.upload();
    };
    const clickVideoEmpty = async () => {
      await videoUploadListVm.value?.uploadListVm?.uploadVm?.upload();
    };
    const clickFileEmpty = async () => {
      await fileUploadListVm.value?.uploadListVm?.uploadVm?.upload();
    };
    const cancel = () => {
      emit('cancel');
    };
    const prevStep = () => {
      state.step--;
    };


    const submit = async () => {
      try {
        loading.value = true;
        const uploadSizeStat = getUploadSizeStat(state.fileForm);
        uploadSizeStat.getTotalSize();
        const { form2ApiParams } = materialFormVm.value;
        const attributeInfo = {
          ...await form2ApiParams(),
          applicableParts: displayModelTypeList2ApiModelTypeList(state.displayModelTypeList),
        };
        const uploadOssKeys = await getEnclosureInfo(state.fileForm, (...args) => {
          uploadSizeStat.addUploadedSize(args);
          console.log(uploadedPercentage.value);
        });
        const renderingInfo = await getRenderingInfo({
          colorInfos: colorInfos.value,
          onUpload: (...args) => {
            // console.log('getRenderingInfo', args);
            uploadSizeStat.addUploadedSize(args);
            // state.uploadedPercentageText = uploadSizeStat.getUploadedPercentage();
            console.log(uploadedPercentage.value);
          },
          onParseStart: () => {
            state.loadingText = '解析中...';
          },
          onParseEnd: () => {
            state.loadingText = '';
          },
        });
        console.log('renderingInfo', renderingInfo);
        const apiParams = {
          renderingInfo,
          enclosureInfo: uploadOssKeys,
          attributeInfo: {
            ...attributeInfo,
            hasFile: state.fileForm.material ? 1 : 0,
          },
        } as any;

        if (!failList.length) {
          // 没有失败的文件才执行上传
          const catalogId = (await api.uploadMaterial(apiParams)).data;
          // 获取材质的渲染信息
          const materialInfo = (await api.fetchMaterial(catalogId)).data;
          apiParams.attributeInfo = materialInfo.attributeInfo;
          // 上传完成后，才有绝对的贴图路径进行预览图生成
          state.loadingText = '实时预览图生成及上传中...';
          const previewURLMap = await previewGenerater.generatePreviewImg(materialInfo);
          console.log('previewURLMap', previewURLMap);
          if (previewURLMap) {
            // 拼入预览图信息
            apiParams.renderingInfo.forEach((info: any) => {
              const { colorInfo } = info;
              previewURLMap.forEach((previewData: any) => {
                if (colorInfo === previewData.colorInfo) {
                  info.imgInfo = info.imgInfo || {};
                  // 已有离线图或者已生成过不再重复生成
                  if (info.imgInfo.realTimePreviewImg || info.imgInfo.imgUrl_crease_v2) return;
                  info.imgInfo.realTimePreviewImg = previewData.url;
                }
              });
            });
          }
          // 更新
          state.loadingText = '';
          apiParams.catalogId = catalogId;
          apiParams.isSync = false;
          console.log('apiParams', apiParams);
          await api.editMaterialNoHistory(apiParams);
        }
        try {
          await dialog({
            is: UploadResult,
            props: {
              failList,
            },
          });
          // 成功:重新上传
          await reset();
          emit('reupload');
        } catch (err) {
          if (err instanceof AppError) {
            if (err?.isClose) {
              // 直接关闭
              emit('confirm');
            } else {
              // 失败:再试一次
              state.step = 0;
            }
          } else {
            throw err;
          }
        } finally {
          failList.splice(0, failList.length);
        }
      } finally {
        loading.value = false;
      }
    };
    const confirm = async () => {
      if (state.step === 3) {
        await submit();
      } else {
        nextStep();
      }
    };
    const setDisplayModelList = async () => {
      state.displayModelTypeList = await apiModelTypeList2DisplayModelTypeList();
    };
    onMounted(async () => {
      await setDisplayModelList();
      // Test
      // generatePreviewImg();
    });
    onBeforeUnmount(() => {
      previewGenerater.dispose();
    });
    return {
      ...toRefs(state),
      setDisplayModelList,
      colorInfos,
      setImgList,
      toggleIsReal,
      loading,
      uploadedPercentage,
      nextStep,
      modelSelectPaneVm,
      imgUploadListVm,
      videoUploadListVm,
      fileUploadListVm,
      materialFormVm,
      colorCardVm,
      clickImgEmpty,
      clickVideoEmpty,
      clickFileEmpty,
      cancel,
      prevStep,
      confirm,
      confirmBtn,
      validateFiles,
      t,
    };
  },
});
</script>
<style lang="scss">
.upload-wrap.is-dragover {
  .upload-main {
    border-color: $color-primary;
    .upload-main-content {
      color: $color-primary;
    }
  }
}
.upload-main {
  // 跟color-card共用样式
  display: flex;
  justify-content: center;
  align-items: center;
  height: 292px;
  color: #7f7f7f;
  border: 1px solid #dddddd;
  border-radius: 4px;
  background: #fcfcfc;
  margin-bottom: 12px;

  .upload-main-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: color 0.2s;
    // cursor: pointer;

    &:hover {
      // color: $color-primary;
      // border-color: $color-primary;
    }

    .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background-color: #eeeeef;
      border-radius: 50%;
      i {
        font-size: 34px;
      }
    }
    .img {
      width: 80px;
      height: 80px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .upload-title {
      margin-top: 12px;
      font-size: 12px;
      &.bold {
        font-size: 14px;
        font-weight: 500;
        color: #222222;
      }
    }

    .upload-des {
      font-size: 12px;
      color: #999999;
      margin-top: 8px;
    }
    .upload-btn {
      margin-top: 20px;
    }
    .close-icon {
      font-size: 20px;
      position: absolute;
      right: -20px;
      top: -20px;
      cursor: pointer;
    }
  }
}
</style>
<style lang="scss" scoped>
// @import 'url'
.material-upload {
  // width: 1200px;
  margin: 0 auto;
  position: relative;

  .img-list-card {
    .img-item {
      &:hover {
        .is-real-icon-wrap {
          opacity: 1;
        }
      }
      .is-real-icon-wrap {
        width: 17px;
        height: 17px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 30px;
        top: 5px;
        cursor: pointer;
        opacity: 0;
        &.is-real {
          opacity: 1;
        }
        > i {
          color: white;
          font-size: 12px;
        }
      }
    }
  }
  .material-steps {
    margin: 20px 0 60px 0;
  }
  /deep/ .upload-wrap {
    height: 100%;
  }
  .card-container {
    display: flex;
    /deep/.upload-title {
      margin-top: 6px;
      font-size: 12px;
    }

    li {
      flex: 1;
      + li {
        margin-left: 12px;
      }
    }
  }
  .footer {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
