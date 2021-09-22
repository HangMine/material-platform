<template>
  <div class="color-card-wrap">
    <div class="color-card-inner">
      <ul class="color-card-ul">
        <li
          v-for="(color, i) of colorList"
          :key="i"
          class="color-card-li"
          :class="{ 'is-checked': color.isChecked }"
          @click="handleClickItem(color)"
        >
          <div class="bg" :style="getBgStyle(color)"></div>
          <div class="name">{{ color.name }}</div>
          <div class="checked-icon">
            <i class="i-r-gouxuan-16"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="dialog-buttons">
      <el-button type="default" @click="cancel">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" :disabled="!selectList.length" @click="confirm">{{
        $t("public.dialog.confirm")
      }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ColorCardItem, ColorLibraryItem, fetchColorList } from '@/api/materialMenu';
import onCreated from '@/utils/vue/onCreated';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { t } from '@/i18n/index';

type ColorWithCheck = ColorLibraryItem & { isChecked: boolean };

export default defineComponent({
  name: 'color-card-list',
  dialogify: {
    // noTitle: true,
    props: {
      width: '1200px',
      title: t('material-manage.upload.choose_color_card'),
      closeOnClickModal: false,
    },
  },
  components: {},
  props: {
    colorCardBook: {
      type: Object as PropType<ColorCardItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: false,
      colorList: [] as ColorWithCheck[],
    });
    const selectList = computed(() => state.colorList.filter(item => item.isChecked));
    const getBgColor = (color: ColorWithCheck) => {
      const { r, g, b } = color;
      return `rgb(${r},${g},${b})`;
    };
    const getBgStyle = (color: ColorWithCheck) => {
      return {
        'background-color': getBgColor(color),
      };
    };
    const handleClickItem = (color: ColorWithCheck) => {
      color.isChecked = !color.isChecked;
    };
    const cancel = () => {
      emit('cancel');
    };
    const confirm = () => {
      emit('confirm', selectList.value);
    };
    onCreated(async () => {
      try {
        state.loading = true;
        const params = {
          keywords: '',
          page: 1,
          size: 9999,
          fields: {
            id: props.colorCardBook.id,
            colorFamily: '',
          },
        };
        const res = await fetchColorList(params);
        // state.pages.total = res.total;
        const { records } = res;
        state.colorList = records.map(item => ({ ...item, isChecked: false }));
      } finally {
        state.loading = false;
      }
    });

    return {
      ...toRefs(state), getBgStyle, handleClickItem, cancel, confirm, selectList,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.color-card-wrap {
  overflow-y: scroll;
  height: 605px;
  display: flex;
  flex-direction: column;
  .color-card-inner {
    flex: 1;
    .color-card-ul {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 10px;

      .color-card-li {
        position: relative;
        cursor: pointer;

        &.is-checked {
          .checked-icon {
            background-color: $color-primary;
          }
        }
        .bg {
          height: 55px;
        }
        .name {
          color: #222222;
          line-height: 26px;
        }
        .checked-icon {
          position: absolute;
          right: 15px;
          top: 15px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: #b2ece9;
          > i {
            color: white;
          }
        }
      }
    }
  }
  .dialog-buttons {
    flex-shrink: 0;
    text-align: right;
  }
}
</style>
