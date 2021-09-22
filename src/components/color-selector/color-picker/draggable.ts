import { on, off } from 'element-plus/packages/utils/dom';

let isDragging = false;

export declare interface IOptions {
  drag?: (event: Event) => void
  start?: (event: Event) => void
  end?: (event: Event) => void
}

export default function (element: HTMLElement, options: IOptions) {
  const moveFn = function (event: Event) {
    options.drag?.(event);
  };

  const upFn = function (event: Event) {
    off(document, 'mousemove', moveFn);
    off(document, 'mouseup', upFn);
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    options.end?.(event);
  };

  on(element, 'mousedown', (event) => {
    if (isDragging) return;
    document.onselectstart = () => false;
    document.ondragstart = () => false;
    on(document, 'mousemove', moveFn);
    on(document, 'mouseup', upFn);

    isDragging = true;

    options.start?.(event);
  });
}
