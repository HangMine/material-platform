<template>
  <div>
    <el-popover
      placement="bottom-start"
      trigger="click"
      v-model="isOpened"
      popper-class="address-multiple-selector-popper"
    >
      <template v-slot:reference>
        <div class="el-select custom-input-wrapper flex-vertical-center">
          <!-- is-reverse -->
          <div :class="['el-input', 'el-input--small', presentTags.length ? 'is-select' : '']">
            <div class="selected-label-box">
              <el-tag
                v-if="!presentTags.length"
                presentTags
                type="info"
                size="small"
                :hit="false"
                :closable="true"
                disable-transitions
                @close="deleteTag(index)"
              >
                <span class="iconfont i-dingwei-16"></span>
                <span>{{ $t("compony-info.delivery_place") }}</span>
              </el-tag>
              <el-tag
                v-for="(tag, index) in presentTags"
                :key="tag.key"
                type="info"
                size="small"
                :hit="false"
                :closable="true"
                disable-transitions
                @close="deleteTag(index)"
              >
                <span class="iconfont i-dingwei-16"></span>
                <span>{{ tag.text || $t("compony-info.delivery_place") }} </span>
              </el-tag>
            </div>
            <span class="el-input__suffix">
              <span class="el-input__suffix-inner">
                <i
                  v-if="clearBtnVisible"
                  key="clear"
                  class="el-input__icon el-icon-circle-close"
                  @click.stop="handleClear"
                ></i>

                <i
                  v-else
                  class="el-select__caret el-input__icon el-icon-arrow-up"
                  :class="{ 'is-reverse': isOpened }"
                ></i>
              </span>
            </span>
          </div>
        </div>
      </template>
      <div class="custom-input-content">
        <div class="flex search-bar">
          <div class="search-input-wrapper flex-1">
            <el-input
              class="search-input"
              size="small"
              v-model="countrySearchText"
              :placeholder="$t('public.form.choose_delivery_place')"
              prefix-icon="el-icon-search"
            ></el-input>
            <small>{{ $t("public.form.country") }}</small>
          </div>
          <div class="search-input-wrapper flex-1">
            <el-input
              class="search-input"
              size="mini"
              v-model="provinceSearchText"
              :placeholder="$t('public.form.search')"
              prefix-icon="el-icon-search"
            ></el-input>
            <small>{{ $t("public.form.provice") }}</small>
          </div>
        </div>
        <el-cascader-panel
          v-model="value"
          class="address-multiple-cascader-panel"
          :props="cascaderConfig"
          :options="addressOptions"
          ref="cascaderPanelVm"
          @expand-change="handleExpandChange"
          @change="handleChange"
        ></el-cascader-panel>
        <!-- <el-tree
          highlight-current
          :current-node-key="selectedParentId"
          node-key="id"
          @node-click="handleSelectParentId"
          :default-expand-all="true"
          :data="orgTrees"
          :props="{
            children: 'childOrganizes',
            label: 'name',
          }"
        ></el-tree> -->
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts">

import {
  computed,
  defineComponent, reactive, ref, toRefs, watch, nextTick,
} from 'vue';
import onCreated from '@/utils/vue/onCreated';

import axios from '@/utils/axios';
// import { i18n } from '@/i18n';
import i18n, {
  currentLang, setLang, langStore,
} from '@/i18n/index';

interface addressParams {
  ids?: string[],
  parentIds?: string[]
}


// 获取国家列表
const fetchCountryList = async (params: addressParams) => {
  const res = (await axios.post<CountryItem[]>('/authcenter/mp/address/country', params)).data;
  return res;
};

// 获取省列表
const fetchProvinceList = async (params: addressParams) => {
  const res = (await axios.post<ProvinceItem[]>('/authcenter/mp/address/province', params)).data;
  return res;
};

interface BaseAddressItem {
  fullZhName: string,
  fullEnName: string,
  id: string,
}
export interface CountryItem extends BaseAddressItem {
  countryCode: string,
}
export interface ProvinceItem extends BaseAddressItem {
  provinceCode: string,
  countryId: string,
}

export type AddressItem = CountryItem | ProvinceItem;


export default defineComponent({
  name: 'country-select',
  inheritAttrs: false,
  props: {
    modelValue: {
      required: true,
      type: Array,
    },
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, attrs }) {
    const cascaderPanelVm = ref();

    const itemLabel = computed(() => {
      return currentLang.value === 'en' ? 'fullEnName' : 'fullZhName';
    });

    const state = reactive({
      isOpened: false,
      selectedNodesId: [],
      value: props.modelValue,
      cascaderConfig: {
        label: itemLabel.value,
        value: 'id',
        multiple: false,
        lazy: true,
        clearable: true,
        async lazyLoad(node, resolve) {
          const res = await fetchProvinceList({ parentIds: node.value });
          // if (state.provinceSearchText) {
          //   res = res.filter(province => province[itemLabel.value].includes(state.provinceSearchText));
          // }
          resolve(res.map(item => ({ ...item, leaf: true })));
          await nextTick();
          [, state.fullCascaderProvinceMenus] = cascaderPanelVm.value.menus;
        },
      },
      checkedNode: null,
      countrySearchText: '',
      provinceSearchText: '',
      addressOptions: [],
      presentTags: [],
      checkedNodes: [],
      fullCascaderCountryMenus: [],
      fullCascaderProvinceMenus: [],
    });

    const computePresentTags = async () => {
      await nextTick();
      const checkedNodes = cascaderPanelVm.value.getCheckedNodes(true);
      console.log(checkedNodes, 'checkedNodes');
      const tags = [];

      const genTag = node => ({
        node,
        key: node.uid,
        text: node.calcText(true, '-'),
        hitState: false,
        closable: true,
      });

      if (checkedNodes.length) {
        const [first, ...rest] = checkedNodes;
        console.log(first);
        const restCount = rest.length;
        tags.push(genTag(first));

        if (restCount) {
          // if (collapseTags) {
          //   tags.push({
          //     key: -1,
          //     text: `+ ${restCount}`,
          //     closable: false,
          //   });
          // } else {
          rest.forEach(node => tags.push(genTag(node)));
          // }
        }
      }

      state.checkedNodes = checkedNodes;
      state.presentTags = tags;
      // console.log(tags);
    };

    const handleChange = async (nodes) => {
      state.isOpened = false;
      await computePresentTags();
      console.log(state.presentTags, ' state.presentTags');
      if (state.presentTags.length) {
        const value = state.presentTags[0].node?.value;

        emit('getCity', value);
      } else {
        emit('getCity', '');
      }
    };

    const handleExpandChange = () => {
      console.log('handleExpandChange');
      cascaderPanelVm.value.menus[1] = cascaderPanelVm.value.menus[1].filter(item => {
        return item.label.includes(state.provinceSearchText);
      });
    };

    watch(() => state.countrySearchText, (val) => {
      if (val) {
        cascaderPanelVm.value.menus.splice(0, 1, state.fullCascaderCountryMenus.filter(item => {
          return item.label.includes(val);
        }));
      } else {
        cascaderPanelVm.value.menus.splice(0, 1, state.fullCascaderCountryMenus);
      }
    });

    watch(() => state.provinceSearchText, (val) => {
      // cascaderPanelVm.value.initStore();
      if (val) {
        cascaderPanelVm.value.menus.splice(1, 1, state.fullCascaderProvinceMenus.filter(item => {
          return item.label.includes(val);
        }));
      } else {
        cascaderPanelVm.value.menus.splice(1, 1, state.fullCascaderProvinceMenus);
      }
      console.log(cascaderPanelVm.value.menus);
    });

    watch(() => props.modelValue, (val) => {
      state.value = val;
      computePresentTags();
    });

    watch(() => state.value, (val) => {
      computePresentTags();
      emit('update:modelValue', val);
    });
    const clearBtnVisible = computed(() => {
      // if (
      //   !props.clearable

      // ) return false;

      return state.presentTags.length;
    });
    const handleClear = () => {
      cascaderPanelVm.value.clearCheckedNodes();
      state.isOpened = false;
      // togglePopperVisible(false);
    };
    const deleteTag = (index) => {
      const { value } = state;
      const val = value[index];
      state.value = value.filter((n, i) => i !== index);
    };

    onCreated(async () => {
      state.addressOptions = await fetchCountryList({});
      await nextTick();
      [state.fullCascaderCountryMenus] = cascaderPanelVm.value.menus;
    });

    return {
      ...toRefs(state),
      cascaderPanelVm,
      deleteTag,
      handleExpandChange,
      handleChange,
      clearBtnVisible,
      handleClear,
    };
  },
});
</script>

<style lang="scss">
.custom-input-wrapper {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  > .el-input {
    // line-height: 32px;
    min-height: 32px;
    &:hover {
      border: 1px solid #21bfb8;
      .el-tag.el-tag--info {
        color: $color-primary;
      }
    }
  }

  .selected-label-box {
    padding: 0 30px 0 0;

    .el-tag.el-tag--info {
      background: #fff !important;
      border: none;
      .iconfont {
        margin-right: 4px;
      }
      .el-tag__close {
        display: none;
      }
    }
  }
}
.is-select {
  border: 1px solid #21bfb8;
  .selected-label-box {
    .el-tag.el-tag--info {
      color: $color-primary;
    }
    .clean-icon {
      border: 1px solid $color-primary;
      font-size: 12px;
      border-radius: 50%;
    }
  }
}
.el-input--small {
  line-height: 33px;
}
.address-multiple-selector-popper {
  padding: 0;
  min-width: 555px !important;
  .search-input-wrapper {
    padding: 8px 12px 4px;
    small {
      display: block;
      margin-top: 10px;
      color: #999;
    }
    input {
      background: #f2f1f1;
      border: none;
    }
    & + .search-input-wrapper {
      border-left: 1px solid #e6e6e6;
    }
  }
  .address-multiple-cascader-panel {
    border: 0;
  }
  .el-cascader-menu {
    width: 50%;
    .el-cascader-menu__wrap {
      height: 292px;
    }
    .el-cascader-node__label {
      &:hover {
        color: $color-primary;
      }
    }
    &:nth-child(1) {
      .el-cascader-node {
        padding: 0 12px;
        .el-checkbox {
          display: none;
        }
        .el-cascader-node__label {
          &:hover {
            color: $color-primary;
          }
          padding-left: 0;
        }
      }
    }
  }
}
</style>
