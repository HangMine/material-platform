import {
  MaterialList, MaterialListItem, MaterialStatus, SharedMaterialItem,
} from '@/models/Material';
import can, { needFillInfo } from '@/utils/can';
import { dialog, confirm } from '@/utils/vue/dialog';
import {
  computed,
  reactive, Ref, toRefs,
} from 'vue';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';
import { getMaterialImg, has4ddat } from '@/pages/components/material/utils';
import SdTable from '@/components/sd-table/index';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import TileRow from '@/pages/components/TileView/TileRow.vue';
import TileItem from '@/pages/components/TileView/TileItem.vue';
import BlockError from '@/components/error/BlockError.vue';
import { t } from '@/i18n';
import Share from '@/pages/components/share/index.vue';

import * as api from '@/api/material';
import * as accountApi from '@/api/account';
import usePrintMaterial from '@/utils/printMaterial/use-print-material';
import { NoQuatoError } from '@/utils/error';
import { increateUserResourceUsage } from '@/api/auth';
import classnames from 'classnames';
import FileSaver from 'file-saver';
import MaterialViewer from '@/pages/components/material/viewer/index.vue';

import { ElMessage } from 'element-plus';
import AddToFolder from '@/pages/components/FolderList/components/AddToFolder.vue';
import ApplySample from '@/pages/main/applyRecord/components/dialog/applySample.vue';
import { getContextUser } from '@/loaders/context';
import MaterialEditComp from '@/pages/components/material/edit/index.vue';
import SdDropdown from '@/components/dropdown/dropdown.vue';
import Download from '@/pages/main/material-manage/components/Download.vue';
import History from '@/pages/main/material-manage/components/History.vue';
import RecommendToBrand from '@/pages/main/material-manage/components/RecommendToBrand.vue';
import useResourceUsage from '../use-resource-usage';

import './material-table.scss';

const statusColorMap = {
  待上架: 'green',
  已上架: 'blue',
  已下架: 'gray',
};

type TableRefer = 'manage'|'market'|'recommendation';
type Option = {
  tableVm:Ref<InstanceType<typeof SdTable>>,
  refer: TableRefer
};


const useMaterialTable = ({ tableVm, refer }:Option) => {
  const { printMaterial } = usePrintMaterial();
  const { isFunctionAvaliable } = useResourceUsage();
  const user = computed(() => getContextUser());


  const isReferManage = computed(() => refer === 'manage');

  const state = reactive({
    viewType: 'table' as 'table'|'tile',
    rows: [] as MaterialList,
  });


  const isEnvironmentProtection = (row:MaterialListItem) => {
    // eslint-disable-next-line eqeqeq
    return row.isEnvironmentProtection == 1; // 兼容列表接口返回字符串1
  };

  const handleSelection = (_rows:MaterialListItem[]) => {
    state.rows = _rows;
  };

  const loadTable = () => {
    tableVm.value?.load();
  };
  const searchTable = () => {
    tableVm.value?.search();
  };

  const detail = async (row:MaterialListItem) => {
    await dialog({
      is: MaterialDetailComp,
      props: {
        row,
      },
    });
  };

  const edit = async (row:MaterialListItem) => {
    await dialog({
      is: MaterialEditComp,
      props: {
        material: row,
      },
    });
    loadTable();
  };

  const viewer = async (row: SharedMaterialItem) => {
    await dialog({
      is: MaterialViewer,
      props: {
        catalogId: row.catalogId,
      },
    });
  };

  const parseApplicableProduct = (value?:string[]) => {
    if (!Array.isArray(value)) return '--';
    return value.join();
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

  const mutiUp = async (_rows:MaterialListItem[] = state.rows) => {
    await confirm({ title: t('material-manage.sure_on_shift_material') });
    await api.onMarket(_rows.map(row => row.catalogId));
    loadTable();
  };
  const up = async (row:MaterialListItem) => {
    await mutiUp([row]);
  };
  const mutiDown = async (_rows:MaterialListItem[] = state.rows) => {
    await confirm({ title: t('material-manage.sure_off_shift_material') });
    await api.downMarket(_rows.map(row => row.catalogId));
    loadTable();
  };
  const down = async (row:MaterialListItem) => {
    await mutiDown([row]);
  };

  const mutiDel = async (_rows:MaterialListItem[] = state.rows) => {
    await confirm({ title: t('material-manage.wether_delete') });
    await api.delMaterial(_rows.map(row => row.catalogId));
    loadTable();
  };
  const del = async (row:MaterialListItem) => {
    await mutiDel([row]);
  };
  const mutiShare = async (_rows:MaterialListItem[] = state.rows) => {
    // await checkUserCompanyName();
    await dialog({
      is: Share,
      props: {
        materials: _rows,
        showConfig: true,
      },
    }, {
      noTitle: true,
      props: {
        width: '705px',
      },
    });
  };
  const share = async (row:MaterialListItem) => {
    await mutiShare([row]);
  };

  const mutiPrintQrcode = async (_rows:MaterialListItem[] = state.rows) => {
    // 判断是否有剩余名额
    if (!await isFunctionAvaliable('PRINT')) {
      throw new NoQuatoError();
    }
    // 递增打印次数
    increateUserResourceUsage({ type: 'PRINT', num: 1 });
    printMaterial(_rows);
  };

  const printQrcode = async (row:MaterialListItem) => {
    // await checkUserCompanyName();
    await mutiPrintQrcode([row]);
  };

  const getBtnClass = (passStatus?:MaterialStatus[]) => {
    return classnames(['text-link', { 'h-disabled': passStatus ? !mutiCheck(passStatus) : !mutiCheck(() => !!state.rows.length) }]);
  };

  const getShareBtnClass = () => {
    return classnames(['text-link', { 'h-disabled': !mutiCheck(() => !!state.rows.length) }]);
  };

  const exportWithFilter = async () => {
    try {
      if (tableVm.value) tableVm.value.loading = true;
      const defaultPageParams = {
        page: 1,
        size: tableVm.value?.pageOptions.currentSize,
      };
      const tableParams = tableVm.value?.getParams();
      const params = {
        ...defaultPageParams,
        ...tableParams,
      };
      const res = await api.exportMaterialList(params);
      FileSaver.saveAs(res, `${new Date().getTime()}.xlsx`);
    } finally {
      if (tableVm.value) tableVm.value.loading = false;
    }
  };

  const switchCollectStatus = async (_row: SharedMaterialItem) => {
    const { isCollect } = _row;
    if (!isCollect && user?.value?.id === _row.creator) {
      ElMessage.error(t('eleMessage.do_not_collect_own', { name: t('folder.material') }));
      return;
    }
    if (isCollect) {
      await api.cancelCollectMaterial([_row.originalCId]);
      ElMessage.success(t('eleMessage.cancel_collect_name_success', { name: t('folder.material') }));
    } else {
      await dialog({
        is: AddToFolder,
        props: {
          receiveType: 'collect',
          detailId: _row.originalCId,
          title: t('menu-management.favorites'),
        },
      });
    }
    await loadTable();
  };

  const mutiCollect = async (_rows: SharedMaterialItem[] = state.rows) => {
    const obj = _rows.find(item => user?.value?.id === item.creator);
    if (obj) {
      ElMessage.error(t('eleMessage.do_not_collect_choose_again', { name: t('folder.material') }));
      return;
    }
    await dialog({
      is: AddToFolder,
      props: {
        receiveType: 'collect',
        detailId: _rows.map(_row => _row.originalCId),
        title: t('menu-management.favorites'),
      },
    });
    await loadTable();
  };

  const mutiCancelCollect = async (_rows:MaterialListItem[] = state.rows) => {
    await confirm({ title: t('eleMessage.sure_collect') });
    await api.cancelCollectMaterial(_rows.map(row => row.originalCId));
    await loadTable();
  };

  const cancelCollect = async (row:MaterialListItem) => {
    await mutiCancelCollect([row]);
  };

  const applySample = async (_row: SharedMaterialItem) => {
    const res = (await api.fetchMaterial(_row.catalogId)).data;
    if (user?.value?.id === _row.creator) {
      ElMessage.error(t('eleMessage.do_not_apply_own'));
      return;
    }
    if (res.isApply) {
      ElMessage.warning(t('eleMessage.al_apply'));
      return;
    }

    await dialog({
      is: ApplySample,
      props: {
        placeholder: '请输入',
        submitType: 'applySample',
        appendRequestParams: {
          approver: _row.creator,
          applyType: 2,
          sampleId: _row.catalogId,
          originalCId: _row.originalCId,
          sampleName: _row.name,
          categoryId: _row.categoryId,
          approverOrgId: res.attributeInfo.orgId,
        },
      },
    }, {
      props: { title: t('application_list.application_sample') },
    });

    await searchTable();
  };


  const history = async (row:MaterialListItem) => {
    await dialog({
      is: History,
      props: {
        material: row,
      },
    });
    loadTable();
  };
  const addToMaterialBook = async (row:MaterialListItem) => {
    await dialog({
      is: AddToFolder,
      props: {
        receiveType: 'MaterialBook',
        detailId: row.catalogId,
        title: t('folder.material_book'),
        isAgain: row.isAgain,
      },
    });
  };
  const download = async (row:MaterialListItem) => {
    await dialog({
      is: Download,
      props: {
        material: row,
      },
    });
  };

  const mutiRecommendToBrand = async (_rows:MaterialListItem[] = state.rows) => {
    await dialog({
      is: RecommendToBrand,
      props: {
        materials: _rows,
      },
    });
  };
  // 推荐给品牌
  const recommendToBrand = async (row:MaterialListItem) => {
    await mutiRecommendToBrand([row]);
  };


  const slots = {
    imgUrl: ({ row }:{row:MaterialListItem}) => {
      return (
        <div class="table-img click-style" onClick={() => detail(row)}>
          <base-image src={getMaterialImg(row)} ></base-image>
        </div>
      );
    },
    name: ({ row }:{row:MaterialListItem}) => {
      return <>
        {has4ddat(row) ? <span class="table-primary-tag">3D</span> : null}
        {isEnvironmentProtection(row) ? <span class="table-primary-tag">环保</span> : null}
        <span class="click-style blue" onClick={() => detail(row)}>
          {row.name}
        </span>
      </>;
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

    colorInfo: ({ row, index }:{row:MaterialListItem, index:number}) => {
      const colors = row.renderingInfo.sort((a, b) => a.sort - b.sort).slice(0, 3);
      const showColor = row.renderingInfo.find(color => color.isDefault) || colors[0] || {};
      const TextSpan = (color:GetArrayItem<typeof colors>) => {
        if (!color.name) return '';
        return <span class="color-cell">
          <span class="color-name">{color.name}</span>
          {color.colorFamily ? <span class="color-family">/{color.colorFamily}</span> : null}
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
    isCollect: ({ row }:{row:SharedMaterialItem}) => {
      return row.isCollect ? '是' : '否';
    },
    empty: ({ row }:{row:MaterialListItem}) => {
      return <BlockError error={{ message: '尚未上传材料，去公开市场看看吧', code: '404' }}></BlockError>;
    },
  };

  const toolBtns = {
    detail({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return isInTile ? null : <span class="text-link" onClick={() => detail(row)}>{t('see')}</span>;
    },
    edit({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <span class="text-link" onClick={() => edit(row)}>{t('material-manage.btn.edit')}</span>;
    },
    viewer({ row }:{row:SharedMaterialItem}) {
      return <span
        class={classnames(['text-link', { 'h-disabled': !has4ddat(row) }]) }
        onClick={() => can('0034') && viewer(row)}>{t('material-manage.btn.3dpreview')}</span>;
    },
    collect({ row }:{row:SharedMaterialItem}) {
      return <span class="text-link" onClick={() => switchCollectStatus(row)} style="width: 56px">{row.isCollect
        ? t('folder.cancel_collect') : t('folder.collection')}</span>;
    },
    cancelCollect({ row }:{row:SharedMaterialItem}) {
      return <span class="text-link" onClick={() => cancelCollect(row)}>{t('folder.cancel_collect')}</span>;
    },
    applySample({ row }:{row:SharedMaterialItem}) {
      return <span class="text-link" onClick={() => needFillInfo() && applySample(row)}>{t('application_list.application_sample')}</span>;
    },
    updown({ row }:{row:SharedMaterialItem}) {
      return row.tag === '已上架'
        ? <span class="text-link" onClick={() => needFillInfo() && down(row)}>{t('material-manage.btn.off_the_shelf')}</span>
        : <span class="text-link" onClick={() => needFillInfo() && up(row)}>{t('material-manage.btn.ground')}</span>;
    },
    share({ row }:{row:SharedMaterialItem}) {
      return <span class="text-link" onClick={() => share(row)}>{t('material-manage.btn.share')}</span>;
    },
    del({ row }:{row:SharedMaterialItem}) {
      return <span class="text-link" onClick={() => del(row)}>{t('material-manage.btn.delete')}</span>;
    },
    printQrcode({ row }:{row:SharedMaterialItem}) {
      return <span class="text-link" onClick={() => printQrcode(row)}>{t('material-manage.btn.print_qrcode')}</span>;
    },
  };

  type ToolColumnSlotOption = {btnKeys:(keyof typeof toolBtns)[]};
  const getToolColumnSlot = ({ btnKeys }:ToolColumnSlotOption) => {
    const divider = <el-divider direction="vertical"></el-divider>;
    return ({ row, isInTile = false }:{row:SharedMaterialItem, isInTile: boolean}) => (
      btnKeys
        .map((btnKey, i) => {
          const btn = toolBtns[btnKey]({ row, isInTile });
          return btn;
        })
        .filter(Boolean)
        .map((btn, i) => {
          return (i === 0 || !btn) ? btn : [divider, btn];
        })
    );
  };

  const toolDropdowns = {
    viewer({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return (has4ddat(row) ? (<el-dropdown-item command="viewer">{t('material-manage.btn.3dpreview')}</el-dropdown-item>) : null);
    },
    recommendToBrand({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <el-dropdown-item command="recommendToBrand">{t('material-manage.btn.recommend_to_brand')}</el-dropdown-item>;
    },
    printQrcode({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <el-dropdown-item command="printQrcode">{t('material-manage.btn.print_qrcode')}</el-dropdown-item>;
    },
    history({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <el-dropdown-item command="history">{t('material-manage.btn.history_version')}</el-dropdown-item>;
    },
    share({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <el-dropdown-item command="share">{t('material-manage.btn.share')}</el-dropdown-item>;
    },
    addToMaterialBook({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <el-dropdown-item command="addToMaterialBook">{t('material-manage.btn.add_to_material_book')}</el-dropdown-item>;
    },
    download({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <el-dropdown-item command="download">{t('material-manage.btn.download')}</el-dropdown-item>;
    },
    del({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <el-dropdown-item command="del">{t('material-manage.btn.delete')}</el-dropdown-item>;
    },
    applySample({ row, isInTile }:{row:MaterialListItem, isInTile: boolean}) {
      return <el-dropdown-item command="applySample">{t('application_list.application_sample')}</el-dropdown-item>;
    },
  };

  const getToolDropDown = (
    {
      row,
      isInTile = false,
      dropdownKeys,
    }:{row:MaterialListItem, isInTile: boolean, dropdownKeys:(keyof typeof toolDropdowns)[]},
  ) => {
    const handleCommand = async (command:keyof typeof toolDropdowns) => {
      switch (command) {
        case 'viewer':
          await viewer(row);
          break;
        case 'printQrcode':
          await printQrcode(row);
          break;
        case 'history':
          await history(row);
          break;
        case 'share':
          await share(row);
          break;
        case 'addToMaterialBook':
          await addToMaterialBook(row);
          break;
        case 'download':
          await download(row);
          break;
        case 'del':
          await del(row);
          break;
        case 'recommendToBrand':
          await recommendToBrand(row);
          break;
        case 'applySample':
          await applySample(row);
          break;
        default:
          break;
      }
    };

    return (
    // tsx的问题: 多重嵌套的slot, 内层slot在初次渲染后不会再响应. 临时解决办法: 用变量触发整个slot的重新渲染
      <SdDropdown
        trigger="click"
        appendToBody={!isInTile}
        onCommand={(command:keyof typeof toolDropdowns) => handleCommand(command)}
        v-slots={{
          dropdown: () => (tableVm.value?.loading ? null : (
            <el-dropdown-menu>
              {
                dropdownKeys.map(dropdownKey => toolDropdowns[dropdownKey]({ row, isInTile }))
              }
            </el-dropdown-menu>
          )),
        }}>
        <span class="text-link">{t('material-manage.btn.more')}</span>
      </SdDropdown>
    );
  };

  const mutiBtns = {
    up: () => (
      <span class={getBtnClass(['待上架', '已下架'])} onClick={() => needFillInfo() && mutiUp()}>{t('material-manage.btn.ground')}</span>
    ),
    down: () => (
      <span class={getBtnClass(['已上架'])} onClick={() => needFillInfo() && mutiDown()}>{t('material-manage.btn.off_the_shelf')}</span>
    ),
    del: () => (
      <span class={getBtnClass()} onClick={() => mutiDel()}>{t('material-manage.btn.delete')}</span>
    ),
    share: () => (
      <span class={getShareBtnClass()} onClick={() => mutiShare()}>{t('material-manage.btn.share')}</span>
    ),
    printQrcode: () => (
      <span class={getBtnClass()} onClick={() => mutiPrintQrcode()}>{t('material-manage.btn.print_qrcode')}</span>
    ),
    recommendToBrand: () => (
      <span class={getBtnClass()} onClick={() => mutiRecommendToBrand()}>{t('material-manage.btn.recommend_to_brand')}</span>
    ),
    collect: () => (
      <span class={getBtnClass()} onClick={() => mutiCollect()}>{t('folder.collection')}</span>
    ),
    cancelCollect: () => (
      <span class={getBtnClass()} onClick={() => mutiCancelCollect()}>{t('folder.cancel_collect')}</span>
    ),
  };

  type GetMutiBtnsOption = {btnKeys:(keyof typeof mutiBtns)[]};
  const getMutiBtns = ({ btnKeys }:GetMutiBtnsOption) => {
    return btnKeys
      .map((btnKey, i) => {
        const btn = mutiBtns[btnKey]();
        const divider = <el-divider direction="vertical"></el-divider>;
        return (i === 0 || !btn) ? btn : [divider, btn];
      })
      .filter(Boolean);
  };


  return {
    ...toRefs(state),
    slots,
    toolBtns,
    loadTable,
    searchTable,
    detail,
    viewer,
    edit,
    mutiCheck,
    mutiUp,
    up,
    mutiDown,
    down,
    mutiDel,
    del,
    mutiShare,
    share,
    mutiPrintQrcode,
    printQrcode,
    switchCollectStatus,
    mutiCancelCollect,
    cancelCollect,
    applySample,
    handleSelection,
    getBtnClass,
    exportWithFilter,
    getToolColumnSlot,
    getToolDropDown,
    getMutiBtns,
  };
};

export default useMaterialTable;
