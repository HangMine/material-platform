import {
  defineComponent, onMounted, reactive, ref, watch, computed,
} from 'vue';
import { confirm, dialog } from '@/utils/vue/dialog';
import { FormItems, Options } from '@/components/form/HForm/type';
import HForm from '@/components/form/HForm/index.vue';
import SdTable from '@/components/sd-table/index';
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';

import * as api from '@/api/applyRecord';
import './tableList.scss';
import usePermisson from '@/utils/uses/use-permisson';
import {
  ApplyItem, applyCancel, handlerApply, applyReceiveOrLaunch,
} from '@/api/applyRecord';
import MaterialDetailComp from '@/pages/components/material/detail/index.vue';
import ApplyRecordDetail from '@/pages/applyRecordBuyer/components/ApplyRecordDetail.vue';
import BlockError from '@/components/error/BlockError.vue';
import can from '@/utils/can';
import i18n, { t, refT } from '@/i18n/index';
import ApplySample from './dialog/applySample.vue';
import RefuseApply from './dialog/handleApply.vue';
import ApplyContent from './dialog/applyContent.vue';
import BusinessDetails from './dialog/businessDetails.vue';


const viewApplerValidCodeMap = {
  '/main/apply-record/sample': '0013',
  '/main/apply-record/cooperation': '0010',
};

export default defineComponent({
  name: 'supplier-apply-record',
  components: {},
  props: { id: { type: String }, title: { type: String }, applyType: { type: String } },
  setup(props) {
    const { isSupplier, isBuyer } = usePermisson();
    // console.log(usePermisson(), isSupplier.value, isBuyer.value, 'isBuyer');


    const computedColumns = computed(() => {
      const columnsAll = [{
        key: 'applicantName',
        title: t('application_list.applicant'),
      }, {
        key: 'applyCon',
        title: t('application_list.application_content'),
        width: 288,
        showOverflowTooltip: false,
      }, {
        key: 'sampleName',
        title: t('application_list.sample_name'),


      },
      {
        key: 'gmtCreateTime',
        title: t('application_list.applicantion_time'),

      },
      {
        key: 'approvalStatusText',
        title: t('application_list.application_status'),

      },
      ];
      const getColumns = () => {
        if (props.applyType === '1') {
          columnsAll.splice(2, 1);
          console.log(columnsAll);
          return columnsAll;
        }
        let columns;
        if (columnsAll[2].key === 'sampleName') {
          columns = columnsAll;
        } else {
          columnsAll.splice(2, 0, {
            key: 'sampleName',
            title: t('application_list.sample_name'),
          });
          columns = columnsAll;
        }

        return columns;
      };
      return getColumns();
    });

    const form:FormItems = [{
      key: 'approvalStatus',
      title: '',
      multiple: true,
      type: 'select',
      value: '',
      placeholder: '全部状态',
      validate() {
        return can('0020');
      },
      options: [
        {
          key: 0,
          title: '待审核',

        }, {
          key: 1,
          title: '已通过',

        }, {
          key: 2,
          title: '已拒绝',

        }, {
          key: 3,
          title: '已取消',

        }],
      formItemProps: {
        style: {
          width: '160px',
        },
      },
    }, {
      key: 'date',
      title: '',
      type: 'date',
      childType: 'daterange',
      validate() {
        return can('0020');
      },
      formItemProps: {
        style: {
          width: '220px',
        },
      },
    }];

    const tableVm = ref<InstanceType<typeof SdTable>>();

    const state = reactive({
      applyParams: {
        applyId: '',

        approvalStatus: 2,
        approvalContent: {
          content: '',
        },

      },
      rows: [] as ApplyItem[],
      isSample: '1',
      formData: [],
      formParams: {},
      params: {
        receiveOrlaunch: 'send',

        fields: {
          applyBeginTime: '', applyEndTime: '', approvalStatus: [], applyType: props.applyType,
        },

      },
    });
    const loadTable = () => {
      tableVm.value?.load();
    };

    const cancelApply = async (row:ApplyItem) => {
      console.log(row);
      await confirm({ title: t('application_list.sure_cancel_apply') });
      await applyCancel(row.id);
      ElMessage.success(t('cancel_success'));
      loadTable();
    };
    const handleViewLogistic = async (row:ApplyItem) => {
      await dialog({
        is: ApplyRecordDetail,
        props: {
          detailForm: row,
          applyType: '样品申请',
          isReceived: state.isSample === '2',

        },
      }, {
        props: {
          title: t('menu-management.sample_application'),
        },
      });
    };
    const openComponyDialog = async (row:ApplyItem) => {
      await dialog({
        is: BusinessDetails,
        props: {
          supplierId: row.orgId,
        },
      });
    };
    const openMaterialDialog = async (row:ApplyItem) => {
      await dialog({
        is: MaterialDetailComp,
        props: {
          row: {
            catalogId: row.applyContent?.originalCId,
            categoryId: row.applyContent?.categoryId,

          },

        },
      });
    };

    const openApplyConDialog = async (row:ApplyItem) => {
      await dialog({
        is: ApplyContent,
        props: {
          applyContent: row.applyCon,

        },
      });
    };

    // 同意申请
    const handleAgree = async (row:ApplyItem) => {
      if (props.title === '样品申请') {
        await dialog({
          is: ApplySample,
          props: {
            row,
            sendSample: true,
          },
        }, {
          props: {
            title: t('application_list.send_sample'),
          },
        });
      } else if (props.title === '合作申请') {
        state.applyParams.applyId = row.id;
        state.applyParams.approvalStatus = 1;
        await handlerApply(state.applyParams);
        ElMessage.success(t('application_list.approve'));
      }
      loadTable();
    };
    // 拒绝申请
    const handleRefuse = async (row:ApplyItem) => {
      if (props.title === '样品申请') {
        await dialog({
          is: RefuseApply,
          props: {
            title: t('application_list.reject_reasom'),
            placeholder: t('application_list.enter_reject_reason'),
            submitType: 'refuse',
            refuseParams: {
              applyId: row.id as string,
              approvalStatus: 2 as number,

            },
            // catalogId: row.catalogId,
          },
        });
      } else if (props.title === '合作申请') {
        state.applyParams.applyId = row.id;
        await handlerApply(state.applyParams);
        ElMessage.success(t('application_list.reject'));
      }
      loadTable();
    };

    watch(() => state.isSample, () => {
      state.params.receiveOrlaunch = state.isSample === '1' ? 'send' : 'receive';
      loadTable();
    });
    const getApplyList = (params) => {
      Object.entries(params.fields).forEach(([key, val]) => {
        if (!val) {
          delete params.fields[key];
        }
      });
      const request = applyReceiveOrLaunch;
      return request(params);
    };

    const handleParams = (params:Obj) => {
      console.log(params, 'params');
      if (params.fields) {
        params.fields.applyType = props.applyType === '1' ? 1 : 2;
        params.fields.approvalStatus = params.approvalStatus;
        params.fields.applyBeginTime = (params.date && params.date['0'] && dayjs(params.date['0']).format('YYYY-MM-DD HH:mm:ss')) || '';
        params.fields.applyEndTime = (params.date && params.date['0'] && dayjs(params.date['1']).format('YYYY-MM-DD HH:mm:ss')) || '';
      }

      delete params.date;
      delete params.approvalStatus;
    };
    // const toolReturn = ({ row }:{row:ApplyItem}) => {
    //   return row.approvalStatus === 1 && props.applyType === '2' ? (
    //     <span class={ row.approvalStatus === 1 ? 'text-link ' : 'gray-color'}
    //       onClick={() => row.approvalStatus === 1 && handleViewLogistic(row)}>{t('application_list.btn.view_logistics')}</span>
    //   ) : (
    //     state.isSample === '1' ? (
    //       <div>
    //         <span class={ row.approvalStatus !== 0 ? 'gray-color' : 'text-link'}
    //           onClick={() => can(props.applyType === '2' ? '0021' : true) && row.approvalStatus === 0
    //       && cancelApply(row)}>{t('application_list.btn.cancel_application')}</span>
    //       </div>
    //     ) : (
    //       <div >
    //         <span class={ row.approvalStatus !== 0 ? 'gray-color' : 'text-link'}
    //           onClick={() => can(props.applyType === '2' ? '0022' : '0031') && row.approvalStatus === 0 && handleAgree(row)}>
    //           {t('application_list.btn.agree')}</span>
    //         <el-divider direction="vertical"></el-divider>
    //         <span class={ row.approvalStatus !== 0 ? 'gray-color' : 'text-link'}
    //           onClick={() => can(props.applyType === '2' ? '0022' : '0031') && row.approvalStatus === 0 && handleRefuse(row)}>
    //           {t('application_list.btn.refuse')}</span>
    //       </div>
    //     ));
    // };
    const toolReturn = ({ row }:{row:ApplyItem}) => {
      return state.isSample === '1'
        ? <div>
          <span class={ row.approvalStatus !== 0 ? 'gray-color' : 'text-link'}
            onClick={() => can(props.applyType === '2' ? '0021' : true) && row.approvalStatus === 0
          && cancelApply(row)}>{t('application_list.btn.cancel_application')}</span>
        </div>
        : props.applyType === '1' ? (
          <div >
            <span class={ row.approvalStatus !== 0 ? 'gray-color' : 'text-link'}
              onClick={() => can(props.applyType === '2' ? '0022' : '0031') && row.approvalStatus === 0 && handleAgree(row)}>
              {t('application_list.btn.agree')}</span>
            <el-divider direction="vertical"></el-divider>
            <span class={ row.approvalStatus !== 0 ? 'gray-color' : 'text-link'}
              onClick={() => can(props.applyType === '2' ? '0022' : '0031') && row.approvalStatus === 0 && handleRefuse(row)}>
              {t('application_list.btn.refuse')}</span>
          </div>
        ) : (<span class={ row.approvalStatus !== 0 ? 'gray-color' : 'text-link'}
          onClick={() => can(props.applyType === '2' ? '0022' : '0031') && row.approvalStatus === 0 && handleRefuse(row)}>
          {t('application_list.btn.refuse')}</span>);
    };
    return () => (

      <div class="apply-record">
        <SdTable
          ref={tableVm}
          title={''}
          params={state.params}
          form={form}
          fetchTable={getApplyList}
          columns={computedColumns.value}
          showRowId
          handleParams={handleParams}
          v-slots={{

            titleContent: () => {
              return isSupplier.value ? (
                <el-tabs v-model={state.isSample} class="apply-tab">
                  <el-tab-pane label={t('application_list.launch')} name="1"> </el-tab-pane>
                  <el-tab-pane label={t('application_list.receive')} name="2"> </el-tab-pane>
                </el-tabs>
              ) : '';
            },

            tool: toolReturn,
            applicantName: ({ row }:{row:ApplyItem}) => {
              return <span
                style="color:#2878FF;cursor:pointer"
                onClick={() => can(props.applyType === '2' ? '0023' : true) && openComponyDialog(row)}
              >
                {row.applicantName || '--'}
              </span>;
            },
            applyCon: ({ row }:{row:ApplyItem}) => {
              return row.applyCon && row.applyCon.length > 19 ? (<div class="apply-con" onClick={() => openApplyConDialog(row)}>

                <span class="apply-con-text" >
                  {`${row.applyCon.substr(0, 17)}...`}
                </span>
                <i class="iconfont i-r-xia-12 right-iconfont" />
              </div>) : (<div class="apply-con" > <span >{row.applyCon || '--'}</span></div>);
            },

            sampleName: ({ row }:{row:ApplyItem}) => {
              return <span
                style="color:#2878FF;cursor:pointer"
                onClick={() => can(props.applyType === '2' ? '0024' : true) && openMaterialDialog(row)}
              >
                {row.sampleName || '--'}
              </span>;
            },
            approvalStatusText: ({ row }:{row:ApplyItem}) => {
              return <span style={{
                color: row.approvalStatusText === '待审核'
                  ? '#2878FF'
                  : row.approvalStatusText === '已通过'
                    ? '#32CC72' : '#999999',
              }} >{row.approvalStatusText}</span>;
            },
            empty: (<BlockError error={{ message: '暂无申请记录哦~', code: 'no-records' }}></BlockError>),
          }}>
        </SdTable>
      </div>
    );
  },
});

