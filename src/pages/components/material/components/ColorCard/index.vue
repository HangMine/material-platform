<template>
  <div class="color-card">
    <ul class="upload-main" :class="{ 'is-list': colors.length || isEdit, 'is-edit': isEdit }">
      <!-- 上传的增加按钮,在前面 -->
      <li v-if="!isEdit" class="color-item">
        <div class="upload-main-content">
          <div class="icon-wrap">
            <i class="i-l-shangchuantubiao-34"></i>
          </div>
          <p v-if="!colors.length" class="upload-title">{{ $t("material-manage.upload.choose_or_add") }}</p>
          <el-popover v-model:visible="popShow" trigger="manual" width="auto">
            <template #reference>
              <el-button class="upload-btn" type="primary" @click="toggleColorPop">{{
                $t("material-manage.upload.add_color_card")
              }}</el-button>
            </template>
            <ul class="color-upload-list">
              <li class="hover-link" @click="uploadAse">
                <i class="i-r-ase-12"></i>
                <p>{{ $t("material-manage.upload.upload_ase_file") }}</p>
              </li>
              <!-- <li class="hover-link" @click="upload4ddat">
                <i class="i-r-4ddat-12"></i>
                <p>上传4ddat</p>
              </li> -->
              <li class="hover-link" @click="chooseColor">
                <i class="i-r-seka-16"></i>
                <p>{{ $t("material-manage.upload.choose_color_card") }}</p>
              </li>
              <!-- <li class="hover-link">
                <i class="i-r-tusepu-12"></i>
                <p>从色谱选择</p>
                <el-color-picker
                  class="upload-color-picker"
                  v-model="currentColor"
                  color-format="rgb"
                  @change="colorChange"
                ></el-color-picker>
              </li> -->
              <li class="hover-link" @click="showColorLibrarySelector">
                <i class="i-r-tusepu-12"></i>
                <p>{{ $t("material-manage.upload.choose_from_color_book") }}</p>
              </li>
            </ul>
          </el-popover>
          <ColorSelectorPopper v-model:visible="colorSelectorPopShow" v-model="currentColor" @change="colorChange">
            <template #trigger>
              <span></span>
            </template>
          </ColorSelectorPopper>
        </div>
      </li>
      <template v-for="(color, i) of colors" :key="i">
        <li class="color-item">
          <div class="color-display">
            <div v-if="color.isOrigin" class="color-display-content is-origin">
              <i class="i-r-sanyuanse-42"></i>
            </div>
            <div v-else class="color-display-content" :style="getContentStyle(color)"></div>
            <div>
              <div v-show="!color.isEdit" class="footer flex-space-between">
                <over-text resize>{{ color.name }}</over-text>
                <i class="edit-icon i-r-bianji-16" @click="editName(color, i)"></i>
              </div>
              <el-input
                v-show="color.isEdit"
                v-model="color.temName"
                @blur="blur(color)"
                maxlength="32"
                :ref="handleRef"
              ></el-input>
            </div>
            <div v-if="!color.isOrigin" class="color-system">
              <span class="color-system-display"> {{ color.system }} <i class="i-r-xia-12"></i> </span>
              <el-select
                class="color-system-select"
                v-model="color.system"
                :placeholder="$t('public.form.input_choose')"
              >
                <el-option v-for="item in colorSystemsOptions" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </div>
            <span class="icon-list">
              <span class="icon-wrap" :class="{ 'is-default': color.isDefault }">
                <i
                  :class="`${color.isDefault ? 'i-r-shezhiyanseoff-14' : 'i-s-shezhiyanseon-14'}`"
                  @click="setCover(i)"
                ></i>
              </span>
              <!-- 4ddat解析出来的色卡 -->
              <span v-if="!color.isBindMaterialFile" class="icon-wrap">
                <i class="i-r-shanchu-14" @click="delColor(i)"></i>
              </span>
            </span>
          </div>
        </li>
      </template>

      <!-- 编辑的增加按钮,在后面 -->
      <li v-if="isEdit" class="color-item edit-add-item">
        <el-popover v-model:visible="popShow" trigger="manual" width="auto">
          <template #reference>
            <div class="edit-add-item-content flex-center" @click="toggleColorPop">
              <i class="i-l-tianjia-34"></i>
            </div>
          </template>
          <ul class="color-upload-list">
            <li class="hover-link" @click="uploadAse">
              <i class="i-r-ase-12"></i>
              <p>{{ $t("material-manage.upload.upload_ase_file") }}</p>
            </li>
            <!-- <li class="hover-link" @click="upload4ddat">
              <i class="i-r-4ddat-12"></i>
              <p>上传4ddat</p>
            </li> -->
            <li class="hover-link" @click="chooseColor">
              <i class="i-r-seka-16"></i>
              <p>{{ $t("material-manage.upload.choose_color_card") }}</p>
            </li>
            <!-- <li class="hover-link">
              <i class="i-r-tusepu-12"></i>
              <p>从色谱选择</p>
              <el-color-picker
                class="upload-color-picker"
                v-model="currentColor"
                color-format="rgb"
                @change="colorChange"
              ></el-color-picker>
            </li> -->
            <li class="hover-link" @click="showColorLibrarySelector">
              <i class="i-r-tusepu-12"></i>
              <p>{{ $t("material-manage.upload.choose_from_color_book") }}</p>
            </li>
          </ul>
        </el-popover>
        <ColorSelectorPopper v-model:visible="colorSelectorPopShow" v-model="currentColor" @change="colorChange">
          <template #trigger>
            <span></span>
          </template>
        </ColorSelectorPopper>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import selectFiles from '@/utils/select-files';
import validFile from '@/utils/validators/valid-file';
import { ElInput } from 'element-plus';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, watch, onMounted, onBeforeUpdate, Ref, toRef, nextTick,
} from 'vue';
import clickOutside from '@/utils/clickOutside';
import parseASE from '@/utils/ASELoader';
// import parseMaterialFile from '@/utils/materialFileLoader';
import useRefs from '@/utils/uses/use-refs';
import { delay } from '_';
import { dialog } from '@/utils/vue/dialog';
import { ColorCardItem, ColorLibraryItem } from '@/api/materialMenu';
import ColorSelectorPopper from '@/components/color-selector/Popper.vue';
import { t } from '@/i18n/index';
import { addColor, loading } from '../../utils';
import ColorCardBookList from './ColorCardBookList.vue';
import {
  getColorSystem, getDefaultColor, Color, Colors, colorSystems,
} from './utils';

export default defineComponent({
  name: 'color-card',
  components: { ColorSelectorPopper },
  props: {
    modelValue: {
      type: Array as PropType<Colors>,
      default: () => [],
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { vms: inputVm, handleRef } = useRefs<InstanceType<typeof ElInput>>();
    const state = reactive({
      colors: [] as Colors,
      popShow: false,
      colorSelectorPopShow: false,
      currentColor: '',
      colorSystemsOptions: colorSystems.map(item => ({ id: item, name: item })),
    });
    watch(() => props.modelValue, (value) => {
      console.log('props.modelValue:', value);
      state.colors = value;
    }, { immediate: true, deep: true });
    watch(() => state.colors, (value) => {
      console.log('state.colors:', value);

      emit('update:modelValue', value);
    }, { deep: true });
    const getContentStyle = (color: Color) => {
      return {
        backgroundColor: color.value,
      };
    };

    const addColorByValue = (value: string) => {
      const color = {
        ...getDefaultColor(),
        value,
        name: value,
        temName: value,
        system: getColorSystem(value),
      };
      addColor(toRef(state, 'colors'), color);
    };


    const uploadAse = async () => {
      const [file] = await selectFiles(['ase']);
      await validFile(file, {
        extensions: ['ase'],
      });
      const res = await parseASE(file);
      if (!res?.colors) {
        throw new Error(t('material-manage.upload.ase_parsing_error'));
      }
      if (!res.colors.length) {
        throw new Error(t('material-manage.upload.empty_ase'));
      }
      if (res.colors.length > 20) {
        throw new Error(t('material-manage.upload.color_over'));
      }
      const aseColors = res.colors.map(item => {
        const value = `rgb(${item.color.join()})`;
        return {
          ...getDefaultColor(),
          value,
          name: item.name,
          temName: item.name,
          system: getColorSystem(value),
        };
      });
      aseColors.forEach(color => {
        addColor(toRef(state, 'colors'), color);
      });
      // state.colors = [...state.colors, ...aseColors];
      state.popShow = false;
    };
    // const upload4ddat = async () => {
    //   try {
    //     const [file] = await selectFiles(['4ddat']);
    //     loading.value = true;
    //     const rgbArr = await parseMaterialFile(file);
    //     const value = `rgb(${rgbArr.join()})`;
    //     await validFile(file, ['material']);
    //     const fileName = file.name.slice(0, 32);
    //     const color = {
    //       ...getDefaultColor(),
    //       value,
    //       name: fileName,
    //       temName: fileName,
    //       system: getColorSystem(value),
    //       materialFile: file,
    //     };
    //     addColor(toRef(state, 'colors'), color);

    //     // state.colors.push(color);
    //   } finally {
    //     state.popShow = false;
    //     loading.value = false;
    //   }
    // };

    const chooseColor = async () => {
      const selectColorCardList = await dialog({
        is: ColorCardBookList,
      }) as ColorLibraryItem[];
      if (!selectColorCardList.length) return;
      selectColorCardList.forEach(selectColor => {
        const { r, g, b } = selectColor;
        const value = `rgb(${r}, ${g}, ${b})`;
        addColorByValue(value);
      });
    };

    const colorChange = (value: string) => {
      state.popShow = false;
      clickOutside.unBind('mouseup'); // 在选择颜色后会有多余的mouseUp没有清除,先暂时这样解决吧
      if (!value) {
        return;
      }
      addColorByValue(value);
    };
    const editName = (color: Color, i: number) => {
      color.isEdit = true;
      inputVm.value?.[i]?.focus();
    };
    const blur = (color: Color) => {
      color.name = color.temName;
      color.isEdit = false;
    };
    // const handleNameInput = (e: InputEvent) => {
    //   const target = e.target as HTMLInputElement;
    //   const { value } = target;
    //   target.value = value.slice(0, 32);
    // };
    const delColor = (i: number) => {
      state.colors.splice(i, 1);
    };
    const setCover = (coverI: number) => {
      state.colors.forEach((color, i) => {
        color.isDefault = coverI === i ? !color.isDefault : false;
      });
    };

    let isClickOutsideHidden = false; // 通过按钮点击收起来时popShow是false会重新绑定事件,通过该标识判断
    const toggleColorPop = async () => {
      console.log('toggleColorPop', state.popShow);
      if (!state.popShow && !isClickOutsideHidden) {
        // if (!state.popShow) {
        state.popShow = true;
        await clickOutside.bind('.el-popper', 'mouseup');
        state.popShow = false;
        isClickOutsideHidden = true;
        await delay(0);
        isClickOutsideHidden = false;
      } else {
        state.popShow = false;
      }
      state.colorSelectorPopShow = false;
    };

    const showColorLibrarySelector = async () => {
      state.popShow = false;
      state.colorSelectorPopShow = true;
      isClickOutsideHidden = false;
    };
    return {
      ...toRefs(state),
      handleRef,
      getContentStyle,
      uploadAse,
      // upload4ddat,
      colorChange,
      chooseColor,
      editName,
      blur,
      delColor,
      setCover,
      // handleNameInput,
      toggleColorPop,
      showColorLibrarySelector,
    };
  },
});
</script>
<style lang="scss">
.color-upload-list {
  display: flex;
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 90px;
    height: 90px;
    background: #fcfcfc;
    border: 1px solid #dddddd;
    border-radius: 5px;
    font-size: 12px;
    + li {
      margin-left: 10px;
    }
    i {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
}
.upload-color-picker {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  .el-color-picker__trigger {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
// @import 'url'
.color-card {
  .upload-main {
    &:not(.is-edit) {
      height: 460px !important;
      overflow-y: auto;
    }
    &.is-list {
      justify-content: start;
      align-items: start;
      flex-wrap: wrap;
      height: auto;
      border: 1px solid #dddddd;
      border-radius: 5px;
      .color-item {
        width: 20%;
        height: 0;
        padding-top: 20%;
        position: relative;
        border-right: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;

        .upload-main-content {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .color-display {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        &:hover {
          .icon-list {
            .icon-wrap {
              opacity: 1;
            }
          }
        }
        &-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          &.is-origin {
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(180deg, #f7f8fa, #d9dadb);
            > i {
              font-size: 42px;
              color: #979797;
            }
          }
        }
        .footer {
          flex-shrink: 0;
          height: 36px;
          padding: 0 10px;
          .edit-icon {
            cursor: pointer;
            &:hover {
              color: $color-primary;
            }
          }
        }
        /deep/.el-input {
          line-height: 36px;

          .el-input__inner {
            border: none;
            outline: none;
            background: transparent;
            overflow: hidden;
            height: 36px;
            line-height: 36px;
            padding: 0 10px;
          }
        }

        .color-system {
          position: absolute;
          left: 8px;
          top: 8px;

          .color-system-display {
            display: flex;
            align-items: center;
            background: rgba(0, 0, 0, 0.3);
            color: #ffffff;
            border-radius: 15px;
            padding: 0 8px;
            font-size: 12px;
            line-height: 24px;
            > i {
              font-size: 12px;
              padding-left: 5px;
            }
          }
          .color-system-select {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            overflow: hidden;
          }
        }

        .icon-list {
          position: absolute;
          right: 8px;
          top: 8px;
          display: flex;

          .icon-wrap {
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            cursor: pointer;
            &.is-default {
              opacity: 1;
            }
            + .icon-wrap {
              margin-left: 10px;
            }
            > i {
              font-size: 16px;
              color: white;
              &:hover {
                color: $color-primary;
              }
            }
          }
        }
      }
    }
    &.is-list.is-edit {
      border: none;
      background: transparent;
      .color-item {
        width: 136px;
        padding-top: 136px;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        margin: 0 8px 8px 0;
        border-left: 1px solid #dddddd;
        border-top: 1px solid #dddddd;
        &.edit-add-item {
          border: none;
          .edit-add-item-content {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: #f5f5f5;
            border: 1px solid #dddddd;

            cursor: pointer;
            transition: border-color 0.2s;
            i {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              color: #9ca0a4;
              font-size: 34px;
              transition: color 0.2s;
            }
            &:hover {
              i {
                color: $color-primary;
              }
              border-color: $color-primary;
            }
          }
        }
      }
    }
  }
}
</style>
