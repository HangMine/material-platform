<template>
  <el-button
    :type="btnType === 'text' ? 'text' : 'primary'"
    :class="{ 'login-btn': btnType === 'button' }"
    :disabled="disabled"
    @click="goToVerifyCode"
    ><template v-if="btnType === 'button'">{{ $t("login.get_verification_code") }}</template
    ><u v-else>{{ $t("login.get_verificate_again") }}</u>
  </el-button>
</template>

<script lang="ts">
import {
  defineComponent, computed, ref, PropType,
} from 'vue';
import openTencentCaptcha, { CaptchaRes } from '@/utils/open-tencent-captcha';
import { fetchCode, CodeType } from '@/api/account';
import useCode from '../utils/useCode';


export default defineComponent({
  name: '',
  components: {},
  props: {
    btnType: {
      type: String as PropType<'button' | 'text'>,
      default: 'button',
    },
    account: {
      type: String,
      required: true,
    },
    validator: {
      type: Function as PropType<() => Promise<boolean>>,
    },
    codeType: {
      type: String as PropType<CodeType>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const accountRef = computed(() => props.account);
    const captcha = ref<CaptchaRes>({});
    const { disabled } = useCode(accountRef);


    const getCode = async () => {
      if (props.validator) {
        await props.validator();
      }
      const _captcha = await openTencentCaptcha();
      captcha.value = _captcha;
      await fetchCode({
        account: accountRef.value,
        ticket: captcha.value.ticket,
        randstr: captcha.value.randstr,
        type: props.codeType,
      });
    };

    const goToVerifyCode = async () => {
      await getCode();
      emit('sended');
    };

    return {
      disabled,
      goToVerifyCode,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-button--text {
  padding: 0;
  min-height: unset !important;
}
</style>

