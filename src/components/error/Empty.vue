<template>
  <div class="sd-empty">
    <BlockError class="empty-block-error" :error="error" :img="computedImg"></BlockError>
    <!-- <BlockError class="empty-block-error" :img="require('@/assets/img/error/empty.png')"> 暂无数据 </BlockError> -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import BlockError from '@/components/error/BlockError.vue';
import { t } from '@/i18n/index';

export default defineComponent({
  name: 'sd-empty',
  components: { BlockError },
  props: {
    type: {
      type: String as PropType<'search'>,
    },
    message: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    const error = computed(() => {
      switch (props.type) {
        case 'search':
          return {
            message: props.message || t('empty-page-tip.no_search_result'), code: '',
          };
        default:
          return {
            message: props.message || t('empty-page-tip.no_data'), code: '404',
          };
      }
    });
    const computedImg = computed(() => {
      switch (props.type) {
        case 'search':
          return require('@/assets/img/error/no-result.png');
        default:
          return undefined;
      }
    });
    return {
      ...toRefs(state), error, computedImg,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.sd-empty {
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  .empty-block-error {
  }
}
</style>
