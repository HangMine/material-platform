<template>
  <div class="color-item item flex-column">
    <div
      class="bg"
      ref="imgBoxVm"
      :style="{
        backgroundColor: `rgb(${colorItem.r},${colorItem.g},${colorItem.b})`,
      }"
    ></div>
    <div class="title">
      <img :src="require('@/assets/img/color/logo-pantone.png')" />
      <h4>{{ colorItem.name }}</h4>
    </div>
    <div class="hover-box flex-space-between" v-if="colorItem.name">
      <span class="name">{{ colorItem.colorFamily }}</span>
      <div class="handle-btns flex">
        <el-tooltip
          :content="$t('folder.color-card-book.download')"
          placement="top"
          effect="light"
          offset="4"
          :visible-arrow="false"
          popper-class="tooltip--narrow"
        >
          <span class="btn down-load" @click="downLoadColor(colorItem)"
            ><i class="bg-color icon i-r-xiazai-16"></i
          ></span>
        </el-tooltip>
        <el-tooltip
          :content="$t('folder.color-card-book.add_to_color_book')"
          placement="bottom"
          effect="light"
          offset="4"
          :visible-arrow="false"
          popper-class="tooltip--narrow"
        >
          <span class="btn" @click="addOrDelete(colorItem)">
            <i :class="['bg-color', 'icon', 'i-sekaben-14']"></i
          ></span>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, nextTick, PropType,
} from 'vue';
import dom2image from 'dom-to-image';
import { download } from '@/utils/util';
import { confirm, dialog } from '@/utils/vue/dialog';
import AddToFolder from '@/pages/components/FolderList/components/AddToFolder.vue';
import {
  ColorLibraryItem, removeToColorCard,
} from '@/api/materialMenu';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'color-item',
  components: {},
  props: {
    colorItem: {
      type: Object as PropType<ColorLibraryItem & { color: String, bg: String }>,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    const imgBoxVm = ref<HTMLDivElement>();

    const getImgUrl = async (item: typeof props.colorItem) => {
      const dataUrl = await dom2image.toPng(imgBoxVm.value, {
        bgcolor: `${item.bg}`,
        height: '1024',
        width: '1024',
      });
      return dataUrl;
    };

    const downLoadColor = async (item: ColorLibraryItem) => {
      await nextTick();
      const imgUrl = await getImgUrl(item);
      const imgName = item.name;
      download(imgUrl, imgName);
    };

    const addOrDelete = async (item: ColorLibraryItem) => {
      await dialog({
        is: AddToFolder,
        props: {
          receiveType: 'ColorCard',
          detailId: item.id,
        },
      });
      // await emit('refreshList');
    };
    return {
      ...toRefs(state),
      downLoadColor,
      addOrDelete,
      imgBoxVm,
    };
  },
});
</script>
<style lang="scss" scoped>
.color-item {
  border: 1px solid #dddddd;
  position: relative;
  .bg {
    padding-top: 100%;
  }
  &:hover {
    .hover-box {
      visibility: visible;
    }
  }
  .title {
    background: #fff;
    color: #222;
    padding: 16px 16px 10px;
    img {
      height: 13px;
      margin-bottom: 6px;
    }
  }

  .handle-btns {
    span {
      width: 24px;
      & + span {
        margin-left: 12px;
      }
    }
  }
  .icon {
    font-size: 14px;
  }
  .hover-box {
    width: 100%;
    padding: 12px;
    color: #fff;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    .name,
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(#000000, 0.3);
      height: 24px;
      border-radius: 12px;
    }
    .name {
      padding: 0 8px;
    }
  }
}
</style>
