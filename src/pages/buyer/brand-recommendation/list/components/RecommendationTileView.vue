<template>
  <div class="recommendation-tile-view" @click="goToDetail">
    <div class="tile-view">
      <div class="img-wrap">
        <base-image :src="recommendationInfo.cover" />
        <TotalImgTag :total="recommendationInfo.count" />
      </div>
      <div class="footer">
        <h3 class="title over-text">{{ recommendationInfo.name }}</h3>
        <p class="desc">
          {{ formatDate(recommendationInfo.startTime) }} - {{ formatDate(recommendationInfo.endTime) }}
        </p>
      </div>
    </div>
    <SdDropdown
      class="handle-btns"
      trigger="hover"
      :appendToBody="false"
      @command="(command) => handleCommand(command, recommendationInfo)"
    >
      <span class="el-dropdown-link flex-center" @click.stop>
        <i class="el-icon-more"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="edit">{{ $t("edit") }}</el-dropdown-item>
          <el-dropdown-item command="delete">{{ $t("folder.delete") }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </SdDropdown>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { RecommendationItem } from '@/api/recommendation';
import SdDropdown from '@/components/dropdown/dropdown.vue';
import history from '@/utils/history';
import dayjs from 'dayjs';
import TotalImgTag from './TotalImgTag.vue';

type Command = 'edit' | 'delete';

export default defineComponent({
  name: 'recommendation-tile-view',
  components: { TotalImgTag, SdDropdown },
  props: {
    recommendationInfo: {
      type: Object as PropType<RecommendationItem>,
      required: true,
    },
  },
  emits: ['edit', 'delete'],
  setup(props, { emit }) {
    const state = reactive({});
    const handleCommand = async (command: Command, item: RecommendationItem) => {
      switch (command) {
        case 'edit':
          emit('edit', item);
          break;
        case 'delete':
          emit('delete', item);
          break;
        default:
          break;
      }
      // await fetchFolderList();
    };
    const goToDetail = () => {
      history.push({
        path: '/buyer/brand-recommendation/materials',
        query: {
          recommendationId: props.recommendationInfo.catalogId,
          recommendationName: props.recommendationInfo.name,
        },
      });
    };
    return {
      ...toRefs(state),
      handleCommand,
      goToDetail,
      formatDate(timeStamp: string | number | null) {
        if (!timeStamp) {
          return '';
        }
        if (typeof timeStamp === 'string' && new RegExp('\\d{4}/\\d{2}/\\d{2}').test(timeStamp)) {
          return timeStamp;
        }
        return dayjs(timeStamp).format('YYYY/MM/DD');
      },
    };
  },
});
</script>
<style lang="scss">
.recommendation-tile-view {
  cursor: pointer;
  position: relative;
  &:hover {
    .handle-btns {
      visibility: visible;
    }
  }
  .img-wrap {
    width: 100%;
    padding-top: 56.8%;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  .el-image {
    // transition: transform 0.2s;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0;
  }
  .footer {
    .title {
      color: #222222;
      margin-top: 10px;
    }
    .desc {
      font-size: 12px;
      color: #999999;
      margin-top: 5px;
    }
  }
  .total-image-tag {
    position: absolute;
    left: 8px;
    bottom: 8px;
  }
  .handle-btns {
    visibility: hidden;
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 8px;
    .el-dropdown-link {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
      i {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
