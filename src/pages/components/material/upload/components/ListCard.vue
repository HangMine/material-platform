<template>
  <div class="upload-list-card" :class="{ empty: isEmpty }">
    <IconTip
      :content="item.des"
      placement="bottom-end"
      popper-class="list-card-tooltip"
      :iconStyle="{ color: '#ccc' }"
    ></IconTip>
    <div v-show="isEmpty" class="empty-content" @click="clickEmpty">
      <i class="empty-icon" :class="item.icon"></i>
      <p class="empty-title flex-space-between">{{ item.title }}</p>
    </div>
    <div v-show="!isEmpty" class="content">
      <p class="title flex-space-between">{{ item.title }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import IconTip from '@/components/tip/IconTip.vue';
import { t } from '@/i18n/index';

export default defineComponent({
  name: 'upload-list-card',
  components: { IconTip },
  props: {
    type: {
      type: String as PropType<'img' | 'video' | 'file'>,
      required: true,
    },
    isEmpty: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['click-empty'],
  setup(props, { emit }) {
    const item = computed(() => {
      switch (props.type) {
        case 'img':
        default:
          return {
            title: t('material-manage.upload.upload_picture'),
            icon: 'i-r-tupian-14',
            des: t('material-manage.upload.picture_limit'),
          };
        case 'video':
          return {
            title: t('material-manage.upload.upload_vedio'),
            icon: 'i-r-shipin-14',
            des: t('material-manage.upload.vedio_limit'),
          };
        case 'file':
          return {
            title: t('material-manage.upload.upload_file'),
            icon: 'i-r-wendang-14',
            des: t('material-manage.upload.file_limit', { limit: '1G' }),
          };
      }
    });

    const clickEmpty = () => {
      emit('click-empty');
    };
    const state = reactive({ ...item });
    return {
      ...toRefs(state), clickEmpty, item,
    };
  },
});
</script>
<style lang="scss">
.list-card-tooltip {
  width: 200px;
}
</style>
<style lang="scss" scoped>
// @import 'url'
.upload-list-card {
  position: relative;
  background: #fcfcfc;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 20px;

  transition: border 0.2s;
  /deep/ .upload-list li.img-item {
    overflow: initial;
    margin-bottom: 30px;
  }
  &.empty {
    cursor: pointer;
    &:hover {
      border-color: $color-primary;
    }
    .empty-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 170px;

      .empty-icon {
        font-size: 28px;
        margin-bottom: 15px;
      }
    }
  }
  .title {
    margin-bottom: 16px;
  }
  /deep/.icon-tip {
    position: absolute;
    right: 8px;
    top: 8px;
  }
}
</style>
