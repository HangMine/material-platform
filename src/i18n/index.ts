import {
  App, ref, watch, computed, Ref, unref, onUnmounted,
} from 'vue';
import elZhLocale from 'element-plus/lib/locale/lang/zh-cn';
import { unFalsy } from '@/components/form/HForm/utils';
import { get } from './key-serializer';
import zhLocale from './langs/cn.json';

type Obj = { [key in string | number]: unknown };

export type Lang = 'cn' | 'en';
type LangChangeCallback = () => void;

const DEFAULT_LANG = 'cn';

export const currentLang = ref<Lang>(DEFAULT_LANG);
export const lang = currentLang.value;
export const langStore = ref<Obj>({});
const langChangeCallbacks: LangChangeCallback[] = [];
watch(currentLang, async () => {
  let locale = {} as Obj;
  let elLocale = {} as Obj;
  if (currentLang.value === 'cn') {
    locale = zhLocale;
    elLocale = elZhLocale;
  } else {
    locale = (await import(`./langs/${currentLang.value}.json`)).default;
    elLocale = (await import(`element-plus/lib/locale/lang/${currentLang.value}.js`)).default;
  }
  langStore.value = {
    ...locale,
    el: elLocale.el,
  };
  langChangeCallbacks.forEach(callback => callback());
}, { immediate: true });

// 解析字符串中的{{}}的变量
const translateStrVar = (mapKey: string, map?: Record<string | number, string>) => {
  let text: string = get(langStore.value, mapKey);
  if (typeof map === 'object') {
    const reg = /\{{1,2}(.*?)\}{1,2}/g;
    text = text.replace(reg, (regStr, group1Str) => {
      return unFalsy(map[group1Str]) ? map[group1Str] : regStr;
    });
  }
  return text;
};

export const t = (key: string, map?: Record<string | number, string>, defaultStr?: string): string => {
  try {
    const text = translateStrVar(key, map) ?? defaultStr;
    return text;
  } catch (e) {
    return defaultStr || '';
  }
};

export const refT = (key: string, map?: Record<string | number, string>, defaultStr = ''): Ref<string> => {
  return computed(() => {
    return t(key, map, defaultStr);
  });
};

export const setLang = (newLang: Lang) => {
  currentLang.value = newLang;
};


const i18n = {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  install(_app: App, { lang = DEFAULT_LANG, unSetLang = false }: { lang?: Lang, unSetLang?: boolean } = {}): void {
    _app.config.globalProperties.$t = t;
    if (!unSetLang) currentLang.value = lang;
  },
  t,
  refT,
  lang,
  setLang,
};

export const useI18n = (): {
  lang: typeof currentLang; // useI18n的language相当于currentLang,方便使用
  setLang: typeof setLang;
  langStore: typeof langStore;
  t: typeof t;
  refT: typeof refT;
  onLangChange: (callback: LangChangeCallback) => () => void
} => {
  let currentCallback: LangChangeCallback;
  const clearCallback = () => {
    const callbackIndex = langChangeCallbacks.findIndex(item => item === currentCallback);
    langChangeCallbacks.splice(callbackIndex, 1);
  };
  const onLangChange = (callback: LangChangeCallback) => {
    // 这个勾子是保证在langStore改变之后执行
    currentCallback = callback;
    langChangeCallbacks.push(currentCallback);
    return clearCallback;
  };
  return {
    lang: currentLang, setLang, langStore, t, refT, onLangChange,
  };
};

export default i18n;


// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $t: typeof t
//   }
// }
