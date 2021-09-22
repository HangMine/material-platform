<template>
  <div class="package-badge" :style="{ backgroundImage: bgImage }"></div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { getContextCompany } from '@/loaders/context';

export default defineComponent({
  name: 'package-badge',
  components: {},
  props: {
    type: {
      type: String as PropType<'common' | 'vip'>,
    },
  },
  setup(props, { emit }) {
    const companyInfo = computed(() => getContextCompany());
    const _type = computed(() => props.type ?? (companyInfo.value?.isVIP ? 'vip' : 'common'));

    const bgImage = computed(() => {
      const _img = _type.value === 'vip' ? require('@/assets/img/profile/badge-vip.png') : require('@/assets/img/profile/badge-common.png');
      return `url(${_img})`;
    });
    return {
      bgImage,
    };
  },
});
</script>
<style lang="scss" scoped>
.package-badge {
  width: 45px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}
</style>
