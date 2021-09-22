<template>
  <div class="overview-total-number-list flex-space-between">
    <div class="item" v-for="(item, index) in totalNumberList" :key="index">
      <p class="icon-box">
        <icon :class="['iconfont', item.icon]"></icon>
      </p>
      <p class="title">{{ item.title }}</p>
      <p class="number">{{ formNumber[item.value] }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, PropType, reactive, toRefs,
} from '@vue/runtime-core';

type TotalNumberListType = {
  title: string,
  value: string,
  icon: string
};
export default defineComponent({
  name: '',
  components: {},
  props: {
    totalNumberList: {
      type: Array as PropType<TotalNumberListType[]>,
      required: true,
    },
    formNumber: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const state = reactive({


    });
    return { ...toRefs(state) };
  },

});
</script>
<style lang="scss">
.overview-total-number-list {
  .item {
    background: #fff;
    padding: 32px 0 26px 40px;
    border-radius: 8px;
    margin-right: 20px;
    width: 25%;
    &:last-child {
      margin-right: 0;
    }
    .icon-box {
      height: 36px;
      width: 36px;
      line-height: 36px;
      text-align: center;
      border-radius: 50%;
    }
    &:first-child {
      .icon-box {
        background: rgba(76, 124, 247, 0.12);
        icon {
          color: #4c7cf7;
        }
      }
    }
    &:nth-child(2) {
      .icon-box {
        background: rgba(93, 202, 162, 0.12);
        icon {
          color: #5dcaa2;
        }
      }
    }
    &:nth-child(3) {
      .icon-box {
        background: rgba(245, 195, 67, 0.12);
        icon {
          color: #f5c343;
        }
      }
    }
    &:nth-child(4) {
      .icon-box {
        background: rgba(131, 92, 249, 0.12);
        icon {
          color: #835cf9;
        }
      }
    }

    .title {
      margin: 15px 0 7px;
      color: #999;
    }
    .number {
      font-size: 42px;
      font-weight: 600;
    }
  }
}
</style>
