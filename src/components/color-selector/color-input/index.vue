<template>
  <div class="color-input flex flex-1">
    <el-select class="" size="mini" v-model="currentColorOption" @change="handleChangeType">
      <el-option
        v-for="option in colorTypeOptions"
        :key="option.value"
        :label="option.label"
        :value="option"
      ></el-option>
    </el-select>
    <div class="input-grid flex flex-1">
      <template v-for="(config, i) in currentColorOption.inputValues.length" :key="i">
        <el-input
          v-if="currentColorOption.maxlength"
          size="mini"
          v-selectText
          v-model="currentColorOption.inputValues[i]"
          :maxlength="currentColorOption.maxlength"
          @blur="handleChangeValues"
          @keyup.enter="handleChangeValues"
        ></el-input>
        <el-input-number
          v-else
          size="mini"
          v-selectText
          v-model="currentColorOption.inputValues[i]"
          :controls="false"
          :min="0"
          :max="currentColorOption.max"
          @blur="handleChangeValues"
          @keyup.enter="handleChangeValues"
        ></el-input-number>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, watch, PropType, nextTick,
} from 'vue';
import Color, { hex2rgb, toHex } from '../color-picker/color';


export default defineComponent({
  name: 'color-input',
  components: {},
  props: {
    colorInstance: {
      type: Object as PropType<InstanceType<typeof Color>>,
      required: true,
    },
  },
  inheritAttrs: false,
  emits: ['change', 'refreshColor', 'changeValue'],
  setup(props, { emit }) {
    const colorTypeOptions = [
      {
        label: 'RGB', value: 'RGB', inputValues: [255, 0, 0], max: 255,
      },
      {
        label: 'CMYK', value: 'CMYK', inputValues: [0, 100, 100, 0], max: 100,
      },
      {
        label: 'HEX', value: 'HEX', inputValues: ['FF0000'], maxlength: 6,
      },
    ];

    const currentColorOption = ref(colorTypeOptions[0]);

    // const currentColor = computed(() => {
    //   return props.colorInstance.value || '';
    // });

    // array -> string
    const stringifyColorValue = (currentOption) => {
      if (!Array.isArray(currentOption.inputValues)) {
        return currentOption.inputValues;
      }
      switch (currentOption.label) {
        case 'RGB': return `rgb(${currentOption.inputValues.join(',')})`;
        case 'CMYK': return `cmyk(${currentOption.inputValues.join(',')})`;
        case 'HEX':
        default: return `#${currentOption.inputValues[0]}`;
      }
    };

    // string -> array
    const arrayifyColorValue = (colorValue) => {
      console.log(colorValue);
      if (colorValue.startsWith('rgb')) {
        const _rgbParts = colorValue.replace(/rgb|\(|\)/gm, '')
          .split(/\s|,/g).filter(val => val !== '').map(val => parseInt(val, 10));
        if (_rgbParts.length) {
          return _rgbParts;
        }
      } else if (colorValue.startsWith('cmyk')) {
        const _cmykParts = colorValue.replace(/cmyk|\(|\)/gm, '')
          .split(/\s|,/g).filter(val => val !== '').map(val => parseInt(val, 10));
        if (_cmykParts.length) {
          return _cmykParts;
        }
      } else if (colorValue.startsWith('#')) {
        const _hexText = colorValue.replace('#', '').trim();
        if (_hexText) {
          return [_hexText];
        }
      }
      return [];
    };

    // computed监听props无法监听对象, 需再用watch监听变化
    watch(() => props.colorInstance.value, (val) => {
      console.log('_pauseReceive', props.colorInstance._pauseReceive);
      // _pauseReceive=true表示input-cmyk输入触发的颜色更新, 此时不接受外部值,以自身输入框的值为准
      if (props.colorInstance._pauseReceive) {
        props.colorInstance.set({ pauseReceive: false });
      } else {
        currentColorOption.value.inputValues = arrayifyColorValue(val);
      }
    });

    const handleChangeType = async (option) => {
      emit('refreshColor', { type: option.value?.toLowerCase() });
      // await nextTick();
      // currentColorOption.value.inputValues = arrayifyColorValue(currentColor.value);
    };

    const handleChangeValues = (val) => {
      // hex格式输入满6位后才读取颜色值
      if (currentColorOption.value.value === 'HEX') {
        if (String(currentColorOption.value.inputValues[0]).length < currentColorOption.value.maxlength!) {
          return;
        }
        // 如果输入的是非法16进制数,则恢复为之前的颜色值
        if (!/^[0-9a-fA-F]{6}$/.test(currentColorOption.value.inputValues[0] as string)) {
          currentColorOption.value.inputValues = arrayifyColorValue(props.colorInstance.value);
        }
      }

      const _colorValue = stringifyColorValue(currentColorOption.value);
      // 因CMYK转其他颜色值会产生误差,互转后值会明显变化, 导致此处emit后, 在上面watch-props.colorInstance.value时, cmyk输入框的值会变.
      // 所以对于CMYK颜色值, 以当前输入框的值为准, 这里设置pauseReceive=true,随后watch-props.colorInstance.value时, 不再更新输入框的值
      if (currentColorOption.value.value === 'CMYK') {
        props.colorInstance.set({ pauseReceive: true });
      }
      emit('changeValue', _colorValue);
    };

    return {
      colorTypeOptions,
      currentColorOption,
      handleChangeType,
      handleChangeValues,
    };
  },
});
</script>
<style lang="scss">
.color-input {
  font-size: 12px;
  .el-select {
    width: 66px;
    flex: 0 0 66px;
    .el-input__inner {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding: 0 20px 0 8px;
    }
    .el-input__suffix {
      right: 0;
    }
    .el-input__suffix-inner {
      display: inline-block;
      transform: scale(0.75);
      transform-origin: right;
    }
    .el-select__caret {
      color: #9ca0a4;
    }
  }
  .input-grid {
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    .el-input-number {
      width: unset;
    }
    .el-input {
      line-height: 26px !important;
      .el-input__inner {
        height: 26px !important;
        line-height: 26px !important;
        border: none;
        text-align: center;
        padding: 0;
      }
    }
  }
}
</style>
