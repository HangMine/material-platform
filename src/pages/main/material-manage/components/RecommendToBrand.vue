<template>
  <div class="form-recommend-to-brand" v-loading="loading">
    <div class="dialog-content" v-if="brandList.length > 0">
      <!-- <section v-for="brand in brandList" :key="brand.id" class="section-brand-recommendation-tree"> -->
      <el-tree
        v-for="brand in brandList"
        :key="brand.id"
        class="brand-recommendation-tree"
        :data="brand.children"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :props="defaultProps"
        ref="brandTree"
        @node-click="isInvalidNoticeShown = false"
      >
        <template #default="{ node }">
          <span :class="[`level-${node.level}-tree-node `, { 'flex-space-between': node.level === 1 }]">
            <span>{{ node.label }}</span>
            <!-- <span v-if="node.level === 1">
              实时更新
              <el-switch v-model="brand.isSyn" :active-value="1" :inactive-value="0"></el-switch>
            </span> -->
          </span>
        </template>
      </el-tree>
      <div class="el-form-item__error" v-show="isInvalidNoticeShown">请至少勾选一项功能,并设置具体权限!</div>
    </div>
    <div class="block-error-wrapper flex-center" v-else>
      <BlockError size="small" :error="{ message: '暂无合作品牌', code: '404' }"></BlockError>
    </div>
    <!-- </section> -->
    <div class="dialog-buttons">
      <el-button type="default" @click="$emit('cancel')">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" @click="handleSubmit">{{ $t("public.dialog.confirm") }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { MaterialListItem } from '@/models/Material';
import {
  fetchCooperatedBrandRecommendationList, recommendToBrand, RecommendationItem, RecommendToBrandParams,
} from '@/api/recommendation';
import onCreated from '@/utils/vue/onCreated';
import extract from '_/extract';
import listRef from '@/utils/vue/list-ref';
import { ElTree } from 'element-plus';
import BlockError from '@/components/error/BlockError.vue';

type FormatCooperatedBrandRecommendationItem = {
  id: string,
  name: string,
  isSyn: 0 | 1,
  children: [{
    id: string,
    name: string,
    children: {
      id: string,
      name: string,
      children: RecommendationItem[]
    }[]
  }]
};

export default defineComponent({
  name: 'recommend-to-brand',
  dialogify: {
    props: {
      title: '选择推荐品牌',
      width: '590px',
      'close-on-click-modal': false,
      'close-on-press-escape': false,
      'show-close': false,
    },
  },
  components: { BlockError },
  props: {
    materials: {
      type: Array as PropType<MaterialListItem[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      loading: true,
      brandList: [] as FormatCooperatedBrandRecommendationItem[],
      isInvalidNoticeShown: false,
    });
    const brandTree = listRef<InstanceType<typeof ElTree>>();
    const getCooperatedBrandRecommendationList = async () => {
      state.loading = true;
      const res = await fetchCooperatedBrandRecommendationList(1);
      let dalta = 0;
      // 之前brandList的结构为{id,name,isSyn, childre: Node[]}[],但出现一个问题,
      // isSyn会触发el-tree的重新初始化,导致tree的勾选被清空.
      // 测试提bug后, 不得已在中间加多一层用来渲染tree, (首层存放isSyn的不参与渲染tree)
      state.brandList = res.map(brand => {
        return {
          ...extract(brand, ['id', 'name']),
          isSyn: 0,
          children: [{
            ...extract(brand, ['id', 'name']),
            children: [{
              id: String(Date.now() + (dalta++)),
              name: '品牌推荐会',
              children: brand.coopRecommendMeetingResps,
            }],
          }],
        };
      });
      state.loading = false;
    };

    onCreated(async () => {
      getCooperatedBrandRecommendationList();
    });

    const handleSubmit = async () => {
      const storedOrgInfo = {} as Record<string, RecommendToBrandParams>;
      const _searchParams = props.materials.reduce((list, item) => {
        // 公司节点数据
        const checkOrgs = brandTree.value.map((_ref, i) => {
          // 只选叶子节点
          const _nodes = _ref.getCheckedNodes(true, false);
          // 过滤掉中间节点(如有些品牌没有推荐会,则_nodes会包含[品牌推荐会]中间项, 需去掉)
          const _leafNodes = _nodes.filter(_node => !Array.isArray(_node.children));
          return _leafNodes;
        }, []);
        // 整合公司的推荐会数据(一个材料一个公司多个推荐会为一项)
        const checkedRecommandationList = checkOrgs.filter(_org => _org.length > 0).map((_org, i) => {
          const _orgId = _org[0].orgId;
          let _isSyn = 0;
          let _orgName = '';
          if (!storedOrgInfo[_orgId]) {
            const targetOrg = state.brandList.find(org => org.id === _orgId);
            storedOrgInfo[_orgId] = targetOrg;
          }
          _isSyn = storedOrgInfo[_orgId].isSyn;
          _orgName = storedOrgInfo[_orgId].name;
          const _item = {
            orgId: _orgId, // 公司id
            catalogId: item.catalogId,
            originalId: item.originalCId,
            name: _orgName,
            isSyn: _isSyn,
            recommendMeetingIds: _org.map(_rec => _rec.id),
          };
          return _item;
        });
        return [...list, ...checkedRecommandationList];
      }, [] as RecommendToBrandParams[]);
      console.log(_searchParams);
      if (_searchParams.length === 0) {
        state.isInvalidNoticeShown = true;
        return;
      }
      try {
        state.loading = true;
        await recommendToBrand(_searchParams);
        emit('confirm');
      } finally {
        state.loading = false;
      }
    };

    return {
      ...toRefs(state),
      brandTree,
      handleSubmit,
      defaultProps: {
        label: 'name',
      },
    };
  },
});
</script>
<style lang="scss">
.form-recommend-to-brand {
  .brand-recommendation-tree {
    & > .el-tree-node {
      & > .el-tree-node__content {
        width: 100%;
        background: #f5f5f5;
        border-radius: 4px;
        padding: 10px 12px !important;
        height: 40px;
        .el-tree-node__expand-icon {
          display: none;
        }
      }
      & > .el-tree-node__children {
        .el-tree-node__content {
          height: 60px;
        }
      }
      // & > .el-tree-node__children {
      //   margin-left: -20px;
      // }
      .level-1-tree-node {
        width: 100%;
      }
    }
  }
  .dialog-buttons {
    padding-top: 20px;
    text-align: right;
  }
  .dialog-content {
    position: relative;
  }
}
</style>
