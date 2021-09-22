<template>
  <div class="tile-view">
    <div class="inner-wrapper">
      <div class="thumbnail" @click="handleClickItem">
        <BaseImage class="material-img" fit="cover" :src="imgUrl" lazy />
        <!-- <div class="img-veil"></div> -->
        <span class="icon-wrapper icon-check" :class="{ 'is-checked': isChecked }" @click.stop="handleCheckItem">
          <i class="icon i-s-wancheng-16"></i>
        </span>
      </div>
      <div class="magnetic-popper">
        <slot name="tool" :row="data" :isInTile="true"></slot>
      </div>
    </div>

    <h4 class="over-text">{{ data?.name }}</h4>
    <p class="over-text">{{ data?.sn }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, computed, ref, inject, watch, unref,
} from 'vue';
import BaseImage from '@/components/base/Image.vue';
import { MaterialListItem } from '@/models/Material';
import { getMaterialImg } from '@/pages/components/material/utils';
import { dialog, confirm } from '@/utils/vue/dialog';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';

export default defineComponent({
  name: 'thumbnail',
  components: {
    BaseImage,
  },
  props: {
    // index: {
    //   type: Number,
    //   required: true,
    // },
    data: {
      type: Object as PropType<MaterialListItem>,
      required: true,
    },
    // valueKey: {
    //   type: String,
    //   default: 'id',
    // },
  },
  emits: ['check', 'collect', 'detail', 'share'],
  setup(props, { emit }) {
    // const _value = computed(() => props.data[props.valueKey]);

    const { checkedItems, handleCheck, clearCheck } = inject('tileViewProps') || {
      checkedItems: ref([]),
      handleCheck: () => ([]),
      clearCheck: () => (undefined),
    };

    const imgUrl = computed(() => getMaterialImg(props.data) || require('@/assets/img/public/render-empty.png'));

    const isChecked = ref<boolean>(checkedItems.value.includes(props.data));

    watch(checkedItems, (val) => {
      isChecked.value = val.includes(props.data);
    });

    // props.data的变化目前只发现在于列表刷新时, 而刷新时需要情空选中项,所以用其变化来清空选中项
    watch(() => props.data, (val) => {
      clearCheck();
    });

    const handleCheckItem = () => {
      isChecked.value = !isChecked.value;
      handleCheck(isChecked.value, props.data);
      emit('check', props.data);
    };

    // const handleCollectItem = () => {
    //   emit('collect', props.index, props.data);
    // };
    // const handleShareItem = () => {
    //   emit('share', [props.data]);
    // };
    const handleClickItem = async () => {
      await dialog({
        is: MaterialDetailComp,
        props: {
          row: props.data,
          editable: false,
        },
      });
    };
    return {
      imgUrl,
      handleCheckItem,
      // handleCollectItem,
      handleClickItem,
      // handleShareItem,
      isChecked,

    };
  },
});
</script>

<style lang="scss" scoped>
.tile-view {
  margin-bottom: 20px;
}
.inner-wrapper {
  position: relative;
}
// .img-veil {
//   position: absolute;
//   width: 100%;
//   height: 100%;
// }
.thumbnail {
  padding-bottom: 100%;
  border-radius: 8px;
  overflow: hidden;
  .el-image {
    box-shadow: 0px 1px 5px 0px rgba(28, 35, 63, 0.1);
    position: absolute;
    img {
      transition: transform 0.3s;
    }
  }
  &:hover {
    box-shadow: 0px 1px 5px 0px rgba(28, 35, 63, 0.1);
    .el-image img {
      transform: scale(1.2);
    }
    // .img-veil {
    //   border-radius: 8px;
    // }
    .icon-wrapper {
      display: flex;
    }
  }
}
.icon-wrapper {
  display: none;
  position: absolute;
  cursor: pointer;
}
.icon-check {
  top: 12px;
  left: 12px;
  background-color: #fff;
  border-radius: 50%;
  i {
    font-size: 24px;
    color: #a1ebdf;
  }
  &.is-checked {
    display: flex;
    i {
      color: #14ccb0;
    }
  }
}
.icon-share,
.icon-collect {
  top: 8px;
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 50%;
  @extend %flex-center;

  i {
    color: #666;
    font-size: 18px;
  }
}
.icon-share {
  right: 48px;
}
.icon-collect {
  right: 8px;
  &.is-collected {
    display: flex;
    i {
      color: #ff6678;
    }
  }
}
h4 {
  font-size: $font-size-small;
  line-height: 24px;
  margin-top: 4px;
  padding: 0 8px;
}
p {
  font-size: $font-size-mini;
  line-height: 18px;
  color: #999;
  padding: 0 8px;
}
</style>

<style lang="scss">
.tile-view {
  &:hover {
    .magnetic-popper {
      display: block;
    }
  }
  .magnetic-popper {
    width: 100%;
    display: none;
    position: absolute;
    background-color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    line-height: 18px;
    padding: 14px 0;
    margin-top: -4px !important;
    box-shadow: 0px 1px 5px 0px rgba(28, 35, 63, 0.15);

    > div {
      display: flex;
      align-items: center;
      .text-link,
      .el-dropdown {
        text-align: center;
        flex: 1;
      }
    }
    .el-divider {
      margin: 0;
    }
  }
  .thumbnail {
    position: relative;
    .el-image img {
      transition: transform 0.3s;
    }

    &:hover {
      .el-image img {
        transform: scale(1.2);
      }
    }
  }
}
</style>
