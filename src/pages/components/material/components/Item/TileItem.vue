<template>
  <div class="material-tile-item" :style="radiusStyle" :class="{ disabled }" @click="toDetail">
    <div class="img-wrap" :style="imgWrapStyle">
      <base-image :src="imgSrc" :thumb="getThumb"></base-image>
      <div class="img-bottom">
        <span v-if="computedHas4ddat" class="tag">3D</span>
      </div>
      <span
        v-if="checkable"
        class="icon-wrapper icon-check"
        :class="{ 'is-checked': isChecked }"
        @click.stop="handleCheckItem"
      >
        <i class="icon i-s-wancheng-16"></i>
      </span>
    </div>
    <slot v-for="(val, key) in dynamicSlotMap" :key="key" :name="key" :material="material"></slot>
    <!-- <div v-if="showHeader" class="supplier-bar">
      <template v-if="showSupplier">
        <span class="logo-wrap">
          <base-image :src="material.supplierLogo"></base-image>
        </span>
        <span class="supplier-title">
          {{ material.supplierName }}
        </span>
      </template>
    </div> -->
    <SdDropdown
      class="handle-btns"
      trigger="hover"
      :appendToBody="false"
      @command="handleCommand"
      v-if="!checkable && (dropdownOptions.length || $slots.rightTopDrowDownMenu)"
    >
      <span class="el-dropdown-link flex-center" @click.stop>
        <i class="el-icon-more"></i>
      </span>
      <template v-slot:dropdown>
        <slot name="rightTopDrowDownMenu">
          <el-dropdown-menu>
            <el-dropdown-item command="printQrCode" v-if="dropdownOptions.includes('print')">{{
              $t("material-manage.btn.print_qrcode")
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </slot>
      </template>
    </SdDropdown>
    <div v-if="showBottom" class="bottom">
      <div v-if="showTitle" class="title">
        <span v-if="computedIsEnvironmentProtection" class="env-tag">环保</span>
        <over-text>
          {{ material.name }}
        </over-text>
      </div>
      <div v-if="showPrice" class="price">
        {{ displayPrice }}
      </div>
      <div class="hover-footer">
        <div class="gray-tags">
          <span v-if="material.applicableSeason" class="gray-tag over-text">{{ material.applicableSeason }}</span>
          <span class="gray-tag over-text">{{ categoryDisplay }}</span>
        </div>
        <div v-if="showHeader" class="supplier-bar" @click.stop="goMerchantDetail">
          <template v-if="showSupplier">
            <div class="left">
              <span class="logo-wrap">
                <base-image :src="material.supplierLogo"></base-image>
              </span>
              <span class="supplier-title">
                {{ material.supplierName }}
              </span>
            </div>
            <div class="right">
              <i class="i-r-you-12"></i>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { MaterialListItem } from '@/models/Material';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch,
} from 'vue';
import {
  getDisplayPrice, getMaterialCategoryDisplay, getMaterialImg, has4ddat,
} from '@/pages/components/material/utils';
import { getPx } from '@/utils/util';
import SdDropdown from '@/components/dropdown/dropdown.vue';
import { dialog } from '@/utils/vue/dialog';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';
import MaterialViewer from '@/pages/components/material/viewer/index.vue';
import { useRouter } from 'vue-router';
import onCreated from '@/utils/vue/onCreated';
import { useMultiCheckItem } from '@/utils/uses/use-multi-check';
import usePrintMaterial from '@/utils/printMaterial/use-print-material';
import { ImgTypeKey } from '../../search/components/Filter.vue';

type Command = 'printQrCode';

export default defineComponent({
  name: 'material-tile-item',
  components: { SdDropdown },
  props: {
    material: {
      type: Object as PropType<MaterialListItem>,
      required: true,
    },
    showTitle: {
      type: Boolean,
      default: false,
    },
    showPrice: {
      type: Boolean,
      default: false,
    },
    showHeader: {
      // 原本header的商家信息,现在移动到底部了,为了兼容原本的传参,暂时不修改了
      type: Boolean,
      default: false,
    },
    showSupplier: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [Number, String],
    },
    radius: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    imgTypeKey: {
      type: String as PropType<ImgTypeKey>,
      default: 'imgUrl_crease_v2',
    },
    // 左上角图标类型: pick-选用状态|check-选择状态
    leftTopTagType: {
      type: String as PropType<'pick' | 'check'>,
    },
    checkable: {
      type: Boolean,
      default: false,
    },
    // 右上角dropdown的菜单选项
    dropdownOptions: {
      type: Array as PropType<string[]>,
      default: [],
    },
  },
  setup(props, { emit, slots }) {
    // 动态插槽数据, 可多项
    const dynamicSlotMap = slots;
    const router = useRouter();
    const state = reactive({
      categoryDisplay: '',
    });
    const imgSrc = computed(() => getMaterialImg(props.material, props.imgTypeKey));
    const displayPrice = computed(() => getDisplayPrice(props.material));
    const showBottom = computed(() => props.showTitle || props.showPrice);
    const imgWrapStyle = computed(() => {
      const shareStyle = {
        // 'border-radius': showBottom.value ? '8px 8px 0 0' : '8px',
      };
      if (!props.width) return shareStyle;
      const width = getPx(props.width);
      return {
        width,
        height: width,
        ...shareStyle,
      };
    });
    const radiusStyle = computed(() => {
      const borderRadiusStyle = {
        'border-radius': `${props.radius || props.radius === 0 ? props.radius : '8'}px`,
      };
      return {
        ...borderRadiusStyle,
      };
    });
    const computedHas4ddat = computed(() => {
      return has4ddat(props.material);
    });
    const computedIsEnvironmentProtection = computed(() => {
      // eslint-disable-next-line eqeqeq
      return props.material.isEnvironmentProtection == 1;// 兼容列表接口返回字符串1
    });

    const getThumb = (computedThumb: Obj) => {
      const { width, height } = computedThumb;
      const SCALE = 1.35;
      return {
        ...computedThumb,
        width: width * SCALE,
        height: height * SCALE,
      };
    };

    const toDetail = async () => {
      await dialog({
        is: MaterialDetailComp,
        props: {
          row: props.material,
          pickable: !!dynamicSlotMap.leftTopTag, // 有传入slot说明可选用
        },
      });
    };

    const { printMaterial } = usePrintMaterial();

    const handleCommand = async (command: Command) => {
      switch (command) {
        case 'printQrCode':
          await printMaterial([props.material]);
          break;
        default:
          break;
      }
    };

    watch(() => props.material, async () => {
      state.categoryDisplay = await getMaterialCategoryDisplay(props.material);
    }, { immediate: true });

    const { isChecked, handleCheckItem } = useMultiCheckItem(props.material);

    const goMerchantDetail = () => {
      const {
        orgId,
      } = props.material || {};
      router.push({
        name: 'MerchantDetail',
        params: {
          orgId,
        },
      });
    };

    return {
      ...toRefs(state),
      computedHas4ddat,
      computedIsEnvironmentProtection,
      showBottom,
      imgSrc,
      imgWrapStyle,
      radiusStyle,
      displayPrice,
      getThumb,
      handleCommand,
      toDetail,
      dynamicSlotMap,
      isChecked,
      handleCheckItem,
      goMerchantDetail,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.material-tile-item {
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;

  &.disabled {
    pointer-events: none;
  }

  /deep/ .pick-state-tag.shown {
    display: none;
  }
  /deep/ .handle-btns {
    visibility: hidden;
    flex-shrink: 0;
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
  }
  &:hover {
    transform: scale(1.06);
    z-index: 999;

    /deep/ .handle-btns {
      visibility: visible;
    }

    /deep/ .pick-state-tag {
      &.shown {
        display: flex;
      }
      &.expand-on-hover {
        width: unset;
        border-radius: unset;
        overflow: unset;
      }
      .trigger-btn:nth-of-type(1) {
        padding: 6px 4px 6px 8px;
      }
      .trigger-btn:nth-of-type(2) {
        padding: 6px 8px 6px 4px;
      }
      .trigger-btn .inner-text {
        visibility: visible;
      }
    }
    .img-wrap {
      position: relative;
      z-index: 1;
      border-radius: 8px 8px 0 0;
      .el-image {
        transform: scale(1.35);
      }
      .img-bottom {
        .tag {
          display: none;
        }
      }
    }

    .bottom {
      padding-top: 12px;
      padding-bottom: 0;
      box-shadow: 0px 2px 10px 0px rgba(200, 201, 208, 0.5), 0px 2px 8px 0px rgba(28, 35, 63, 0.15);
      background: white;
      .title,
      .price {
        padding: 0 12px;
        position: relative;
        z-index: 1;
        background-color: white;
      }

      .hover-footer {
        display: block;
        box-shadow: 0px 2px 10px 0px rgba(200, 201, 208, 0.5), 0px 2px 8px 0px rgba(28, 35, 63, 0.15);
        .gray-tags {
          display: flex;
          .gray-tag {
            display: inline-block;
          }
        }
        .supplier-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eeeeee;
          .right {
            > i {
              color: #666666;
              font-size: 12px;
              transform: scale(0.7);
              display: inline-block;
            }
          }
        }
      }
    }
  }

  .el-dropdown-link {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    i {
      transform: rotate(90deg);
    }
  }

  .img-wrap {
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    .el-image {
      transition: transform 0.2s;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 0;
    }
    .img-bottom {
      position: absolute;
      left: 10px;
      bottom: 10px;

      .tag {
        display: inline-block;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
        padding: 4px 6px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        + .tag {
          margin-left: 5px;
        }
      }
    }
  }

  .bottom {
    position: relative;
    padding: 12px 0;
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #222222;
      line-height: 22px;
      display: flex;
      align-items: center;
      .env-tag {
        flex-shrink: 0;
        font-size: 12px;
        color: white;
        background: #21bfb8;
        border-radius: 2px;
        box-shadow: 0px 2px 10px 0px rgba(200, 201, 208, 0.5);
        line-height: 18px;
        padding: 1px 4px;
        margin-right: 5px;
        font-weight: 400;
      }
    }
    .price {
      color: #666666;
      line-height: 28px;
    }
    .hover-footer {
      display: none;
      position: absolute;
      bottom: 1px; // 隐藏顶部的boxshadow
      left: 0;
      background: white;
      transform: translateY(100%);
      width: 100%;
      border-radius: 0 0 8px 8px;
      .gray-tags {
        padding: 12px;
        padding-top: 0;
        .gray-tag {
          display: none;
          background: rgba(242, 243, 245, 0.9);
          border-radius: 4px;
          color: #666666;
          padding: 6px;
          font-size: 12px;
          margin-top: 6px;
          + .gray-tag {
            margin-left: 6px;
          }
        }
      }

      .supplier-bar {
        display: none;
        height: 52px;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        .logo-wrap {
          flex-shrink: 0;
          display: inline-block;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 5px;
          width: 24px;
          height: 24px;
        }
        .supplier-title {
          flex: 1;
          color: white;
          font-size: 12px;
        }
        // .handle-btns {
        //   flex-shrink: 0;
        //   // visibility: hidden;
        //   cursor: pointer;
        // }
      }
    }
  }
}

.icon-wrapper {
  // display: none;
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
</style>
