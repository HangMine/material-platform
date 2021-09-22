<template>
  <div class="sd-search" :style="$attrs.style" :class="$attrs.class">
    <span class="prefix-icon">
      <slot name="prefix-icon">
        <i class="sd-search-icon i-r-fangdajing2"></i>
      </slot>
    </span>
    <input type="text" :placeholder="$t('public.form.search')" v-bind="inputAttrs" v-model="searchText" ref="inputEl" />
    <span class="suffix-icon">
      <slot name="suffix-icon">
        <ImageSearch @search="imageSearch"></ImageSearch>
      </slot>
    </span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch,
} from 'vue';
import useAttrs from '@/utils/uses/use-attrs';
import ImageSearch from '@/components/search/ImageSearch.vue';

export default defineComponent({
  name: 'sd-search',
  inheritAttrs: false,
  components: { ImageSearch },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue', 'image-search'],
  setup(props, { emit, attrs }) {
    const inputEl = ref<HTMLInputElement>();
    const state = reactive({
      searchText: '',
    });
    const inputAttrs = useAttrs(attrs);
    watch(() => props.modelValue, (value) => {
      state.searchText = value;
    }, { immediate: true });
    watch(() => state.searchText, (value) => {
      emit('update:modelValue', value);
    });
    const imageSearch = (file: File | undefined, clearFile: () => void) => {
      emit('image-search', file, clearFile);
      // clearFile();
    };

    return {
      ...toRefs(state), inputAttrs, imageSearch, inputEl,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.sd-search {
  display: flex;
  align-items: center;
  background: #f3f2f2;
  border-radius: 20px;
  height: 40px;
  color: #999999;
  padding: 0 15px;
  .prefix-icon {
    flex-shrink: 0;
    padding-right: 5px;
  }
  .suffix-icon {
    flex-shrink: 0;
  }
  .prefix-icon,
  .suffix-icon {
    i {
      font-size: 16px;
    }
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    &::placeholder {
      color: #999999;
    }
  }
}
</style>
