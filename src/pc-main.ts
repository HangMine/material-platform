/* eslint-disable import/prefer-default-export */
import { App } from 'vue';

import VueAct from '@/public-utils/plugins/vue-act';
import errHandler, { isNeedLoginError } from '@/utils/error-handler';
import VueErrorHandler from '@/utils/vue/vue-error-handler';
import VueHistory from '@/utils/vue/vue-history';
import VueI18n from '@/i18n';
import Directives from '@/directives';
import can, { needFillInfo, needLogin } from '@/utils/can';
import store from './store';
import router from './router';
import components from './components';
import dialog from './utils/vue/dialog';

export const extendBaseRootApp = (app: App) => {
  app.use(store).use(router).use(components)
    .use(VueErrorHandler)
    .use(VueAct, {
      success([msg]: [string]) { this.$message.success(msg); },
      error(error: Error) {
        errHandler.call(this, error);
      },
    })
    .use(VueHistory, {
      router,
    })
    .use(Directives)
    .use({
      install(_Vue) {
        _Vue.config.globalProperties.$can = can;
        _Vue.config.globalProperties.$needFillInfo = needFillInfo;
        _Vue.config.globalProperties.$needLogin = needLogin;
      },
    });
};

export const extendRootApp = (app: App) => {
  extendBaseRootApp(app);
  app.use(dialog).use(VueI18n);
};

export const extendDialogApp = (app: App) => {
  extendBaseRootApp(app);
  app.use(VueI18n, { unSetLang: true });
};


