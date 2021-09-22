<template>
  <div class="dialog-buttons">
    <el-button type="default" @click="cancel">{{ $t("public.dialog.cancel") }}</el-button>
    <el-button type="primary" @click="confirm">{{ $t("public.dialog.confirm") }}</el-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, getCurrentInstance,
} from 'vue';

export default defineComponent({
  name: 'dialog-buttons',
  components: {},
  props: {
    confirm: {
      type: Function,
      default: async () => { },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    const that = getCurrentInstance();
    const cancel = () => {
      if (that?.parent) that.parent.emit('cancel');
    };

    return {
      ...toRefs(state),
      cancel,
    };
  },

});
</script>
<style lang="scss" scoped>
// @import 'url'
.dialog-buttons {
  text-align: right;
}
</style>
