<template>
  <div class="dialog-template-textarea">
    <el-input v-model="value" type="textarea" :rows="6" v-bind="$attrs"></el-input>
    <div class="dialog-buttons">
      <el-button type="default" @click="cancel">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" @click="confirm">{{ $t("public.dialog.confirm") }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';

export default defineComponent({
  name: 'dialog-template-textarea',
  dialogify: {
    props: {
      width: '440px',
    },
  },
  components: {},
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      value: '',
    });
    watch(() => props.modelValue, () => {
      state.value = props.modelValue;
    }, { immediate: true });

    watch(() => state.value, () => {
      emit('update:modelValue', state.value);
    });
    const cancel = () => {
      emit('cancel');
    };
    const confirm = () => {
      emit('confirm', state.value);
    };

    return {
      ...toRefs(state), cancel, confirm,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.dialog-template-textarea {
  .dialog-buttons {
    text-align: right;
    padding-top: 20px;
  }
}
</style>
