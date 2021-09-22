<template>
  <div class="merchant-list">
    <div v-if="data.length" class="merchant-list-content" :style="style">
      <template v-if="type === 'tile'">
        <MerchantTileItem v-for="(merchant, i) of data" :key="i" :merchant="merchant"></MerchantTileItem>
      </template>
      <template v-else-if="type === 'list'">
        <MerchantListItem v-for="(merchant, i) of data" :key="i" :merchant="merchant"></MerchantListItem>
      </template>
    </div>

    <Empty v-bind="emptyOption" v-else></Empty>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { MerchantList } from '@/models/Merchant';
import { getPx } from '@/utils/util';
import Empty from '@/components/error/Empty.vue';
import MerchantTileItem from '../Item/TileItem.vue';
import MerchantListItem from '../Item/ListItem.vue';

export type MerchantListType = 'list' | 'tile';

export default defineComponent({
  name: 'merchant-list',
  components: { MerchantTileItem, MerchantListItem, Empty },
  props: {
    data: {
      type: Array as PropType<MerchantList>,
      required: true,
    },
    cols: {
      type: Number,
      default: 3,
    },
    gap: {
      type: [Number, String],
      default: 20,
    },
    type: {
      type: String as PropType<MerchantListType>,
      default: 'tile',
    },
    emptyOption: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});
    const style = computed(() => {
      return props.type === 'tile' ? {
        display: 'grid',
        'grid-template-columns': `repeat(${props.cols}, 1fr)`,
        gap: getPx(props.gap),
      } : {};
    });
    return {
      ...toRefs(state), style,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.merchant-list {
  .merchant-tile-item,
  .merchant-list-item {
    // https://stackoverflow.com/questions/51351137/css-text-overflow-ellipsis-not-working-in-grid-flex
    min-width: 0;
  }
}
</style>
