<template>
  <div class="text-editor">
    <EditWrap @edit="edit">
      <slot></slot>
    </EditWrap>
  </div>
</template>

<script lang="ts">
import { dialog } from '@/utils/vue/dialog';
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';
import DialogTextarea from '@/pages/components/dialog-template/Textarea.vue';
import EditWrap from './EditWrap.vue';

export default defineComponent({
  name: 'text-editor',
  components: { EditWrap },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    dialogTextareaOption: {
      type: Object,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      text: '',
    });
    watch(() => props.modelValue, (value) => {
      state.text = value;
    }, { immediate: true });
    watch(() => state.text, (value) => {
      emit('update:modelValue', value);
    });
    const edit = async () => {
      const newText = await dialog({
        is: DialogTextarea,
        props: {
          modelValue: state.text,
          ...props.dialogTextareaOption,
        },
      }, {
        props: {
          title: '编辑文本',
        },
      }) as string;
      state.text = newText;
    };
    return {
      ...toRefs(state), edit,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.text-editor {
  /deep/.edit-wrap {
    height: auto;
  }
}
</style>
