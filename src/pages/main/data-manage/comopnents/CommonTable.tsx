import {
  defineComponent, reactive, render, createApp, ref,
  computed,
  PropType,
  watch,
} from 'vue';
import SdTable from '@/components/sd-table/index';
import './CommonTable.scss';
import { dialog, confirm } from '@/utils/vue/dialog';
import {
  uncacheFetchFirstCategoryList, uncacheFetchSecondCategoryList, fetchFieldList, updateStatus,
} from '@/api/dataManage';
import { getContextUser, updateContextUser } from '@/loaders/context';
import dayjs from 'dayjs';
import onCreated from '@/utils/vue/onCreated';
import useUsers from '@/utils/uses/use-users';
import fieldMap from '@/utils/field-map';
import classNames from 'classnames';
import i18n, { t } from '@/i18n/index';
import EditAlias from './EditAlias.vue';
import { updateAliasCache } from './utils';

export type TableType = 'first' | 'second' | 'field';
type Command = 'editAlias'|'toggle';

const getTitle = (tableType:TableType) => {
  switch (tableType) {
    case 'first':
    case 'second':
    default:
      return '';
    case 'field':
      return t('menu-management.field_management');
  }
};
const getColumns = (tableType:TableType) => {
  const shareColumns = [{
    key: 'status',
    title: t('data-management.list-field.state'),
  }, {
    key: 'modifier',
    title: t('data-management.list-field.reviser'),
  }, {
    key: 'gmtModifyTime',
    title: t('data-management.list-field.modify_date'),
  }];
  const firstColumns = [{
    key: 'sourceName',
    title: t('data-management.list-field.material_primary_classification'),
  }, {
    key: 'alias',
    title: t('data-management.list-field.custom_primary_classification'),
  }];
  const secondColumns = [{
    key: 'sourceName',
    title: t('data-management.list-field.material_second_classification'),
  }, {
    key: 'firstName',
    title: t('data-management.list-field.belong_primary_classification'),
  }, {
    key: 'alias',
    title: t('data-management.list-field.custom_second_classification'),
  },
  ];
  const fieldColumns = [{
    key: 'sourceName',
    title: t('data-management.list-field.material_field'),
  }, {
    key: 'alias',
    title: t('data-management.list-field.custom_field_name'),
  }];
  const getTypeColumns = () => {
    switch (tableType) {
      case 'first':
        return firstColumns;
      case 'second':
        return secondColumns;
      case 'field':
        return fieldColumns;
      default:
        return [];
    }
  };
  const columns = [
    ...getTypeColumns(),
    ...shareColumns,
  ];
  return columns;
};

const getFetchFn = (tableType:TableType) => {
  switch (tableType) {
    case 'first':
    default:
      return uncacheFetchFirstCategoryList;
    case 'second':
      return uncacheFetchSecondCategoryList;
    case 'field':
      return fetchFieldList;
  }
};

export type Rows = AsyncReturnType<ReturnType<typeof getFetchFn>>['records'];
export type Row = GetArrayItem<Rows>;

const searchForm = [{
  key: 'keywords',
  title: '',
  placeholder: '输入关键词',
  prefixIcon: 'el-icon-search',
}];

const statusColorMap = {
  1: 'green',
  2: 'red',
};


export default defineComponent({
  name: 'data-manage-common-table',
  components: {},
  props: {
    type: {
      type: String as PropType<TableType>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const tableVm = ref<InstanceType<typeof SdTable>>();
    // const tileViewList = ref<InstanceType<typeof TileRow>>();


    const state = reactive({
      currentType: props.type,
      categoryType: 'first' as 'first'|'second',
      rows: [] as Rows,
    });

    const fetchFn = computed(() => getFetchFn(state.currentType));
    const columns = computed(() => getColumns(state.currentType));

    const userIds = ref<string[]>([]);
    const userObj = useUsers(userIds);

    const loadTable = () => {
      tableVm.value?.load();
    };
    const searchTable = () => {
      tableVm.value?.search();
    };

    watch(() => state.categoryType, (value) => {
      state.currentType = value;
      loadTable();
    });


    const editAlias = async (row:Row) => {
      const titleMap = {
        first: t('data-management.list-field.custom_primary_classification'),
        second: t('data-management.list-field.custom_second_classification'),
        field: t('data-management.list-field.custom_field_name'),
      };
      const title = titleMap[state.currentType];
      await dialog({ is: EditAlias, props: { type: state.currentType, row } }, { props: { title } });
      loadTable();
    };
    const toggle = async (row:Row) => {
      await confirm({
        title: `${t('data-management.btn.are_you_sure')}${row.status === 1
          ? t('data-management.btn.disable') : t('data-management.btn.enable')}`,
      });
      await updateStatus({ id: row.id, status: row.status === 1 ? 2 : 1 });
      loadTable();
      await updateAliasCache(props.type);
    };

    const toolColumnSlot = ({ row }:{row:Row, }) => (
      <div>
        <span class="text-link" onClick={() => editAlias(row)}>{t('data-management.btn.custom_name')}</span>
        <el-divider direction="vertical"></el-divider>
        <span class={classNames('text-link', row.alias ? '' : 'h-disabled')} onClick={() => toggle(row)}>{row.status === 1 ? '禁用' : '启用'}</span>
      </div>
    );
    const loaded = async (tableData:TableData<Row>) => {
      userIds.value = tableData.records.map(row => row.modifier);
    };
    return () => (
      <div class="data-manage-common-table">
        <SdTable
          ref={tableVm}
          title={getTitle(state.currentType)}
          fetchTable={fetchFn.value}
          showRowId
          columns={columns.value}
          form={searchForm}
          onLoaded={loaded}
          v-slots={{
            titleContent: state.currentType === 'field' ? null : () => {
              return (
                <el-tabs v-model={state.categoryType} class="flex-1">
                  <el-tab-pane label={t('data-management.list-field.primary_classification')} name="first"> </el-tab-pane>
                  <el-tab-pane label={t('data-management.list-field.second_classification')} name="second"> </el-tab-pane>
                </el-tabs>
              );
            },
            tool: toolColumnSlot,
            status: ({ row }:{row:Row}) => {
              const color = statusColorMap[row.status];
              return <span class={color}>{row.status === 1 ? t('data-management.btn.enable') : t('data-management.btn.disable')}</span>;
            },
            modifier: ({ row }:{row:Row}) => {
              return <span>{userObj.value[row.modifier]?.name || ''}</span>;
            },
            gmtModifyTime: ({ row }:{row:Row}) => {
              return <span>{dayjs(row.gmtModifyTime).format('YYYY-MM-DD')}</span>;
            },
          }}>

        </SdTable>
      </div>
    );
  },
});
