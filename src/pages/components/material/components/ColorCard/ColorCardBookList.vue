<template>
  <div class="color-card-book-list">
    <SelectList multileSelect="false" receiveType="ColorCard" :data="colorCardList" :onClickItem="handleClickItem">
    </SelectList>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import SelectList from '@/pages/components/FolderList/components/SelectList.vue';
import onCreated from '@/utils/vue/onCreated';
import { ColorCardItem, fetchColorCard, fetchColorList } from '@/api/materialMenu';
import { dialog } from '@/utils/vue/dialog';
import ColorCardList from './ColorCardList.vue';

type FrontColorCardBook = ColorCardItem & { bgColor?: string };

export default defineComponent({
  name: 'color-card-book-list',
  dialogify: {
    // noTitle: true,
    props: {
      title: '选择搭配色板',
      width: '440px',
      closeOnClickModal: false,
    },
  },
  components: { SelectList },
  props: {},
  setup(props, { emit }) {
    const state = reactive({
      colorCardList: [] as FrontColorCardBook[],
    });
    const handleClickItem = async (colorCardBook: FrontColorCardBook) => {
      const selectColorCardList = await dialog({
        is: ColorCardList,
        props: {
          colorCardBook,
        },
      });
      emit('confirm', selectColorCardList);
    };
    const getColorCardList = async (colorCardList: ColorCardItem[]) => {
      const newColorCardList = await Promise.all(colorCardList.map(async (item, i) => {
        const colorItem = ((await fetchColorList({
          fields: {
            id: item.id,
            colorFamily: '',
          },
          keywords: '',
          size: 1,
          page: 1,
        })).records[0] || { r: '', g: '', b: '' });
        const { r, g, b } = colorItem;
        colorCardList[i].bgColor = `rgb(${r},${g},${b})`;
        return colorCardList[i];
      }));
      return newColorCardList;
    };
    onCreated(async () => {
      const colorCardList = await fetchColorCard();
      const newColorCardList = await getColorCardList(colorCardList) as unknown as FrontColorCardBook[];
      state.colorCardList = newColorCardList;
    });
    return {
      ...toRefs(state), handleClickItem,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.color-card-book-list {
}
</style>
