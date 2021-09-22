<template>
  <div class="img-type-search-bar">
    <div class="left">
      <slot></slot>
    </div>
    <div class="right">
      <div class="search-wrap">
        <el-input
          class="search-input"
          v-model="keywords"
          size="small"
          :placeholder="$t('material-manage.input_keyword_search_material')"
          clearable
          :style="searchInputStyle"
          @change="search"
          @blur="toggleShowSearch(false)"
          ref="searchInputVm"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-search"></i>
          </template>
        </el-input>

        <i class="search-icon i-r-fangdajing2" :style="searchIconStyle" @click="toggleShowSearch(true)"></i>
      </div>
      <slot name="appendHandleBtns"></slot>
      <template v-if="!hideImgType">
        <el-divider direction="vertical"></el-divider>
        <el-tooltip effect="light" :content="$t('material-manage.card_view')" placement="bottom">
          <i
            class="right-icon i-r-kapianshitu-16"
            :class="{ active: imgTypeKey === 'imgUrl_crease_v2' }"
            @click="chageImgTypeKey('imgUrl_crease_v2')"
          ></i>
        </el-tooltip>
        <el-tooltip effect="light" :content="$t('material-manage.fold_view')" placement="bottom">
          <i
            class="right-icon i-r-zhezhoutu-16"
            :class="{ active: imgTypeKey === 'imgUrl_crease' }"
            @click="chageImgTypeKey('imgUrl_crease')"
          ></i>
        </el-tooltip>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { ElInput } from 'element-plus';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch,
} from 'vue';
import { ImgTypeKey } from '../search/components/Filter.vue';

export default defineComponent({
  name: 'img-type-search-bar',
  components: {},
  props: {
    modelValue: {
      type: String as PropType<ImgTypeKey>,
      default: 'imgUrl_crease_v2',
    },
    hideImgType: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const searchInputVm = ref<InstanceType<typeof ElInput>>();

    const state = reactive({
      keywords: '',
      showSearch: false,
      imgTypeKey: props.modelValue as ImgTypeKey,
    });
    watch(() => props.modelValue, () => {
      state.imgTypeKey = props.modelValue;
    });
    watch(() => state.imgTypeKey, () => {
      emit('update:modelValue', state.imgTypeKey);
    });
    const searchInputStyle = computed(() => {
      return {
        width: state.showSearch ? '220px' : '0',
        'pointer-event': state.showSearch ? 'auto' : 'none',
        opacity: state.showSearch ? '1' : '0',
      };
    });

    const searchIconStyle = computed(() => {
      return {
        opacity: state.showSearch ? '0' : '1',
        'pointer-event': state.showSearch ? 'none' : 'auto',
      };
    });
    const toggleShowSearch = (showSearch?: boolean) => {
      state.showSearch = showSearch === undefined ? !state.showSearch : showSearch;
      if (state.showSearch) {
        searchInputVm.value?.focus();
      }
    };
    const chageImgTypeKey = (imgTypeKey: ImgTypeKey) => {
      state.imgTypeKey = imgTypeKey;
    };
    const search = () => {
      emit('search', state.keywords);
      toggleShowSearch(false);
    };
    return {
      ...toRefs(state), searchInputVm, searchInputStyle, searchIconStyle, toggleShowSearch, search, chageImgTypeKey,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.img-type-search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 0 80px;
  height: 50px;
  background: #ffffff;
  position: relative;
  @include layout-elastic-center-container();
  &:after {
    content: "";
    position: absolute;
    left: 80px;
    right: 80px;
    bottom: 0;
    height: 0;
    border-bottom: 1px solid #e7e7e7;
  }
  .el-divider--vertical {
    margin: 0 16px;
  }
  .left {
    flex: 1;
  }
  .right {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    .search-wrap {
      position: relative;
      height: 50px;
      .search-input {
        position: absolute;
        right: 15px;
        top: 10px;
        transition: all 0.2s;
      }
      .search-icon {
        position: absolute;
        right: 0;
        top: 18px;
        cursor: pointer;
        transition: all 0.2s;
      }
    }

    .right-icon {
      cursor: pointer;
      position: relative;
      z-index: 1;
      color: #999999;
      font-size: 18px;
      &.active {
        color: #222222;
      }
      + .right-icon {
        margin-left: 16px;
      }
    }
  }
}
</style>
