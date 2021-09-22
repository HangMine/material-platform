<template>
  <i class="menu-icon i-shouqizhankai-16" @click="changeCollapse"></i>

  <el-menu
    class="main-home-sidebar el-menu-vertical-demo"
    ref="menuRef"
    :default-active="defaultPath"
    router
    :collapse="isCollapse"
  >
    <Menu :menuList="menus"></Menu>
  </el-menu>
</template>
<script lang="ts">
import { t } from '@/i18n/index';

import usePermisson from '@/utils/uses/use-permisson';
import {
  defineComponent, reactive, toRefs, watch, onMounted, computed,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Menu from './components/menu.vue';
import './index.scss';

export default defineComponent({
  name: 'Sidebar',
  components: { Menu },
  props: {

  },
  setup(props, { emit }) {
    const route = useRoute();
    const { isSupplier, isBuyer } = usePermisson();
    const state = reactive({
      isCollapse: false,
      defaultPath: '',


    });
    const menus = computed(() => {
      return [{
        index: '/main',
        title: t('menu-management.asset_management'),
        icon: 'i-zichanguanli-16',
        show: isSupplier.value,
        childList: [
          {
            index: '/main/material-manage',
            title: t('menu-management.material_management'),
            icon: '',

          },
          {
            index: '/main/material-menu/color-card',
            title: t('menu-management.color_card_management'),
            icon: '',
          },
          {
            index: '/main/material-menu/material-book',
            title: t('menu-management.material_book_management'),
            icon: '',
          },

        ],
      }, {
        show: isSupplier.value,
        index: '/main/market',
        title: t('menu-management.public_market'),
        icon: 'i-r-gongkaishichang-16',
        // show: can('0015'),
      }, {
        show: isSupplier.value,
        index: '/main/collection',
        title: t('menu-management.favorites'),
        icon: 'i-r-shoucangjia-16',
        childList: [
          {
            index: '/main/collection/folders',
            title: t('folder.material_book'),
            icon: '',
          },
          {
            index: '/main/collection/color-card',
            title: t('folder.color_card_book'),
            icon: '',
          },

        ],
        // show: can('0019'),

      },
      {
        show: isSupplier.value,
        index: '/main/apply-record/sample',
        title: t('menu-management.application_list'),
        icon: 'i-r-shenqingliebiao-16',

      },
      {
        index: '/main/data-manage',
        title: t('menu-management.data_management'),
        icon: 'i-r-gongzuotai-16',
        show: isSupplier.value,
        childList: [
          {
            index: '/main/data-manage/category',
            title: t('menu-management.classify_management'),
          },
          {
            index: '/main/data-manage/field',
            title: t('menu-management.field_management'),
          },

        ],
      },
      {
        index: '/main/recommendation-manage',
        title: t('menu-management.recommendation_manage'),
        icon: 'i-jibenxinxi1',
        show: isSupplier.value,
        childList: [
          {
            index: '/main/recommendation-manage/material',
            title: t('menu-management.recommendation_manage_material'),
          },
          {
            index: '/main/recommendation-manage/cooperation',
            title: t('menu-management.recommendation_manage_cooperation'),
          },

        ],
      }];
    });


    const changeCollapse = () => {
      state.isCollapse = !state.isCollapse;
      emit('changeCollapse', state.isCollapse);
    };
    watch(() => route.path, (value, oldValue) => {
      state.defaultPath = value;
      switch (value) {
        case '/main/material-menu/color-library':
          state.defaultPath = '/main/material-menu/color-card';
          break;
        case '/main/material-menu/material-list':
          state.defaultPath = '/main/material-menu/material-book';
          break;
        case '/main/collection/materials':
          state.defaultPath = '/main/collection/folders';
          break;
        case '/main/collection/color-card-list':
          state.defaultPath = '/main/collection/color-card';
          break;
        default:
          break;
      }
    }, { immediate: true });

    return {
      ...toRefs(state),
      isSupplier,
      isBuyer,
      menus,
      changeCollapse,

    };
  },
});

</script>
<style lang="scss" scoped>
.menu-icon {
  position: fixed;
  top: 25px;
  left: 20px;
  &:hover {
    color: $color-primary;
  }
}
</style>
