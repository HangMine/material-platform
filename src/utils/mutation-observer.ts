import {
  onMounted, onUnmounted, Ref, unref,
} from '@vue/runtime-core';
import { debounce } from 'throttle-debounce';


// 观察器的配置（需要观察什么变动）
const defaultConfig = { attributes: true, childList: true, subtree: true };

type ObserveOption = {
  config: typeof defaultConfig,
  debounceTime: number // 为了性能考虑,默认设置100的节流
};
const defaultObserveOption = { config: defaultConfig, debounceTime: 100 };
const observe = (refEl: Ref<HTMLElement | undefined> | HTMLElement, callback: MutationCallback, option: ObserveOption = defaultObserveOption) => {
  const el = unref(refEl);
  if (!el) {
    throw new Error('observe失败:找不到el');
  }
  const { config, debounceTime } = option;
  const debounceCallback = debounce(debounceTime, false, callback);
  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(debounceCallback);

  // 以上述配置开始观察目标节点
  observer.observe(el, config);


  return observer;
};

export const useElObserve = (...args: Parameters<typeof observe>) => {
  let observer: MutationObserver | undefined;
  onMounted(() => {
    observer = observe(...args);
  });
  onUnmounted(() => {
    observer?.disconnect();
  });
  return {
    observe,
  };
};

export default observe;
