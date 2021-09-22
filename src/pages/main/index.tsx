import {
  computed, defineComponent, reactive, render, watch, ref, Component,
} from 'vue';
import { useRoute } from 'vue-router';
import { getContextUser } from '@/loaders/context';
// import Header from '@/pages/components/Header';
import Sidebar from '@/pages/components/Sidebar/index.vue';

import './index.scss';

declare module '@vue/runtime-core' {
  interface ComponentCustomOptions {
    fullscreen?: boolean
  }
}

export default defineComponent({
  name: 'page-main',
  components: {},
  props: {},
  setup(props, { emit }) {
    const sideBar = ref<Component>();
    const layoutcontentRef = ref<Component>();

    // .$refs.menuRef.$el.clientWidth
    console.log(sideBar.value, 'sideBar');
    console.log(layoutcontentRef, 'layoutcontentRef');
    const route = useRoute();
    console.log(route.matched);
    const state = reactive({
      leftValue: '179px',
    });
    const hideSidebar = computed(() => {
      const hideSidebarRoutes = ['/profile'];
      return hideSidebarRoutes.includes(route.path);
    });
    const changeCollapse = (value:boolean) => {
      value ? state.leftValue = '63px' : state.leftValue = '179px';
    };


    console.log(sideBar.value);
    return () => (
      <div class="page-main flex-column">
        {/* <Header></Header> */}
        <div class="main">
          <Sidebar onChangeCollapse={changeCollapse} ref={sideBar} v-show={!hideSidebar.value}></Sidebar>
          <div style={{ left: state.leftValue }} class="layout-content flex-column flex-1">
            <router-view class="main-router-view"></router-view>
          </div>
        </div>
      </div>
    );
  },
});
