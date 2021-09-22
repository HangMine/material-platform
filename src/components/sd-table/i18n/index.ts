import {
  App, ref, watch, computed, Ref, unref,
} from 'vue';

import { get } from './key-serializer';

type Obj = { [key in string | number]: unknown };
export type Lang = 'cn' | 'en';

const DEFAULT_LANG = 'cn';

export const currentLang = ref<Lang>(DEFAULT_LANG);
export const lang = currentLang.value;
export const langStore = ref<Obj>({});
watch(currentLang, async () => {
  langStore.value = (await import(`./langs/${currentLang.value}.ts`)).default;
}, { immediate: true });

export const t = (key: string, defaultStr = ''): string => {
  try {
    return get(langStore.value, key) ?? defaultStr;
  } catch (e) {
    return defaultStr;
  }
};

export const refT = (key: string, defaultStr = ''): Ref<string> => {
  return computed(() => {
    return t(key, defaultStr);
  });
};

export const setLang = (newLang: Lang) => {
  currentLang.value = newLang;
};


const i18n = {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  install(_app: App, { lang = DEFAULT_LANG }: { lang?: Lang } = {}): void {
    _app.config.globalProperties.$t = t;
    currentLang.value = lang;
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
} => {
  return {
    lang: currentLang, setLang, langStore, t, refT,
  };
};

export default i18n;


// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $t: typeof t
//   }
// }
