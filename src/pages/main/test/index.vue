<template>
  <div class="block">
    <span class="demonstration">{{ $t("material-manage.have_default") }}</span>
    <!-- <color-picker v-model="color1"></color-picker> -->

    <button @click="showColorSelector">{{ $t("material-manage.choose_color") }}</button>
  </div>
  <table>
    <tbody>
      <tr v-for="row in 10" :key="row">
        <td v-for="col in 10" :key="col" :style="{ backgroundColor: getColor(row, col) }"></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
// import ColorPicker from '@/components/color-selector/color-picker/index.vue';
import ColorSelector from '@/components/color-selector/index.vue';
import { dialog } from '@/utils/vue/dialog';
import { t } from '@/i18n/index';
import coloro from './coloro.json';

export default defineComponent({
  name: 'test',
  // components: { ColorPicker },
  props: {},
  setup(props, { emit }) {
    const state = reactive({});
    // coloro.forEach(color => {
    //   color.LINE
    // })
    return {
      color1: '#409EFF',
      color2: null,
      coloro,
      getColor(row, col) {
        const _item = (coloro.find(item => item.LINE === row && item.ROW === col) || {});
        return `rgb(${parseInt(_item.sRGB_R, 10)},
        ${parseInt(_item.sRGB_G, 10)},
        ${parseInt(_item.sRGB_B, 10)})`;
      },
      async showColorSelector() {
        const selectColorCardList = await dialog({
          is: ColorSelector,
        }, {
          props: {
            title: t('material-manage.choose_from_coloro'),
            width: 350,
            'close-on-click-modal': false,
            'close-on-press-escape': false,
          },
        });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
// @import 'url'
.color-panel {
}
table {
  td {
    width: 100px;
    height: 50px;
    background-color: #fff;
  }
}
</style>
