<template>
  <div class="mobile-model-viewer" v-loading="loading" element-loading-background="rgba(255, 255, 255, 0.6)">
    <div class="viewer-area">
      <ModelViewer ref="viewer" :isMobile="true" />
      <div class="setting-btn-area">
        <div class="btn-wrapper" @click="resetControls">
          <i class="i-r-fuwei-12"></i>
          <div class="text">复位</div>
        </div>
        <div class="btn-wrapper" @click="restore">
          <i class="i-r-zhongzhi-12"></i>
          <div class="text">重置</div>
        </div>
      </div>
    </div>
    <div class="viewer-panel">
      <div class="bottom-tab flex-center">
        <!-- <i class="i-r-zuo-12" @click="backModel"></i> -->
        <el-tabs v-model="curPanelStatus" class="flex-1 flex-center">
          <el-tab-pane label="模型" name="model"> </el-tab-pane>

          <el-tab-pane label="部位" name="parts"> </el-tab-pane>
          <el-tab-pane label="色卡" name="color"> </el-tab-pane>
        </el-tabs>
      </div>
      <ul v-if="curPanelStatus === 'model'" class="model-list scroll-x">
        <li
          class="model-item"
          v-for="(item, index) in modelList"
          :key="item.name"
          :style="itemStyle"
          :class="{ 'is-active': curModelIndex === index }"
          @click="handleClickModel(item.id, index)"
        >
          <base-image class="model-preview" :src="item.img"></base-image>
        </li>
      </ul>
      <!-- <div v-else> -->
      <ul v-if="curPanelStatus === 'parts'" class="parts-list scroll-x">
        <li
          v-for="(item, index) in componentsList"
          :key="index"
          class="parts-item"
          :style="itemStyle"
          :class="{ 'is-active': curComponentIndex === index }"
          @click="handleClickParts(index, item)"
        >
          <div class="part-btn">{{ item.name }}</div>
        </li>
      </ul>
      <ul v-else-if="curPanelStatus === 'color'" class="color-list scroll-x">
        <template v-for="(item, index) in colorCardList" :key="index">
          <li
            v-if="!(item.isBan === 1 && !item.colorInfo)"
            class="color-item"
            :style="itemStyle"
            :class="{ 'is-active': curColorCardIndex === index }"
            @click="handleClickColor(index, item)"
          >
            <div
              class="color-btn"
              :style="{
                'background-color': item.colorInfo,
              }"
            ></div>
            <div class="text over-text">
              {{ item.name }}
            </div>
          </li>
        </template>
      </ul>

      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, nextTick, watch,
} from 'vue';
import ModelViewer from '@/components/model-viewer/ModelViewer.vue';
import { MaterialDetail } from '@/models/Material';
import * as materialApi from '@/api/material';
import { getCatalogIdFromURL } from '@/mobile/utils/util';
import { updateContextUser } from '@/loaders/context';

// import VConsole from 'vconsole';
// const vConsole = new VConsole();

const catalogId = getCatalogIdFromURL();
console.log('catalogId', catalogId);
type PanelStatus = 'model' | 'parts' | 'color';

export default defineComponent({
  name: 'mobile-model-viewer',
  components: { ModelViewer },
  setup(props, { emit }) {
    const viewer = ref<InstanceType<typeof ModelViewer>>();
    const state = reactive({
      material: {} as MaterialDetail,
      modelList: [] as any,
      componentsList: [] as any,
      colorCardList: [] as any,
      loading: true,
      curModelIndex: 0,
      curColorCardIndex: 0,
      curComponentIndex: -1,
      curPanelStatus: 'model' as PanelStatus,
      startLength: 0,
      endLength: 0,
    });
    watch(() => state.curPanelStatus, async () => {
      await nextTick();
      viewer.value?.resizeRenderer();
    });

    const prefilterModelPartInfos = async (material: any) => {
      const modelPreviewData = material?.attributeInfo?.applicableParts;
      if (!modelPreviewData?.length) throw new Error('缺少必须的适用模型数据！');
      // Tips: 详情返回的适用部位数据并非一定是最新的，需要调用接口校验
      const lastedInfo = (await materialApi.fetchPublicModelList()).data;

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
    const prefilterMaterialInfos = async (material: any) => {
      let materialInfo = null;
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
      if (!materialInfo) throw new Error('缺少材质的解析数据');
      await viewer.value?.initMaterialInfo(materialInfo);
    };
    const resetPanelStatus = () => {
      state.curColorCardIndex = 0;
      state.curComponentIndex = -1;
    };
    const switchPanelStatus = (status: PanelStatus) => {
      state.curPanelStatus = status;
      // if (status === 'model') return;
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
    const getCurColorCardInfo = () => {
      const curColor = state.colorCardList[state.curColorCardIndex];
      return curColor.colorInfo;
    };
    const handleClickModel = async (modelId: string, index: number) => {
      if (state.loading) return;
      if (state.curModelIndex === index) {
        switchPanelStatus('model');
        return;
      }
      state.loading = true;
      state.curModelIndex = index;
      try {
        resetPanelStatus();
        switchPanelStatus('model');
        await viewer.value?.reloadModel(modelId);
      } finally {
        state.loading = false;
      }
    };
    const handleClickParts = async (index: number, item: any) => {
      if (state.loading) return;
      state.loading = true;
      state.curComponentIndex = index;
      await viewer.value?.restoreDefaultMaterial();
      if (item.itemCode.length) {
        const targetList = [] as any;
        item.itemCode.forEach((info: any) => {
          targetList.push(info.code);
        });
        const colorInfo = getCurColorCardInfo();
        await viewer.value?.applyMaterialToComponents(targetList, colorInfo);
        state.loading = false;
      }
    };
    const handleClickColor = (index: number, color: any) => {
      if (state.loading) return;
      state.curColorCardIndex = index;
      viewer.value?.setMaterialColor(color.colorInfo);
    };
    const backModel = async () => {
      switchPanelStatus('model');
      console.log(1, viewer.value);
    };
    const resetControls = () => {
      if (state.loading) return;
      viewer.value?.resetControls();
    };
    const restore = () => {
      if (state.loading) return;
      resetPanelStatus();
      viewer.value?.restoreDefaultMaterial();
      backModel();
    };
    const fetchMaterial = async () => {
      state.material = (await materialApi.fetchMaterialForRender(catalogId)).data || { attributeInfo: {} };
      state.colorCardList = state.material?.renderingInfo as any;
    };
    const fetchData = async () => {
      // 更新用户信息
      // await updateContextUser();
      await fetchMaterial();
      await prefilterModelPartInfos(state.material);
      await prefilterMaterialInfos(state.material);
    };
    const init = async () => {
      try {
        state.loading = true;
        await fetchData();
        const initModelId = state.modelList[0].id;
        await viewer.value?.initModel(initModelId);
      } finally {
        state.loading = false;
      }
    };


    const itemStyle = computed(() => {
      const val = window.screen.width;
      console.log('computed', window.screen.width);
      return {
        width: `${(val - 72) / 5}px`,
        height: `${(val - 72) / 5}px`,
        lineHight: `${(val - 72) / 5}px`,
      };
    });
    onMounted(async () => {
      console.log(window.screen.width, 'window.screen.width');
      console.log(document.body.clientWidth, 'window.screen.width');
      console.log(document.body.offsetWidth, 'window.screen.width');

      console.log('viewer', viewer.value);
      await init();
      await switchPanelStatus('model');
    });
    return {
      ...toRefs(state),
      viewer,
      resetControls,
      restore,
      handleClickModel,
      handleClickParts,
      handleClickColor,
      switchPanelStatus,
      backModel,

      itemStyle,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.mobile-model-viewer {
  display: flex;
  flex-direction: column;
  flex: 1;
  .viewer-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    .setting-btn-area {
      position: absolute;
      right: 10px;
      bottom: 20px;
      color: #222222;
      font-size: 12px;

      i {
        font-size: 20px;
      }

      .btn-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        background: #ffffff;
        border-radius: 12px;
        .text {
          padding-top: 4px;
          transform: scale(0.9);
        }
        + .btn-wrapper {
          margin-top: 12px;
        }
      }
    }
  }

  .viewer-panel {
    flex-shrink: 0;
    background: white;
    // padding: 12px;
    overflow: auto;
    .scroll-x {
      overflow-x: auto;
      white-space: nowrap;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    ul {
      padding: 12px 0;
      height: 189px;
      overflow-y: scroll;
    }
    .model-list,
    .parts-list,
    .color-list {
      margin: 0 6px;
      display: flex;
      flex-wrap: wrap;
    }
    .model-list {
      .model-item {
        display: inline-block;
        // width: 61px;
        // height: 61px;
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin: {
          left: 6px;
          right: 6px;
        }
        margin-bottom: 12px;
        &.is-active {
          border-color: $color-primary;
        }
        + .model-item {
          // margin-left: 12px;
        }
      }
    }
    .parts-list {
      color: #333333;

      .parts-item {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        border-radius: 4px;
        background: #f5f5f5;
        text-align: center;
        margin-bottom: 12px;
        // margin-right: 12px;
        margin: {
          left: 6px;
          right: 6px;
        }
        // padding: 8px 13px;
        // min-width: 77px;
        &.is-active {
          background: rgba(20, 204, 176, 0.1);
          border: 1px solid $color-primary;
          color: $color-primary;
        }
      }
    }
    .color-list {
      .color-item {
        display: inline-block;
        // width: 86px;
        margin: {
          left: 6px;
          right: 6px;
        }
        margin-bottom: 20px;
        .color-btn {
          background-clip: content-box;
          padding: 1px;
          border: 1px solid transparent;
          border-radius: 4px;
          height: 100%;
        }
        &.is-active {
          .color-btn {
            border-color: $color-primary;
          }
        }
        + .color-item {
          // margin-left: 10px;
        }
      }
    }
    .bottom-tab {
      border-bottom: 1px solid #eeeeee;
      height: 43px;
      > i {
        padding: 10px;
      }
      /deep/.el-tabs__nav-wrap {
        &::after {
          display: none;
        }
      }
      /deep/ .el-tabs__active-bar {
        height: 3px;
      }
      /deep/.el-tabs__item {
        font-weight: 400;
        color: #999999;
      }
      /deep/.el-tabs__item.is-active {
        color: #10b0a9;
        font-weight: 500;
      }
    }
  }
}
</style>
