<template>
  <!-- :class="{ empty: !colorItem.name }" -->
  <div
    v-if="colorItem"
    class="color-item item flex-column"
    :style="{
      backgroundColor: colorItem.bg,
      color: colorItem.color,
    }"
  >
    <div class="bg flex-1" ref="imgBoxVm"></div>
    <div class="title">{{ colorItem.name }}</div>
    <div class="append-bar flex-space-between" v-if="colorItem.name">
      <span>{{ colorItem.colorFamily }}</span>
      <div class="handle-btns">
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
          :content="$t('folder.color-card-book.add_to_color_book')"
          placement="bottom"
          effect="light"
          :visible-arrow="false"
          popper-class="tooltip--narrow"
        >
          <span @click="addOrDelete(colorItem)"> <i :class="['bg-color', 'iconfont', 'i-sekaben-14']"></i></span>
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
  box-shadow: 0 0 0 3px #fff, 0px 3px 6px 0px rgba(110, 110, 113, 0.5);
  position: relative;
  .bg {
    // opacity: 0;
    // transition: opacity 0.3s ease;
    // padding: 8px;
  }
  .title {
    font-weight: 600;
    position: absolute;
    left: 8px;
    top: 8px;
  }
  .handle-btns {
    span + span {
      margin-left: 12px;
    }
  }
  .iconfont {
    font-size: 14px;
  }
  .append-bar {
    // display: none;
    height: 34px;
    padding: 0 8px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }
  // &:not(.empty):hover {
  // .bg {
  //   opacity: 1;
  // }
  // .append-bar {
  //   display: block;
  // }
  // }
}
</style>
