<template>
  <div class="detail-time-fragment" :class="{ 'is-horizatal': horizatal }">
    <ul class="flex-column">
      <li class="flex-vertical-center" v-if="showCreator">
        <i class="iconfont i-r-yigeren-241" />
        <div class="flex-column">
          <div>{{ $t("material-manage.form.creater") }}:</div>
          <div class="text-one-line">{{ userObj[creator]?.name || "" }}</div>
        </div>
      </li>
      <li class="flex-vertical-center" style="padding-top: 10px">
        <i class="iconfont i-r-shangchuan-24" />
        <div class="flex-column">
          <div>{{ $t("material-manage.form.upload_time") }}:</div>
          <time>{{ dayjs(uploaded).format("YYYY/MM/DD HH:mm") }}</time>
        </div>
      </li>
      <li class="flex-vertical-center" style="padding-top: 10px">
        <i class="iconfont i-r-shijian-24" />
        <div class="flex-column">
          <div>{{ $t("material-manage.form.update_time") }}:</div>
          <time>{{ dayjs(updated).format("YYYY/MM/DD HH:mm") }}</time>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import useUsers from '@/utils/uses/use-users';
import {
  defineComponent,
  computed,
} from 'vue';

export default defineComponent({
  name: 'time-info',
  props: {
    creator: {
      type: String,
      default: '',
    },
    uploaded: {
      type: [Number, String],
    },
    updated: {
      type: [Number, String],
    },
    horizatal: {
      type: Boolean,
      default: false,
    },
    // 是否显示创建人项.因为useUsers需要权限, 未登录时调用会报错401, 所以未登录时不显示创建人
    showCreator: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const userIds = computed(() => [props.creator] || []);
    const userObj = props.showCreator ? useUsers(userIds) : {};
    return {
      dayjs,
      userObj,
    };
  },
});
</script>

<style lang="scss" scoped>
.detail-time-fragment {
  font-size: 12px;
  line-height: 1.5;
  padding: 0 30px 30px;
  width: 100%;
  // background-color: #f7f7f7;
  color: #999;
  .time {
    width: 220px;
    margin-top: 15px;
  }
  .iconfont {
    margin-right: 9px;
    font-size: 14px;
    font-weight: 500;
    color: #aeaeae;
  }
  &.is-horizatal {
    padding: 0;
    background-color: unset;
    .flex-column {
      @extend %flex-vertical-center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
