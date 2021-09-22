<template>
  <div class="title-box">
    <p class="title">{{ title }}</p>
    <div class="left-search">
      <p class="input-search">
        <el-input
          :placeholder="$t('public.form.input_keyword')"
          prefix-icon="i-r-sousuo-16"
          size="small"
          v-model="inputValue"
          @change="inputEnter"
          clearable
        >
        </el-input>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/runtime-core';

export default defineComponent({
  name: '',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {},
  emits: ['inputChange'],
  setup(props, { emit }) {
    const state = reactive({
      inputValue: '',
    });
    const inputEnter = () => {
      state.isSearch = true;
      emit('inputChange', state.inputValue);
    };
    return { ...toRefs(state), inputEnter };
  },
});
</script>
<style lang="scss">
.title-box {
  height: 52px;
  padding: 0 20px;
  // line-height:46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  .title {
    font-size: 16px;
  }
}
</style>
