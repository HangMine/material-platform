/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import axios from '@/utils/axios';

// 获取CTM模型数据
export const getModelCTMList = async (modelId: string) => {
  const res = await axios({
    method: 'get',
    url: '/idealab-material/application/model/ctms',
    params: { modelId },
  });
  return res;
};
