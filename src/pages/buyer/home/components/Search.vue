<template>
  <div :class="['wrapper']">
    <div class="text">{{ $t("search") }}<br />{{ $t("fit_material") }}</div>
    <div class="border-bg"></div>
    <div :class="['search-wrapper']">
      <div class="input-wrapper">
        <input
          class="search-input"
          v-model="innerValue"
          @input="$emit('input', $event.target.value)"
          :placeholder="$t('material-manage.input_keyword_search_material')"
          @keydown.enter="$emit('search', innerValue)"
        />
        <i class="search-icon i-r-fangdajing2" @click="$emit('search', innerValue)" />
      </div>
      <span class="split">|</span>
      <slot name="append-icon" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    simple: Boolean,
    value: {
      type: String,
    },
  },
  setup(props) {
    const innerValue = ref(props.value);
    watch(() => props.value, (v) => {
      innerValue.value = v;
    });
    return {
      innerValue,
    };
  },
});
</script>
<style lang="scss" scoped>
.home-image-search {
}
.wrapper {
  position: relative;
  margin-bottom: 35px;
  &.simple {
    width: 500px;
    height: 68px;
    border-radius: 8px;
    border: 1px solid rgba($color: #fff, $alpha: 0.3);
  }
}
.text {
  font-size: 40px;
  color: #fcfcfc;
  line-height: 44px;
  position: absolute;
  top: -20px;
  left: 40px;
}
.border-bg {
  background: url("~@/assets/img/buyer/search-border.png") no-repeat;
  background-size: contain;
  width: 674px;
  height: 161px;
}
.search-wrapper {
  position: absolute;
  left: 40px;
  bottom: 38px;
  display: flex;
  align-items: center;
  &.simple {
    bottom: 17px;
  }
}
.input-wrapper {
  position: relative;
}
.search-input {
  flex: 1;
  height: 2em;
  width: 330px;
  border: none;
  border-bottom: 1px solid #b2aeab;
  background: none;
  font-size: 13px;
  color: #cccccc;
  padding-bottom: 1em;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #cccccc;
  }
}
.search-icon {
  font-size: 18px;
  color: #fff;
  position: absolute;
  right: 1px;
  top: 5px;
  cursor: pointer;
}
.split {
  color: rgba($color: #fff, $alpha: 0.4);
  margin: 0 16px;
}
</style>
