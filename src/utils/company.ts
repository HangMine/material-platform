import Cookies from 'js-cookie';
import getCookieConfig from '@/utils/get-token-config';

const ORGID_NAME = 'Sdtc-Org-Id';
export default {
  set(companyId: string) {
    Cookies.set(ORGID_NAME, companyId, getCookieConfig());
  },
  get() {
    return Cookies.get(ORGID_NAME);
  },
  remove() {
    Cookies.remove(ORGID_NAME, getCookieConfig());
  },
};
