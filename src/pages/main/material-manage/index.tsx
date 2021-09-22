import {
  defineComponent, reactive, render, createApp, ref,
  computed,
  onUnmounted,
} from 'vue';
import SdTable from '@/components/sd-table/index';
import { Obj } from '@/components/sd-table/type';
import './index.scss';
import { dialog, confirm } from '@/utils/vue/dialog';
import MaterialUploadComp from '@/pages/components/material/upload/index.vue';
import { fetchMaterial, fetchMaterialList } from '@/api/material';
import {
  MaterialStatus, materialStatus, materialStatusOptions, MaterialListItem, MaterialList,
} from '@/models/Material';
import classnames from 'classnames';
import * as api from '@/api/material';
import CollapseSearchFilter from '@/components/CollapseSearchFilter';
import { getMaterialImg, has4ddat } from '@/pages/components/material/utils';
import TileRow from '@/pages/components/TileView/TileRow.vue';
import TileItem from '@/pages/components/TileView/TileItem.vue';
import fieldMap from '@/utils/field-map';
import AddToFolder from '@/pages/components/FolderList/components/AddToFolder.vue';
import SdDropdown from '@/components/dropdown/dropdown.vue';
import can, { needFillInfo } from '@/utils/can';
import { t } from '@/i18n/index';
import useMaterialTable from '@/utils/uses/business/use-material-table';
import Download from './components/Download.vue';
import History from './components/History.vue';
import RecommendToBrand from './components/RecommendToBrand.vue';

type Command = 'viewer'|'printQrcode'|'history'|'share'|'del'|'addToMaterialBook'|'download'|'recommendToBrand';

const columns = computed(() => {
  return [{
    key: 'imgUrl',
    title: t('material-manage.table-list.material_picture'),
  }, {
    key: 'name',
    title: t('material-manage.table-list.name'),
    addWid: 68,
  }, {
    key: 'colorInfo',
    title: t('material-manage.table-list.color_card'),
    minWidth: 210,
    showOverflowTooltip: false,
  }, {
    key: 'tag',
    title: t('material-manage.table-list.material_status'),
  },
  {
    key: 'isAgain',
    title: t('material-manage.table-list.share_valid'),
  },
  // {
  //   key: 'shareTotal',
  //   title: '材料被分享次数',
  // },
  {
    key: 'sn',
    title: t('material-manage.table-list.supplier_number'),
  },
  {
    key: 'yearSeason',
    title: t('material-manage.table-list.yearSeason'),
  },
  {
    key: 'applicableProduct',
    title: t('material-manage.table-list.use_product'),
  }];
});


export default defineComponent({
  name: 'material-manage',
  components: { SdDropdown },
  props: {},
  setup(props, { emit }) {
    const tableVm = ref<InstanceType<typeof SdTable>>();
    // const tileViewList = ref<InstanceType<typeof TileRow>>();

    const {
      slots,
      viewType,
      rows,
      handleSelection,
      searchTable,
      exportWithFilter,
      getToolColumnSlot,
      getToolDropDown,
      getMutiBtns,
    } = useMaterialTable({ tableVm, refer: 'manage' });

    fieldMap.useToggle();


    const state = reactive({
      rows,
      params: {
        keywords: '',
        fields: {
          categoryId: [],
        } as unknown as api.MaterialSearchFields,
      },
      viewType,
    });

    const computedColumns = computed(() => {
      return fieldMap.translateList(columns.value);
    });

    // 进入页面时更新用户审核状态
    // const updateUserAuditStatus = async () => {
    //   const res = await fetchUserAuditStatus();
    //   await updateContextUser({ status: res });
    // };
    // updateUserAuditStatus();
    // const testError = async () => {
    //   throw Error('test Error');
    // };

    // onCreated(() => updateUserAuditStatus());


    const uploadMaterial = async () => {
      await dialog({
        is: MaterialUploadComp,
        props: {
          onReupload() {
            searchTable();
          },
        },
      });
      searchTable();
    };


    const getMaterialList = (params: {[key: string]: any}) => {
      Object.entries(params.fields).forEach(([key, val]) => {
        if (!val) {
          delete params.fields[key];
        }
      });
      return fetchMaterialList(params);
    };
    // 将搜索参数保存到state.params,以便传入sd-table的params,使调用searchFn时入参正确
    const saveSearchFormParams = (currentParams: {[key: string]: any}) => {
      const { keywords, ...otherParams } = currentParams;
      state.params = { ...state.params, keywords, ...{ fields: { ...state.params.fields, ...otherParams } } };
    };

    const toolColumnSlot = ({ row, isInTile = false }:{row:MaterialListItem, isInTile: boolean}) => (
      <div>

        { getToolColumnSlot({ btnKeys: ['detail', 'edit', 'updown'] })({ row, isInTile })}
        <el-divider direction="vertical"></el-divider>
        {
          getToolDropDown({
            row,
            isInTile,
            dropdownKeys: ['viewer', 'recommendToBrand', 'printQrcode', 'history', 'share', 'addToMaterialBook', 'download', 'del'],
          })
        }

      </div>
    );

    return () => (
      <div class="material-manage">

        <SdTable
          ref={tableVm}
          title={t('menu-management.material_management')}
          params={state.params}
          fetchTable={getMaterialList}
          showRowId
          columns={computedColumns.value}
          // rows={rows}
          // form={form}
          onSelection={(_rows:MaterialListItem[]) => handleSelection(_rows)}
          // handleParams={handleParams}
          // formSlots={{
          //   categoryId: () => (
          //     <CategoryCascader onChange={handleCascaderChange} clearable></CategoryCascader>
          //   ),
          // }}
          v-slots={{
            formItem: ({ searchFn }: { searchFn: () => void }) => (
              <>
                <CollapseSearchFilter
                  isHomePage={true}
                  handleChange={(currentParams: {[key: string]: any}) => {
                    saveSearchFormParams(currentParams);
                    searchFn();
                  }}
                ></CollapseSearchFilter>
                <el-button class="btn-view-switch" onClick={() => { state.viewType = state.viewType === 'table' ? 'tile' : 'table'; }}>
                  <i class={['icon', `i-r-${state.viewType === 'table' ? 'biaoge' : 'pingpu'}-16`]}></i>
                </el-button>
              </>
            ),
            titleContent: () => [
              <div>
                <el-button type="primary" onClick={() => can('0025') && uploadMaterial()}>{t('material-manage.btn.upload_material')}</el-button>
                <el-button onClick={exportWithFilter}>{t('material-manage.btn.export')}</el-button>
              </div>,
            ],
            btns: () => {
              return getMutiBtns({ btnKeys: ['up', 'down', 'del', 'share', 'printQrcode', 'recommendToBrand'] });
            },
            tool: toolColumnSlot,
            // 将mainContent动态赋值为元素后再赋值为null, sdTable接受到的slots.mainContent仍然为函数,原因不明
            mainContent: ({ tableData, maxHeight, loading }: {tableData: Obj[], maxHeight: number, loading: boolean}) => {
              return state.viewType === 'table'
                ? null
                : (<TileRow
                  vLoading={loading}
                  style={{ height: `${maxHeight}px` }}
                  onSelection={(_rows:MaterialListItem[]) => handleSelection(_rows)}
                >
                  {tableData.map((tile, index) => (
                    <TileItem key={index} data={tile} index={index} v-slots={{
                      tool: toolColumnSlot,
                    }}></TileItem>
                  ))}
                </TileRow>);
            },
            ...slots,
          }}
        >
        </SdTable>
      </div>
    );
  },
});
