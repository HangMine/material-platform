<template>
  <section class="remark-secion">
    <header class="flex">
      <base-image class="avatar" :src="remarkInfo.avatar"></base-image>
      <div class="flex-1">
        <h4>{{ remarkInfo.userName }}</h4>
        <div class="desc">{{ dayjs(remarkInfo.chooseTime).format("YYYY/MM/DD") }}</div>
      </div>
    </header>
    <article>{{ remarkInfo.remarks || "--" }}</article>
  </section>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { PickRemarkItem } from '@/api/recommendation';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'remark-secion',
  components: {},
  props: {
    remarkInfo: {
      type: Object as PropType<PickRemarkItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    return {
      ...toRefs(state),
      dayjs,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.remark-secion {
  padding: 20px 0;
  .el-image {
    width: 32px;
    height: 32px;
    border: 1px solid #dddddd;
    border-radius: 50%;
    margin-right: 8px;
  }
  h4,
  .desc {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #666;
  }
  article {
    margin-left: 40px;
    margin-top: 8px;
    color: #222;
  }
  + .remark-secion {
    border-top: 1px solid #eee;
  }
}
</style>
