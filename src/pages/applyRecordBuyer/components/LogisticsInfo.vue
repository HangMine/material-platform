<template>
  <div class="logistics-info">
    <div class="title">{{ $t("application_list.form-send-sample.logistics_information") }}</div>
    <div class="logistics-box" v-if="nu">
      <div class="logistics-compony-box flex-start">
        <!-- <p class="logo-img"><img :src="defaultImg" /></p> -->
        <div class="right-box">
          <div class="logistics-compony flex-space-between">
            <p class="compony">{{ comTitle }}</p>
            <p class="time">{{ hour }}</p>
          </div>
          <p class="code">{{ nu }}</p>
        </div>
      </div>
      <div class="delivery-info">
        <el-steps space="85px" direction="vertical" :active="1">
          <el-step class="step-item" v-for="(item, index) in deliveryInfo" :key="index">
            <template v-slot:icon>
              <icon
                v-if="index === 0 && (item.status === '签收' || item.status === '退签' || item.status === '拒签')"
                class="iconfont i-on-24"
              ></icon>
              <img v-else-if="index === 0" class="delivery-img" :src="activeImg" />
              <span v-else class="arc"></span>
            </template>
            <template v-slot:title>
              <div class="delivery-title">{{ item.status }}</div>
            </template>
            <template v-slot:description>
              <div class="detail-info">{{ item.context }}</div>
              <div class="date">{{ item.time }}</div>
            </template>
          </el-step>
        </el-steps>
      </div>
    </div>
    <div v-else class="empty">
      <p>{{ $t("application_list.no_order_info") }}</p>
    </div>

    <div v-if="isReceived && !nu" class="btn-box">
      <el-button @click="cancelOrder" class="btn" type="">{{ $t("application_list.btn.cancel_order") }}</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted,
} from '@vue/runtime-core';
import { confirm, dialog } from '@/utils/vue/dialog';
import CancelOrder from '@/pages/main/applyRecord/components/dialog/handleApply.vue';
import {
  getTransStatus, StatusType, transList,
} from '@/api/applyRecord';
import { t } from '@/i18n/index';

export default defineComponent({
  name: '',
  props: {
    isReceived: {
      type: Boolean,
      default: false,
    },
    applyId: {
      type: String,
      required: true,
    },
  },
  components: {},
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const defaultImg = require('@/assets/img/public/default-image.png');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const activeImg = require('@/assets/img/delivery/active.png');

    const state = reactive({

      nu: '', // 快递单号
      com: '', // 快递公司编码
      comTitle: '',
      current3: 0,
      hour: '',
      deliveryInfo: [

      ] as StatusType[],

    });

    const cancelOrder = async () => {
      await dialog({
        is: CancelOrder,
        props: {
          title: t('application_list.cancel_reason'),
          placeholder: t('application_list.enter_cancel_reasom'),
          submitType: 'cancelOrder',
          refuseParams: {
            applyId: props.applyId,
            // approvalStatus: 2 as number,

          },
          // catalogId: row.catalogId,
        },
      });
    };
    onMounted(async () => {
      const res = await getTransStatus(props.applyId);
      if ((Object.keys(res)).length) {
        state.nu = res.nu;
        state.com = res.com;
        state.hour = res.hour;

        const chooseArr = transList.filter(item => item.value === res.com);
        state.comTitle = chooseArr[0].label;

        state.deliveryInfo = res.data;
      }
      // console.log(res, 'res');

      // console.log(res);
    });
    return {
      ...toRefs(state), defaultImg, activeImg, cancelOrder,
    };
  },
});
</script>
<style lang="scss">
.logistics-info {
  .title {
    color: #888888;
    margin-bottom: 16px;
  }
  .logistics-compony-box {
    .logo-img {
      img {
        height: 36px;
        width: 36px;
      }
    }
    align-items: center;
    .right-box {
      margin-left: 8px;
      flex: 1;
      .logistics-compony {
        .time {
          color: #666666;
        }
      }
      .code {
        margin-top: 4px;
        color: #999999;
      }
    }
  }
  .delivery-info {
    background: #f3f2f2;
    padding: 20px 13px;
    margin-top: 16px;
    border-radius: 4px;

    .delivery-title {
      font-size: 16px;
      font-weight: 600;
      color: #222;
    }
    .detail-info {
      color: #222;
    }
    .date {
      font-size: 12px;
      color: #999;
      margin-bottom: 24px;
    }
    .el-step__icon {
      background: #f3f2f2;
      height: 8px;
    }
    .el-step__icon.is-text {
      border: none;
    }
    .el-step.is-vertical .el-step__line {
      background-color: #dddddd;
      top: 10px;
      bottom: -6px;
    }
    .arc {
      background: #d8d8d8;
      min-width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      color: #d8d8d8;

      text-align: center;
    }
    .iconfont {
      color: $color-primary;
    }
    .yuan-iconfont {
      color: #d8d8d8;
      font-size: 12px;
    }
    .delivery-img {
      height: 18px;
      width: 18px;
    }
  }
  .logistics-box {
    .empty {
      p {
        text-align: center;
      }
    }
  }
  .btn-box {
    text-align: right;
  }
}
</style>
