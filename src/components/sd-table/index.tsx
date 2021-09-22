import {
  defineComponent, reactive, computed, toRefs, getCurrentInstance, onMounted, nextTick, PropType, watch, rend, toRef,
} from 'vue';
import axios from '@/utils/axios';
import BlockError from '@/components/error/BlockError.vue';
import HForm from '../form/HForm/index.vue';
import { FormItems } from '../form/HForm/type';
import i18n, { useI18n } from './i18n';
import ColWidth from './ColWidth';
import uses from './uses';
import HTableColumn from './HTableColumn.vue';
import HEmpty from './Empty.vue';
import { Columns, Column, Obj } from './type';
import './index.scss';
import useSelection from './uses/useSelection';


const HTable = defineComponent({
  name: 'sd-table',
  inheritAttrs: false,
  props: {
    type: {
      type: String as () => 'back' | 'front',
      default: 'back',
    },
    // 分页相关参数,详情参照element 的分页组件,可通过false取消分页
    page: {
      type: [Object, Boolean],
      default: () => ({}),
    },
    url: {
      type: String,
    },
    fetchTable: {
      type: Function as PropType<(parms:Obj)=>Promise<TableData>>,
    },

    params: {
      type: Object,
      default: () => ({}),
    },
    queryParams: {
      type: Object,
      default: () => ({}),
    },
    form: {
      type: Array as () => FormItems,
      default: () => [],
    },
    maxHeight: {
      type: [Boolean, Number, String],
      default: true,
    },
    columns: {
      type: Array as PropType<Columns>,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
    footer: {
      type: Object,
      default: () => ({}),
    },
    border: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
    },
    tool: {
      type: Object as PropType<Partial<{width:number, minWidth:number}> >,
      default: () => ({}),
    },
    operate: {
      type: Object,
    },
    align: {
      type: String as () => 'center' | 'left' | 'right',
      default: 'left',
      // validator: (val:'center'|'left'|'right') => ['center', 'left', 'right'].includes(val),
    },
    title: {
      type: String,
    },
    showRowId: {
      type: Boolean,
      default: false,
    },
    fetchType: {
      type: String,
      default: 'get',
    },
    initSearch: {
      type: Boolean,
      default: true,
    },
    onSelection: {
      type: Function as PropType<(rows:Obj[])=>void>,
    },
    selectable: {
      type: Function as PropType<(row:Obj, index?: string) => boolean>,
    },
    formSlots: {
      type: Object as PropType<Record<string, Function>>,
    },
    handleParams: {
      type: Function as PropType<(parmas:Obj)=>void>,
    },
  },
  emits: ['loaded', 'selection'],
  setup(props, ctx) {
    const { t } = useI18n();
    const {
      usePage, useFormCheck, useEditModal, useQuery, useMaxHeight,
    } = uses;
    const { tableVm, currentMaxHeight } = useMaxHeight();
    const { emit, slots } = ctx;
    const that = getCurrentInstance()!;

    const state = reactive({
      // 表头
      currentColumns: [] as Columns,
      // 表格数据
      currentRows: [] as Obj[],
      // 汇总数据
      currentFooter: {},
      // 加载中
      loading: false,
      // 表单数据
      formData: [] as FormItems,
      // 表单参数
      formParams: {},
      // 工具列相关参数
      currentTool: {
        //  在tool-btns第一次获取到宽度时设置（只需要获取一次工具列的宽度，在v-tool上获取）
        HAS_SET_WID: false,
        minWidth: 100,
      },
      hasTitle: computed(() => props.title !== undefined || slots.title !== undefined),
      isSearch: false,
    });


    // const { getQuery, setQuery } = useQuery();
    // const query = getQuery();
    // const pageKey = props.page.pageKey ?? 'pageNumber';

    const {
      pageOptions, pageParams, pageChange, sizeChange, getFrontPageRows, frontPageOptions,
    } = usePage({
      type: props.type as 'back' | 'front',
      pageOptions: {

        ...props.page,
        // ...{ currentPage: +query[pageKey] || +props.page?.currentPage || 1, currentSize: +query.pageSize || +props.page?.currentSize || 10 },
        ...{ currentPage: +props.page?.currentPage || 1, currentSize: +props.page?.currentSize || 10 },
      },
    });

    const {
      addRowSelectionFlag, handleRowAllSelect, handleRowSelect, isAllSelect, setAllSelect,
    } = useSelection({ tableVm, currentRows: toRef(state, 'currentRows') });

    const currentPageChange = (page: number) => {
      pageChange(page);
      // setQuery({ ...getQuery(), [pageKey]: page });
    };

    const { validate, clearValidate } = useFormCheck(ctx);

    const {
      isEdit, editShow, editParams, editFormValues, editTitle, add, edit, del, getOperateTitle,
    } = useEditModal(props.operate);

    const selectionChange = (selectedRows:Obj[]) => {
      // 设置自定义的allSelect
      setAllSelect();
      emit('selection', selectedRows);
    };
    // 获取参数（每次发起请求前获取，保证是最新的参数）
    const getParams = () => {
      const params = {
        ...state.formParams,
        ...pageParams.value,
        //  ...that.sortParams,
        ...props.params,
      };
      if (typeof props.handleParams === 'function') props.handleParams(params);
      return params;
    };

    // 接口获取表格数据
    const _fetchTable = (_params: Obj) => {
      const method = props.fetchType;
      const data = method === 'post' ? _params : undefined;
      const params = method === 'get' ? _params : undefined;
      return axios({
        url: props.url ?? '', params, data, method,
      }).then(({ data: _data }) => _data || { columns: [], rows: [] });
    };

    // 获取表格数据
    const handleRows = (rows: Obj[], columns: Obj[]) => {
      let _rows = [] as Obj[];
      if (props.type === 'back') {
        _rows = rows || props.rows || [];
      } else {
        _rows = getFrontPageRows(rows, columns);
      }
      return addRowSelectionFlag(_rows);
    };

    // 处理表头
    const handleColumns = (columns: Columns) => {
      // 增加表头宽度
      const newColumns = new ColWidth(columns || props.columns, state.currentRows, state.currentFooter);

      // eslint-disable-next-line no-restricted-syntax
      for (const column of newColumns) {
        // 增加align
        const diyAlign = column.align || props.align;
        if (diyAlign) column.align = diyAlign as typeof props.align;
        if (column.children) handleColumns(column.children);
      }

      return newColumns;
    };

    watch(() => props.columns, (columns) => {
      state.currentColumns = handleColumns(columns);
    });

    // 设置表格相关数据(默认为传入数据)
    const setTableData = ({
      columns = props.columns, records: rows, footer, total,
    }: Obj = {}) => {
      state.currentRows = handleRows(rows, columns);
      state.currentFooter = footer || props.footer;
      state.currentColumns = handleColumns(columns);
      pageOptions.value.total = +total || rows.length || 0;
      selectionChange([]);// 修复刷新表格时勾选框没有去除的问题,如果后续需要增加默认勾选,可能需要修改
    };

    // 加载表格
    const load = async () => {
      // 在formParams设置数据之后再继续
      await nextTick();
      return new Promise((resolve, reject) => {
        if (props.fetchTable || props.url) {
          // 接口数据
          state.loading = true;
          const params = getParams();
          // setQuery({
          //   ...getQuery(), ...params, ...props.queryParams, ...frontPageOptions.value,
          // });
          const getApi = props.fetchTable || _fetchTable;
          getApi(params)
            .then((data: TableData) => {
              state.loading = false;
              const tableData = props.type === 'back' ? data : { records: data };
              setTableData(tableData);
              emit('loaded', data, that);
              resolve(data);
            }).catch((error: Error) => {
              // 不用finally,那样执行顺序会在抛出事件之后
              state.loading = false;
              setTableData({ columns: props.columns, records: props.rows, footer: props.footer });
              reject(error);
            });
        } else {
          // 前端传入数据
          setTableData({ columns: props.columns, records: props.rows, footer: props.footer });
          emit('loaded', that);
          resolve(props.rows);
        }
      });
    };

    // 显示控制
    const isShow = (type: 'add' | 'edit' | 'editCol' | 'del' | 'tool') => {
      const {
        attrs,
      } = that;
      const { operate } = props;
      const { currentRows } = state;
      switch (type) {
        case 'add':
          return operate || attrs.add;
        case 'edit':
          return operate || attrs.edit;
        case 'editCol':
          return (operate || attrs.edit) && currentRows.length;
        case 'del':
          return attrs.del;
        case 'tool':
          return slots.tool || operate || attrs.edit || attrs.del || slots['tool-btn'];
        default:
          return false;
      }
    };

    // 点击搜索
    const search = () => {
      state.isSearch = true;
      pageOptions.value.currentPage = 1;
      load();
    };

    // 处理搜索表单数据
    const setFormData = () => {
      state.formData = props.form.map((item) => ({
        // TODO: 这里设置value和keyup和change
        // value: query[item.key] ?? undefined,
        // onkeyup: (item.type === 'input' || !item.type)
        //   ? (e: KeyboardEvent) => {
        //     if (e.keyCode === 13) {
        //       search();
        //     }
        //   } : undefined,
        onChange() {
          console.log(333);
          if (item.validate && !item.validate()) {
            return;
          }
          search();
        },
        ...item,
      }));
    };


    onMounted(async () => {
      setFormData();
      if (props.initSearch) await load();
    });

    return {
      ...toRefs(state),
      t,
      tableVm,
      getParams,
      isShow,
      search,
      load,
      add,
      edit,
      del,
      getOperateTitle,
      pageOptions,
      pageParams,
      currentPageChange,
      sizeChange,
      getFrontPageRows,
      handleColumns,
      validate,
      clearValidate,
      isEdit,
      editShow,
      editParams,
      editFormValues,
      editTitle,
      selectionChange,
      handleRowSelect,
      handleRowAllSelect,
      isAllSelect,
    };
  },
  render() {
    const {
      $slots, $attrs, hasTitle, title, form, formData, size,
      loading, search, isShow, add, getOperateTitle, currentRows, border,
      currentColumns, selectionChange, edit, page, pageOptions, sizeChange, currentPageChange,
      operate, showRowId, onSelection, selectable, formSlots, isSearch, handleRowSelect, handleRowAllSelect, isAllSelect, t,
    } = this;
    const Title = hasTitle ? ($slots.title?.() || <div class="h-table-title flex-space-between">{title}{$slots.titleContent?.()}</div>) : null;
    const SearchBtn = (
      <el-form-item>
        <el-button
          type="primary"
          size={size || 'small'}
          loading={loading}
          onClick={search}
        >{t('search')}
        </el-button>
        {$slots['search-btn'] || null}
      </el-form-item>
    );
    const btns = $slots.btns?.() || null;
    const DefaultForm = (form.length && (
      <HForm
        class="default-sd-table-search"
        data={formData}
        vModel={this.formParams}
        inline=""
        size={size || 'small'}
        v-slots={formSlots}
      >
        {/* {SearchBtn} */}
      </HForm>
    )) || null;
    const Form = $slots.formItem ? $slots.formItem({ searchFn: search }) : DefaultForm;
    const Table = (
      <el-table
        data={currentRows}
        border={border}
        size={size}
        style="width: 100%"
        cell-class-name="customer-row"
        header-cell-class-name="customer-header"
        vLoading={loading}
        {...$attrs}
        onSelectionChange={selectionChange}
        ref="tableVm"
        v-slots={{
          empty: isSearch
            ? (<BlockError error={{ message: '暂无搜索结果,请试试其他关键词吧', code: '' }}></BlockError>) : $slots.empty
              ? $slots.empty : (<BlockError error={{ message: '暂无数据', code: '404' }}></BlockError>),
        }}
      >
        {
          (onSelection || $attrs.selection) && currentRows.length
            ? (<el-table-column
              // selectable={selectable}
              width={60}
              v-slots={
                {
                  default: ({ row, $index }: any) => {
                    return [
                      <el-checkbox
                        disabled={selectable ? (!selectable(row, $index)) : undefined}
                        modelValue={row.__isChecked}
                        onChange={() => handleRowSelect({ row, $index })}>
                      </el-checkbox>, <span style={{ paddingLeft: '10px' }}>{$index + 1}</span>];
                  },
                  header: ({ row, $index }: any) => {
                    return <el-checkbox modelValue={isAllSelect} onChange={() => handleRowAllSelect({ row, $index })}></el-checkbox>;
                  },
                }
              }
            >

            </el-table-column>)
            : null
        }
        {/* {
          showRowId && currentRows.length ? <el-table-column
            key="_id"
            prop="_id"
            label={t('numberCol')}
            align="center"
            fixed="left"
            minWidth="100"
            v-slots={
              {
                default: ({ row, $index }: any) => {
                  return $index + 1;
                },
              }
            }
          >
          </el-table-column> : null
        } */}
        {/* vue只支持根元素为一个，并且el-table不能出现el-table-column之外的元素（会错列），所以这里用数组的方式递归 */}
        {
          currentColumns.map((column: Column) => (
            <HTableColumn
              key={column.key}
              column={column}
              v-slots={$slots}
            >
              {/* 关键：将传入的具名插槽声明透传 */}
            </HTableColumn>
          ))
        }
        {/*  操作列,单独在这里声明  */}
        {
          $slots.tool
            ? (
              <el-table-column
                key="tool"
                prop="tool"
                label= {t('toolCol')}
                align="center"
                fixed="right"
                width={this.$props.tool.width ?? 200}
                minWidth={this.$props.tool.minWidth}
                v-slots={
                  {
                    default: ({ row, $index }: any) => {
                      return $slots.tool?.({ row, $index });
                    },
                  }
                }
              >
              </el-table-column>
            )
            : null
        }
      </el-table>
    );
    // 在外层将mainContent动态赋值为元素后再赋值为null, sdTable接受到的slots.mainContent仍然为函数,原因不明, 以下为临时变通方法
    const mainContentValue = $slots.mainContent?.({ tableData: currentRows, loading })[0];
    const Content = (mainContentValue && typeof mainContentValue.type === 'object') ? mainContentValue : Table;
    const Pagination = page
      ? <el-pagination
        class="h-page flex-center"
        // layout="pager"
        current-page={pageOptions.currentPage}
        page-size={pageOptions.currentSize}

        {...typeof page === 'boolean' ? {} : pageOptions }
        total={pageOptions.total}
        onSizeChange={sizeChange}
        onCurrentChange={currentPageChange}
      >
      </el-pagination>
      : null;


    return (
      <div class={['h-table', { 'has-title': hasTitle }]}>
        {Title}
        <div class="h-table-wrap" >
          <div class="handle-btns-bar">
            {btns}
          </div>
          <div class="form-wrap flex-justify-flex-end">
            {Form}
          </div>
          <div id="hTableWrap">
            {Content}
            {Pagination}
          </div>
        </div>
      </div>
    );
  },
});

export default HTable;


