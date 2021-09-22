import {
  defineComponent, reactive, render, createApp, ref,
  computed,
} from 'vue';
import SdTable from '@/components/sd-table/index';
import { Obj } from '@/components/sd-table/type';
import './index.scss';
import { dialog, confirm } from '@/utils/vue/dialog';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';
import { fetchAllMaterialsInRecommendation, removeFromRecommendation } from '@/api/recommendation';
import {
  MaterialStatus, materialStatus, materialStatusOptions, RecommendationMaterialItem, MaterialList,
} from '@/models/Material';
import classnames from 'classnames';
import * as api from '@/api/material';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import { getContextUser, updateContextUser } from '@/loaders/context';
import AppError, { NoQuatoError } from '@/utils/error';
import CollapseSearchFilter from '@/components/CollapseSearchFilter';
import { getMaterialImg } from '@/pages/components/material/utils';
import TileRow from '@/pages/components/TileView/TileRow.vue';
import TileItem from '@/pages/components/TileView/TileItem.vue';
import fieldMap from '@/utils/field-map';
import SdDropdown from '@/components/dropdown/dropdown.vue';
import BlockError from '@/components/error/BlockError.vue';
import can, { needFillInfo } from '@/utils/can';
import { t } from '@/i18n/index';
import useResourceUsage from '@/utils/uses/use-resource-usage';
import { increateUserResourceUsage } from '@/api/auth';
import usePrintMaterial from '@/utils/printMaterial/use-print-material';
import useMaterialTable from '@/utils/uses/business/use-material-table';
import companyUtils from '@/utils/companyUtils';
import RecommendationMaterialSearchBar from './components/RecommendationMaterialSearchBar.vue';

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
  {
    key: 'sn',
    title: t('material-manage.table-list.supplier_number'),
  },
  {
    key: 'companyName',
    title: '所属品牌',
  },
  {
    key: 'recommendMeetingName',
    title: '品牌推荐会',
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
    const {
      rows,
      viewType,
      slots,
      handleSelection,
      getToolColumnSlot,
      getMutiBtns,
      loadTable,
      getBtnClass,
    } = useMaterialTable({ tableVm, refer: 'manage' });

    const state = reactive({
      rows,
      params: {
        keywords: '',
        fields: {
          orgId: companyUtils.get(),
        } as unknown as api.MaterialSearchFields,
      },
      viewType,
    });

    const computedColumns = computed(() => {
      return fieldMap.translateList(columns.value);
    });

    const getMaterialList = (params: {[key: string]: any}) => {
      Object.entries(params.fields).forEach(([key, val]) => {
        if (!val) {
          delete params.fields[key];
        }
      });
      return fetchAllMaterialsInRecommendation(params);
    };

    // 将搜索参数保存到state.params,以便传入sd-table的params,使调用searchFn时入参正确
    const saveSearchFormParams = (currentParams: {[key: string]: any}) => {
      const { keywords, ...otherParams } = currentParams;
      state.params = { ...state.params, keywords, ...{ fields: { ...state.params.fields, ...otherParams } } };
    };

    const mutiDelFromRecommendation = async (_rows:RecommendationMaterialItem[] = state.rows) => {
      await confirm({ title: t('material-manage.wether_delete') });
      await removeFromRecommendation(_rows.map(row => ({
        catalogId: row.catalogId,
        originalId: row.originalCId,
        recommendMeetingId: row.recommendMeetingId, // 推荐会id
      })));
      loadTable();
    };

    const delFromRecommendation = async (row:RecommendationMaterialItem) => {
      await mutiDelFromRecommendation([row]);
    };

    const toolColumnSlot = ({ row, isInTile = false }:{row:RecommendationMaterialItem, isInTile: boolean}) => {
      return <>
        {getToolColumnSlot({ btnKeys: ['detail', 'printQrcode'] })({ row, isInTile })}
        <el-divider direction="vertical"></el-divider>
        <span class="text-link" onClick={() => delFromRecommendation(row)}>{t('material-manage.btn.delete')}</span>
      </>;
    };

    return () => (
      <div class="material-manage">
        <SdTable
          ref={tableVm}
          title={t('menu-management.recommendation_manage_material')}
          params={state.params}
          fetchTable={getMaterialList}
          showRowId
          columns={computedColumns.value}
          onSelection={(_rows:RecommendationMaterialItem[]) => handleSelection(_rows)}
          v-slots={{
            formItem: ({ searchFn }: { searchFn: () => void }) => (
              <>
                <RecommendationMaterialSearchBar
                  handleChange={(currentParams: {[key: string]: any}) => {
                    saveSearchFormParams(currentParams);
                    searchFn();
                  }}
                ></RecommendationMaterialSearchBar>
                {/* <CollapseSearchFilter
                  isHomePage={true}
                  handleChange={(currentParams: {[key: string]: any}) => {
                    saveSearchFormParams(currentParams);
                    searchFn();
                  }}
                ></CollapseSearchFilter> */}
              </>
            ),
            btns: () => {
              return (
                <>
                  <span class={getBtnClass()} onClick={() => mutiDelFromRecommendation()}>{t('material-manage.btn.delete')}</span>
                  <el-divider direction="vertical"></el-divider>
                  {getMutiBtns({ btnKeys: ['printQrcode'] })}
                </>
              );
            },
            tool: toolColumnSlot,
            // 将mainContent动态赋值为元素后再赋值为null, sdTable接受到的slots.mainContent仍然为函数,原因不明
            mainContent: ({ tableData, maxHeight, loading }: {tableData: Obj[], maxHeight: number, loading: boolean}) => {
              return state.viewType === 'table'
                ? null
                : (<TileRow
                  vLoading={loading}
                  style={{ height: `${maxHeight}px` }}
                  onSelection={(_rows:RecommendationMaterialItem[]) => handleSelection(_rows)}
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
