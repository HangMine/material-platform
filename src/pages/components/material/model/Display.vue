<template>
  <div class="model-display">
    <div class="img-wrap">
      <base-image :src="model.img"></base-image>
    </div>
    <div class="footer">
      <h4 class="title">{{ modelName }}</h4>
      <div class="sub-title">
        {{ displayPart }}
      </div>
    </div>
    <div class="model-type-tag">
      {{ modelType }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { ModelTypeItem, Model, Part } from '@/api/material';
import { useModelUtils } from './utils';

export default defineComponent({
  name: 'model-display',
  components: {},
  props: {
    model: {
      type: Object as PropType<Model>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { getModelType, getModelname } = useModelUtils();
    const state = reactive({});
    const displayPart = computed(() => {
      return props.model.partProp.map(part => part.name).join('/');
    });
    const modelType = computed(() => getModelType(props.model));
    const modelName = computed(() => getModelname(props.model));
    return {
      ...toRefs(state), displayPart, modelType, modelName,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.model-display {
  position: relative;
  border: 1px solid #dddddd;
  border-radius: 5px;
  overflow: hidden;
  .img-wrap {
    position: relative;
    padding-top: 78%;
    background: linear-gradient(180deg, #6f7174, #f1f2f5);

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
    .sub-title {
      font-size: 12px;
      color: #999999;
      padding-top: 6px;
    }
  }
  .model-type-tag {
    position: absolute;
    left: 8px;
    top: 8px;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    border-radius: 15px;
    padding: 0 8px;
    font-size: 12px;
    line-height: 24px;
  }
}
</style>
