
<template>
  <el-popover
    placement="bottom"
    :width="350"
    trigger="manual"
    :title="$t('material-manage.choose_from_coloro')"
    :popper-class="`color-selector-popper-panel`"
    :show-after="100"
    v-model:visible="currentVisible"
  >
    <template #reference>
      <slot name="trigger"></slot>
    </template>
    <div class="body">
      <!-- <button
        type="button"
        class="el-message-box__headerbtn"
        aria-label="Close"
        @click="$emit('update:visible', false)"
      >
        <i class="el-message-box__close el-icon-close"></i>
      </button> -->

      <ColorSelector v-bind="$attrs" v-model:visible="currentVisible" />
      <!-- <footer>
        <el-button @click="$emit('update:visible', false)">{{ $t("public.dialog.cancel") }}</el-button>
        <el-button type="primary" @click="handleConfirm">{{ $t("public.dialog.confirm") }}</el-button>
      </footer> -->
    </div>
  </el-popover>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';
import ColorSelector from './index.vue';

/* 除了visible做一层转接,其他数据都透传到colorSelector, 由colorSeletor进行处理 */
export default defineComponent({
  name: 'color-selector-popper',
  components: { ColorSelector },
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const currentVisible = ref(props.visible);
    watch(() => props.visible, (val) => {
      currentVisible.value = val;
    });
    watch(currentVisible, (val) => {
      emit('update:visible', val);
    });

    // const colorValue = ref(props.modelValue || 'rgb(255,0,0)');
    // const handleConfirm = () => {
    //   emit('update:modelValue', colorValue.value);
    //   emit('change', colorValue.value);
    //   emit('update:visible', false);
    // };
    return {
      currentVisible,
      // colorValue,
      // handleConfirm,
    };
  },
});
</script>
<style lang="scss">
.color-selector-popper-panel {
  .body {
    padding: 0 18px 18px;
  }
  footer {
    text-align: right;
    margin-top: 24px;
  }
}
</style>
