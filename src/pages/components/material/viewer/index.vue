<template>
  <div v-loading="loading" element-loading-background="rgba(255, 255, 255, 0.6)" class="material-detail">
    <div class="ctrl-bar">
      <el-tooltip :content="$t('close')" effect="light">
        <i class="el-icon-close" @click="$emit('confirm')"></i>
      </el-tooltip>
    </div>
    <div class="viewr-area-wrap" :class="{ 'full-screen': isFullScreen }" ref="fullScreenArea">
      <div class="viewer-area" v-loading="fullScreenLoading">
        <ModelViewer ref="viewer" />
        <div class="setting-btn-area">
          <el-tooltip
            :content="$t('material-manage.resetting')"
            effect="light"
            placement="left"
            popper-class="viewer-btn-tooltip"
          >
            <div class="btn-wrapper" @click="resetControls"><i class="i-r-fuwei-12"></i></div>
          </el-tooltip>
          <el-tooltip
            :content="$t('material-manage.reset')"
            effect="light"
            placement="left"
            popper-class="viewer-btn-tooltip"
          >
            <div class="btn-wrapper" @click="restore"><i class="i-r-zhongzhi-12"></i></div>
          </el-tooltip>
          <el-tooltip
            :content="$t('material-manage.fullscree')"
            effect="light"
            placement="left"
            popper-class="viewer-btn-tooltip"
          >
            <div class="btn-wrapper" @click="fullscreen">
              <i :class="{ 'i-r-fangda-12': !isFullScreen, 'i-r-huanyuan-12': isFullScreen }"></i>
            </div>
          </el-tooltip>
        </div>
      </div>
      <div class="panel-area" :class="{ isLoading: isLoadingModel === true }">
        <div class="model-panel">
          <div class="title">{{ $t("material-manage.preview_mode") }}</div>
          <div class="model-list">
            <div
              class="model-item"
              v-for="(item, index) in modelList"
              :key="item.name"
              :class="{ current: index === curModelIndex }"
            >
              <div class="model-preview" @click="reloadModel(item.id, index)">
                <base-image :src="item.img"></base-image>
              </div>
            </div>
          </div>
        </div>
        <div class="setting-panel">
          <!-- <div class="title-wrapper"> -->
          <!-- <i class="i-r-zuo-12" @click="switchPanelStatus('Model')"></i> -->
          <!-- <span>模型</span> -->
          <!-- </div> -->
          <div class="scroll-area">
            <div class="component-list-area">
              <div class="title">{{ $t("material-manage.use_part") }}</div>
              <div class="component-list">
                <div
                  round
                  size="small"
                  :class="{ current: index === curComponentIndex }"
                  class="component-item"
                  v-for="(item, index) in componentsList"
                  :key="item.name"
                  @click="chooseComponents(item, index)"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
            <div class="color-list-area">
              <div class="title">{{ $t("material-manage.color_card") }}</div>
              <div class="color-list">
                <div
                  @click="chooseColor(item, index)"
                  class="color-list-item"
                  v-for="(item, index) in colorCardList"
                  :key="index"
                  :class="{ current: index === curColorCardIndex }"
                >
                  <template v-if="item?.imgInfo?.imgUrl_crease">
                    <BaseImage class="color-card-display" fit="cover" :src="item.imgInfo?.imgUrl_crease"> </BaseImage>
                  </template>
                  <template v-else>
                    <div
                      v-if="item.colorInfo"
                      class="color-card-display"
                      :style="{ 'background-color': item.colorInfo || 'none' }"
                    ></div>
                    <div v-else class="color-card-display is-origin">
                      <i class="i-r-sanyuanse-42"></i>
                    </div>
                  </template>
                  <div class="color-name text-one-line">{{ item.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable*/
import { MaterialDetail } from '@/models/Material';
import { fetchMaterialForRender, fetchPublicModelList } from '@/api/material';
import {
  defineComponent, reactive, ref, toRefs, onMounted, onBeforeUnmount, nextTick, watch,
} from 'vue';
import ModelViewer from '@/components/model-viewer/ModelViewer.vue';
import BaseImage from '@/components/base/Image.vue';
import { testMaterialRenderingInfo } from './mockData';
import useFullScreen from '@/utils/uses/use-fullscreen'
import delay from '@4dst-saas/public-utils/dist/delay';
import usePermisson from '@/utils/uses/use-permisson';
export default defineComponent({
  name: 'MaterialViewer',
  dialogify: {
    noTitle: true,
    props: {
      title: '3D预览',
      width: '1100px',
      showClose: false,
      closeOnClickModal: false,
      customClass: 'no-padding with-common-border-radius',
    },
  },
  components: {
    ModelViewer,
    BaseImage,
  },
  props: {
    catalogId: {
      type: String,
      required: true,
    },
  },
  emits: ['confirm'],
  setup(props, { emit }) {
    const fullScreenArea = ref<HTMLDivElement>()
    const { fullScreenToggle, isFullScreen } = useFullScreen()
    const { company } = usePermisson()
    const viewer = ref();
    const state = reactive({
      loading: false,
      fullScreenLoading: false,
      material: {} as MaterialDetail,
      curPanelStatus: 'Model' as 'Model' | 'Setting',
      modelList: [] as any,
      componentsList: [] as any,
      colorCardList: [] as any,
      curModelIndex: 0,
      curColorCardIndex: 0,
      curComponentIndex: -1,
      isLoadingModel: false,
    });

    async function getMaterialInfoById(catalogId: string) {
      state.material = (await fetchMaterialForRender(catalogId)).data;
      state.colorCardList = state.material?.renderingInfo as any;
    }

    const prefilterModelPartInfos = async (material: any) => {
      let modelPreviewData = material?.attributeInfo?.applicableParts;
      if (!modelPreviewData?.length) throw new Error('缺少必须的适用模型数据！');
      // Tips: 详情返回的适用部位数据并非一定是最新的，需要调用接口校验
      const lastedInfo = (await fetchPublicModelList()).data;
      // Test
      // material.attributeInfo.applicableParts = lastedInfo;
      // let modelPreviewData = lastedInfo;

      modelPreviewData.forEach((typeInfo: any) => {
        typeInfo.modelProp.forEach((modelPartInfo: any, oldDataIndex: any) => {
          let curModelInfo = modelPartInfo;
          lastedInfo.forEach(lastedTypeInfo => {
            if (lastedTypeInfo.name !== typeInfo.name) return;
            lastedTypeInfo.modelProp.forEach((lastedModelPartInfo, newDataindex) => {
              if (lastedModelPartInfo.name !== modelPartInfo.name) return;
              // 替换新信息
              const partPropInfo = typeInfo.modelProp[oldDataIndex].partProp;
              typeInfo.modelProp[oldDataIndex] = lastedTypeInfo.modelProp[newDataindex];
              // partProp里层的itemCode更新
              const lastedPartPropInfo = typeInfo.modelProp[oldDataIndex].partProp;
              partPropInfo.forEach((itemCodeInfo: any) => {
                lastedPartPropInfo.forEach((lastItemCodeInfo: any) => {
                  if (lastItemCodeInfo.name === itemCodeInfo.name && lastItemCodeInfo.code === itemCodeInfo.code) {
                    itemCodeInfo.itemCode = lastItemCodeInfo.itemCode;
                  }
                });
              });
              // 还原partProp
              typeInfo.modelProp[oldDataIndex].partProp = partPropInfo;
              curModelInfo = lastedModelPartInfo;
            });
          });
          const modelInfo = {
            id: curModelInfo.id,
            name: curModelInfo.name,
            img: curModelInfo.img,
          };
          const modelListPushed = state.modelList.some((item: any) => item.id === modelInfo.id);
          if (!modelListPushed) {
            state.modelList.push(modelInfo);
          }
        });
      });
    };

    const getCurColorCardInfo = () => {
      const curColor = state.colorCardList[state.curColorCardIndex];
      return curColor.colorInfo;
    };

    const prefilterMaterialInfos = async (material: any) => {
      let materialInfo = null as any;
      let loadedInfo = false;
      material.renderingInfo.forEach((info: any) => {
        if (info.renderingInfo && !loadedInfo) {
          materialInfo = {
            imgInfo: info.imgInfo,
            renderingInfo: info.renderingInfo,
            id: material.originalCId,
            name: material.attributeInfo?.name,
            changeColorInfo: info.changeColor,
          };
          loadedInfo = true;
        }
      });
      // 容错imgInfo
      let loadedImgInfo = false;
      if (materialInfo && Object.keys(materialInfo.imgInfo).length === 0) {
        // 寻找其他色卡里是否有imgInfo
        material.renderingInfo.forEach((info: any) => {
          if (Object.keys(info.imgInfo).length > 0 && !loadedImgInfo) {
            materialInfo.imgInfo = info.imgInfo;
            loadedImgInfo = true;
          }
        });
      }
      if (!materialInfo) throw new Error('缺少材质的解析数据');
      await viewer.value?.initMaterialInfo(materialInfo);
    };

    const switchPanelStatus = (status: 'Model' | 'Setting') => {
      state.curPanelStatus = status;
      if (status === 'Model') return;
      // 根据所选Model同步Setting显示
      state.componentsList = [];
      const curModelId = state.modelList[state.curModelIndex].id;
      const modelPreviewData = state.material?.attributeInfo?.applicableParts;
      modelPreviewData.forEach((typeInfo: any) => {
        typeInfo.modelProp.forEach((modelPartInfo: any) => {
          if (modelPartInfo.id !== curModelId) return;
          const partInfo = modelPartInfo.partProp;
          if (partInfo?.length) state.componentsList = partInfo;
        });
      });
    };

    const resetPanelStatus = () => {
      state.curColorCardIndex = 0;
      state.curComponentIndex = -1;
    };

    const chooseColor = (item: any, index: any) => {
      if (state.loading) return;
      state.curColorCardIndex = index;
      viewer.value.setMaterialColor(item.colorInfo);
    };

    const resetControls = () => {
      if (state.loading) return;
      viewer.value.resetControls();
    };

    const restore = () => {
      if (state.loading) return;
      resetPanelStatus();
      viewer.value.restoreDefaultMaterial();
    };

    const fullscreen = async () => {
      await fullScreenToggle(fullScreenArea.value);
    }

    watch(isFullScreen, async () => {
      // 兼容ESC退出的情况
      // delay是为了在isFullScreen的样式改变后才执行,nextTick偶尔不生效
      state.fullScreenLoading = true;
      await delay(200);
      viewer.value?.resizeRenderer();
      state.fullScreenLoading = false;
    })

    const chooseComponents = async (item: any, index: any) => {
      if (state.loading) return;
      state.loading = true;
      state.curComponentIndex = index;
      await viewer.value.restoreDefaultMaterial();
      if (item.itemCode.length) {
        const targetList = [] as any;
        item.itemCode.forEach((info: any) => {
          targetList.push(info.code);
        });
        const colorInfo = getCurColorCardInfo();
        console.log('colorInfo', colorInfo);
        await viewer.value.applyMaterialToComponents(targetList, colorInfo);
        state.loading = false;
      }
    };

    const reloadModel = async (modelId: string, index: number) => {
      if (state.loading) return;
      if (state.curModelIndex === index) {
        switchPanelStatus('Setting');
        return;
      }
      state.curModelIndex = index;
      state.loading = true;
      try {
        resetPanelStatus();
        switchPanelStatus('Setting');
        await viewer.value.reloadModel(modelId);
      } finally {
        state.loading = false;
      }
    };

    const fetchData = async () => {
      await getMaterialInfoById(props.catalogId);
      await prefilterModelPartInfos(state.material);
      await prefilterMaterialInfos(state.material);
    };

    onMounted(async () => {
      try {
        state.loading = true;
        await fetchData();
        const initModelId = state.modelList?.[0]?.id;
        if (initModelId) {
          await viewer.value.initModel(initModelId);
          await switchPanelStatus('Setting');
        }
      } finally {
        state.loading = false;
      }
    });
    onBeforeUnmount(() => {
      viewer.value.dispose();
    });
    return {
      ...toRefs(state),
      isFullScreen,
      fullScreenArea,
      viewer,
      resetControls,
      restore,
      fullscreen,
      reloadModel,
      switchPanelStatus,
      chooseColor,
      chooseComponents,
    };
  },
});
</script>
<style lang="scss" scoped>
.ctrl-bar {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .el-divider {
    margin: 0 8px;
    background: #dddddd;
  }
  .el-icon-close {
    font-size: 16px;
    cursor: pointer;
    color: #999999;
    outline: none;
  }
  .i-r-bianji {
    cursor: pointer;
    color: #9ca0a4;
    outline: none;
  }
}
.material-detail {
  position: relative;
  background: #ffffff;
  height: 700px;
  display: flex;
}
.viewr-area-wrap {
  display: flex;
  &.full-screen {
    background-color: white;
    .viewer-area {
      width: 100%;
      height: 100%;
    }
  }
  .viewer-area {
    flex: 1;

    width: 800px;
    height: 700px;
    position: relative;
    .setting-btn-area {
      position: absolute;
      right: 12px;
      top: 12px;
      .btn-wrapper {
        cursor: pointer;
        width: 32px;
        height: 32px;
        background: rgba(30, 30, 30, 0.3);
        border-radius: 50%;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
      }
    }
  }
  .panel-area {
    flex-shrink: 0;
    width: 300px;
    .model-panel {
      margin-top: 36px;
      margin-left: 30px;
      // margin-bottom: 60%;
      height: 60%;
      .title {
        color: #222222;
        font-size: 14px;
        margin-bottom: 12px;
      }
      .model-list {
        max-height: calc(100% - 28px);
        overflow-y: scroll;
        .model-item {
          cursor: pointer;
          width: 114px;
          height: 114px;
          border: 1px solid #dddddd;
          border-radius: 5px;
          margin-right: 12px;
          margin-bottom: 12px;
          display: inline-block;
          &.current {
            border: 2px solid #00b8b1;
          }
          .model-preview {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .setting-panel {
      height: calc(40% - 36px);
      border-top: 1px solid #ddd;
      // box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
      .title-wrapper {
        height: 37px;
        width: 100%;
        line-height: 35px;
        color: #222222;
        padding-left: 30px;
        border-bottom: 1px solid #eeeeee;
        i {
          font-size: 10px;
          vertical-align: middle;
          cursor: pointer;
        }
        span {
          margin-left: 4px;
          font-size: 14px;
          vertical-align: middle;
        }
      }
      .scroll-area {
        height: 100%;
        // max-height: 40%;
        overflow-y: scroll;
      }
      .component-list-area,
      .color-list-area {
        padding-left: 30px;
        .title {
          font-size: 14px;
          color: #222222;
          margin-top: 14px;
          margin-bottom: 12px;
        }
      }
      .component-list-area {
        margin-bottom: 20px;
        .component-list {
          .component-item {
            display: inline-block;
            text-align: center;
            margin-bottom: 8px;
            margin-right: 8px;
            padding: 8px 13px;
            min-width: 77px;
            background: #f5f5f5;
            border: 1px solid transparent;
            border-radius: 4px;
            cursor: pointer;
            &.current {
              color: $color-primary;
              border: 1px solid #14ccb0;
              background: rgba(20, 204, 176, 0.1);
              border-radius: 4px;
            }
          }
        }
      }
      .color-list-area {
        .title {
          margin-bottom: 10px;
        }
        .color-list {
          .color-list-item {
            display: inline-block;
            width: 58px;
            height: 58px;
            margin-right: 6px;
            padding: 1px;
            cursor: pointer;
            border: 1px solid transparent;
            &.current {
              border: 1px solid #14ccb0;
              border-radius: 6px;
            }
            .color-card-display {
              width: 54px;
              height: 54px;
              border-radius: 5px;
              &.is-origin {
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(180deg, #f7f8fa, #d9dadb);
                > i {
                  font-size: 20px;
                }
              }
            }
            .color-name {
              margin-top: 4px;
              font-size: 12px;
              text-align: center;
              color: #222222;
              line-height: 17px;
              margin-bottom: 8px;
            }
            .el-image {
              vertical-align: bottom;
            }
          }
        }
      }
    }
    &.loading {
      cursor: not-allowed;
      .panel-area .model-panel .model-list .model-item {
        cursor: not-allowed;
      }
      .setting-panel .title-wrapper i {
        cursor: not-allowed;
      }
      .component-list-area .component-list .component-item {
        cursor: not-allowed;
      }
      .color-list-area .color-list .color-list-item {
        cursor: not-allowed;
      }
    }
  }
}
</style>

<style lang="scss">
.viewer-btn-tooltip {
  padding: 3px 10px;
  color: #666666;
}
</style>
