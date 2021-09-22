<template>
  <div class="mobile-tip">
    {{ getMssage() }}
  </div>
</template>

<script lang="ts">
import confirm from '@/utils/vue/dialog/confirm';
import {
  defineComponent, reactive, computed, ref, toRefs, onMounted,
} from 'vue';

export default defineComponent({
  name: 'mobile-tip',
  components: {},
  props: {
    message: {
      type: String,
      default: '请在电脑端打开页面',
    },
    encodeMessage: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const state = reactive({});

    const getMssage = () => {
      return props.encodeMessage ? decodeURIComponent(props.encodeMessage) : props.message;
    };

    onMounted(async () => {
      // TODO: 后续再优化
      const appEl = document.querySelector('#app') as HTMLElement;
      if (appEl) appEl.style.minWidth = 'auto';


      // await confirm({
      //   message: getMssage(),
      // }, {
      //   props: {
      //     width: '80%',
      //   },
      // });
    });
    return {
      ...toRefs(state), getMssage,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.mobile-tip {
  line-height: 24px;
  padding: 12px;
}
</style>
