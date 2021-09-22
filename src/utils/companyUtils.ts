import Cookies from 'js-cookie';
import getCookieConfig from './get-token-config';

const ORGID_NAME = 'Sdtc-Org-Id';
export default {
  set(companyId: string) {
    Cookies.set(ORGID_NAME, companyId, getCookieConfig());
    // 用于灰度发布读静态资源,后端用
    if (!Cookies.get('Idealab-Org-Id')) {
      Cookies.set('Idealab-Org-Id', companyId, getCookieConfig());
    }
  },
  get() {
    return Cookies.get(ORGID_NAME);
  },
  remove() {
    Cookies.remove(ORGID_NAME, getCookieConfig());
  },
};
