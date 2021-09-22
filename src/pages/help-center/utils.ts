/* eslint-disable import/prefer-default-export */
import {
  defineComponent, reactive, computed, ref, toRefs, watch, nextTick,
} from 'vue';

export const helpCenterStore = reactive({
  loading: false,
});


