<template>
  <div
    class="model-select"
    :class="{ 'is-checked': model.isChecked, 'is-vip': model.isVip, 'is-disabled': model.isDisabled }"
  >
    <div class="img-wrap" @click="selectModel(model)">
      <base-image :src="model.img"></base-image>
    </div>
    <div class="footer">
      <h4 class="title">{{ modelName }}</h4>
      <ul class="part-ul">
        <li
          class="part-li"
          :class="{ 'is-checked': part.isChecked }"
          v-for="(part, i) of model.partProp"
          :key="i"
          @click="selectPart(part)"
        >
          {{ part.name }}
        </li>
      </ul>
    </div>
    <div v-if="!model.isDisabled" class="checkbox-wrap">
      <el-checkbox
        :modelValue="model.isChecked"
        @update:modelValue="selectModel(model)"
        :indeterminate="model.isIndeterminate"
      ></el-checkbox>
    </div>
    <div v-if="model.isVip" class="vip-tag">付费</div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/no-mutating-props */
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch,
} from 'vue';
import { SelectableModel, SelectablePart, useModelUtils } from './utils';

export default defineComponent({
  name: 'model-select',
  components: {},
  props: {
    model: {
      type: Object as PropType<SelectableModel>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});

    const { setModelCheckStatus, getModelname } = useModelUtils();
    const modelName = computed(() => getModelname(props.model));


    watch(() => props.model.partProp, () => {
      setModelCheckStatus(props.model);
    }, { deep: true, immediate: true });

    const selectAllPart = (model: SelectableModel) => {
      model.partProp.forEach(part => {
        part.isChecked = true;
      });
    };

    const clearAllPart = (model: SelectableModel) => {
      model.partProp.forEach(part => {
        part.isChecked = false;
      });
    };

    const selectModel = (model: SelectableModel) => {
      model.isIndeterminate = false;
      model.isChecked = !model.isChecked;
      if (model.isChecked) {
        selectAllPart(model);
      } else {
        clearAllPart(model);
      }
    };

    const selectPart = (part: SelectablePart) => {
      part.isChecked = !part.isChecked;
    };

    return {
      ...toRefs(state), selectModel, selectPart, modelName,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.model-select {
  position: relative;
  border: 1px solid #dddddd;
  border-radius: 5px;
  overflow: hidden;
  &.is-checked {
  }
  &.is-vip {
  }
  &.is-disabled {
    pointer-events: none;
    .footer {
      .part-ul {
        .part-li {
          border-color: #dddddd;
          color: #dddddd;
        }
      }
    }
  }
  .img-wrap {
    position: relative;
    padding-top: 78%;
    background: linear-gradient(180deg, #6f7174, #f1f2f5);
    cursor: pointer;

    .el-image {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .footer {
    padding: 12px;
    .title {
      font-weight: 400;
      color: #222222;
      line-height: 20px;
    }
    .part-ul {
      display: flex;
      flex-wrap: wrap;
      .part-li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 54px;
        height: 28px;
        border: 1px solid #cccccc;
        border-radius: 5px;
        color: #666666;
        margin-right: 8px;
        margin-top: 8px;
        cursor: pointer;

        &.is-checked {
          color: $color-primary;
          border-color: $color-primary;
          background-color: rgba(33, 191, 184, 0.1);
        }
      }
    }
  }
  .checkbox-wrap {
    position: absolute;
    left: 8px;
    top: 8px;
  }
  .vip-tag {
    width: 38px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 8px;
    top: 8px;
    background: linear-gradient(270deg, #f7d395, #ffe7b3);
    border-radius: 4px;
    color: #222222;
    font-size: 12px;
  }
}
</style>
