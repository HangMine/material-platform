/* eslint-disable import/prefer-default-export */
import { FormItem, FormItems } from '@/components/form/HForm/type';
import { Category as ApiCategory, CategoryItem, ModelTypeItem } from '@/api/material';
import { computed, ref, Ref } from 'vue';
import { MaterialDetail } from '@/models/Material';
import tryParseJson from '@4dst-saas/public-utils/dist/try-parse-json';
import fieldMap from '@/utils/field-map';
import { unFalsy } from '@/components/form/HForm/utils';
import i18n from '@/i18n';
import deepCopy from '@/utils/deep-copy';

type ApiOptions = {
  id: string | number,
  name: string,
  children?: ApiOptions
}[];
export type FormOption = {
  key: string | number,
  title: string,
  children?: FormOption[]
};
export type Category = {
  big: GetArrayItem<ApiCategory>,
  middle: GetArrayItem<ApiCategory>,
};


export const getOptions = (_options: ApiOptions, optionsKey: string, i18nBaseKey?: string) => {
  try {
    return _options.map(option => {
      const newOption: FormOption = {
        key: option.id,
        title: i18n.t(`${i18nBaseKey || 'material.options'}.${optionsKey}.${option.name}`, undefined, option.name),
      };

      if (option.children) {
        newOption.children = getOptions(option.children, optionsKey);
      }


      return newOption;
    });
  } catch (error) {
    // 比如options根据分类区分的情况下,可能会报错,统一在这里返回空数组
    return [];
  }
};

export const getYearOptions = () => {
  const currentYear = 2021;
  // const range = [-20, 50];
  // const sortNums = [...Array(range[1] - range[0])].map((_, i) => range[0] + i).sort((a, b) => Math.abs(a) - Math.abs(b));
  const afterYears = [...Array(51)].map((_, i) => currentYear + i);
  const beforeYears = [...Array(20)].map((_, i) => currentYear - i - 1);
  const years = [...afterYears, ...beforeYears].map(item => {
    const value = `${item}`;
    return {
      id: value,
      name: value,
    };
  });
  return years;
};
export const options = {
  yaer: getYearOptions(),
  type: [{
    id: '化学纤维',
    name: '化学纤维',
    children: [{
      id: '棉纶',
      name: '棉纶',
    }, {
      id: '腈纶',
      name: '腈纶',
    }, {
      id: '维纶',
      name: '维纶',
    }, {
      id: '涤纶',
      name: '涤纶',
    }, {
      id: '锦纶',
      name: '锦纶',
    }, {
      id: '丙纶',
      name: '丙纶',
    }, {
      id: '其他化学纤维',
      name: '其他化学纤维',
    }],
  }, {
    id: '人造纤维',
    name: '人造纤维',
    children: [{
      id: '人造棉',
      name: '人造棉',
    }, {
      id: '人造丝',
      name: '人造丝',
    }, {
      id: '莫代尔',
      name: '莫代尔',
    }, {
      id: '铜氨丝',
      name: '铜氨丝',
    }, {
      id: '大豆纤维',
      name: '大豆纤维',
    }, {
      id: '竹纤维',
      name: '竹纤维',
    }, {
      id: '醋酸纤维',
      name: '醋酸纤维',
    }, {
      id: '玉米纤维',
      name: '玉米纤维',
    }, {
      id: '牛奶丝',
      name: '牛奶丝',
    }, {
      id: '天丝',
      name: '天丝',
    }, {
      id: '其他人造丝纤维',
      name: '其他人造丝纤维',
    }],
  }, {
    id: '天然纤维',
    name: '天然纤维',
    children: [{
      id: '棉',
      name: '棉',
    }, {
      id: '丝绸',
      name: '丝绸',
    }, {
      id: '亚麻',
      name: '亚麻',
    }, {
      id: '苎麻',
      name: '苎麻',
    }, {
      id: '大麻',
      name: '大麻',
    }, {
      id: '黄麻',
      name: '黄麻',
    }, {
      id: '其他天然纤维',
      name: '其他天然纤维',
    }],
  }, {
    id: '毛纺',
    name: '毛纺',
    children: [{
      id: '羊绒',
      name: '羊绒',
    }, {
      id: '兔毛',
      name: '兔毛',
    }, {
      id: '羊毛',
      name: '羊毛',
    }, {
      id: '驼毛',
      name: '驼毛',
    }, {
      id: '其他毛纺',
      name: '其他毛纺',
    }],
  }, {
    id: '混纺',
    name: '混纺',
    children: [{
      id: '涤棉/TC布',
      name: '涤棉/TC布',
    }, {
      id: '涤粘/TR',
      name: '涤粘/TR',
    }, {
      id: '锦/棉',
      name: '锦/棉',
    }, {
      id: '锦/涤',
      name: '锦/涤',
    }, {
      id: '涤/氨',
      name: '涤/氨',
    }, {
      id: '锦/氨',
      name: '锦/氨',
    }, {
      id: '锦/粘',
      name: '锦/粘',
    }, {
      id: '棉/麻',
      name: '棉/麻',
    }, {
      id: '棉/粘',
      name: '棉/粘',
    }, {
      id: '麻/粘',
      name: '麻/粘',
    }, {
      id: '涤/腈',
      name: '涤/腈',
    }, {
      id: '锦/涤/粘',
      name: '锦/涤/粘',
    }, {
      id: '涤/麻',
      name: '涤/麻',
    }, {
      id: '其他混纺',
      name: '其他混纺',
    }],
  }, {
    id: '其他类型',
    name: '其他类型',
  }],
  classification: [{
    id: '全苯胺革',
    name: '全苯胺革',
  }, {
    id: '半苯胺革',
    name: '半苯胺革',
  }, {
    id: '涂饰皮',
    name: '涂饰皮',
  }, {
    id: '修面皮',
    name: '修面皮',
  }, {
    id: '带毛皮',
    name: '带毛皮',
  }, {
    id: '皮草/毛皮',
    name: '皮草/毛皮',
  }, {
    id: '涂饰皮',
    name: '涂饰皮',
  }, {
    id: '树膏皮',
    name: '树膏皮',
  }, {
    id: '油蜡皮/变色皮',
    name: '油蜡皮/变色皮',
  }, {
    id: '金属效果',
    name: '金属效果',
  }, {
    id: '其他分类',
    name: '其他分类',
  }],
  applicableSeason: [{
    id: '春夏',
    name: '春夏',
  }, {
    id: '秋冬',
    name: '秋冬',
  }, {
    id: '常青',
    name: '常青',
  }],
  isEnvironmentProtection: [{
    id: 1,
    name: '是',
  }, {
    id: 0,
    name: '否',
  }],
  environmentProtectionType: [{
    id: '节能',
    name: '节能',
  }, {
    id: '天然染色',
    name: '天然染色',
  }, {
    id: '可回收利用的',
    name: '可回收利用的',
  }, {
    id: '有机的',
    name: '有机的',
  }, {
    id: '节水',
    name: '节水',
  }, {
    id: '可生物降解的',
    name: '可生物降解的',
  }, {
    id: '天然纤维',
    name: '天然纤维',
  }, {
    id: '生物基',
    name: '生物基',
  }, {
    id: '其他环保种类',
    name: '其他环保种类',
  }],
  productName: [{
    id: '提花',
    name: '提花',
  }, {
    id: '罗纹布',
    name: '罗纹布',
  }, {
    id: '摇粒绒',
    name: '摇粒绒',
  }, {
    id: '毛巾布/毛圈布',
    name: '毛巾布/毛圈布',
  }, {
    id: '格子布',
    name: '格子布',
  }, {
    id: '平纹',
    name: '平纹',
  }, {
    id: '粗花呢',
    name: '粗花呢',
  }, {
    id: '斜纹布',
    name: '斜纹布',
  }, {
    id: '牛仔布',
    name: '牛仔布',
  }, {
    id: '雪纺',
    name: '雪纺',
  }, {
    id: '绸缎',
    name: '绸缎',
  }, {
    id: '网布',
    name: '网布',
  }, {
    id: '灯芯绒',
    name: '灯芯绒',
  }, {
    id: '蕾丝',
    name: '蕾丝',
  }, {
    id: '四面弹',
    name: '四面弹',
  }, {
    id: '帆布',
    name: '帆布',
  }, {
    id: '牛津布',
    name: '牛津布',
  }, {
    id: '桃皮绒',
    name: '桃皮绒',
  }, {
    id: '定型布',
    name: '定型布',
  }, {
    id: '飞织料',
    name: '飞织料',
  }, {
    id: '其他品名',
    name: '其他品名',
  }],

  engineeringDesignMode: [{
    id: '贾卡/提花',
    name: '贾卡/提花',
  }, {
    id: '罗纹布',
    name: '罗纹布',
  }, {
    id: '摇粒绒',
    name: '摇粒绒',
  }, {
    id: '毛巾布/毛圈布',
    name: '毛巾布/毛圈布',
  }, {
    id: '特利可得',
    name: '特利可得',
  }, {
    id: '格子布',
    name: '格子布',
  }, {
    id: '人字斜纹',
    name: '人字斜纹',
  }, {
    id: '蜂巢布',
    name: '蜂巢布',
  }, {
    id: '犬牙织纹',
    name: '犬牙织纹',
  }, {
    id: '泡泡纱',
    name: '泡泡纱',
  }, {
    id: '平纹',
    name: '平纹',
  }, {
    id: '粗花呢',
    name: '粗花呢',
  }, {
    id: '斜纹布',
    name: '斜纹布',
  }, {
    id: '牛仔布',
    name: '牛仔布',
  }, {
    id: '乔其纱',
    name: '乔其纱',
  }, {
    id: '麂皮绒',
    name: '麂皮绒',
  }, {
    id: '方平组织',
    name: '方平组织',
  }, {
    id: '缎子',
    name: '缎子',
  }, {
    id: '棉缎',
    name: '棉缎',
  }, {
    id: '塔夫绸',
    name: '塔夫绸',
  }, {
    id: '其它',
    name: '其它',
  }],
  structureMode: [{
    id: '单层',
    name: '单层',
  }, {
    id: '双层',
    name: '双层',
  }, {
    id: '三明治',
    name: '三明治',
  }],
  functionPurpose: {
    纺织品: [{
      id: '轻量的',
      name: '轻量的',
    }, {
      id: '持久耐用',
      name: '持久耐用',
    }, {
      id: '软垫/缓冲垫层',
      name: '软垫/缓冲垫层',
    }, {
      id: '反光',
      name: '反光',
    }, {
      id: '有弹性的',
      name: '有弹性的',
    }, {
      id: '防水',
      name: '防水',
    }, {
      id: '防泼水',
      name: '防泼水',
    }, {
      id: '透明',
      name: '透明',
    }, {
      id: '可模塑的',
      name: '可模塑的',
    }, {
      id: '抗菌',
      name: '抗菌',
    }, {
      id: '驱虫剂',
      name: '驱虫剂',
    }, {
      id: '紫外线阻滞剂',
      name: '紫外线阻滞剂',
    }, {
      id: '持久性防泼水',
      name: '持久性防泼水',
    }, {
      id: '透气',
      name: '透气',
    }, {
      id: '其他功能',
      name: '其他功能',
    }],
    真皮: [{
      id: '持久耐用',
      name: '持久耐用',
    }, {
      id: '防水',
      name: '防水',
    }, {
      id: '防泼水',
      name: '防泼水',
    }, {
      id: '持久性防泼水',
      name: '持久性防泼水',
    }, {
      id: '可模塑的',
      name: '可模塑的',
    }, {
      id: '去污',
      name: '去污',
    }, {
      id: '防污',
      name: '防污',
    }, {
      id: '弹性',
      name: '弹性',
    }, {
      id: '其他功能',
      name: '其他功能',
    }],
    人造革: [{
      id: '持久耐用',
      name: '持久耐用',
    }, {
      id: '弹性',
      name: '弹性',
    }, {
      id: '防水',
      name: '防水',
    }, {
      id: '防泼水',
      name: '防泼水',
    }, {
      id: '可模塑的',
      name: '可模塑的',
    }, {
      id: '持久性防泼水',
      name: '持久性防泼水',
    }, {
      id: '去污',
      name: '去污',
    }, {
      id: '防污',
      name: '防污',
    }, {
      id: '轻量',
      name: '轻量',
    }, {
      id: '反光',
      name: '反光',
    }, {
      id: '超软',
      name: '超软',
    }, {
      id: '热压',
      name: '热压',
    }, {
      id: '透明',
      name: '透明',
    }, {
      id: '高周波热切',
      name: '高周波热切',
    }, {
      id: '其他功能',
      name: '其他功能',
    }],
  },
  recommendParts: [{
    id: '内里',
    name: '内里',
  }, {
    id: '面料',
    name: '面料',
  }, {
    id: '其它部位',
    name: '其它部位',
  }],
  postProcessing: {
    纺织品: [{
      id: '印花',
      name: '印花',
    }, {
      id: '染色',
      name: '染色',
    }, {
      id: '固色',
      name: '固色',
    }, {
      id: '抗静电',
      name: '抗静电',
    }, {
      id: '抗起球',
      name: '抗起球',
    }, {
      id: '防羽绒',
      name: '防羽绒',
    }, {
      id: '防霉',
      name: '防霉',
    }, {
      id: '免烫',
      name: '免烫',
    }, {
      id: '阻燃',
      name: '阻燃',
    }, {
      id: '防水',
      name: '防水',
    }, {
      id: '防泼水',
      name: '防泼水',
    }, {
      id: '洗水',
      name: '洗水',
    }, {
      id: '防皱',
      name: '防皱',
    }, {
      id: '防泼水',
      name: '防泼水',
    }, {
      id: '防晒',
      name: '防晒',
    }, {
      id: '烫金',
      name: '烫金',
    }, {
      id: '复合',
      name: '复合',
    }, {
      id: '压花压绉',
      name: '压花压绉',
    }, {
      id: '植绒',
      name: '植绒',
    }, {
      id: '拉毛磨毛',
      name: '拉毛磨毛',
    }, {
      id: '砂洗',
      name: '砂洗',
    }, {
      id: '烂花（烧花）',
      name: '烂花（烧花）',
    }, {
      id: '切割',
      name: '切割',
    }, {
      id: '起皱',
      name: '起皱',
    }, {
      id: '轧泡',
      name: '轧泡',
    }, {
      id: '间棉绗缝',
      name: '间棉绗缝',
    }, {
      id: '其他后处理',
      name: '其他后处理',
    }],
    真皮: [{
      id: '网板印',
      name: '网板印',
    }, {
      id: '压花',
      name: '压花',
    }, {
      id: '热转印',
      name: '热转印',
    }, {
      id: '烫金',
      name: '烫金',
    }, {
      id: '数码打印',
      name: '数码打印',
    }, {
      id: '激光打印',
      name: '激光打印',
    }, {
      id: '洗水',
      name: '洗水',
    }, {
      id: '复合',
      name: '复合',
    }, {
      id: '植绒',
      name: '植绒',
    }, {
      id: '拉毛磨毛',
      name: '拉毛磨毛',
    }, {
      id: '防泼水',
      name: '防泼水',
    }, {
      id: '防水',
      name: '防水',
    }, {
      id: '防晒',
      name: '防晒',
    }, {
      id: '其他后处理',
      name: '其他后处理',
    }],
    人造革: [{
      id: '烫金',
      name: '烫金',
    }, {
      id: '印花',
      name: '印花',
    }, {
      id: '复合',
      name: '复合',
    }, {
      id: '防泼水',
      name: '防泼水',
    }, {
      id: '防水',
      name: '防水',
    }, {
      id: '防晒',
      name: '防晒',
    }, {
      id: '压花压绉',
      name: '压花压绉',
    }, {
      id: '植绒',
      name: '植绒',
    }, {
      id: '拉毛磨毛',
      name: '拉毛磨毛',
    }, {
      id: '砂洗',
      name: '砂洗',
    }, {
      id: '洗水',
      name: '洗水',
    }, {
      id: '热转印',
      name: '热转印',
    }, {
      id: '发泡胶',
      name: '发泡胶',
    }, {
      id: '去污',
      name: '去污',
    }, {
      id: '防污',
      name: '防污',
    }, {
      id: '涂层',
      name: '涂层',
    }, {
      id: '其他后处理',
      name: '其他后处理',
    }],
  },
  manufacturingProcess: {
    真皮: [{
      id: '全粒面皮',
      name: '全粒面皮',
    }, {
      id: '半粒面皮/修面皮',
      name: '半粒面皮/修面皮',
    }, {
      id: '二层皮/二榔皮',
      name: '二层皮/二榔皮',
    }, {
      id: '碎皮',
      name: '碎皮',
    }, {
      id: '其他制造工艺',
      name: '其他制造工艺',
    }],
    人造革: [{
      id: '离型纸',
      name: '离型纸',
    }, {
      id: '辊轮压花',
      name: '辊轮压花',
    }, {
      id: '膜类',
      name: '膜类',
    }, {
      id: '包裹/复合型',
      name: '包裹/复合型',
    }, {
      id: '牛巴戈/磨砂皮',
      name: '牛巴戈/磨砂皮',
    }, {
      id: '榔皮/绒面皮',
      name: '榔皮/绒面皮',
    }, {
      id: '干式',
      name: '干式',
    }, {
      id: '湿式',
      name: '湿式',
    }, {
      id: '干式+湿式',
      name: '干式+湿式',
    }, {
      id: '其他制造工艺',
      name: '其他制造工艺',
    }],
  },
  appearance: [{
    id: '打孔',
    name: '打孔',
  }, {
    id: '珠光',
    name: '珠光',
  }, {
    id: '雾面',
    name: '雾面',
  }, {
    id: '亮面',
    name: '亮面',
  }, {
    id: '透明',
    name: '透明',
  }, {
    id: '金属效果',
    name: '金属效果',
  }, {
    id: '反光',
    name: '反光',
  }, {
    id: '夜光',
    name: '夜光',
  }, {
    id: '牛巴戈/磨砂皮',
    name: '牛巴戈/磨砂皮',
  }, {
    id: '格丽特',
    name: '格丽特',
  }, {
    id: '榔皮/绒面皮',
    name: '榔皮/绒面皮',
  }, {
    id: '压纹',
    name: '压纹',
  }, {
    id: '印刷',
    name: '印刷',
  }, {
    id: '平纹',
    name: '平纹',
  }, {
    id: '平滑',
    name: '平滑',
  }, {
    id: '颗粒纹',
    name: '颗粒纹',
  }, {
    id: '漆皮',
    name: '漆皮',
  }, {
    id: '动物纹',
    name: '动物纹',
  }, {
    id: '植绒',
    name: '植绒',
  }, {
    id: '其他类型',
    name: '其他类型',
  }],
  surfaceTreatment: [{
    id: '平滑',
    name: '平滑',
  }, {
    id: '平纹',
    name: '平纹',
  }, {
    id: '颗粒纹',
    name: '颗粒纹',
  }, {
    id: '榔皮/绒面皮',
    name: '榔皮/绒面皮',
  }, {
    id: '牛巴戈/磨砂皮',
    name: '牛巴戈/磨砂皮',
  }, {
    id: '漆皮',
    name: '漆皮',
  }, {
    id: '涂层',
    name: '涂层',
  }, {
    id: '动物纹',
    name: '动物纹',
  }, {
    id: '柔软皮',
    name: '柔软皮',
  }, {
    id: '原皮',
    name: '原皮',
  }, {
    id: '其他表面处理',
    name: '其他表面处理',
  }],
  textureType: [{
    id: '平滑',
    name: '平滑',
  }, {
    id: '平纹',
    name: '平纹',
  }, {
    id: '颗粒纹',
    name: '颗粒纹',
  }, {
    id: '印花',
    name: '印花',
  }, {
    id: '压花',
    name: '压花',
  }],
  moldingMethod: [{
    id: '干式',
    name: '干式',
  }, {
    id: '湿式',
    name: '湿式',
  }, {
    id: '干式+湿式',
    name: '干式+湿式',
  }, {
    id: '不䢪用',
    name: '不䢪用',
  }],
  surfaceEffect: [{
    id: '珠光',
    name: '珠光',
  }, {
    id: '雾面',
    name: '雾面',
  }, {
    id: '亮面',
    name: '亮面',
  }, {
    id: '透明',
    name: '透明',
  }, {
    id: '金属效果',
    name: '金属效果',
  }, {
    id: '3M',
    name: '3M',
  }, {
    id: '反光',
    name: '反光',
  }, {
    id: '夜光',
    name: '夜光',
  }, {
    id: '其它',
    name: '其它',
  }],
  transparency: [{
    id: '0%',
    name: '0%',
  }, {
    id: '10%',
    name: '10%',
  }, {
    id: '20%',
    name: '20%',
  }, {
    id: '30%',
    name: '30%',
  }, {
    id: '40%',
    name: '40%',
  }, {
    id: '50%',
    name: '50%',
  }, {
    id: '60%',
    name: '60%',
  }, {
    id: '70%',
    name: '70%',
  }, {
    id: '80%',
    name: '80%',
  }, {
    id: '90%',
    name: '90%',
  }, {
    id: '100%',
    name: '100%',
  }],
  isInStock: [{
    id: 1,
    name: '是',
  }, {
    id: 0,
    name: '否',
  }],
  isAgain: [
    {
      id: 1,
      name: '允许分享',
    }, {
      id: 0,
      name: '不可分享',
    },
  ],
  unit: [{
    id: '码',
    name: '码',
  }, {
    id: '米',
    name: '米',
  }, {
    id: '英寸',
    name: '英寸',
  }, {
    id: '平方英尺',
    name: '平方英尺',
  }],
  averageSizeUnit: [{
    id: '平方英尺',
    name: '平方英尺',
  }],
  currency: [{
    id: '美元',
    name: '美元',
  }, {
    id: '人民币',
    name: '人民币',
  }, {
    id: '台币',
    name: '台币',
  }, {
    id: '港元',
    name: '港元',
  }, {
    id: '日元',
    name: '日元',
  }, {
    id: '韩元',
    name: '韩元',
  }, {
    id: '其它',
    name: '其它',
  }],
  priceUnit: [{
    id: '人民币',
    name: '人民币',
  }, {
    id: '美元',
    name: '美元',
  }],
  timeUnit: [{
    id: '天',
    name: '天',
  }, {
    id: '周',
    name: '周',
  }],
  season: [{
    id: '春',
    name: '春',
  }, {
    id: '夏',
    name: '夏',
  }, {
    id: '秋',
    name: '秋',
  }, {
    id: '冬',
    name: '冬',
  }],
  materialTechnology: [{
    id: '粒面皮',
    name: '粒面皮',
  }, {
    id: '修面皮',
    name: '修面皮',
  }, {
    id: '漆皮',
    name: '漆皮',
  }, {
    id: '压花皮',
    name: '压花皮',
  }, {
    id: '印花皮',
    name: '印花皮',
  }, {
    id: '磨砂皮',
    name: '磨砂皮',
  }, {
    id: '绒面皮',
    name: '绒面皮',
  }, {
    id: '摔纹皮',
    name: '摔纹皮',
  }, {
    id: '马毛皮',
    name: '马毛皮',
  }, {
    id: '其他材质',
    name: '其他材质',
  }],
  grammageUnit: [{
    id: '平米克重',
    name: '平米克重',
  }, {
    id: '米克重',
    name: '米克重',
  }, {
    id: '码克重',
    name: '码克重',
  }, {
    id: '盎司',
    name: '盎司',
  }, {
    id: '姆米',
    name: '姆米',
  }],
  thicknessUnit: [{
    id: 'mm',
    name: 'mm',
  }],
  oilContentUnit: [{
    id: '%',
    name: '%',
  }],
  qualityGrade: [{
    id: 'A/TR1',
    name: 'A/TR1',
  }, {
    id: 'B/TR2',
    name: 'B/TR2',
  }, {
    id: 'C/TR3',
    name: 'C/TR3',
  }, {
    id: 'D/TR4',
    name: 'D/TR4',
  }, {
    id: 'LG/Economy',
    name: 'LG/Economy',
  }, {
    id: 'AB 5050',
    name: 'AB 5050',
  }, {
    id: 'ABC 40/40/20',
    name: 'ABC 40/40/20',
  }, {
    id: 'ABC 30/40/30',
    name: 'ABC 30/40/30',
  }, {
    id: 'ABC 20/30/30/20',
    name: 'ABC 20/30/30/20',
  }, {
    id: 'BC 50/50',
    name: 'BC 50/50',
  }, {
    id: 'TR',
    name: 'TR',
  }],
  applicableProduct: [{
    id: '鞋子',
    name: '鞋子',
  }, {
    id: '服装',
    name: '服装',
  }, {
    id: '箱包',
    name: '箱包',
  }, {
    id: '家具',
    name: '家具',
  }, {
    id: '家纺',
    name: '家纺',
  }, {
    id: '其他产品',
    name: '其他产品',
  }],
  textureType_back: [{
    id: '镜面',
    name: '镜面',
  }, {
    id: '胎牛纹',
    name: '胎牛纹',
  }, {
    id: '摔牛纹',
    name: '摔牛纹',
  }, {
    id: '水纹',
    name: '水纹',
  }, {
    id: '细羊纹',
    name: '细羊纹',
  }, {
    id: '羊仔',
    name: '羊仔',
  }, {
    id: '仿布纹',
    name: '仿布纹',
  }, {
    id: '石头纹',
    name: '石头纹',
  }, {
    id: '十字纹',
    name: '十字纹',
  }, {
    id: '荔枝纹',
    name: '荔枝纹',
  }, {
    id: '蛇皮',
    name: '蛇皮',
  }, {
    id: '蜥蜴纹',
    name: '蜥蜴纹',
  }, {
    id: '鳄鱼皮',
    name: '鳄鱼皮',
  }, {
    id: '马皮',
    name: '马皮',
  }, {
    id: '鱼皮',
    name: '鱼皮',
  }],
  bottomType: [{
    id: 'TC十字布',
    name: 'TC十字布',
  }, {
    id: 'TC十字起毛布',
    name: 'TC十字起毛布',
  }, {
    id: '佳积布',
    name: '佳积布',
  }, {
    id: '弹力起毛布',
    name: '弹力起毛布',
  }, {
    id: '针织布',
    name: '针织布',
  }, {
    id: '水剌无纺布',
    name: '水剌无纺布',
  }, {
    id: '细平布',
    name: '细平布',
  }, {
    id: '绒布',
    name: '绒布',
  }, {
    id: '泡沫底',
    name: '泡沫底',
  }, {
    id: '棉布底',
    name: '棉布底',
  }, {
    id: '麻布底',
    name: '麻布底',
  }, {
    id: '真皮底',
    name: '真皮底',
  }, {
    id: '麂皮绒',
    name: '麂皮绒',
  }, {
    id: '超纤',
    name: '超纤',
  }, {
    id: '再生皮',
    name: '再生皮',
  }],
  widthUnit: [{
    id: 'cm',
    name: 'cm',
  }, {
    id: '英寸',
    name: '英寸',
  }],
  lengthUnit: [{
    id: '米',
    name: '米',
  }, {
    id: '英尺',
    name: '英尺',
  }],
  other: {
    softness: [{
      id: '软',
      name: '软',
    }, {
      id: '适中',
      name: '适中',
    }, {
      id: '硬',
      name: '硬',
    }],
    airPermeability: [{
      id: '不透',
      name: '不透',
    }, {
      id: '适中',
      name: '适中',
    }, {
      id: '透气',
      name: '透气',
    }],
    wearResistance: [{
      id: '不耐磨',
      name: '不耐磨',
    }, {
      id: '适中',
      name: '适中',
    }, {
      id: '耐磨',
      name: '耐磨',
    }],
    elasticForce: [{
      id: '无弹',
      name: '无弹',
    }, {
      id: '微弹',
      name: '微弹',
    }, {
      id: '弹力',
      name: '弹力',
    }],
  },
};


const combine = <T>(arrChunks: T[][]): T[][] => {
  const result: any[] = [];

  const helper = (i: number, prev: T[] = []) => {
    if (i === arrChunks.length) {
      result.push(prev);
      return;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const arrChunk of arrChunks[i]) {
      helper(i + 1, [...prev, arrChunk]);
    }
  };

  helper(0);

  return result;
};

export const yearSeasonBreak = '-';
export const getYearSeasonOptions = () => {
  const yearOptions = getYearOptions();
  const seasonOptions = options.season;
  const combines = combine([yearOptions, seasonOptions]).map(([yearOption, seasonOption]) => {
    return {
      key: `${yearOption.id}${yearSeasonBreak}${seasonOption.id}`,
      title: `${yearOption.name}${yearSeasonBreak}${i18n.t(`material.options.season.${seasonOption.name}`)}`,
    };
  });
  return combines;
};

// const numberReg = /^([\d]+[\d]*(\.[\d]{1,2})?)$/;
// const numberRules = [{ pattern: numberReg, message: '请输入最多保留两位的数字' }];
const unNumberReg = /[^(\d|.)]/g;
export const onNumberInput = (e: InputEvent) => {
  const { value } = e.target as HTMLInputElement;
  const numberStr = value.replace(unNumberReg, '');
  const radix = value.split('.')[1] || '';
  const result = radix.length > 2 ? (+numberStr).toFixed(2) : numberStr;
  (e.target as HTMLInputElement).value = result;
};
const numberEvents = {
  oninput: onNumberInput,
};

// 设置显示的值
export const addFormItemDidplayValue = (formItems: FormItems, apiParams: Obj, hideFalsy: Boolean = true) => {
  if (!apiParams) return formItems;

  const newFormItems = formItems.filter(item => {
    const key = item.key as string;
    const apiValue = apiParams[key] ?? '';
    // 需要处理的特殊值
    switch (key) {
      case 'applicableProduct':
        item.value = (tryParseJson(apiValue) ?? []).join();
        break;
      case 'applicableParts':
        {
          const apiValue2FrontValue = () => {
            const _apiValue: ModelTypeItem[] = apiValue || [];
            let frontStrArr: string[] = [];
            _apiValue.forEach(model => {
              const subModels = model.modelProp;
              subModels.forEach(subModel => {
                const modelFrontStrArr = subModel.partProp?.map(part => `${model.name}/${part.name}`) || [];
                frontStrArr = [...frontStrArr, ...modelFrontStrArr];
              });
            });
            const frontValue = [...new Set(frontStrArr)].join();
            return frontValue;
          };
          item.value = apiValue2FrontValue();
        }
        break;
      case 'isInStock':
      case 'isAgain':
      case 'isEnvironmentProtection':
        item.value = apiValue === 1 ? '是' : '否';
        break;
      default:
        // 数组的显示值默认处理成','隔开
        item.value = Array.isArray(apiValue) ? apiValue.join() : apiValue;
        break;
    }
    return !!item.value;
  });
  return newFormItems;
};

// 设置表单的预设值
const addFormItemValue = (formItems: FormItems, apiParams?: Obj) => {
  if (!apiParams) return;

  formItems.forEach(item => {
    const key = item.key as string;
    const apiValue = apiParams[key] ?? '';
    // 需要处理的特殊值
    switch (key) {
      case 'applicableProduct':
        item.value = tryParseJson(apiValue) ?? [];
        break;
      case 'applicableParts':
        {
          const apiValue2FrontValue = () => {
            const _apiValue: ModelTypeItem[] = apiValue || [];
            let frontStrArr: string[] = [];
            _apiValue.forEach(model => {
              const subModels = model.modelProp;
              subModels.forEach(subModel => {
                const modelFrontStrArr = subModel.partProp?.map(part => `${model.id},${part.code}`) || [];
                frontStrArr = [...frontStrArr, ...modelFrontStrArr];
              });
            });
            const frontValue = [...new Set(frontStrArr)].map(_item => _item.split(','));
            return frontValue;
          };
          item.value = apiValue2FrontValue();
        }
        break;
      case 'designContent':
        item.value = apiValue ? apiValue.split() : [];
        break;
      default:
        if (apiValue || apiValue === 0) item.value = apiValue;
        break;
    }
  });
};

const translateTitle = (formItems: FormItems) => {
  // title映射成用户自定义的title
  fieldMap.translateList(formItems);
};
// 被合并的字段不要clearable
const unClearable = (formItems: FormItems, unClearableKeys: string[]) => {
  formItems.forEach(item => {
    if (unClearableKeys.includes(`${item.key}`)) {
      item.clearable = false;
    }
  });
};


// @ts-ignore
export const getBaseFormItems = (big: CategoryItem = {}) => {
  return [{
    key: 'name',
    title: '材料名',
    keepVisible: true,
    rules: [{ required: true }],
  }, {
    key: 'sn',
    title: '供应商货号',
    keepVisible: true,
    rules: [{ required: true }],
  },
  {
    key: 'yearSeason',
    title: '上市时间',
    type: 'select',
    multiple: true,
    keepVisible: true,
    options: getYearSeasonOptions(),
    rules: [{ required: true }],
  },
  {
    key: 'applicableSeason',
    title: '适用季节',
    type: 'select',
    keepVisible: true,
    options: getOptions(options.applicableSeason, 'applicableSeason'),
    rules: [{ required: true }],
  },
  {
    key: 'applicableProduct',
    title: '适用产品',
    type: 'select',
    multiple: true,
    keepVisible: true,
    options: getOptions(options.applicableProduct, 'applicableProduct'),
    rules: [{ required: true }],
  },
  {
    key: 'series',
    title: '系列',
  }, {
    key: 'designContent',
    title: '标签',
    placeholder: '按下enter生成标签',
    value: [],
    multiple: true,
  }, {
    key: 'isEnvironmentProtection',
    title: '是否环保',
    type: 'select',
    options: getOptions(options.isEnvironmentProtection, 'normalBoolean'),
  }, {
    key: 'environmentProtectionType',
    title: '环保种类',
    type: 'select',
    multiple: true,
    options: getOptions(options.environmentProtectionType, 'environmentProtectionType'),
  }, {
    key: 'type',
    title: '类型',
    type: 'cascader',
    options: getOptions(options.type, 'type'),
    show: ['纺织品'].includes(big.originName),
  }, {
    key: 'classification',
    title: '分类',
    type: 'select',
    options: getOptions(options.classification, 'classification'),
    show: ['真皮'].includes(big.originName),
  }, {
    key: 'productName',
    title: '品名',
    type: 'select',
    options: getOptions(options.productName, 'productName'),
  }, {
    key: 'block1',
    title: '',
    type: 'block',
  }, {
    key: 'colorRestriction',
    title: '颜色限制',
    childType: 'textarea',
    rows: 4,
    maxlength: 200,
  }, {
    key: 'note',
    title: '注意事项',
    childType: 'textarea',
    rows: 4,
    maxlength: 200,
  }] as FormItems;
};
export const getBusinessFormItems = () => {
  return [{
    key: 'isInStock',
    title: '是否板料',
    type: 'radio',
    keepVisible: true,
    options: getOptions(options.isInStock, 'isInStock'),
    value: 1,
    rules: [{ required: true }],
  }, {
    key: 'isAgain',
    title: '是否允许被分享',
    type: 'radio',
    keepVisible: true,
    options: getOptions(options.isAgain, 'isAgain'),
    value: 1,
    rules: [{ required: true }],
  }, {
    key: 'unit',
    title: '单位',
    type: 'select',
    options: getOptions(options.unit, 'unit'),
  }, {
    key: 'sampleMoq',
    title: '样品起订量',
    formItemProps: {
      class: 'material-upload-has-unit',
    },
    ...numberEvents,
  }, {
    key: 'sampleMoqUnit',
    title: '样品起订量单位',
    type: 'select',
    options: getOptions(options.unit, 'unit'),
    value: '码',
  }, {
    key: 'moq',
    title: '量产起订量',
    formItemProps: {
      class: 'material-upload-has-unit',
    },
    ...numberEvents,
  }, {
    key: 'moqUnit',
    title: '量产起订量单位',
    type: 'select',
    options: getOptions(options.unit, 'unit'),
    value: '码',
  }, {
    key: 'samplePrice',
    title: '样品价格',
    formItemProps: {
      class: 'material-upload-has-unit double',
    },
    ...numberEvents,
  }, {
    key: 'samplePriceCurrency',
    title: '样品价格币种',
    type: 'select',
    options: getOptions(options.priceUnit, 'priceUnit'),
    value: '人民币',
  },
  {
    key: 'samplePriceUnit',
    title: '样品价格单位',
    type: 'select',
    options: getOptions(options.unit, 'unit'),
    value: '码',
  }, {
    key: 'price',
    title: '量产价格',
    formItemProps: {
      class: 'material-upload-has-unit double',
    },
    ...numberEvents,
  }, {
    key: 'priceCurrency',
    title: '量产价格币种',
    type: 'select',
    options: getOptions(options.priceUnit, 'priceUnit'),
    value: '人民币',
  }, {
    key: 'priceUnit',
    title: '量产价格单位',
    type: 'select',
    options: getOptions(options.unit, 'unit'),
    value: '码',
  }, {
    key: 'developmentCycle',
    title: '开发周期',
    formItemProps: {
      class: 'material-upload-has-unit',
    },
    ...numberEvents,
  }, {
    key: 'developmentCycleUnit',
    title: '开发周期单位',
    type: 'select',
    options: getOptions(options.timeUnit, 'timeUnit'),
    value: '天',
  }, {
    key: 'leadTime',
    title: '量产周期',
    formItemProps: {
      class: 'material-upload-has-unit',
    },
    ...numberEvents,
  }, {
    key: 'leadTimeUnit',
    title: '量产周期单位',
    type: 'select',
    options: getOptions(options.timeUnit, 'timeUnit'),
    value: '天',
  }, {
    key: 'currency',
    title: '货币',
    type: 'select',
    options: getOptions(options.currency, 'currency'),
  }] as FormItems;
};
// @ts-ignore
export const getFeatureFormItems = (big: CategoryItem = {}) => {
  return [
    {
      key: 'averageSize',
      title: '平均尺寸',
      formItemProps: {
        class: 'material-upload-has-unit',
      },
      show: ['真皮'].includes(big.originName),
      ...numberEvents,
    }, {
      key: 'averageSizeUnit',
      title: '平均尺寸单位',
      type: 'select',
      options: getOptions(options.averageSizeUnit, 'averageSizeUnit'),
      value: '平方英尺',
      show: ['真皮'].includes(big.originName),
    }, {
      key: 'component',
      title: '成分',
      show: ['纺织品'].includes(big.originName),
    }, {
      key: 'yarnAndProportion',
      title: '纱线及占比',
      show: ['纺织品'].includes(big.originName),
    }, {
      key: 'compositeMode',
      title: '复合方式',
      show: ['纺织品'].includes(big.originName),
    }, {
      key: 'grammage',
      title: '克重',
      formItemProps: {
        class: 'material-upload-has-unit',
      },
      ...numberEvents,
      show: ['纺织品', '真皮', '人造革'].includes(big.originName),
    }, {
      key: 'grammageUnit',
      title: '克重单位',
      type: 'select',
      options: getOptions(options.grammageUnit, 'grammageUnit'),
      value: '平米克重',
      show: ['纺织品', '真皮', '人造革'].includes(big.originName),
    }, {
      key: 'thickness',
      title: '厚度',
      formItemProps: {
        class: 'material-upload-has-unit',
      },
      ...numberEvents,
      show: ['纺织品', '真皮', '人造革'].includes(big.originName),
    }, {
      key: 'thicknessUnit',
      title: '厚度单位',
      type: 'select',
      options: getOptions(options.thicknessUnit, 'thicknessUnit'),
      value: 'mm',
      show: ['纺织品', '真皮', '人造革'].includes(big.originName),
    }, {
      key: 'width',
      title: '幅宽',
      formItemProps: {
        class: 'material-upload-has-unit',
      },
      show: ['纺织品', '人造革'].includes(big.originName),
      ...numberEvents,
    }, {
      key: 'widthUnit',
      title: '幅宽单位',
      type: 'select',
      options: getOptions(options.widthUnit, 'widthUnit'),
      value: 'cm',
      show: ['纺织品', '人造革'].includes(big.originName),
    }, {
      key: 'length',
      title: '织物匹长',
      formItemProps: {
        class: 'material-upload-has-unit',
      },
      show: ['纺织品'].includes(big.originName),
    }, {
      key: 'lengthUnit',
      title: '织物匹长单位',
      type: 'select',
      options: getOptions(options.lengthUnit, '织物匹长单位'),
      value: '米',
      show: ['纺织品'].includes(big.originName),
    }, {
      key: 'oilContent',
      title: '含油量',
      formItemProps: {
        class: 'material-upload-has-unit',
      },
      show: ['真皮', '人造革'].includes(big.originName),
      ...numberEvents,
    }, {
      key: 'oilContentUnit',
      title: '含油量单位',
      type: 'select',
      options: getOptions(options.oilContentUnit, 'oilContentUnit'),
      value: '%',
      show: ['真皮', '人造革'].includes(big.originName),
    }, {
      key: 'highTemperatureRange',
      title: '可承受高温范围',
      show: ['纺织品', '真皮', '人造革'].includes(big.originName),
    }, {
      key: 'engineeringDesignMode',
      title: '工程设计方式',
      type: 'select',
      options: getOptions(options.engineeringDesignMode, 'engineeringDesignMode'),
      show: ['纺织品'].includes(big.originName),
    }, {
      key: 'structureMode',
      title: '结构方式',
      type: 'select',
      options: getOptions(options.structureMode, 'structureMode'),
      show: ['纺织品'].includes(big.originName),
    },
    {
      key: 'bottomType',
      title: '底布类型',
      type: 'select',
      options: getOptions(options.bottomType, 'bottomType'),
      show: ['真皮'].includes(big.originName),
    },
    {
      key: 'functionPurpose',
      title: '功能',
      type: 'select',
      multiple: true,
      options: big.originName ? getOptions(options.functionPurpose[big.originName], 'functionPurpose') : [],
      show: ['纺织品', '真皮', '人造革'].includes(big.originName),
    }, {
      key: 'recommendParts',
      title: '推荐使用部位',
      type: 'select',
      multiple: true,
      options: getOptions(options.recommendParts, 'recommendParts'),
    }, {
      key: 'surfaceTreatment',
      title: '表面处理',
      type: 'select',
      options: getOptions(options.surfaceTreatment, 'surfaceTreatment'),
      show: ['真皮'].includes(big.originName),
    },
    {
      key: 'postProcessing',
      title: '后处理',
      type: 'select',
      multiple: true,
      options: big.originName ? getOptions(options.postProcessing[big.originName], 'postProcessing') : [],
      show: ['纺织品', '真皮', '人造革'].includes(big.originName),

    }, {
      key: 'countryOfOrigin',
      title: '原产地',
    }, {
      key: 'area',
      title: '面积',
      formItemProps: {
        class: 'material-upload-has-unit',
      },
      show: ['纺织品'].includes(big.originName),
      ...numberEvents,
    }, {
      key: 'areaUnit',
      title: '面积单位',
      type: 'select',
      options: getOptions(options.averageSizeUnit, 'averageSizeUnit'),
      value: '平方英尺',
      show: ['纺织品'].includes(big.originName),
    }, {
      key: 'manufacturingProcess',
      title: '制造工艺',
      type: 'select',
      options: big.originName ? getOptions(options.manufacturingProcess[big.originName], 'manufacturingProcess') : [],
      show: ['真皮', '人造革'].includes(big.originName),
    }, {
      key: 'appearance',
      title: '外观',
      type: 'select',
      multiple: true,
      options: getOptions(options.appearance, 'appearance'),
      show: ['人造革'].includes(big.originName),
    }, {
      key: 'qualityGrade',
      title: '质量等级',
      type: 'select',
      options: getOptions(options.qualityGrade, 'qualityGrade'),
      show: ['真皮'].includes(big.originName),
    }, {
      key: 'textureType',
      title: '纹理',
      type: 'select',
      options: getOptions(options.textureType, 'textureType'),
      show: ['真皮'].includes(big.originName),
    },

  ] as FormItems;
};

// @ts-ignore
export const getOtherFormItems = (big: CategoryItem = {}) => {
  return [{
    key: 'softness',
    title: '柔软性',
    type: 'select',
    options: getOptions(options.other.softness, 'softness'),
    show: ['纺织品', '真皮', '人造革'].includes(big.originName),
  }, {
    key: 'airPermeability',
    title: '透气性',
    type: 'select',
    options: getOptions(options.other.airPermeability, 'airPermeability'),
    show: ['纺织品', '真皮', '人造革'].includes(big.originName),
  }, {
    key: 'wearResistance',
    title: '耐磨损性',
    type: 'select',
    options: getOptions(options.other.wearResistance, 'ywearResistanceear'),
    show: ['纺织品'].includes(big.originName),
  }, {
    key: 'elasticForce',
    title: '弹力',
    options: getOptions(options.other.elasticForce, 'elasticForce'),
    type: 'select',
    show: ['纺织品', '真皮', '人造革'].includes(big.originName),
  }, {
    key: 'colorFastness',
    title: '色牢度',
    show: ['纺织品'].includes(big.originName),
  }] as FormItems;
};

export const getAllFormItems = () => {
  return [...getBaseFormItems(), ...getBusinessFormItems(), ...getFeatureFormItems(), ...getOtherFormItems()];
};

export const getAllFormItemsObj = () => {
  return getAllFormItems().reduce((obj, formItem) => {
    obj[formItem.key] = formItem;
    return obj;
  }, {} as Record<FormItem['key'], FormItem>);
};

// 被合并的表单字段
export const bemergedFieldsKeys = (() => {
  const allFormItems = getAllFormItems();
  const _bemergedFieldsKeys: string[] = [];
  let needPushCount = 0;
  allFormItems.forEach(formItem => {
    const formItemClass = formItem?.formItemProps?.class || '';
    switch (true) {
      case formItemClass.includes('double'):
        needPushCount += 2;
        break;
      case formItemClass.includes('material-upload-has-unit'):
        needPushCount++;
        break;
      default:
        if (needPushCount) _bemergedFieldsKeys.push(formItem.key as string);
        needPushCount && needPushCount--;
        break;
    }
  });
  return _bemergedFieldsKeys;
})();

const handleFormItems = (formItems: FormItems) => {
  translateTitle(formItems);
  unClearable(formItems, bemergedFieldsKeys);
};


export const useFormData = (category: Ref<Category>, refApiParams?: Ref<Obj>) => {
  const baseFormData = computed(() => {
    const { big } = category.value;
    const formItems = getBaseFormItems(big);
    addFormItemValue(formItems, refApiParams?.value);
    handleFormItems(formItems);
    return formItems;
  });
  const businessFormData = computed(() => {
    const formItems = getBusinessFormItems();
    addFormItemValue(formItems, refApiParams?.value);
    handleFormItems(formItems);
    return formItems;
  });
  const featureFormData = computed(() => {
    const { big } = category.value;
    if (!big.originName) return [];
    const formItems = getFeatureFormItems(big);
    addFormItemValue(formItems, refApiParams?.value);
    handleFormItems(formItems);
    return formItems;
  });
  const otherFormData = computed(() => {
    const { big } = category.value;
    if (!big.originName || big.originName === '其它') return [];
    const formItems = getOtherFormItems(big);
    addFormItemValue(formItems, refApiParams?.value);
    translateTitle(formItems);

    return formItems;
  });
  return {
    baseFormData, businessFormData, featureFormData, otherFormData,
  };
};

export const getModelPercent = (model: Obj) => {
  const filteredArr = Object.entries(model).filter(([key]) => !bemergedFieldsKeys.includes(key));
  const valuesArr = filteredArr.map(([key, value]) => value);
  const { length } = valuesArr;
  const emptyLength = valuesArr.filter(value => {
    return Array.isArray(value) ? value.length : unFalsy(value);
  }).length;
  const percent = Math.round((emptyLength / length) * 100);
  return percent || 0;
};


export const getEditFormKeyMap = () => {
  const allFormItems = getAllFormItems();
  const editFormKeyMap = {
    ...Object.values(allFormItems).reduce((result, formItem) => {
      result[formItem.key] = fieldMap.getWithKey(formItem.key as string) || formItem.title;
      return result;
    }, {} as Obj),
    ...{
      categoryId: fieldMap.getWithKey('categoryId'),
      docs: '文档',
      videos: '视频',
      images: '图片',
      rendering: '色卡',
    },
  };
  return editFormKeyMap;
};
export const getnewsData = () => {
  const newData = useFormData(ref({ big: { originName: '1', level: -1, name: '1' }, middle: { id: '', level: -1, name: '1' } }));

  const editFormKeyMap = {
    ...Object.values(newData).reduce((result, subList) => {
      console.log(result, subList, 'result, subList');
      subList.value.forEach(item => {
        result[item.key] = fieldMap.getWithKey(item.key as string) || item.title;
      });
      return result;
    }, {} as Obj),
    ...{
      categoryId: fieldMap.getWithKey('categoryId'),
      docs: '文档',
      videos: '视频',
      images: '图片',
      rendering: '色卡',
    },
  };
  return editFormKeyMap;
};

export const getPriceParams = (priceParams: Record<string, [string, string]>, priceRelateFields: Obj = {}) => {
  const getPrice = (price: [string, string]) => {
    if (!price.filter(Boolean).length) return [];
    const result = !price[1] ? price.slice(0, 1) : price;
    return result.map(item => +item);
  };

  const clearObj = (obj: Obj) => {
    Object.keys(deepCopy(obj)).forEach(key => {
      obj[key] = undefined;
    });
    return obj;
  };

  const resultPriceParams = Object.entries(priceParams).reduce((obj, [key, value]) => {
    const price = getPrice(value);
    const relateFields = price.length ? priceRelateFields : clearObj(priceRelateFields);
    const itemPriceParams = {
      [key]: price,
      ...relateFields,
    };
    obj = { ...obj, ...itemPriceParams };
    return obj;
  }, {} as Record<string, number[]>);


  return resultPriceParams;
};

