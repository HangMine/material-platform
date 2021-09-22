import {
  fetchAppPayResourcesList,
  fetchResourceUsageInfo,
  fetchUserResourceUsageList, increateUserResourceUsage, reduceUserResourceUsage, resourceType,
} from '@/api/auth';
import { getContextCompany } from '@/loaders/context';
import { computed, reactive, toRefs } from 'vue';


enum UserResourceMap {
  'materialSubAccount' = 'SUB_ACCOUNT', // 材料平台子账号数量
  'materialVol' = 'MAT_BOOK', // 材料平台材料册数量
  'materialCollocationColorBoard'='COLOR_BOOK', // 材料平台搭配色板数量
  'materialStorage' = 'STORAGE', // 材料平台储存容量
  'material3DPreview' = 'PREVIEW', // 材料平台3D预览公模数量
  'materialQRCode' = 'PRINT', // 材料平台打印二维码次数
  'SUB_ACCOUNT'='materialSubAccount', // 材料平台子账号数量
  'MAT_BOOK'='materialVol', // 材料平台材料册数量
  'COLOR_BOOK'='materialCollocationColorBoard', // 材料平台搭配色板数量
  'STORAGE'='materialStorage', // 材料平台储存容量
  'PREVIEW'='material3DPreview', // 材料平台3D预览公模数量
  'PRINT'='materialQRCode', // 材料平台打印二维码次数
}

const state = reactive({
  usage: {
    materialSubAccount: 0,
    materialVol: 0,
    materialCollocationColorBoard: 0,
    materialStorage: 0,
    material3DPreview: 0,
    materialQRCode: 0,
    materialSendSample: 0,
  },
  total: {
    materialSubAccount: 0,
    materialVol: 0,
    materialCollocationColorBoard: 0,
    materialStorage: 0,
    material3DPreview: 0,
    materialQRCode: 0,
    materialSendSample: 0,
  },
});

export default () => {
  // 获取资源使用量
  const getUserResourceUsageList = async () => {
    const res = await fetchUserResourceUsageList();
    res.forEach(item => {
      const _type: resourceType = item.type;
      const realKey: keyof UserResourceMap = UserResourceMap[_type];
      if (typeof state.usage[realKey] !== 'undefined') {
        state.usage[realKey] = item.count || 0;
      }
    });
  };

  // 获取资源总量
  const getResourceTotalCount = async () => {
    const res = await fetchResourceUsageInfo();
    Object.keys(state.total).forEach((key) => {
      if (typeof res[key] !== 'undefined') {
        state.total[key] = res[key];
      }
    });
  };

  // 根据authcenter的type获取资源使用量
  const getResourceUsageByAuthCenterType = (authCenterType: keyof typeof state.usage) => {
    return state.usage[authCenterType];
  };

  // 根据authcenter的type获取资源总量
  const getResourceTotalCountByAuthCenterType = (authCenterType: keyof typeof state.usage) => {
    return state.total[authCenterType];
  };

  const isFunctionAvaliable = async (originType: UserResourceMap) => {
    const _type = UserResourceMap[originType];
    // total为-1表示数量无限
    if (state.total[_type] === -1) {
      return true;
    }
    if (originType === 'PREVIEW') {
      return state.total[_type] > 10;
    }
    await getUserResourceUsageList();
    return state.total[_type] > state.usage[_type];
  };

  return {
    ...toRefs(state),
    getResourceTotalCount,
    getUserResourceUsageList,
    getResourceUsageByAuthCenterType,
    getResourceTotalCountByAuthCenterType,
    isFunctionAvaliable,
  };
};
