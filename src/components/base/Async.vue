<template>
  <div class="async">
    <template v-if="isResolved">
      <slot :data="awaitData">
        {{ awaitData }}
      </slot>
    </template>
    <slot v-if="isPending" name="fallback"> loading... </slot>
    <slot v-if="isRejected" name="error"> error </slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  PropType,
  ref,
  computed,
  unref,
} from 'vue';

type AsyncReturnType<T extends (...args: any) => any> =
  ReturnType<T> extends Promise<infer P> ? P : ReturnType<T>;

type Status = 'pending' | 'resolved' | 'rejected';

export default defineComponent({
  name: 'async',
  props: {
    asyncFn: {
      type: Object as PropType<(...args: any[]) => Promise<any>>,
      required: true,
    },
  },
  setup(props, { attrs, emit, slots }) {
    const status = ref<Status>('pending');
    const awaitData = ref<AsyncReturnType<typeof props.async>>();
    const isPending = computed(() => unref(status) === 'pending');
    const isResolved = computed(() => unref(status) === 'resolved');
    const isRejected = computed(() => unref(status) === 'rejected');

    const init = async () => {
      try {
        awaitData.value = await props.asyncFn();
        status.value = 'resolved';
      } catch (error) {
        status.value = 'rejected';
        throw error;
      }
    };
    (async () => {
      await init();
    })();
    return {
      awaitData,
      isPending,
      isResolved,
      isRejected,
    };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.async {
}
</style>
