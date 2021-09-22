<template>
  <div v-loading="loading" class="material-detail">
    <div class="ctrl-bar">
      <el-tooltip :content="$t('close')" effect="light">
        <i class="el-icon-close" @click="$emit('confirm')"></i>
      </el-tooltip>
    </div>
    <PickStateTag
      v-if="pickable"
      v-model:isPick="material.isChoose"
      :material="material"
      size="small"
      @change="handlePickStateChange"
    ></PickStateTag>
    <ComponentPreviewDetail
      v-if="!loading && Object.keys(material).length"
      :material="material"
      :catalogId="row?.catalogId"
      :materialTypeContent="materialTypeContent"
      :swiper-list="swipers"
      @click-item="onChangeColorCard"
      :fromShare="fromShare"
      @cancel="$emit('cancel')"
    />
  </div>
</template>

<script lang="ts">
import { dialog } from '@/utils/vue/dialog';
import MaterialEditComp from '@/pages/components/material/edit/index.vue';
import { MaterialDetail, MaterialListItem } from '@/models/Material';
import {
  fetchMaterial, fetchMaterialWithPass, fetchHistoryMaterial, fetchCategoryList, HistoryVersion,
} from '@/api/material';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import onCreated from '@/utils/vue/onCreated';
import usePermisson from '@/utils/uses/use-permisson';
import { t } from '@/i18n/index';
import PickStateTag from '@/pages/buyer/brand-recommendation/materials/components/PickStateTag.vue';
import ComponentPreviewDetail from '../components/ComponentPreviewDetail.vue';

export default defineComponent({
  name: 'MaterialInfo',
  dialogify: {
    noTitle: true,
    props: {
      title: t('material-manage.material_detail'),
      width: '1100px',
      showClose: false,
      closeOnClickModal: false,
      customClass: 'no-padding with-common-border-radius',
    },
  },
  components: {
    ComponentPreviewDetail,
    PickStateTag,
  },
  props: {
    row: {
      type: Object as PropType<MaterialListItem & { isChoose?: boolean }>,
      required: true,
    },
    historyVersion: {
      type: Object as PropType<HistoryVersion>,
    },
    // 是否来自分享页的材料
    fromShare: {
      type: Boolean,
      default: false,
    },
    // 是否可选用
    pickable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['confirm', 'cancel'],
  setup(props, { emit }) {
    const state = reactive({
      currentComponent: 'ComponentPreviewDetail' as 'ComponentPreviewDetail' | 'ComponentEditDetail',
      swipers: [],
      colorCardList: [],
      loading: false,
      material: {} as MaterialDetail,
      materialTypeContent: '',
    });

    const { isBuyer } = usePermisson();

    function getAttachmentSwiperObj(material) {
      const { enclosureInfo } = material;
      if (!enclosureInfo) return;
      // 附件图片
      if (enclosureInfo?.images?.length) {
        enclosureInfo.images.forEach(imageInfo => {
          state.swipers.push({ type: 'image', url: imageInfo.url });
        });
      }
      // 附件视频
      if (enclosureInfo?.videos?.length) {
        enclosureInfo.videos.forEach(videoInfo => {
          state.swipers.push({ type: 'video', url: videoInfo.url });
        });
      }
    }

    function getPreviewItem(imgInfo) {
      const imgKeys = Object.keys(imgInfo);
      const rayTracingImgPreFix = 'imgUrl_crease_v2';
      const realTimeImgPreFix = 'realTimePreviewImg';
      if (imgKeys.includes(rayTracingImgPreFix)) {
        return { type: 'image', url: imgInfo[rayTracingImgPreFix], isCloudImg: true };
      }
      if (imgKeys.includes(realTimeImgPreFix)) {
        return { type: 'image', url: imgInfo[realTimeImgPreFix], tipText: t('material-manage.offline_render_await') };
      }
      return false;
    }

    function getDefaultSwiperObj(material) {
      const { renderingInfo } = material;
      if (!renderingInfo?.length) return;
      state.swipers = [];
      const renderingItem = renderingInfo.sort((a, b) => a.sort - b.sort).find((item) => item.isDefault) || renderingInfo[0];
      const item = getPreviewItem(renderingItem?.imgInfo);
      if (item) state.swipers.push(item);
    }

    function changeColorCardSwiperObj(colorCardInfo) {
      state.swipers = [];
      if (colorCardInfo?.imgInfo) {
        const item = getPreviewItem(colorCardInfo?.imgInfo);
        if (item) state.swipers.push(item);
      }
      getAttachmentSwiperObj(state.material);
    }

    function onChangeColorCard(colorInfo) {
      console.log('onChangeColorCard!', colorInfo);
      changeColorCardSwiperObj(colorInfo);
    }

    function getMaterialTypeContent(materialTypeList) {
      let res = '';
      if (materialTypeList?.length) {
        materialTypeList.forEach((info, index) => {
          if (info.name) res += `${info.name}${index === materialTypeList.length - 1 ? '' : '/'}`;
        });
      }
      return res;
    }

    async function getMaterialInfoById(catalogId: string, categoryId: string) {
      state.loading = true;
      try {
        if (props.historyVersion) {
          state.material = (await fetchHistoryMaterial(props.historyVersion.relateId)).data;
        } else {
          state.material = (await fetchMaterial(catalogId)).data;
        }
        // state.material = props.historyVersion
        //   ? (await fetchHistoryMaterial(props.historyVersion.relateId)).data
        //   : props.fromShare
        //     ? (await fetchMaterial(catalogId)).data
        //     : (await fetchMaterial(catalogId)).data;
        state.materialTypeContent = getMaterialTypeContent(await fetchCategoryList(categoryId));
        getDefaultSwiperObj(state.material);
        getAttachmentSwiperObj(state.material);
        if (props.pickable) {
          state.material.catalogId = props.row.catalogId;
          state.material.isChoose = props.row.isChoose;
        }
      } finally {
        state.loading = false;
      }
    }

    async function openEditDialog() {
      await dialog({
        is: MaterialEditComp,
        props: {
          material: props.row,
        },
      });
      getMaterialInfoById(props?.row?.catalogId, props?.row?.categoryId);
    }

    // 选用后修改row, 使选用状态的变化反应到列表中. 直接修改props不太好,但属于简单次要数据,这样实时性好.目前无妨
    const handlePickStateChange = (val: boolean) => {
      props.row.isChoose = val;
    };

    onCreated(() => getMaterialInfoById(props?.row?.catalogId, props?.row?.categoryId));
    return {
      ...toRefs(state),
      isBuyer,
      openEditDialog,
      onChangeColorCard,
      handlePickStateChange,
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
  z-index: 1;
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
/deep/ .pick-state-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 99;
}
.material-detail {
  position: relative;
  background: #ffffff;
  height: 700px;
}
</style>
