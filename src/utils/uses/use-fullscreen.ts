import {
  reactive, ref, toRefs,
} from 'vue';
import screenfull from 'screenfull';

const isFullScreen = ref(false);

let globalResolve: (isFullscreen: boolean) => void;

if (screenfull.isEnabled) {
  screenfull.on('change', () => {
    isFullScreen.value = screenfull.isFullscreen;
    globalResolve(screenfull.isFullscreen);
  });
}

const useFullScreen = () => {
  const state = reactive({});

  const fullScreenToggle = (el?: HTMLElement) => {
    return new Promise((resolve) => {
      globalResolve = resolve;
      if (screenfull.isEnabled) {
        screenfull.toggle(el);
      }
    });
  };


  return {
    ...toRefs(state), screenfull, isFullScreen, fullScreenToggle,
  };
};

export default useFullScreen;
