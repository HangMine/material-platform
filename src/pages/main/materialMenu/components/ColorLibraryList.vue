<template>
  <div class="color-library-list">
    <div
      class="img-box"
      id="imgBoxVm"
      ref="imgBoxVm"
      :style="{ backgroundColor: `rgb(${colorItem.r}, ${colorItem.g}, ${colorItem.b})` }"
    ></div>
    <div class="hover-box">
      <p class="color-name bg-color">{{ colorItem.colorFamily }}</p>
      <p class="btn-box" v-if="!noBtn">
        <el-tooltip
          :content="$t('folder.color-card-book.download')"
          placement="top"
          effect="light"
          :visible-arrow="false"
          popper-class="tooltip--narrow"
        >
          <span class="down-load" @click="downLoadColor(colorItem)"
            ><i class="bg-color iconfont i-r-xiazai-16"></i
          ></span>
        </el-tooltip>
        <el-tooltip
          :content="
            type === 'colorLibrary'
              ? $t('folder.color-card-book.add_to_color_book')
              : $t('folder.color-card-book.remove_card_book')
          "
          placement="bottom"
          effect="light"
          :visible-arrow="false"
          popper-class="tooltip--narrow"
        >
          <span @click="addOrDelete(colorItem)">
            <i :class="['bg-color', 'iconfont', type === 'colorLibrary' ? 'i-sekaben-14' : 'i-yichu-14']"></i
          ></span>
        </el-tooltip>
      </p>
    </div>

    <p class="name">{{ colorItem.name }}</p>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, ref, nextTick, PropType,
} from '@vue/runtime-core';
import {
  ColorLibraryItem, removeToColorCard,
} from '@/api/materialMenu';
import { ElMessage } from 'element-plus';
import { confirm, dialog } from '@/utils/vue/dialog';
import AddToFolder from '@/pages/components/FolderList/components/AddToFolder.vue';
import dom2image from 'dom-to-image';
import { download } from '@/utils/util';
import { t } from '@/i18n/index';

export default defineComponent({
  name: '',
  props: {
    colorItem: {
      type: Object as PropType<ColorLibraryItem>,
      default: () => ({}),
    },
    type: { // 颜色库：colorLibrary,添加到色卡本；色卡本的颜色库：colorLibraryDetail,移除色卡本
      type: String,
      default: 'colorLibrary',
    },
    fatherId: {
      type: String,
    },
    noBtn: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['refreshList'],
  setup(props, { emit }) {
    const imgBoxVm = ref<HTMLDivElement>();
    const state = reactive({
    });
    const getImgUrl = async (item: ColorLibraryItem) => {
      const domNode = imgBoxVm.value;
      console.log(domNode);
      const dataUrl = await dom2image.toPng(domNode, {
        bgcolor: `rgb(${item.r}, ${item.g}, ${item.r})`,
        height: '1024',
        width: '1024',
      });
      console.log(dataUrl, 'dataUrl');
      return dataUrl;
    };
    const downLoadColor = async (item: ColorLibraryItem) => {
      try {
        await nextTick();
        const imgUrl = await getImgUrl(item);
        console.log(imgUrl, 'imgUrl');
        const imgName = item.name;
        download(imgUrl, imgName);
      } finally {
        // loading.value = false;
      }
      console.log(item);
    };
    const addOrDelete = async (item: ColorLibraryItem) => {
      if (props.type === 'colorLibrary') {
        await dialog({
          is: AddToFolder,
          props: {
            receiveType: 'ColorCard',
            detailId: item.id,
          },
        });
        await emit('refreshList');
        console.log('add');
      } else {
        console.log(props.fatherId, 'props.fatherId');
        await confirm({ title: t('folder.move_from_color_card') });
        await removeToColorCard({ colorOId: item.id, colorCardBookId: [props.fatherId as string] });
        await ElMessage.success(t('folder.remove_card_success'));
        emit('refreshList');
      }
    };
    return {
      ...toRefs(state), downLoadColor, addOrDelete, imgBoxVm,
    };
  },
});
</script>
<style lang="scss" >
.color-library-list {
  display: block;
  position: relative;
  &:hover .hover-box {
    visibility: visible;
  }

  cursor: pointer;
  margin-bottom: 12px;
  // margin-right: 8px;

  .img-box {
    background: green;
    height: 56px;
    width: 100%;
  }
  .hover-box {
    top: 0px;
    position: absolute;
    height: 56px;
    visibility: hidden;
    display: flex;

    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 16px;
    .bg-color {
      background-color: rgba(0, 0, 0, 0.3);

      color: #fff;
    }
    .down-load {
      margin-right: 12px;
    }
    .iconfont {
      padding: 5px;
      border-radius: 50%;
    }
    .color-name {
      padding: 5px 8px;
      border-radius: 15px;
    }
  }
  .name {
    margin-top: 8px;
  }
}
</style>
