import Cookies from 'js-cookie';
// import documentDomain from '@/utils/document-domain';
import { ref, watch } from 'vue';
import getCookieConfig from '@/utils/get-token-config';

// const rIpv4 = /\d+\.\d+\.\d+\.\d+/;
const TOKEN_NAME = 't';

// function getDomainConfig() {
//   const path = '/';
//   if (documentDomain === 'localhost' || rIpv4.test(documentDomain)) {
//     return {
//       path,
//     };
//   }

//   return {
//     domain: `.${documentDomain}`,
//     path,
//   };
// }

export const currentToken = ref<undefined | string>(Cookies.get(TOKEN_NAME));
export default {
  get(): string | undefined {
    return Cookies.get(TOKEN_NAME);
    // return localStorage.getItem(TOKEN_NAME);
  },
  set(token: string): void {
    Cookies.set(TOKEN_NAME, token, getCookieConfig());
    currentToken.value = token;
    // localStorage.setItem(TOKEN_NAME, token);
  },
  remove(): void {
    Cookies.remove(TOKEN_NAME, getCookieConfig());
    currentToken.value = undefined;
    // localStorage.removeItem(TOKEN_NAME);
  },
  watch(watchFn: (token: undefined | string) => void): void {
    watch(currentToken, () => watchFn(currentToken.value));
  },
};
