<template>
  <el-button-group class="pick-state-tag" :class="[size, { shrink: isPick }]" v-bind="$attrs">
    <el-button class="trigger-btn" type="primary" :loading="loading" @click.stop="handlePick">
      <i :class="['icon', isCurrentPick ? 'i-s-cailiaoxuanyong-16' : 'i-r-xuanze-16']"></i
      ><span class="inner-text">{{ isCurrentPick ? "已选" : "选用" }}</span>
    </el-button>
    <el-button
      class="trigger-btn"
      type="primary"
      icon="el-icon-arrow-down"
      ref="remarkListTrigger"
      @click.stop="showRemarkList"
    ></el-button>
  </el-button-group>
  <!-- <div>
    <template v-if="remarkList.length">
      <RemarkSection
        v-for="remark in remarkList"
        :key="`${remark.userId}-${remark.chooseTime}`"
        :remarkInfo="remark"
      ></RemarkSection>
    </template>
    <BlockError v-else size="small" :error="{ message: '暂无备注', code: '404' }"></BlockError>
  </div> -->
  <!-- <el-popper
    v-model:visible="isPickPopperVisible"
    ref="popper"
    effect="light"
    trigger="manual"
    :show-arrow="false"
    :offset="6"
    transition="el-zoom-in-top"
    :gpu-acceleration="false"
    popper-class="pick-material-popper"
    :stop-popper-mouse-event="false"
    :append-to-body="false"
  >
    <template #default> </template>
    <template #trigger><span class="pick-material-popper-trigger"></span></template>
  </el-popper> -->
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch,
} from 'vue';
import {
  unpickMaterialInRecommendation, PickRemarkItem,
} from '@/api/recommendation';
import { MaterialListItem } from '@/models/Material';
// import clickoutside from '@/directives/clickoutside';
import { dialog } from '@/utils/vue/dialog';
// import RemarkSection from './RemarkSection.vue';
import FormSubmitPick from './FormSubmitPick.vue';
import PickRemarksList from './PickRemarksList.vue';

export default defineComponent({
  name: 'pick-state-tag',
  components: {},
  inheritAttrs: false,
  props: {
    isPick: {
      type: Boolean,
      default: false,
    },
    material: {
      type: Object as PropType<MaterialListItem>,
      required: true,
    },
    // 触发按钮尺寸,取el-button的size值
    size: {
      type: String as PropType<'small' | 'mini'>,
      default: 'mini',
    },
    // hover时扩展
    // showOnHover: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  emits: ['change', 'update:isPick'],
  // directives: {
  //   clickoutside,
  // },
  setup(props, { emit }) {
    const remarkListTrigger = ref();
    const state = reactive({
      loading: false,
      isCurrentPick: props.isPick,
      inputRemark: '',
      remarkList: [] as PickRemarkItem[],
      isPickPopperVisible: false,
    });

    watch(() => props.isPick, (val) => {
      state.isCurrentPick = val;
    });

    // const getRemarksList = async () => {
    //   state.remarkList = await fetchPickRemarkList(props.material.originalCId) || [];
    // };

    const handlePick = async () => {
      if (state.isCurrentPick) {
        await unpickMaterialInRecommendation({
          originalId: props.material.originalCId,
        });
      } else {
        await dialog({
          is: FormSubmitPick,
          props: {
            material: props.material,
          },
        });
      }
      emit('update:isPick', !state.isCurrentPick);
      emit('change', !state.isCurrentPick);
      // getRemarksList();
    };

    const showRemarkList = async () => {
      remarkListTrigger.value?.$el.blur();
      // console.log(remarkListTrigger);
      await dialog({
        is: PickRemarksList,
        props: {
          material: props.material,
        },
      }, {
        props: {
          customClass: 'pick-remark-list-dialog',
        },
      });
    };
    /* const handleEditItem = async (item?: RecommendationItem) => {
      await dialog({
        is: FormEditRecommandation,
        props: {
          submitType: item ? 'edit' : 'add',
          editItem: item,
        },
      });
      getBrandRecommendationList(state.keywords);
    }; */
    // const expandPickPopper = async () => {
    //   // 如果是已经展开状态, 则不发请求
    //   if (!state.isPickPopperVisible) {
    //     try {
    //       state.loading = true;
    //       await getRemarksList();
    //     } finally {
    //       state.loading = false;
    //     }
    //   }
    //   state.isPickPopperVisible = !state.isPickPopperVisible;
    // };

    return {
      ...toRefs(state),
      handlePick,
      showRemarkList,
      remarkListTrigger,
    };
  },
});
</script>
<style lang="scss">
// @import 'url'
.pick-state-tag {
  display: flex;
  white-space: nowrap;

  &.expand-on-hover {
    &.mini {
      width: 28px;
      border-radius: 14px;
      overflow: hidden;
    }
    .inner-text {
      visibility: hidden;
    }
  }
  &.mini {
    .trigger-btn {
      padding: 6px 6px;
    }
  }
  &.small {
    .trigger-btn {
      &:nth-of-type(1) {
        padding: 8px 4px 8px 8px;
      }
      &:nth-of-type(2) {
        padding: 8px 8px 8px 4px;
      }
    }
  }
  .trigger-btn {
    border-left: 0;
    border-right: 0;
    min-height: unset !important;
    .icon {
      font-size: 16px;
      margin-right: 2px;
    }

    &.el-button--primary:hover,
    &.el-button--primary:focus {
      background: #1daba5;
      border-color: #1daba5;
    }
  }
}
.pick-remark-list-dialog {
  .el-dialog__body {
    padding-top: 0;
    padding-bottom: 0;
    height: 460px;
    overflow: auto;
  }
}
// .pick-material-popper {
//   padding: 0 20px;
//   width: 360px;
//   max-height: 500px;
//   overflow-y: auto;
//   .input-area {
//     padding: 8px;
//     margin: 16px 0 8px;
//     border: 1px solid #dddddd;
//     border-radius: 5px;
//     .el-textarea .el-textarea__inner {
//       border: 0;
//     }
//     .el-button {
//       min-height: unset !important;
//       align-self: flex-end;
//       margin-top: 4px;
//     }
//   }
//   .block-error {
//     padding: 32px 0 60px !important;
//   }
// }
</style>
