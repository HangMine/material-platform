import {
  defineComponent, reactive, render, createApp, ref,
  computed,
} from 'vue';
import SdTable from '@/components/sd-table/index';
import '@/pages/main/material-manage/index.scss';
import { dialog, confirm } from '@/utils/vue/dialog';
import MaterialUploadComp from '@/pages/components/material/upload/index.vue';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';
import { fetchMaterial, fetchMarketMaterialList } from '@/api/material';
import {
  MaterialStatus, MaterialListItem, materialStatus, materialStatusOptions, SharedMaterialItem, MaterialList,
} from '@/models/Material';
import AddToFolder from '@/pages/components/FolderList/components/AddToFolder.vue';
import * as api from '@/api/material';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import { getContextUser, updateContextUser } from '@/loaders/context';
import AppError from '@/utils/error';
import { fetchUserAuditStatus } from '@/api/account';
import onCreated from '@/utils/vue/onCreated';
import CollapseSearchFilter from '@/components/CollapseSearchFilter';
// import ApplySample from '@/pages/main/applyRecord/components/dialog/handleApply.vue';
import ApplySample from '@/pages/main/applyRecord/components/dialog/applySample.vue';
import { ElMessage } from 'element-plus';
import classnames from 'classnames';
import { getMaterialImg, has4ddat } from '@/pages/components/material/utils';
import TileRow from '@/pages/components/TileView/TileRow.vue';
import TileItem from '@/pages/components/TileView/TileItem.vue';
import fieldMap from '@/utils/field-map';
import can, { needFillInfo } from '@/utils/can';
import { t } from '@/i18n/index';
import useMaterialTable from '@/utils/uses/business/use-material-table';

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
  },
  // {
  //   key: 'tag',
  //   title: '材料状态',
  // },
  // {
  //   key: 'isAgain',
  //   title: '被分享权限',
  // },
  // {
  //   key: 'shareTotal',
  //   title: '材料被分享次数',
  // },
  {
    key: 'sn',
    title: t('material-manage.table-list.supplier_number'),
  }, {
    key: 'isCollect',
    title: t('material-manage.table-list.is_collection'),
    width: 102,
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
  name: 'market',
  components: {},
  props: {},
  setup(props, { emit }) {
    const tableVm = ref<InstanceType<typeof SdTable>>();
    const {
      slots,
      viewType,
      rows,
      handleSelection,
      getToolColumnSlot,
      getMutiBtns,
    } = useMaterialTable({ tableVm, refer: 'market' });

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

    const user = computed(() => getContextUser());


    const getMaterialList = (params) => {
      Object.entries(params.fields).forEach(([key, val]) => {
        if (!val) {
          delete params.fields[key];
        }
      });
      return fetchMarketMaterialList(params);
    };

    const saveSearchFormParams = (currentParams: {[key: string]: any}) => {
      const { keywords, ...otherParams } = currentParams;
      state.params = { ...state.params, keywords, ...{ fields: { ...state.params.fields, ...otherParams } } };
    };

    return () => (
      <div class="public-market">
        <SdTable
          ref={tableVm}
          title={t('menu-management.public_market')}
          params={state.params}
          fetchTable={getMaterialList}
          showRowId
          columns={columns.value}
          // rows={rows}
          // form={form}
          onSelection={(_rows: SharedMaterialItem[]) => handleSelection(_rows)}
          selectable={(_row: SharedMaterialItem) => !_row.isCollect}
          tool={{
            width: 270,
          }}
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
                  isMarketPage={true}
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
            btns: () => {
              return getMutiBtns({ btnKeys: ['collect'] });
            },
            tool: getToolColumnSlot({ btnKeys: ['detail', 'viewer', 'collect', 'applySample'] }),

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
                      tool: ({ row, isInTile = false }:{row:SharedMaterialItem, isInTile: boolean}) => {
                        return (
                          <div>
                            {getToolColumnSlot({ btnKeys: ['detail', 'viewer', 'collect', 'applySample'] })({ row, isInTile })}
                          </div>
                        );
                      },
                    }}></TileItem>
                  ))}
                </TileRow>);
            },
            ...slots,
          }}>

        </SdTable>
      </div>
    );
  },
});
