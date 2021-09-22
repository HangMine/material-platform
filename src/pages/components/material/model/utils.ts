import { ModelTypeItem, Model, Part } from '@/api/material';
import * as materialApi from '@/api/material';
import usePermisson from '@/utils/uses/use-permisson';
import { computed, reactive } from 'vue';
import { objUtil } from '@/utils/util';


export type SelectablePart = Part & { isChecked: boolean };
export type SelectableModel = Omit<Model, 'partProp'> & {
  isShow: boolean,
  isChecked: boolean,
  isDisabled: boolean,
  isIndeterminate: boolean,
  partProp: SelectablePart[]
};

export type DisplayModelType = Omit<ModelTypeItem, 'modelProp'> & {
  isShow: boolean,
  modelProp: SelectableModel[]
};

export type DisplayModelTypeList = DisplayModelType[];


export const useModelUtils = () => {
  const { company } = usePermisson();
  const isUserVip = computed(() => !!company.value?.isVIP); // 是VIP
  const state = reactive({
    isModelIncrement: false, // 有公模增值服务

  });

  // 获取公模的disabled状态
  const getModelDisabled = (model: materialApi.Model): boolean => {
    return (!isUserVip.value && !state.isModelIncrement) ? !!model.isVip : false;
  };

  // 获取前端用的公模类型列表
  const getDidsplayModelTypeList = (modelTypeList: ModelTypeItem[]) => {
    const displayModelTypeList = modelTypeList.map(modelTypeItem => {
      const newModelList = modelTypeItem.modelProp.map(model => {
        const newPartProp = model.partProp.map(part => {
          return {
            isChecked: false,
            ...part,
          };
        });

        return {
          ...model,
          isShow: true,
          isChecked: false,
          isIndeterminate: false,
          isDisabled: getModelDisabled(model),
          partProp: newPartProp,
        };
      });
      return {
        ...modelTypeItem,
        modelProp: newModelList,
        isShow: true,
      };
    });
    return displayModelTypeList;
  };

  // 根据公模的部位状态设置勾选状态
  const setModelCheckStatus = (model: SelectableModel) => {
    const partList = model.partProp;
    const selectedNumber = partList.filter(part => part.isChecked).length;
    switch (true) {
      case selectedNumber === partList.length:
        model.isChecked = true;
        model.isIndeterminate = false;
        break;
      case selectedNumber > 0:
        model.isChecked = false;
        model.isIndeterminate = true;
        break;
      default:
        model.isChecked = false;
        model.isIndeterminate = false;
        break;
    }
  };

  // 公模是否已选,部分情况下,isChecked和isIndeterminate都算已选
  const isModelSelected = (model: SelectableModel) => model.isChecked || model.isIndeterminate;


  // 接口的公模类型列表=>前端用的公模类型列表
  const apiModelTypeList2DisplayModelTypeList = async (apiValue: ModelTypeItem[] = []) => {
    const modelTypeList = (await materialApi.fetchPublicModelList()).data;
    const displayModelTypeList = getDidsplayModelTypeList(modelTypeList);
    apiValue.forEach(apiModelType => {
      const displayModelType = displayModelTypeList.find(_displayModelType => _displayModelType.id === apiModelType.id)!;
      apiModelType.modelProp.forEach(apiModel => {
        const displayModel = displayModelType.modelProp.find(_displayModel => _displayModel.id === apiModel.id)!;
        displayModel.partProp.forEach(apiPart => {
          const displayPart = displayModel.partProp.find(_displayPart => _displayPart.code === apiPart.code)!;
          displayPart.isChecked = true;
        });
        setModelCheckStatus(displayModel);
      });
    });
    return displayModelTypeList;
  };

  // 前端用的公模类型列表=>接口的公模类型列表
  const displayModelTypeList2ApiModelTypeList = (displayModelTypeList: DisplayModelTypeList) => {
    const selectedModelTypeList = displayModelTypeList.filter(modelType => modelType.modelProp.some(model => isModelSelected(model)));
    return selectedModelTypeList.map(modelType => {
      const selectedModelList = modelType.modelProp.filter(model => isModelSelected(model));
      const modelProp = selectedModelList.map(model => {
        const newModel = {
          ...objUtil.omit(model, ['isShow', 'isChecked', 'isIndeterminate', 'isDisabled']),
          partProp: model.partProp.filter(part => part.isChecked).map(part => objUtil.omit(part, ['isChecked'])),
        };
        return newModel;
      });
      return {
        ...objUtil.omit(modelType, ['modelProp', 'isShow']),
        modelProp,
      };
    }) as (materialApi.ModelTypeItem)[];
  };


  // 根据模型名字获取公模类型
  const getModelType = (model: Model) => {
    const [modelType] = model.name.split('-');
    return modelType;
  };

  // 根据模型名字获取公模显示的名字
  const getModelname = (model: Model) => {
    const [, modelName] = model.name.split('-');
    return modelName;
  };

  // 根据接口模型类型列表获取所有公模列表
  const apiModelTypeList2ModelList = (apiModelTypeList: ModelTypeItem[]) => {
    return apiModelTypeList.reduce((apiModelList, modelType) => {
      apiModelList = [...apiModelList, ...modelType.modelProp];
      return apiModelList;
    }, [] as Model[]);
  };

  // 根据前端模型类型列表获取所有公模列表
  const displayModelTypeList2ModelList = (apiModelTypeList: DisplayModelTypeList) => {
    return apiModelTypeList.reduce((displayModelList, modelType) => {
      displayModelList = [...displayModelList, ...modelType.modelProp];
      return displayModelList;
    }, [] as SelectableModel[]);
  };


  return {
    apiModelTypeList2DisplayModelTypeList,
    displayModelTypeList2ApiModelTypeList,
    getModelType,
    getModelname,
    setModelCheckStatus,
    isModelSelected,
    apiModelTypeList2ModelList,
    displayModelTypeList2ModelList,
  };
};


