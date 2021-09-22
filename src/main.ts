/* eslint-disable import/prefer-default-export */
import { App } from 'vue';
import { getApp } from './utils/util';

let currentApp: App;

(async () => {
  const { app, extendRootApp } = await getApp();
  currentApp = app;
  extendRootApp(app);
  app.mount('#app');
})();

export const getCurrentApp = () => currentApp;


