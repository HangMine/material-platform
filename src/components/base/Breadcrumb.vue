<template>
  <div class="sd-breadcrumb">
    <span>
      <span class="back-btn" @click="back"> <i class="back-icon i-r-zuo-12"></i>{{ $t("back") }} </span>
      <el-divider direction="vertical"></el-divider>
    </span>
    <el-breadcrumb class="sd-breadcrumb-main" separator="|">
      <el-breadcrumb-item
        v-for="(item, i) of breadCrumbData"
        :key="i"
        :to="i === breadCrumbData.length - 1 ? undefined : { path: item.path }"
        >{{ item.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getHomeRedirect } from '@/pages/login/utils/loginStore';

type BreadCrumbData = { path: string, title: string }[];

export default defineComponent({
  name: 'sd-breadcrumb',
  components: {},
  props: {
    data: {
      type: Array as PropType<BreadCrumbData>,
    },
    backPath: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      breadCrumbData: [] as BreadCrumbData,
    });

    const getBreadCrumbData = () => {
      if (props.data) return props.data;
      if (!route.matched.length) return [];
      const componentOptions = route.matched[route.matched.length - 1].components.default;
      const { breadCrumb } = componentOptions;
      return breadCrumb;
    };

    const setBreadCrumbData = () => {
      state.breadCrumbData = getBreadCrumbData();
    };

    const back = async () => {
      if (props.backPath === 'auto') {
        router.back();
        return;
      }
      router.push(props.backPath ? props.backPath : await getHomeRedirect());
    };

    const init = () => {
      setBreadCrumbData();
    };

    init();
    return {
      ...toRefs(state), back,
    };
  },
});

declare module '@vue/runtime-core' {
  interface ComponentCustomOptions {
    breadCrumb?: BreadCrumbData
  }
}
</script>
<style lang="scss" scoped>
// @import 'url'
.sd-breadcrumb {
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 20px;
  color: #666666;
  .back-btn {
    cursor: pointer;
    .back-icon {
      margin-right: 5px;
    }
  }
  .sd-breadcrumb-main {
    // display: inline-block;
  }
  /deep/ .el-breadcrumb__separator {
    color: #dcdfe6;
    font-weight: lighter;
  }
}
</style>
