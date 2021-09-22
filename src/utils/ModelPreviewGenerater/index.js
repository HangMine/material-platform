/* eslint-disable*/
import * as api from "@/api/material";
import { normalizeMaterial } from "@/utils/normalize-rendering-data";
import Viewer from "@4dst-render/viewer.js/dist/ViewerSrc";
import envSettingData from "./const/previewEnvSetting";
import uploadToOSS from "@/utils/oss/uploadToOSS";

export default class ModelPreviewGenerater {
  constructor(canvasDom) {
    this.viewer = null;
    this.canvasDom = canvasDom || document.createElement("canvas");
  }
  async initViewer() {
    // Offscreen
    if (!this.viewer) {
      const canvasDom = this.canvasDom;
      canvasDom.width = 800;
      canvasDom.height = 450;

      this.viewer = new Viewer({
        canvas: canvasDom,
        width: canvasDom.width,
        height: canvasDom.height,
        resolution: window.devicePixelRatio,
        envSetting: envSettingData,
        isMobile: false,
        options: {
          cameraDistanceFactor: 1.3
        }
      });
    }
    // Todo:
    // 1.Out model url
    // 2.Indexed db
    await this.viewer.loadPreviewModel().then(() => {
      console.log("loadPreviewModel finish");
    });
  }

  async prefilterMaterialInfos(material) {
    let materialInfo = null;
    let loadedInfo = false;
    material.renderingInfo.forEach(info => {
      if (info.renderingInfo && !loadedInfo) {
        materialInfo = {
          imgInfo: info.imgInfo,
          renderingInfo: info.renderingInfo,
          id: material.originalCId,
          name: material.attributeInfo?.name
        };
        loadedInfo = true;
      }
    });
    // 容错imgInfo
    let loadedImgInfo = false;
    if (materialInfo && Object.keys(materialInfo.imgInfo).length === 0) {
      // 寻找其他色卡里是否有imgInfo
      material.renderingInfo.forEach(info => {
        if (Object.keys(info.imgInfo).length > 0 && !loadedImgInfo) {
          materialInfo.imgInfo = info.imgInfo;
          loadedImgInfo = true;
        }
      });
    }
    if (!materialInfo) {
      console.warn('该材料没有渲染材质的解析数据');
      return false;
    }
    const renderingInfo = await normalizeMaterial(materialInfo);
    return renderingInfo;
  }

  getMaterialCurColorCard(material) {
    const renderingInfo = material.renderingInfo[0];
    return renderingInfo.colorInfo;
  }

  getMaterialChangeColorInfo(renderingInfo) {
    if (!renderingInfo.length) return null;
    return renderingInfo[0].changeColor;
  }

  async generatePreviewImg(materialInfo, sizeX = 1024, sizeY = 1024, format = 'jpeg') {
    // 初始化Viewer
    await this.initViewer();
    // 获取材质的渲染信息
    if (!materialInfo) {
      console.error('缺少材质的解析数据: ', materialInfo);
      return false;
    }
    const renderingInfo = await this.prefilterMaterialInfos(materialInfo);
    if (!renderingInfo) return false;
    // 逐色卡截图
    const colorCardInfo = materialInfo.renderingInfo;
    const changeColorInfo = this.getMaterialChangeColorInfo(colorCardInfo);
    const getOneShot = async info => {
      const colorInfo = info.colorInfo;
      // 原色色卡只传三个参数
      const originColorCardParams = {
        sizeX,
        sizeY,
        renderingInfo,
      };
      const colorCardParams = {
        ...originColorCardParams,
        colorInfo,
        changeColorInfo,
        format
      }
      const params = colorInfo ? colorCardParams : originColorCardParams;
      const args = Object.values(params);
      // 生成实时截图
      const base64Res = await this.viewer.getMaterialModelPreview(...args);
      // 上传OSS
      const fileKey = await uploadToOSS(base64Res, "BINARY_FILE");
      return {
        colorInfo,
        url: fileKey
      };
    }
    return (async () => {
      const res = [];
      for (let index = 0; index < colorCardInfo.length; index++) {
        const colorInfo = colorCardInfo[index];
        // 已有离线图或者已生成过的不再重复
        if (colorInfo?.imgInfo?.imgUrl_crease_v2 || colorInfo?.imgInfo?.realTimePreviewImg) continue;
        res.push(await getOneShot(colorInfo));
      }
      return res;
    })();
  }

  dispose() {
    if (this.viewer) this.viewer.dispose();
  }
}
