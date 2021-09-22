<template>
  <div class="overview-echart-title flex-space-between">
    <p class="title">{{ title }}</p>
    <p class="select-search">
      <el-select size="small" @change="handleChange" v-model="value" placeholder="全部">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </p>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs,
} from '@vue/runtime-core';

export default defineComponent({
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  emits: ['selectChange'],
  setup(props, { emit }) {
    const state = reactive({
      value: '',
      options: [{ label: '全部', value: '' }, { label: '昨天', value: '1' }, { label: '近一周', value: '2' }],

    });
    const handleChange = (value: string) => {
      emit('selectChange', value, props.type);
      console.log(333);
    };


    return { ...toRefs(state), handleChange };
  },
});
</script>
<style lang="scss">
.overview-echart-title {
  line-height: 20px;
  .title {
    font-weight: 600;
  }
  .select-search {
    color: #666;
    .el-input__inner {
      border: none;
      width: 100px;
    }
    .el-input__suffix {
      .el-select__caret {
        color: #666;
        font-size: 12px;
      }
      right: 27px;
      top: -2px;
    }
  }
}
</style>
