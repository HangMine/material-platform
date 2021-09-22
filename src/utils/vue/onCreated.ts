import Vue, {
  getCurrentInstance,
} from 'vue';

import { F } from 'ts-toolbelt';


export default (fn: F.Function) => {
  const inst = getCurrentInstance()!;
  (async () => {
    let isAsync = false;
    try {
      const result = fn();
      if (result && typeof result.then === 'function') {
        isAsync = true;
      }
      if (isAsync) {
        await result;
      }
    } catch (_e) {
      const e = _e as Error;
      const { errorHandler } = inst.appContext.app.config;
      if (errorHandler) {
        errorHandler(e, inst.proxy, `${isAsync ? 'async ' : ''}created`);
      } else {
        throw e;
      }
    }
  })();
};
