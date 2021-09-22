<template>
  <div class="share-content folder-share-content scrollable-y" :style="bgStyle">
    <div class="header">
      <img class="logo" :src="require('@/assets/img/share/logo.png')" alt="" />
      <h3 class="subtitle">{{ $t("material_library") }}</h3>
    </div>
    <div class="share-main">
      <div class="info-box">
        <img :src="folderImg" />
        <div class="folder-share-title-box flex-1">
          <p class="folder-name over-text">{{ folderInfo.name }}</p>
          <p class="supplier-name over-text">{{ $t("share.supplier") }}：{{ showMaterials[0]?.supplierName || "" }}</p>
        </div>
      </div>
      <ul class="folder-color-card-list">
        <li v-for="(material, i) of showMaterials" :key="i" class="color-card">
          <div class="color-card-item material-img">
            <img class="el-image" :src="material.__materialImg" @load="imgLoad(material)" />
          </div>
        </li>
      </ul>
    </div>
    <div class="footer flex-center">
      <div class="left">
        <h2>{{ $t("share.scan_qr_code") }}</h2>
        <p>{{ $t("share.check_more_info") }}</p>
      </div>
      <div class="right">
        <img class="qrcode" v-show="qrcodeDataUrl" :src="qrcodeDataUrl" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  MaterialDetail, MaterialList, MaterialListItem, RenderingInfoItem,
} from '@/models/Material';
import { url2ImageUrl } from '@/utils/qrcode';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch, onMounted,
} from 'vue';

import { getMaterialImg } from '../../material/utils';
import { isLoadedEnd, useMutiMaterialImgWithBase64 } from './utils';

export default defineComponent({
  name: 'muti-share-content',
  components: {},
  props: {
    materials: {
      type: Array as PropType<MaterialList>,
      required: true,
    },
    qrcodeDataUrl: {
      type: String,
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
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const folderImg = require('@/assets/img/public/folder.png');
    const state = reactive({
      materials: [] as MaterialList,
      imgLoadedEnd: {} as Obj,
      // qrcodeDataUrl: '',
    });
    console.log(props.materials, 'props.materials');

    const showMaterials = useMutiMaterialImgWithBase64(ref(props.materials.slice(0, 9)));
    const allImgLoaded = computed(() => {
      const allValue = Object.values(state.imgLoadedEnd);
      const allMaterialImgLoaded = allValue.length > 0 && allValue.every(item => item);
      // const qrcodeImgLoaded = !!state.qrcodeDataUrl;
      return allMaterialImgLoaded;
    });
    watch(allImgLoaded, (value) => {
      isLoadedEnd.value = value;
    });
    const getImgUrl = (material: MaterialListItem) => {
      return getMaterialImg(material);
    };
    const bgStyle = {
      backgroundImage: `url(${require('@/assets/img/share/bg-top.png')}),url(${require('@/assets/img/share/bg-bottom.png')})`,
    };
    const imgLoad = (material: MaterialListItem) => {
      state.imgLoadedEnd[material.id] = true;
    };

    onMounted(async () => {
      console.log(props.materials, 'props.materials');


      // TODO: 多材料分享的ID值需与产品确定后修改,比如是否定位到小程序的材料列表页面
      // state.qrcodeDataUrl = await url2ImageUrl('ideation://material_detail?id=MutiMaterialShare', {
      //   level: 'Q',
      //   padding: 0,
      // });
    });
    return {
      ...toRefs(state), showMaterials, bgStyle, getImgUrl, imgLoad, allImgLoaded, folderImg,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.folder-share-content {
  width: 375px;
  .header {
    padding-top: 13px;
  }
  .footer {
    padding-bottom: 7px;
  }
  .share-main {
    // height: 77%;
    min-height: 450px;
    margin: 0 15px;
    padding: 20px !important;

    .detail {
      position: relative;
      padding-top: 100%;
      border-radius: 5px;
      overflow: hidden;
    }
    .info-box {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding-bottom: 14px;
      // padding: 20px 0;
      img {
        width: 75px;
        margin-right: 10px;
      }
      .folder-share-title-box {
        overflow: hidden;
        .folder-name {
          font-size: 18px;
          font-weight: 600;
        }
        .supplier-name {
          margin-top: 10px;
          font-size: 12px;
          color: #999999;
        }
      }
    }
    .folder-color-card-list {
      // padding-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      margin-left: -5px;
      margin-right: -5px;
      padding-top: 15px;
      // padding-bottom: 15px;
      .color-card {
        // position: relative;
        // padding-top: 28.5%;
        width: 95px;
        height: 95px;
        margin: 5px;
        background-size: contain;
        border-radius: 5px;
        overflow: hidden;
        // margin: 8px;
        .color-card-item {
          // position: absolute;
          width: 100%;
          height: 100%;
          // left: 0;
          // top: 0;
        }
        .material-img {
          /deep/.el-image {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        .more-materials {
          color: white;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h3 {
            font-size: 25px;
          }
        }
      }
    }
  }
}
</style>
