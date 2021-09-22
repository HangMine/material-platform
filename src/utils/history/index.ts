import { getLang } from '@/i18n';
import envs, { getHostParamsFromPath } from '../envs';
/* eslint-disable class-methods-use-this */

import _History, { ComputedHistoryLocation } from './history';

class History extends _History {
  useRouterToNavigate(to: ComputedHistoryLocation) {
    if (!envs.VUE_APP_IS_REMOTE) {
      return to.isSameDomain;
    }
    // const a = document.createElement('a');
    // a.href = to.fullPathWithDomain;
    // const { hostname, pathname } = a;
    // console.log(getHostParamsFromPath(`${hostname}${pathname}`));
    // const [,,,,, moduleName] = getHostParamsFromPath(`${hostname}${pathname}`);
    const queryLang = to.query.lang;
    const sameLang = !queryLang || getLang() === queryLang;
    return sameLang && to.isSameDomain;
  }
}


export const instance = new History();

export default instance;
export { instance as history };
