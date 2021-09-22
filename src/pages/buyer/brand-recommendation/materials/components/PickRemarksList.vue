<template>
  <div class="pick-remarks-list">
    <template v-if="remarkList.length">
      <RemarkSection
        v-for="remark in remarkList"
        :key="`${remark.userId}-${remark.chooseTime}`"
        :remarkInfo="remark"
      ></RemarkSection>
    </template>
    <div class="block-error-wrapper flex-center" v-else>
      <BlockError size="small" :error="{ message: '暂无备注', code: '404' }"></BlockError>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchPickRemarkList, PickRemarkItem } from '@/api/recommendation';
import { MaterialListItem } from '@/models/Material';
import onCreated from '@/utils/vue/onCreated';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import BlockError from '@/components/error/BlockError.vue';
import RemarkSection from './RemarkSection.vue';

export default defineComponent({
  name: 'pick-remarks-list',
  components: { BlockError, RemarkSection },
  props: {
    material: {
      type: Object as PropType<MaterialListItem>,
      required: true,
    },
  },
  dialogify: {
    props: {
      title: '备注记录',
      width: '540px',
      closeOnClickModal: false,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: true,
      remarkList: [] as PickRemarkItem[],
    });
    const getRemarksList = async () => {
      try {
        state.loading = true;
        state.remarkList = await fetchPickRemarkList(props.material.originalCId) || [];
      } finally {
        state.loading = false;
      }
    };
    onCreated(async () => {
      getRemarksList();
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.pick-remarks-list {
  height: 100%;
  .block-error-wrapper {
    height: 100%;
  }
}
</style>
