<template>
  <div class="recommendation-cooperation-manage">
    <SdTable
      :title="$t('menu-management.recommendation_manage_cooperation')"
      :fetchTable="fetchFn"
      showRowId
      :page="{
        pageKey: 'current',
        sizeKey: 'limit',
      }"
      :columns="columns"
      :form="searchForm"
      :tool="{
        width: 280,
      }"
      ref="tableVm"
    >
      <template #tool="{ row }">
        <span class="text-link" :class="{ 'h-disabled': [1].includes(row.cooperationStatus) }" @click="detail(row)">{{
          $t("recommendation.cooperation.btns.detail")
        }}</span>
        <el-divider direction="vertical"></el-divider>
        <span
          class="text-link"
          :class="{ 'h-disabled': [2, 3, 4].includes(row.cooperationStatus) }"
          @click="commit(row)"
          >{{ $t("recommendation.cooperation.btns.commit") }}</span
        >
        <el-divider direction="vertical"></el-divider>
        <span class="text-link" @click="record(row)">{{ $t("recommendation.cooperation.btns.record") }}</span>
      </template>
      <template #cooperationStatus="{ row }">
        <span :class="['gray', 'blue', 'green', 'red'][row.cooperationStatus - 1]">
          {{ translateStatus(row.cooperationStatus) }}
        </span>
      </template>
      <template #inviteTime="{ row }">
        {{ dayjs(row.inviteTime).format("YYYY-MM-DD") }}
      </template>
      <template #inviteDeadline="{ row }">
        {{ dayjs(row.inviteDeadline).format("YYYY-MM-DD") }}
      </template>
    </SdTable>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import SdTable from '@/components/sd-table';
import { t } from '@/i18n';
import { dialog } from '@/utils/vue/dialog';
import { fetchCooperationList } from '@/api/recommendation';
import { objUtil } from '@/utils/util';
import dayjs from 'dayjs';
import Operation from './components/Operation.vue';
import Record from './components/Record.vue';

export default defineComponent({
  name: 'recommendation-cooperation-manage',
  components: { SdTable },
  props: {},
  setup(props, { emit }) {
    const tableVm = ref<InstanceType<typeof SdTable>>();
    const state = reactive({

    });
    const columns = computed(() => {
      return [{
        key: 'name',
        title: t('recommendation.cooperation.columns.name'),
      }, {
        key: 'abbreviation',
        title: t('recommendation.cooperation.columns.breif-name'),
      }, {
        key: 'address',
        title: t('recommendation.cooperation.columns.address'),
      }, {
        key: 'registeredCapital',
        title: t('recommendation.cooperation.columns.register-capital'),
      }, {
        key: 'email',
        title: t('recommendation.cooperation.columns.email'),
      }, {
        key: 'phone',
        title: t('recommendation.cooperation.columns.phone'),
      }, {
        key: 'cooperationStatus',
        title: t('recommendation.cooperation.columns.cooperation-stauts'),
      }, {
        key: 'inviteTime',
        title: t('recommendation.cooperation.columns.inviteTime'),
      }, {
        key: 'inviteDeadline',
        title: t('recommendation.cooperation.columns.inviteDeadline'),
      }, {
        key: 'inviteExplain',
        title: t('recommendation.cooperation.columns.inviteExplain'),
      }];
    });
    const searchForm = computed(() => {
      return [{
        key: 'keyword',
        title: '',
        placeholder: t('public.form.input_keyword'),
        prefixIcon: 'el-icon-search',
      }, {
        key: 'cooperationStatus',
        type: 'select',
        options: [{
          key: 1,
          title: t('recommendation.public.status.待处理'),
        }, {
          key: 2,
          title: t('recommendation.public.status.待审核'),
        }, {
          key: 3,
          title: t('recommendation.public.status.已通过'),
        }, {
          key: 4,
          title: t('recommendation.public.status.已驳回'),
        }],
        title: '',
        placeholder: '合作状态',
      }];
    });

    const fetchFn = computed(() => {
      return (params: {
        current: string,
        limit: string,
        keyword: string,
        cooperationStatus: string
      }) => {
        const handledParams = {
          ...objUtil.omit(params, ['cooperationStatus', 'keyword']),
          condition: {
            cooperationStatus: params.cooperationStatus || undefined,
            keyword: params.keyword || '',
          },
        };
        return fetchCooperationList(handledParams);
      };
    });

    const translateStatus = (statuKey: number) => {
      const statuOptions = searchForm.value.find(item => item.key === 'cooperationStatus')?.options || [];
      const statu = statuOptions.find(_statu => _statu.key === statuKey);
      return statu?.title || '';
    };


    const detail = async (row: Obj) => {
      await dialog({
        is: Operation,
        props: {
          item: row,
          type: 'update',
        },
      }, {
        props: {
          title: t('recommendation.cooperation.btns.detail'),
        },
      });
      tableVm.value?.search();
    };

    const commit = async (row: Obj) => {
      await dialog({
        is: Operation,
        props: {
          item: row,
        },
      }, {
        props: {
          title: t('recommendation.cooperation.btns.commit'),
        },
      });
      tableVm.value?.search();
    };

    const record = async (row: Obj) => {
      await dialog({
        is: Record,
        props: {
          item: row,
        },
      }, {
        props: {
          title: t('recommendation.cooperation.btns.record'),
        },
      });
    };
    return {
      ...toRefs(state), tableVm, translateStatus, columns, searchForm, detail, commit, record, fetchFn, dayjs,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.recommendation-cooperation-manage {
}
</style>
