<template>
  <div class="select-list">
    <template v-if="currentData.length > 0">
      <div class="select-list-item" v-for="(item, index) in currentData" :key="index" @click="chooseItem(item)">
        <div class="item-left">
          <div
            v-if="receiveType === 'ColorCard'"
            class="img-box"
            :style="{ backgroundColor: item.bgColor || '#eee' }"
          ></div>
          <div v-if="receiveType !== 'ColorCard'" class="icon-box">
            <img class="cover-img" :src="coverImg" />
          </div>
          <div class="item-info">
            <p>{{ item.name }}</p>
            <p>
              {{ item.count || "0"
              }}{{ receiveType === "ColorCard" ? $t("folder.color-card-book.number") : $t("folder.section_materials") }}
            </p>
          </div>
        </div>
        <p class="icon-right-box">
          <i :class="[item.__isChecked ? 'check-color' : 'no-check-color', 'i-on-24']"></i>
        </p>
      </div>
    </template>
    <Empty v-else></Empty>
  </div>
</template>
<script lang="ts">
import { ColorCardItem } from '@/api/materialMenu';
import {
  defineComponent, toRefs, reactive, watch, PropType,
} from '@vue/runtime-core';
import Empty from '@/components/error/Empty.vue';

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<Obj[]>,
      required: true,
    },
    multileSelect: {
      type: String,

    },
    receiveType: {
      type: String,
    },
    onClickItem: {
      type: Function as PropType<(item: Obj) => void>,
    },
  },
  components: { Empty },
  emits: ['change'],
  setup(props, { emit }) {
    console.log(props.receiveType);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const coverImg = require('@/assets/img/public/folder.png');
    const state = reactive({
      currentData: [] as typeof props.data,
      allChekced: false,
    });
    // const bgStyle = {
    //   background: 'red',
    // };
    console.log(props.data, 'props.data');
    const getCurrentData = () => {
      return props.data.map(item => {
        const __isChecked = false;
        return { ...item, __isChecked };
      });
    };

    const getSelectedData = () => {
      return state.currentData.filter(item => item.__isChecked);
    };
    watch(() => props.data, () => {
      state.currentData = getCurrentData();
      console.log(state.currentData, 'state.currentData');
    }, { immediate: true });


    const chooseItem = (item: GetArrayItem<typeof state.currentData>) => {
      if (props.onClickItem) {
        props.onClickItem(item);
        return;
      }
      console.log(props.multileSelect, 'props.multileSelect', props.multileSelect === 'true');
      if (props.multileSelect === 'true') {
        item.__isChecked = !item.__isChecked;
      } else if (props.multileSelect === 'false') {
        state.currentData = state.currentData.map(ele => {
          ele.name === item.name ? ele.__isChecked = true : ele.__isChecked = false;
          return { ...ele };
        });
        item.__isChecked = !item.__isChecked;
      }

      emit('change', getSelectedData());
    };
    return {
      ...toRefs(state), chooseItem, coverImg,
    };
  },
});
</script>
<style lang="scss">
.select-list {
  .select-list-item {
    cursor: pointer;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;

    .item-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cover-img {
      width: 40px;
    }
    .img-box,
    .icon-box {
      height: 40px;
      width: 40px;

      margin-right: 8px;
      border-radius: 4px;
      overflow: hidden;
    }
    .item-info {
      p {
        &:last-child {
          margin-top: 2px;
          font-size: 12px;
          color: #999999;
        }
      }
    }
    .check-color {
      color: $color-primary;
    }
    .no-check-color {
      color: #b2ece9;
    }
  }
}
</style>
