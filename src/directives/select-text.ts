import { VNode, DirectiveBinding } from 'vue';

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const target = el.tagName === 'input' ? el : el.querySelector('input');
    if (!target) {
      return;
    }
    target.addEventListener('click', () => {
      target.select();
    });
  },
};
