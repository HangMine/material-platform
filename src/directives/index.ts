import { keys } from '_/keys';
import { App } from 'vue';
import { all } from 'deepmerge';
// import focus from './focus';
import selectText from './select-text';
// import can from './can';

const directives = {
  // focus,
  selectText,
  // can,
};

export default {
  install(_Vue: App) {
    keys(directives).forEach(k => {
      _Vue.directive(k, directives[k]);
    });
  },
};
