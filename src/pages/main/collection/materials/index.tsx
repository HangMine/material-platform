import {
  defineComponent, reactive, render, createApp, ref, watch, computed,
} from 'vue';
import SdTable from '@/components/sd-table/index';
import '@/pages/main/material-manage/index.scss';
import './index.scss';
import { dialog, confirm } from '@/utils/vue/dialog';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';
import { FormItems, Options } from '@/components/form/HForm/type';
import { getContextUser } from '@/loaders/context';
import MaterialViewer from '@/pages/components/material/viewer/index.vue';
import {
  MaterialStatus, materialStatus, materialStatusOptions, MaterialListItem, MaterialList, SharedMaterialItem,
} from '@/models/Material';
import { fetchMaterial } from '@/api/material';

import CategoryCascader from '@/components/form/cascader/CategoryCascader.vue';
import classnames from 'classnames';
import * as api from '@/api/material';
import { untilLoaded } from '@/utils/open-window';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import Share from '@/pages/components/share/index.vue';
import CollapseSearchFilter from '@/components/CollapseSearchFilter';
import { ElMessage } from 'element-plus';
import usePermisson from '@/utils/uses/use-permisson';
import ApplySample from '@/pages/main/applyRecord/components/dialog/applySample.vue';

import { checkShare } from '@/pages/components/util';
import { getMaterialImg, useHas4ddat, has4ddat } from '@/pages/components/material/utils';
import TileRow from '@/pages/components/TileView/TileRow.vue';
import TileItem from '@/pages/components/TileView/TileItem.vue';
import fieldMap from '@/utils/field-map';
import {
  fetchMaterialBookList,
} from '@/api/materialMenu';
import { useRoute } from 'vue-router';
import TopNav from '@/pages/main/materialMenu/components/TopNav.vue';
import SdDropdown from '@/components/dropdown/dropdown.vue';
import can, { needFillInfo } from '@/utils/can';

import BlockError from '@/components/error/BlockError.vue';
import { t } from '@/i18n/index';
import useMaterialTable from '@/utils/uses/business/use-material-table';

type Command = 'viewer'|'applySample';

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
  name: 'collectionMaterial',
  components: { SdDropdown },
  props: {},
  setup(props, { emit }) {
    const tableVm = ref<InstanceType<typeof SdTable>>();

    // const { isSupplier, isBuyer } = usePermisson();
    const { query: { folderName, folderId } } = useRoute();
    const {
      rows,
      viewType,
      slots,
      handleSelection,
      viewer,
      getToolColumnSlot,
      getToolDropDown,
      getMutiBtns,
      applySample,
    } = useMaterialTable({ tableVm, refer: 'manage' });

    fieldMap.useToggle();
    const state = reactive({
      rows,
      params: {
        keywords: '',
        fields: {
          tag: '',
          categoryId: [],
        } as unknown as api.MaterialSearchFields,
      },
      viewType,
    });

    const computedColumns = computed(() => {
      return fieldMap.translateList(columns.value);
    });


    const handleCommand = async (command:Command, row:MaterialListItem) => {
      switch (command) {
        case 'viewer':
          if (!can('0034')) return;
          await viewer(row);
          break;
        case 'applySample':
          if (!needFillInfo()) return;
          applySample(row);
          break;
        default:
          break;
      }
    };

    const getMaterialList = (params) => {
      Object.entries(params.fields).forEach(([key, val]) => {
        if (!val) {
          delete params.fields[key];
        }
      });
      params.fields.id = folderId;
      return fetchMaterialBookList(params);
    };

    const saveSearchFormParams = (currentParams: {[key: string]: any}) => {
      const { keywords, ...otherParams } = currentParams;
      state.params = { ...state.params, keywords, ...{ fields: { ...state.params.fields, ...otherParams } } };
    };

    const toolColumnSlot = ({ row, isInTile = false }:{row:SharedMaterialItem, isInTile: boolean}) => (
      <div>
        { getToolColumnSlot({ btnKeys: ['detail', 'cancelCollect', 'share'] })({ row, isInTile })}
        <el-divider direction="vertical"></el-divider>
        {
          getToolDropDown({
            row,
            isInTile,
            dropdownKeys: ['applySample', 'viewer'],
          })
        }
      </div>
    );

    return () => (
      <div class="collect-materials">
        <TopNav headLine={t('folder.material_book')} subHead={folderName}></TopNav>
        <SdTable
          ref={tableVm}
          params={state.params}
          fetchTable={getMaterialList}
          showRowId
          columns={computedColumns.value}
          // form={form}
          onSelection={(_rows:MaterialListItem[]) => handleSelection(_rows)}
          tool={{
            width: 220,
          }}
          v-slots={{
            formItem: ({ searchFn }: { searchFn: () => void }) => (
              <>
                <CollapseSearchFilter
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
              return getMutiBtns({ btnKeys: ['share', 'cancelCollect'] });
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
                    <TileItem key={index} data={tile} v-slots={{
                      tool: toolColumnSlot,
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
