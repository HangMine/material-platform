<template>
  <div class="merchant-home-edit" :class="{ 'is-draging': isDraging }" v-loading="loading">
    <SdDragList v-if="sections" v-model="sections" @dragstart="dragStart" @dragend="dragEnd">
      <template #categorySection>
        <!-- category-section -->
        <SwitchWrap v-model="editState.categorySection.active">
          <section class="category-section drag-area">
            <div class="title">{{ $t("merchant.populor_series") }}</div>
            <div class="content">
              <div class="left">
                <ImgEditor
                  v-for="(item, i) of editState.categorySection.dragList"
                  :key="i"
                  v-model:url="item.url"
                  v-model="item.file"
                  :scale="9 / 16"
                ></ImgEditor>
              </div>
              <div class="right">
                <ImgEditor
                  v-for="(item, i) of editState.categorySection.fixList"
                  :key="i"
                  v-model:url="item.url"
                  v-model="item.file"
                  :scale="112 / 100"
                ></ImgEditor>
              </div>
            </div>
          </section>
        </SwitchWrap>
      </template>
      <template #categoryBanner>
        <!-- category-banner -->
        <SwitchWrap v-model="editState.categoryBanner.active">
          <section class="category-banner is-banner drag-area">
            <ImgEditor
              v-for="(item, i) of editState.categoryBanner.imgList"
              :key="i"
              v-model:url="item.url"
              v-model="item.file"
              hasSwitch
              :height="350"
            ></ImgEditor>
          </section>
        </SwitchWrap>
      </template>
      <template #hotMaterial>
        <!-- 商家推荐 -->
        <SwitchWrap v-model="editState.hotMaterial.active">
          <section v-loading="materialLoading" class="drag-area">
            <h3 class="title flex-space-between">
              {{ $t("merchant.merchant_recommendation") }}
              <!-- <span class="more flex-center" @click="goMerchantMaterialList"
                >MORE <i class="more-icon i-s-bofanganniu-18"></i>
              </span> -->
            </h3>
            <MaterialTileList :data="hotMaterialList" showHeader showTitle showPrice useGridSlice></MaterialTileList>
          </section>
        </SwitchWrap>
      </template>

      <template #mainVideo>
        <SwitchWrap v-model="editState.mainVideo.active">
          <section v-loading="materialLoading" class="main-video drag-area">
            <div class="main-video-box" :style="videoBg"></div>
            <div class="main-video-content">
              <VideoEditor
                v-model="editState.mainVideo.video.file"
                v-model:url="editState.mainVideo.video.url"
                ref="mainVideoVm"
              ></VideoEditor>
            </div>
          </section>
        </SwitchWrap>
      </template>

      <template #mainMaterial>
        <!-- 主营产品 -->
        <SwitchWrap v-model="editState.mainMaterial.active">
          <section v-loading="materialLoading" class="main-material drag-area">
            <h3 class="title flex-space-between">
              {{ $t("merchant.main_product") }}
              <!-- <span class="more flex-center" @click="goMerchantMaterialList"
                >MORE <i class="more-icon i-s-bofanganniu-18"></i>
              </span> -->
            </h3>
            <div class="content flex">
              <div class="left">
                <ImgEditor
                  v-for="(item, i) of editState.mainMaterial.imgList"
                  :key="i"
                  v-model:url="item.url"
                  v-model="item.file"
                  :scale="560 / 440"
                ></ImgEditor>
              </div>
              <div class="right">
                <MaterialTileList
                  :data="newMaterialList"
                  showHeader
                  showTitle
                  showPrice
                  :style="{ 'grid-template-columns': undefined }"
                ></MaterialTileList>
              </div>
            </div>
          </section>
        </SwitchWrap>
      </template>
      <template #mainMaterialBanner>
        <!-- 主营产品-banner -->
        <SwitchWrap v-model="editState.mainMaterialBanner.active">
          <section class="main-material-banner is-banner drag-area">
            <ImgEditor
              v-for="(item, i) of editState.mainMaterialBanner.imgList"
              :key="i"
              v-model:url="item.url"
              v-model="item.file"
              hasSwitch
              :height="300"
            ></ImgEditor>
          </section>
        </SwitchWrap>
      </template>
      <template #aboutUs>
        <!-- 关于我们 -->
        <SwitchWrap v-model="editState.aboutUs.active">
          <section class="about-us drag-area">
            <div class="title">{{ $t("merchant.aboutUs") }}</div>
            <div class="content about-us-content">
              <div class="left">
                <ImgEditor
                  v-for="(item, i) of editState.aboutUs.imgList"
                  :key="i"
                  v-model:url="item.url"
                  v-model="item.file"
                  :scale="400 / 520"
                ></ImgEditor>
              </div>
              <div class="right">
                <TextEditor v-model="editState.aboutUs.text">
                  <div class="about-us-text scrollable-y">
                    {{ editState.aboutUs.text }}
                  </div>
                </TextEditor>
              </div>
            </div>
            <!-- <div class="top-bg"></div> -->
          </section>
        </SwitchWrap>
      </template>
      <template #cooperationBrands>
        <!-- 合作品牌 -->
        <SwitchWrap v-model="editState.cooperationBrands.active">
          <section class="cooperation-brands drag-area">
            <div class="title">{{ $t("merchant.cooperationBrands") }}</div>
            <div class="content">
              <UploadList
                :modelValue="editState.cooperationBrands.brandList"
                @update:modelValue="setImgList"
                :maxLength="6"
                :width="200"
                :height="110"
                fit="cover"
                ref="imgUploadListVm"
              >
                <template #append="{ item }">
                  <div class="brand-title over-text" @click="editBrandText(item)">{{ item.name }}</div>
                </template>
              </UploadList>

              <!-- <div class="brand">
            <ImgEditor
              v-for="(item, i) of editState.cooperationBrands.brandList"
              :key="i"
              v-model:url="item.url"
              v-model="item.file"
              :width="200"
              :height="110"
            ></ImgEditor>
          </div> -->
            </div>
          </section>
        </SwitchWrap>
      </template>
    </SdDragList>

    <!-- 底部按钮 -->
    <div class="footer-btn">
      <div class="sd-button foot-btn" @click="reset">{{ $t("public.dialog.cancel") }}</div>
      <div class="sd-button foot-btn" @click="resetDefault">{{ $t("public.dialog.restore_default") }}</div>
      <div class="sd-button primary foot-btn" @click="save">{{ $t("public.dialog.save") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted, watch,
} from 'vue';
import { MaterialList } from '@/models/Material';
import * as materialApi from '@/api/material';

import MaterialTileList from '@/pages/components/material/components/List/index.vue';
import UploadList from '@/components/form/upload/UploadList.vue';
import { UploadItems } from '@/components/form/upload/utils';
import DialogTextarea from '@/pages/components/dialog-template/Textarea.vue';
import { dialog } from '@/utils/vue/dialog';
import SdDragList from '@/components/drags/DragList.vue';
import SdDragContainer from '@/components/drags/DragContainer.vue';
import { getContextUser } from '@/loaders/context';
import { editMerchantHome, fetchMerchantHome } from '@/api/merchant';
import usePermisson from '@/utils/uses/use-permisson';
import { ElMessage } from 'element-plus';
import { t } from '@/i18n/index';
import ImgEditor from './components/ImgEditor.vue';
import VideoEditor from './components/VideoEditor.vue';
import TextEditor from './components/TextEditor.vue';
import SwitchWrap from './components/SwitchWrap.vue';
import {
  UploadItem, getDefaultEditState, getHandledSections, sections2editState, fetchSections, editState2Sections, getEditParams, useVideoBg,
} from './utils';

export default defineComponent({
  name: 'merchant-home-edit',
  components: {
    ImgEditor,
    TextEditor,
    VideoEditor,
    SwitchWrap,
    MaterialTileList,
    UploadList,
    SdDragList,
  },
  props: {
    orgId: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const mainVideoVm = ref<InstanceType<typeof VideoEditor>>();
    const { company } = usePermisson();
    const editState = ref();
    const sections = ref();
    const state = reactive({
      loading: false,
      materialLoading: false,
      hotMaterialList: [] as MaterialList,
      newMaterialList: [] as MaterialList,
      isDraging: false,
    });
    const { bgURL, videoBg, videoWatch } = useVideoBg(editState);


    const fetchMaterialList = async (params: Obj = {}) => {
      return (
        await materialApi.fetchMarketMaterialList({
          keywords: '',
          page: 1,
          size: 10,
          fields: {
            tag: '已上架',
            categoryId: [],
            orgId: company.value?.id,
          },
          ...params,
        })
      ).records;
    };
    const setMaterialList = async () => {
      try {
        state.materialLoading = true;
        [state.hotMaterialList, state.newMaterialList] = await Promise.all([
          fetchMaterialList({ sortType: 1, sort: 2, size: 12 }),
          fetchMaterialList({ size: 6 }),
        ]);
      } finally {
        state.materialLoading = false;
      }
    };
    const goMerchantMaterialList = () => {
      console.log(11);
    };
    const setSectionsAndEditState = async ({ isDefault }: { isDefault: boolean } = { isDefault: false }) => {
      try {
        state.loading = true;
        if (isDefault) {
          editState.value = getDefaultEditState();
          sections.value = editState2Sections(editState.value);
        } else {
          const apiSections = await fetchSections({ orgId: props.orgId || company.value?.id || '' });
          sections.value = apiSections;
          editState.value = sections2editState(apiSections);
        }
      } catch (error) {
        editState.value = getDefaultEditState();
        sections.value = editState2Sections(editState.value);
      } finally {
        // 在有数据之后才监听
        watch(
          () => editState.value.mainVideo.active,
          value => {
            if (!value) {
              mainVideoVm.value?.videoVm?.toggle(false);
            }
          },
        );
        videoWatch();
        state.loading = false;
      }
    };
    const reset = async () => {
      await setSectionsAndEditState();
    };
    const resetDefault = async () => {
      await setSectionsAndEditState({ isDefault: true });
    };
    const save = async () => {
      try {
        state.loading = true;

        const params = await getEditParams(sections.value);

        await editMerchantHome(params);
        ElMessage.success(t('eleMessage.save_success'));
      } finally {
        state.loading = false;
      }
    };
    const setImgList = (imgList: UploadItems) => {
      editState.value.cooperationBrands.brandList = imgList.map(img => ({ ...img, file: img.item }));
    };

    const editBrandText = async (item: UploadItem) => {
      item.name = (await dialog(
        {
          is: DialogTextarea,
          props: {
            modelValue: item.name,
          },
        },
        {
          props: {
            title: t('public.dialog.edit_text'),
          },
        },
      )) as string;
    };

    const dragStart = () => {
      state.isDraging = true;
    };
    const dragEnd = () => {
      state.isDraging = false;
    };

    onMounted(async () => {
      await Promise.all([setMaterialList(), setSectionsAndEditState()]);
    });
    return {
      mainVideoVm,
      editState,
      sections,
      ...toRefs(state),
      bgURL,
      videoBg,
      goMerchantMaterialList,
      reset,
      resetDefault,
      save,
      setImgList,
      editBrandText,
      dragStart,
      dragEnd,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "common";
$footerHeight: 90px;
.merchant-home-edit {
  padding-bottom: $footerHeight;
  background-color: white;
  &.is-draging {
    .footer-btn {
      display: none;
    }
  }

  .drag-area {
    border: 1px dashed transparent;
    transition: border 0.2s;
    &:hover {
      border-color: $color-primary;
    }
  }
  @include sectionShare();
  .footer-btn {
    z-index: 2;
    @include minMaxWidth();
    margin: 0 auto;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: $footerHeight;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
    padding-right: 30px;
    .foot-btn {
      border-radius: 4px;
    }
  }
  .el-image {
    border-radius: 0;
  }

  section.main-material {
    padding-bottom: 70px;
  }
}
</style>
