<template>
  <div class="material-edit">
    <reactive-loading :visible="loading" :text="loadingText || uploadedPercentage"></reactive-loading>
    <div class="nav">
      <ul>
        <li
          v-for="(nav, i) of navs"
          :key="i"
          class="nav-item"
          :class="{ 'is-active': nav.isActive }"
          @click="handleClickNav(i, nav)"
        >
          <span>{{ nav.title }}</span>
        </li>
      </ul>
    </div>
    <div class="content" ref="contentVm">
      <HScroll height="65vh" :to="scrollTop" :el="scrollEl" @scroll="onScroll" @scroll-end="scrollEnd" ref="scrollVm">
        <MaterialForm
          v-if="showForm"
          :attributeInfo="materialDetail.attributeInfo"
          @categoryChange="categoryChange"
          ref="materialFormVm"
        ></MaterialForm>

        <h3 class="title flex-space-between" :h-scroll="$t('material-manage.form.public_model')">
          {{ $t("material-manage.form.public_model") }}
          <span class="text-link" @click="openModelSelect">
            <i class="i-r-bianji"></i>
            {{ $t("edit") }}
          </span>
        </h3>
        <ModelDisplayList :modelList="displayModelList"></ModelDisplayList>

        <h3 class="title" :h-scroll="$t('material-manage.form.material_file')">
          {{ $t("material-manage.form.material_file") }}
        </h3>
        <Upload
          v-model="fileForm.material"
          v-model:url="fileForm.materialEnclosureItem.url"
          :options="{ types: ['4ddat', 'admf'] }"
          :validOptions="['material']"
          :defaultImg="require('@/assets/img/file/4ddat.png')"
          :width="136"
        >
          <template #default="{ url, close, upload }">
            <template v-if="url">
              <div class="edit-material-file has-file">
                <div class="default-upload-file">
                  <img :src="require('@/assets/img/file/4ddat.png')" />
                </div>
                <i class="default-upload-close-icon el-icon-close" @click.stop="close"></i>
              </div>
            </template>
            <template v-else>
              <div class="edit-material-file">
                <div class="default-upload-list-add flex-center" @click="upload">
                  <i class="i-l-tianjia-34"></i>
                </div>
              </div>
            </template>
          </template>
          <template #append>
            <p v-if="fileForm.material || fileForm.materialEnclosureItem" class="upload-title">
              {{ fileForm.material?.name || fileForm.materialEnclosureItem.name }}
            </p>
          </template>
        </Upload>
        <h3 class="title" :h-scroll="$t('material-manage.form.picture')">{{ $t("material-manage.form.picture") }}</h3>
        <div class="img-list-card">
          <UploadList v-model="fileForm.imgList" :maxLength="6" :width="136" fit="cover" ref="imgUploadListVm">
            <template #append="{ item }">
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
                    @click="toggleIsReal(item)"
                  ></i>
                </span>
              </el-tooltip>
            </template>
          </UploadList>
        </div>

        <h3 class="title" :h-scroll="$t('material-manage.form.vedio')">{{ $t("material-manage.form.vedio") }}</h3>
        <VideoList v-model="fileForm.videoList" :maxLength="3" :width="136" ref="videoUploadListVm">
          <template #append="{ item }">
            <over-text class="upload-title">{{ item.name }}</over-text>
          </template>
        </VideoList>

        <h3 class="title" :h-scroll="$t('material-manage.form.file')">{{ $t("material-manage.form.file") }}</h3>
        <FileList v-model="fileForm.fileList" :validate="validateFiles" :width="136" ref="fileUploadListVm">
          <template #append="{ item }">
            <over-text class="upload-title">{{ item.name }}</over-text>
          </template>
        </FileList>

        <h3 class="title" :h-scroll="$t('material-manage.color_card')">
          {{ $t("material-manage.color_card") }}+{{ $t("material-manage.colors") }}
        </h3>
        <ColorCard v-model="colorInfos" :isEdit="true" ref="colorCardVm"></ColorCard>
        <time-info
          horizatal
          :creator="materialDetail.attributeInfo?.creator"
          :uploaded="materialDetail.attributeInfo?.gmtCreateTime"
          :updated="materialDetail?.attributeInfo?.gmtModifyTime || materialDetail?.attributeInfo?.gmtCreateTime || ''"
          style="margin-top: 20px"
        />
      </HScroll>
      <div class="footer">
        <el-button @click="cancel">{{ $t("public.dialog.cancel") }}</el-button>
        <el-button type="primary" :loading="loading" @click="confirm">{{ $t("public.dialog.save") }}</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, onMounted, nextTick, watch, toRef,
} from 'vue';
import HScroll from '@/components/scroll/index.vue';
import Upload from '@/components/form/upload/index.vue';
import UploadList from '@/components/form/upload/UploadList.vue';
import VideoList from '@/components/form/upload/VideoList.vue';
import FileList from '@/components/form/upload/FileList.vue';
import { UploadItems, UploadItem, apiEnclosureItems2UploadItems } from '@/components/form/upload/utils';
import ModelPreviewGenerater from '@/utils/ModelPreviewGenerater';
import uploadToOSS from '@/utils/oss/uploadToOSS';
import * as api from '@/api/material';
import Material, {
  MaterialDetail, MaterialListItem,
} from '@/models/Material';
import dayjs from 'dayjs';
import { dialog, confirm as dialogConfirm } from '@/utils/vue/dialog';
import { ElMessage } from 'element-plus';
import fieldMap from '@/utils/field-map';
import { materialBelongs, removeFromMaterial } from '@/api/materialMenu';
import { t } from '@/i18n/index';
import { Model } from '@/api/material';
import delay from '@4dst-saas/public-utils/dist/delay';
import MaterialForm from '../components/MaterialForm/index.vue';
import {
  Color, Colors, getDefaultColor, getColorSystem,
} from '../components/ColorCard/utils';
import ColorCard from '../components/ColorCard/index.vue';
import {
  getRenderingInfo, failList, getEnclosureInfo, validateFiles, getUploadSizeStat, uploadedPercentage, handle4ddatChage,
} from '../utils';
import TimeInfo from '../components/TimeInfo.vue';
import ReactiveLoading from '../upload/components/ReactiveLoading.vue';
import { UploadImgItem, UploadImgItems } from '../upload/index.vue';
import ModelDisplayList from '../model/DisplayList.vue';
import ModelEdit from '../model/Edit.vue';
import { DisplayModelTypeList, useModelUtils } from '../model/utils';

export default defineComponent({
  name: 'material-edit',
  dialogify: {
    noTitle: true,
    props: {
      title: t('material-manage.material_edit'),
      width: '1100px',
      customClass: 'material-edit-dialog',
      showClose: false,
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MaterialForm, HScroll, Upload, UploadList, VideoList, FileList, ColorCard, TimeInfo, ReactiveLoading, ModelDisplayList,
  },
  props: {
    material: {
      type: Object as PropType<MaterialListItem>,
      required: true,
    },
  },
  emits: ['confirm', 'cancel'],
  setup(props, { emit }) {
    const imgUploadListVm = ref<InstanceType<typeof UploadList>>();
    const videoUploadListVm = ref<InstanceType<typeof VideoList>>();
    const fileUploadListVm = ref<InstanceType<typeof FileList>>();
    const colorCardVm = ref<InstanceType<typeof ColorCard>>();
    const materialFormVm = ref<InstanceType<typeof MaterialForm>>();
    const contentVm = ref<HTMLDivElement>();
    const scrollVm = ref<InstanceType<typeof HScroll>>();
    const previewGenerater = new ModelPreviewGenerater();
    const { apiModelTypeList2DisplayModelTypeList, displayModelTypeList2ApiModelTypeList, apiModelTypeList2ModelList } = useModelUtils();
    const state = reactive({
      materialDetail: {} as unknown as MaterialDetail,
      navs: [{
        title: fieldMap.getWithKey('categoryId'),
        isActive: true,
      }],
      scrollTop: 0,
      scrollEl: null as HTMLElement | null,
      clickNavTitle: '', // 保存点击时的title,方便点击菜单栏的时候可以选择到未够距离的标签
      fileForm: {
        material: undefined as File | undefined,
        materialEnclosureItem: {
          url: '',
          admf: '',
          name: '',
          renderingInfo: {} as Obj, // 保存第一个色卡的renderingInfo
          imgInfo: {} as Obj, // 保存第一个色卡的imgInfo
          changeColor: {} as Obj, // 保存第一个色卡的改色信息
        },
        imgList: [] as UploadImgItems,
        videoList: [] as UploadItems,
        fileList: [] as UploadItems,
      },
      colorInfos: [] as Colors,
      loading: false,
      loadingText: '',
      isSync: false as Boolean | undefined, //  是否同步到外部市场
      displayModelList: [] as Model[],
      displayModelTypeList: [] as DisplayModelTypeList,
      showForm: false, // 延迟加载form
    });

    // eslint-disable-next-line max-len
    watch(() => ({ materialFile: state.fileForm.material, materialUrl: state.fileForm.materialEnclosureItem.url }), async ({ materialFile, materialUrl }) => {
      if (!!materialFile !== !!materialUrl) return; // materialFile和materialUrl都是同时修改的,避免多次触发
      try {
        state.loading = true;
        await handle4ddatChage(materialFile, toRef(state, 'colorInfos'));
      } finally {
        state.loading = false;
      }
    });

    const materialIsAgain = computed(() => state.materialDetail.attributeInfo?.isAgain);
    watch(() => materialFormVm.value, (newVal, oldVal) => { console.log(newVal, oldVal); });

    const setStatisAndColor = () => {
      const { materialDetail } = state;
      state.fileForm.imgList = (apiEnclosureItems2UploadItems(materialDetail.enclosureInfo.images || []) as UploadImgItems)
        .map(item => ({ ...item, isReal: item.isReal || false }));
      state.fileForm.videoList = apiEnclosureItems2UploadItems(materialDetail.enclosureInfo.videos || []);
      state.fileForm.fileList = apiEnclosureItems2UploadItems(materialDetail.enclosureInfo.docs || []);
      const _colorInfos = [] as Colors;
      materialDetail.renderingInfo.sort((a, b) => a.sort - b.sort).forEach((colorInfoItem, i) => {
        if (i === 0) { // 以第一个为准
          state.fileForm.materialEnclosureItem.url = colorInfoItem?.fileInfo?.['4ddat'] || '';
          state.fileForm.materialEnclosureItem.admf = colorInfoItem?.fileInfo?.admf || '';
          state.fileForm.materialEnclosureItem.renderingInfo = colorInfoItem?.renderingInfo || {};
          state.fileForm.materialEnclosureItem.imgInfo = colorInfoItem?.imgInfo || {};
          state.fileForm.materialEnclosureItem.changeColor = colorInfoItem?.changeColor || {};
        }
        const color = {
          ...getDefaultColor(),
          name: colorInfoItem.name,
          temName: colorInfoItem.name,
          value: colorInfoItem.colorInfo,
          isDefault: colorInfoItem.isDefault === 1,
          system: colorInfoItem.colorFamily,
          isBindMaterialFile: colorInfoItem.isBan === 1,
          fileInfo: colorInfoItem.fileInfo,
          imgInfo: colorInfoItem.imgInfo,
          renderingInfo: colorInfoItem.renderingInfo,
          isOrigin: colorInfoItem.isBan === 1 && colorInfoItem.colorInfo === '',
        };
        _colorInfos.push(color);
      });
      state.colorInfos = _colorInfos;
    };

    const setForm = async () => {
      try {
        state.loading = true;
        const categoryList = await api.fetchCategoryList(props.material.categoryId);

        const catergory = {
          big: categoryList[0],
          middle: categoryList[1],
          small: categoryList[2] || {},
        };
        await materialFormVm.value?.reset(catergory);
        state.materialDetail = (await api.fetchMaterial(props.material.catalogId)).data;
      } finally {
        state.loading = false;
      }
    };

    const setDisplayModelList = () => {
      const apiModelTypeList = displayModelTypeList2ApiModelTypeList(state.displayModelTypeList);
      state.displayModelList = apiModelTypeList2ModelList(apiModelTypeList);
    };

    const setDisplayModelTypeList = async () => {
      const { materialDetail } = state;
      state.displayModelTypeList = await apiModelTypeList2DisplayModelTypeList(materialDetail.attributeInfo.applicableParts);
    };

    const toggleIsReal = (imgItem: UploadImgItem) => {
      imgItem.isReal = !imgItem.isReal;
    };


    const handleClickNav = (i: number, nav: GetArrayItem<typeof state.navs>) => {
      state.navs.forEach((item, _i) => {
        item.isActive = i === _i;
      });
      const selector = `[h-scroll=${nav.title}]`;
      state.scrollEl = contentVm.value?.querySelector(selector) as HTMLElement;
      state.clickNavTitle = nav.title;
    };

    // 获取设置的标题DOM元素
    const getTitleEls = () => {
      return [...(contentVm.value?.querySelectorAll('[h-scroll]') || [])] as HTMLElement[];
    };

    // 获取当前内容是属于哪个catalog
    const getContentCatalog = (scrollTop: number) => {
      const titleEls = getTitleEls();
      if (!titleEls.length) return '';
      const currentTitleEl = titleEls.reverse().find(item => scrollTop >= item.offsetTop);
      if (!currentTitleEl) return '';
      const currentCatalog = currentTitleEl.getAttribute('h-scroll');
      return currentCatalog;
    };

    // 内容滚动同步右侧目录
    const onScroll = (scrollTop: number) => {
      const title = getContentCatalog(scrollTop);
      if (!title) return;
      state.navs.forEach((item, _i) => {
        item.isActive = item.title === title;
      });
    };

    // 滚动结束
    const scrollEnd = (scrollTop: number) => {
      // 使得可以再次触发滚动
      state.scrollEl = null;
      if (state.clickNavTitle) {
        state.navs.forEach((item, _i) => {
          item.isActive = item.title === state.clickNavTitle;
        });
        state.clickNavTitle = '';
      }
    };

    const categoryChange = async () => {
      await nextTick(); // 获取titleEls
      state.navs = getTitleEls().map((title, i) => ({
        title: title.getAttribute('h-scroll') || '', isActive: i === 0,
      }));
    };

    const submit = async () => {
      try {
        const { form2ApiParams } = materialFormVm.value;
        const attributeInfo = {
          ...await form2ApiParams(),
          applicableParts: displayModelTypeList2ApiModelTypeList(state.displayModelTypeList),
        };

        const belongsId = await materialBelongs([props.material.catalogId as string]);
        if (belongsId.length > 0 && attributeInfo.isAgain === 0 && attributeInfo.isAgain !== materialIsAgain.value) {
          try {
            await dialogConfirm({ title: t('material-manage.whether_modify') });
            await removeFromMaterial(
              { materialBookId: belongsId, originalCId: state.materialDetail.originalCId },
            );
          } catch (err) {
            console.log(props.material.catalogId, 'props.material.catalogId');
            return;
          }
        }
        // return;
        if (['已上架'].includes(props.material.tag)) {
          try {
            await dialogConfirm({ title: t('material-manage.sync_to_open_market') });
            state.isSync = true;
          } catch (err) {
            state.isSync = false;
          }
        }
        state.loading = true;
        const uploadSizeStat = getUploadSizeStat(state.fileForm);
        uploadSizeStat.getTotalSize();

        const uploadOssKeys = await getEnclosureInfo(state.fileForm, (...args) => {
          uploadSizeStat.addUploadedSize(args);
        });
        const renderingInfo = await getRenderingInfo({
          colorInfos: state.colorInfos,
          materialEnclosureItem: state.fileForm.materialEnclosureItem,
          onParseStart: () => {
            state.loadingText = t('material-manage.parsing');
          },
          onParseEnd: () => {
            state.loadingText = '';
          },
          onUpload: (...args) => {
            uploadSizeStat.addUploadedSize(args);
          },
        });
        const apiParams = {
          catalogId: props.material.catalogId,
          isSync: state.isSync,
          renderingInfo,
          enclosureInfo: uploadOssKeys,
          attributeInfo: {
            ...attributeInfo,
            hasFile: state.fileForm.materialEnclosureItem.url ? 1 : 0,
          },
        };
        await api.editMaterial(apiParams);
        // 获取材质的渲染信息
        const materialInfo = (await api.fetchMaterial(props.material.catalogId)).data;
        state.loadingText = t('material-manage.real_time_preview');
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
        await api.editMaterialNoHistory(apiParams);
        ElMessage.success(t('eleMessage.upload_success'));
        emit('confirm');
        // try {
        //   await dialog({
        //     is: UploadResult,
        //     props: {
        //       failList,
        //       // showButton: false,
        //       successText: '保存成功',
        //       successButtonText: '确定',
        //     },
        //   });
        //   // 成功:重新编辑
        //   emit('confirm');
        // } catch (err) {
        //   if (err instanceof AppError) {
        //     if (err?.isClose) {
        //       // 直接关闭
        //       emit('confirm');
        //     } else {
        //       // 失败:再试一次
        //       await submit();
        //     }
        //   } else {
        //     throw err;
        //   }
        // } finally {
        //   failList.splice(0, failList.length);
        // }
      } finally {
        state.loading = false;
      }
    };

    const setValue = async () => {
      await setForm();
      await setDisplayModelTypeList();
      setStatisAndColor();
      setDisplayModelList();
    };

    const openModelSelect = async () => {
      const displayModelTypeList = await dialog({
        is: ModelEdit,
        props: {
          initValue: state.displayModelTypeList,
        },
      }) as DisplayModelTypeList;

      state.displayModelTypeList = displayModelTypeList;
      setDisplayModelList();
    };

    const cancel = () => {
      emit('cancel');
    };

    const confirm = async () => {
      await submit();
    };

    onMounted(async () => {
      try {
        state.loading = true;
        await delay(0); // 为了让form延迟加载,提前出现loading
        state.showForm = true;
        await setValue();
      } finally {
        state.loading = false;
      }
    });


    return {
      ...toRefs(state),
      toggleIsReal,
      imgUploadListVm,
      videoUploadListVm,
      fileUploadListVm,
      colorCardVm,
      materialFormVm,
      contentVm,
      scrollVm,
      handleClickNav,
      openModelSelect,
      onScroll,
      scrollEnd,
      categoryChange,
      cancel,
      confirm,
      dayjs,
      validateFiles,
      uploadedPercentage,
    };
  },
});
</script>

<style lang="scss">
.material-edit-dialog {
  .el-dialog__body {
    padding: 0;
  }
}
</style>

<style lang="scss" scoped>
// @import 'url'
.material-edit {
  display: flex;
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
  .nav {
    width: 160px;
    padding: 30px 0 0 30px;
    flex-shrink: 0;
    background: #fafbfc;
    box-shadow: -1px 0px 0px 0px #dddddd inset;
    .nav-item {
      border-right: 4px solid transparent;
      cursor: pointer;
      line-height: 20px;
      margin-bottom: 20px;
      &:hover {
        color: $color-primary;
      }
      &.is-active {
        color: $color-primary;
        border-color: $color-primary;
      }
    }
  }
  .content {
    flex: 1;
    /deep/ .h-scroll {
      overflow-x: hidden;
      padding: 10px 30px 0 30px;
    }
    .title {
      color: #222222;
      height: 24px;
      line-height: 24px;
      margin: 20px 0;
      .text-link {
        font-size: 14px;
        font-weight: 400;
      }
    }
    /deep/.upload-title {
      margin-top: 6px;
      font-size: 12px;
    }
    .edit-material-file {
      width: 136px;
      height: 136px;
      position: relative;
      &.has-file {
        border: 1px solid #dddddd;
        border-radius: 5px;
        &:hover {
          .default-upload-close-icon {
            opacity: 1;
          }
        }
      }

      .default-upload-close-icon {
        opacity: 0;
      }
    }
    .bottom-tip {
      font-size: 12px;
      color: #999999;
      margin-top: 40px;
      span {
        + span {
          margin-left: 155px;
        }
      }
    }
    .footer {
      text-align: right;
      padding: 40px 30px 30px 0;
    }
  }
}
</style>

