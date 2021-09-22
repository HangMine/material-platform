<template>
  <div class="host block-error" :class="[align, size]">
    <img :src="computedImg" />
    <div class="content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="content" v-else>
      <h2 v-if="error.title">{{ error.code }} {{ error.title }}</h2>
      <div class="desc" v-html="lf2br(getMessage(error))"></div>
      <div class="btn-menu" v-if="buttons && buttons.length">
        <el-button
          round
          size="small"
          v-for="(item, index) in buttons"
          :key="index"
          :type="item.type"
          @click="handlerButton(item)"
        >
          {{ item.label }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref, computed, defineComponent, watch, getCurrentInstance,
} from 'vue';
import {
  getMessage, isEmptyError, isAuthError, parseError, logError,
  ErrorLike, isNoSearchResultError, isNoNewsError, isNoRecordError,
  // isNoRecordError, isNoSearchResultError, isNoImageError,
} from '@/utils/error-handler';
import AppError from '@/utils/error';
// import useTheme from '@/utils/composables/use-theme';
import { lf2br } from '../../filters';

function error2Image(error: ErrorLike) {
  // if (isNoRecordError(error)) {
  //   return 'no-record';
  // }
  // // if (lf2br(getMessage(error)) === '暂无操作记录') {
  // //   return 'no-record';
  // // }
  if (isNoSearchResultError(error)) {
    return 'no-result';
  }
  if (isEmptyError(error)) {
    console.log('isEmpty');
    return 'empty';
  }
  if (isAuthError(error)) {
    return 'no-auth';
  }
  if (isNoNewsError(error)) {
    return 'no-news';
  }
  if (isNoRecordError(error)) {
    return 'no-records';
  }
  // if (isNoImageError(error)) {
  //   return 'no-image';
  // }
  return 'network';
}
type ButtonConfig = {
  type: '' | 'primary' | 'danger',
  handler: Function,
  label: string
};

export default defineComponent({
  props: {
    align: {
      default: 'vertical',
    },
    error: {
      type: undefined as unknown as () => ErrorLike,
      default() {
        return AppError.unknown;
      },
    },
    size: {
      default: '',
    },
    img: {
      type: String,
    },
    buttons: {
      type: Array as () => ButtonConfig[],
    },
  },
  setup(props) {
    const that = getCurrentInstance();
    // const { isDark } = useTheme();
    const name = ref(error2Image(props.error));

    const error_ = computed(() => parseError(props.error));

    watch(() => error_.value, (e) => {
      if (e.feCodeError) {
        logError(e);
      }
    }, { immediate: true });

    function handlerButton(item: ButtonConfig) {
      item.handler.call(that);
    }

    const computedImg = computed(() => {
      // eslint-disable-next-line import/no-dynamic-require
      return props.img || require(`@/assets/img/error/${name.value}.png`);
    });

    return {
      // isDark,
      computedImg,
      lf2br,
      getMessage,
      error_,
      handlerButton,
    };
  },
});
</script>

<style lang="scss" scoped>
.host.block-error {
  // max-width: 200px;
  padding: 0.7142em 0;
  margin: 0 auto;
  img {
    width: 180px;
  }
  &.small {
    img {
      width: 120px;
    }
  }
}

.btn-menu {
  margin-top: 2em;
  height: 32px;
}
.content {
  // width: 100%;
  min-width: 280px;
  color: #000;
  text-align: center;
}

h2 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.143em;
  line-height: 1.5;
  color: #222;
  font-weight: 500;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.3em;
  line-height: 1.5;
  color: #434e59;
}

.desc {
  line-height: 1.5;
  color: #999;
  // min-width: 240px;
  width: 100%;
}

h2 + .desc {
  font-size: 1em;
  line-height: 1;
  margin-top: 0.7143em;
  color: #666;
}

.host {
  display: flex;
}

small {
  display: block;
  margin-top: 16px;
  word-wrap: normal;
  word-break: break-all;
}

.vertical {
  flex-direction: column;
  align-items: center;
  &:not(.small) .content {
    margin-top: 0.7143em;
  }
}

.horizontal {
  flex-direction: row-reverse;

  .content {
    margin-right: 1.4em;
  }
}

.large {
  .content {
    flex: 1;
  }

  h2 {
    font-size: 2em;
  }

  h1 {
    font-size: 6em;
  }

  .background {
    flex: 2;
  }
}
</style>
