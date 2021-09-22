/* eslint-disable */
// @ts-ignore
import getDiffuseColorFrom4Ddat from './_4DdatHelper';
// @ts-ignore
import getColorCardsFromDpm from './dpm';
import { isAdmf } from '@/pages/components/material/utils';

type AseColorItem = {
  color: [number, number, number],
  name: string
};

type AseColor = {
  colors: AseColorItem[],
  groups: unknown[],
  version: number[]
};

const rgbStr2cssRgbStr = (rgbStr: string) => {
  return rgbStr.split(',');
}
const rgbArr2cssRgbStr = (rgbArr: [number, number, number]) => {
  return `rgb(${rgbArr.join()})`
}

export const parseMaterialFile = async (file: File): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const _isAdmf = isAdmf(file);
    type CodeObj = { code: number, message: string }

    const handleError = ({ code, message }: CodeObj, reject: (reason?: any) => void) => {
      const error = new Error(`解析面料文件错误:${message || '未知错误'}`) as Error
      reject(error);
    }
    const sddatCallback = ({ code, message }: CodeObj, rgbArr: [number, number, number]) => {
      if (code !== 0) {
        if ([-1, -1000].includes(code)) {
          // 原色色卡
          resolve([''])
        } else {
          // 常规错误
          handleError({ code, message }, reject)
        }
      } else {
        // 统一为整数(CSS规范：https://www.w3school.com.cn/cssref/css_colors_legal.asp)
        let roundRgbArr = rgbArr.map((number: number) => { return Math.round(number) }) as [number, number, number];
        resolve([rgbArr2cssRgbStr(roundRgbArr)]);
      }
    };
    type AdmfJson = {
      isOriginal: 1 | 0
      name: string
      type: string
      value: string
    }
    const admfCallback = ({ code, message }: CodeObj, admfJsonArr: AdmfJson[]) => {
      if (code !== 0) {
        handleError({ code, message }, reject)
      } else {
        let cssRgbArr = admfJsonArr.map(admfJson => {
          return admfJson.isOriginal === 1 ? '' : `rgb(${admfJson.value})`;
        });
        resolve(cssRgbArr);
      }
    };
    _isAdmf ? getColorCardsFromDpm(file, admfCallback) : getDiffuseColorFrom4Ddat(file, sddatCallback);

  });
};

export default parseMaterialFile;
