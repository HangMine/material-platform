import {
  defineComponent, reactive, render, createApp, ref,
  computed,
} from 'vue';
import SdTable from '@/components/sd-table/index';
import { Obj } from '@/components/sd-table/type';
import './index.scss';
import { dialog, confirm } from '@/utils/vue/dialog';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';
import MaterialViewer from '@/pages/components/material/viewer/index.vue';
import {
  MaterialStatus, materialStatus, materialStatusOptions, MaterialListItem, MaterialList,
} from '@/models/Material';
import * as api from '@/api/material';
import * as accountApi from '@/api/account';

import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import { getContextUser, updateContextUser } from '@/loaders/context';
import { fetchUserAuditStatus } from '@/api/account';
import onCreated from '@/utils/vue/onCreated';
import CollapseSearchFilter from '@/components/CollapseSearchFilter';
import { getMaterialImg } from '@/pages/components/material/utils';
import TileRow from '@/pages/components/TileView/TileRow.vue';
import TileItem from '@/pages/components/TileView/TileItem.vue';
import History from '@/pages/main/material-manage/components/History.vue';

import { useRouter, useRoute } from 'vue-router';
import {
  ColorLibraryItem, removeToColorCard, removeToMaterialBook,

  ColorCardItem, fetchMaterialBookList,
} from '@/api/materialMenu';

import { ElMessage } from 'element-plus';
import fieldMap from '@/utils/field-map';
import BlockError from '@/components/error/BlockError.vue';
import can from '@/utils/can';
import { t } from '@/i18n/index';
import TopNav from '../components/TopNav.vue';

const columns = computed(() => {
  return [{
    key: 'imgUrl',
    title: t('material-manage.table-list.material_picture'),
  }, {
    key: 'name',
    title: t('material-manage.table-list.name'),
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
  }, {
    key: 'yearSeason',
    title: t('material-manage.table-list.yearSeason'),
  }, {
    key: 'applicableProduct',
    title: t('material-manage.table-list.use_product'),
  }];
});
const statusColorMap = {
  待上架: 'green',
  已上架: 'blue',
  已下架: 'gray',
};


export default defineComponent({
  name: 'material-manage',
  components: {},
  props: {},
  setup(props, { emit }) {
    const { query: { MaterialBookName, fatherId } } = useRoute();
    const tableVm = ref<InstanceType<typeof SdTable>>();
    fieldMap.useToggle();
    const state = reactive({
      rows: [] as MaterialList,
      params: {
        keywords: '',
        fields: {
          categoryId: [],
        } as unknown as api.MaterialSearchFields,
      },
      viewType: 'table' as 'table'|'tile',
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

    const user = computed(() => getContextUser());

    const loadTable = () => {
      tableVm.value?.load();
    };
    const searchTable = () => {
      tableVm.value?.search();
    };

    // 检查是否有4ddat文件或者云渲染图片
    const singleCheckRender = (row:MaterialListItem) => {
      const hasBanItem = row.renderingInfo.some(item => item.isBan);
      const hasImgInfo = row.renderingInfo.some(item => item.imgInfo && Object.values(item.imgInfo).length);
      return hasBanItem || hasImgInfo;
    };
    const mutiCheckRender = (_rows:MaterialListItem[]) => {
      return _rows.every(row => singleCheckRender(row));
    };
    function mutiCheck(passStatus:MaterialStatus[]);
    function mutiCheck(checkFn:(row:MaterialListItem)=>boolean);
    function mutiCheck(arg:MaterialStatus[]|(()=>boolean)) {
      // TODO: 这里不做4ddat校验,否则需要调多次detail接口确认
      if (!state.rows.length) return false;
      const isAllPass = state.rows.every(row => {
        let isPass = true;
        if (typeof arg === 'function') {
          isPass = arg();
        } else {
          isPass = arg.includes(row.tag);
        }
        return isPass;
      });

      return isAllPass;
    }


    // 缓存类别映射对象，避免重复请求
    const cacheCategoryMap: {[id: string]: string} = {};
    // 构建材料类别文本格式
    // const formatMaterialTypeContent = (categoryList: api.Category) => {
    //   let res = '';
    //   if (categoryList?.length) {
    //     categoryList.forEach((info, index) => {
    //       if (info.name) res += `${info.name}${index === categoryList.length - 1 ? '' : '/'}`;
    //     });
    //   }
    //   return res;
    // };
    // 获取材料类别数组
    // const getBelongCategoryList = async (categoryId: string) => {
    //   if (cacheCategoryMap[categoryId]) {
    //     return cacheCategoryMap[categoryId];
    //   }
    //   cacheCategoryMap[categoryId] = await api.fetchCategoryList(categoryId);
    //   return cacheCategoryMap[categoryId];
    // };


    const detail = async (row:MaterialListItem) => {
      await dialog({
        is: MaterialDetailComp,
        props: {
          row,
        },
      });
    };
    const handleMove = async (row:MaterialListItem) => {
      await confirm({ title: t('folder.move_from_material_book') });
      await removeToMaterialBook({ catalogIds: [row.catalogId], materialBookId: [fatherId as string], originalCIds: [row.originalCId] });
      await ElMessage.success(t('folder.remove_material_success'));
      loadTable();
    };

    const viewer = async (row:MaterialListItem) => {
      await dialog({
        is: MaterialViewer,
        props: {
          catalogId: row.catalogId,
        },
      });
    };
    // Test
    // viewer();
    const history = async (row:MaterialListItem) => {
      await dialog({
        is: History,
        props: {
          material: row,
        },
      });
    };
    const handleSelection = (_rows:MaterialListItem[]) => {
      state.rows = _rows;
    };


    // const handleCascaderChange = (catergorys:string[]) => {
    //   const categoryId = catergorys?.[2] || catergorys?.[1] || '';
    //   state.params.fields.categoryId = categoryId ? [categoryId] : [];
    //   searchTable();
    // };

    // const parseApplicableProduct = (value?:string[][]) => {
    //   if (!value) return '--';
    //   return value.map(strArr => strArr.join('/')).join();
    // };

    const parseApplicableProduct = (value?:string[]) => {
      if (!value) return '--';
      return value.join();
    };

    // const handleParams = (params:Obj) => {
    //   if (params.fields) params.fields.tag = params.tag;
    //   delete params.tag;
    //   delete params.categoryId;
    // };
    const getMaterialList = (params: {[key: string]: any}) => {
      Object.entries(params.fields).forEach(([key, val]) => {
        if (!val) {
          delete params.fields[key];
        }
      });
      params.fields.id = fatherId;
      return fetchMaterialBookList(params);
    };
    // 将搜索参数保存到state.params,以便传入sd-table的params,使调用searchFn时入参正确
    const saveSearchFormParams = (currentParams: {[key: string]: any}) => {
      const { keywords, ...otherParams } = currentParams;
      state.params = { ...state.params, keywords, ...{ fields: { ...state.params.fields, ...otherParams } } };
    };

    const toolColumnSlot = ({ row, isInTile = false }:{row:MaterialListItem, isInTile: boolean}) => (
      <div>
        {isInTile ? null : (
          <>
            <span class="text-link" onClick={() => detail(row)}>{t('see')}</span>
            <el-divider direction="vertical"></el-divider>
          </>
        )}
        <span class="text-link" onClick={() => handleMove(row)}>{t('folder.remove_from_material_book')}</span>


      </div>
    );
    return () => (
      <div class="material-manage">
        <TopNav headLine={t('folder.material_book')} subHead={MaterialBookName}></TopNav>
        <SdTable
          ref={tableVm}
          params={state.params}
          fetchTable={getMaterialList}
          showRowId
          columns={computedColumns.value}
          // rows={rows}
          // form={form}
          onSelection={(_rows:MaterialListItem[]) => handleSelection(_rows)}
          tool={{
            width: 150,
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


            tool: toolColumnSlot,
            imgUrl: ({ row }:{row:MaterialListItem}) => {
              return (
                <div class="table-img click-style" onClick={() => detail(row)}>
                  <base-image src={getMaterialImg(row)} ></base-image>
                </div>
              );
            },
            name: ({ row }:{row:MaterialListItem}) => {
              return <span class="click-style blue" onClick={() => detail(row)}>{row.name}</span>;
            },
            tag: ({ row }:{row:MaterialListItem}) => {
              const color = statusColorMap[row.tag];
              return <span class={color}>{row.tag}</span>;
            },
            yearSeason: ({ row }:{row:MaterialListItem}) => {
              return <span>{Array.isArray(row.yearSeason) && row.yearSeason.join()}</span>;
            },
            isAgain: ({ row }:{row:MaterialListItem}) => {
              row.isAgainText = row.isAgain === 0 ? '不可分享' : '允许分享';
              return row.isAgainText;
            },
            // season: ({ row }:{row:MaterialListItem}) => {
            //   return <span>{row.season.join()}</span>;
            // },
            // applicableProduct: ({ row }:{row:MaterialListItem}) => {
            //   return <span>{row.applicableProduct.join()}</span>;
            // },
            // surfaceTechnology: ({ row }:{row:MaterialListItem}) => {
            //   return <span>{Array.isArray(row.surfaceTechnology) ? row.surfaceTechnology.join() : row.surfaceTechnology}</span>;
            // },
            // materialtechnology: ({ row }:{row:MaterialListItem}) => {
            //   return <span>{row.materialtechnology.join()}</span>;
            // },
            colorInfo: ({ row }:{row:MaterialListItem}) => {
              const colors = row.renderingInfo.slice(0, 3);
              const showColor = row.renderingInfo.find(color => color.isDefault) || colors[0] || {};
              const TextSpan = (color:GetArrayItem<typeof colors>) => {
                return <span class="color-cell">
                  <span class="color-name">{color.name}</span>
                  <span class="color-family">/{color.colorFamily}</span>
                </span>;
              };
              return colors.length > 1 ? <el-dropdown class="color-info-dropdown-table" trigger="click" v-slots={{
                dropdown() {
                  return tableVm.value?.loading ? null : (
                    <el-dropdown-menu class="color-info-dropdown">
                      {
                        colors.map(color => (
                          <el-dropdown-item >{TextSpan(color)}</el-dropdown-item>
                        ))
                      }
                      <el-dropdown-item divided class="more-color-info" onClick={() => detail(row)}>{t('check_more')}</el-dropdown-item>
                    </el-dropdown-menu>
                  );
                },
              }}>
                <span class="color-info-table">
                  {TextSpan(showColor)}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>

              </el-dropdown>
                : <over-text class="color-info-table">
                  {TextSpan(showColor)}
                </over-text>;
            },
            applicableProduct: ({ row }:{row:MaterialListItem}) => {
              return <span>{parseApplicableProduct(tryParseJson(row.applicableProduct)) }</span>;
            },
            // 将mainContent动态赋值为元素后再赋值为null, sdTable接受到的slots.mainContent仍然为函数,原因不明
            mainContent: ({ tableData, maxHeight }: {tableData: Obj[], maxHeight: Number}) => {
              return state.viewType === 'table'
                ? null
                : (<TileRow style={{ height: `${maxHeight}px` }}>
                  {tableData.map((tile, index) => (
                    <TileItem key={index} data={tile} index={index} v-slots={{
                      tool: toolColumnSlot,
                    }}></TileItem>
                  ))}
                </TileRow>);
            },
            empty: (<BlockError error={{ message: '尚未添加材料，去公开市场看看吧', code: '404' }}></BlockError>),
          }}>

        </SdTable>
      </div>
    );
  },
});
