import { VNode, DirectiveBinding } from 'vue';
import can from '@/utils/can';


export default {
  mounted(el:HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const _code = binding.arg;
    console.log(_code, can(_code), binding, vnode);

    if (!_code || can(_code)) {
      if (el.parentNode) {
        el.parentNode?.removeChild(el);
      } else {
        const comment = document.createComment(' ');
        Object.defineProperty(comment, 'setAttribute', {
          value: () => undefined,
        });
        vnode.elm = comment;
        vnode.text = ' ';
        vnode.isComment = true;
        vnode.context = undefined;
        vnode.tag = undefined;
        // if (vnode.componentInstance) {
        //   vnode.componentInstance.$el = comment;
        // }
      }
      // console.log(vnode?.props?.onClick);
      // if (vnode?.props?.onClick) {
      //   // vnode?.props?.onClick();
      //   el.onclick = function () {
      //     console.log(111);
      //   };
      //   el.removeEventListener('click', vnode?.props?.onClick);
      //   // delete vnode.props.onClick;
      //   // vnode.props.onClick = () => {console.log(111)};
      //   console.log(vnode?.props?.onClick);
      // }
      // el.addEventListener('click', () => {
      //   ElMessageBox.alert('这是一段内容', '标题名称', {
      //     confirmButtonText: '确定',
      //   });
      // });
    }
  },
};
