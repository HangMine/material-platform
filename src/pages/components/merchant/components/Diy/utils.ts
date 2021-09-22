
import { fetchBackendUrls, fetchMerchantHome } from '@/api/merchant';
import { getType } from '@/utils/deep-copy';
import { getRelativePathFromUrl } from '@/utils/normalize-component';
import uploadToOSS from '@/utils/oss/uploadToOSS';
import { isOssUrl, signUrl } from '@/utils/oss/utils';
import { getAssetsImg } from '@/utils/util';
import {
  reactive, Ref, toRefs, unref, watch,
} from 'vue';
import { parseUrl, stringifyUrl } from 'query-string';
import isDataPipeUrl from '@/utils/is-data-pipe-url';
import envs from '@/utils/envs';

export type UploadItem = {
  file?: File | undefined,
  url: string,
  name?: string,
  [any: string]: unknown
};
export type UploadList = UploadItem[];

export type EditState = ReturnType<typeof getDefaultEditState>;

export type EditStateItem = valueof<EditState>;

export type Sections = EditStateItem[];

const getWxAssetsImg = (name: string) => {
  return getAssetsImg(name, 'img/merchant');
};

const getWxAssetsVideo = (name: string) => {
  return getAssetsImg(name, 'video/merchant');
};


export const getDefaultEditState = () => {
  return {
    categorySection: {
      key: 'categorySection',
      active: true,
      dragList: [{
        url: getWxAssetsImg('pic_可再生.png'),
        file: undefined,
      }, {
        url: getWxAssetsImg('pic_梭织.png'),
        file: undefined,
      }, {
        url: getWxAssetsImg('pic_针织.png'),
        file: undefined,
      }, {
        url: getWxAssetsImg('pic_秋冬.png'),
        file: undefined,
      }] as UploadList,
      fixList: [{
        url: getWxAssetsImg('pic_英伦.png'),
        file: undefined,
      }] as UploadList,
    },
    categoryBanner: {
      key: 'categoryBanner',
      active: true,
      imgList: [{
        url: getWxAssetsImg('banner_辅料.png'),
        file: undefined,
      }] as UploadList,
    },
    hotMaterial: {
      key: 'hotMaterial',
      active: true,
    },
    mainVideo: {
      key: 'mainVideo',
      active: false,
      video: {
        url: getWxAssetsVideo('mainVideo.mp4'),
        file: undefined,
      },
    },
    mainMaterial: {
      key: 'mainMaterial',
      active: false,
      imgList: [{
        url: getWxAssetsImg('pic_主营产品.png'),
        file: undefined,
      }] as UploadList,
    },
    mainMaterialBanner: {
      key: 'mainMaterialBanner',
      active: true,
      imgList: [{
        url: getWxAssetsImg('banner_好纺织.png'),
        file: undefined,
      }] as UploadList,
    },
    aboutUs: {
      key: 'aboutUs',
      active: true,
      // eslint-disable-next-line max-len
      text: 'Warrior战士新材料科技有限公司，采用国际领先的生产设备，由有丰富制革经验的工程师精心操作，生产出的皮革品质不凡，经权威部门检测，在阻燃、环保防霉、抗撕拉强度、水洗摩擦色牢度等方面，均达到了欧洲标准的要求。生产的拼皮已出口到印度尼西亚、马来西亚、韩国、台湾等国家和地区。经与多家外商家具企业配套使用，其产品远销欧、美、日、韩、澳大利亚等国家，受到客户的一致好评，享有很高的赞誉。',
      imgList: [{
        url: getWxAssetsImg('pic_个性化商家主页_关于_大图.png'),
        file: undefined,
      }] as UploadList,
    },
    cooperationBrands: {
      key: 'cooperationBrands',
      active: true,
      brandList: [] as UploadList,
    },

  };
};

export const editState2Sections = (editState: EditState | Ref<EditState>) => {
  const _editState = unref(editState);
  const sections = Object.keys(_editState).map(key => {
    return unref(editState)[key];
  });
  return sections;
};

export const signSingleUrl = async (url: string) => {
  const newUrl = isOssUrl(url) ? await signUrl(url) : url;
  return newUrl;
};

export const getHandleUploadItem = async (uploadItem: UploadItem) => {
  const { file, url } = uploadItem;
  let newUrl = url;
  if (file) {
    const ossKey = await uploadToOSS(file, 'BINARY_FILE');
    const backendUrl = (await fetchBackendUrls([ossKey]))[0];
    // const signedUrl = await signSingleUrl(backendUrl);
    newUrl = backendUrl;
  }
  // else {
  //   newUrl = getRelativePathFromUrl(url);
  // }
  const handledUploadItem = {
    ...uploadItem,
    url: newUrl,
    file: undefined,
  };
  return handledUploadItem;
};

export const getHandledUploadList = async (uploadList: UploadList) => {
  const handledUploadList = await Promise.all(uploadList.map((uploadItem, i) => {
    return getHandleUploadItem(uploadItem);
  }));
  return handledUploadList;
};

export const getHandledSections = async (sections: Sections): Promise<Sections> => {
  const handledSections = await Promise.all(sections.map(async section => {
    switch (section.key) {
      case 'categorySection':
        return {
          ...section,
          dragList: await getHandledUploadList(section?.dragList || []),
          fixList: await getHandledUploadList(section?.fixList || []),
        };
      case 'mainVideo':
        return {
          ...section,
          video: section.video ? await getHandleUploadItem(section.video) : '',
        };
      case 'categoryBanner':
      case 'mainMaterial':
      case 'mainMaterialBanner':
      case 'aboutUs':
        return {
          ...section,
          imgList: await getHandledUploadList(section?.imgList || []),
        };
      case 'cooperationBrands':
        return {
          ...section,
          brandList: await getHandledUploadList(section?.brandList || []),
        };
      default:
        return section;
    }
  }));
  return handledSections;
};


// export const loopSignUrl = async (obj: Obj) => {
//   const loop = async (target: Obj) => {
//     // eslint-disable-next-line no-restricted-syntax
//     for (const item of Object.entries(target)) {
//       const [key, value] = item;
//       const type = getType(target);

//       if (['Object', 'Array'].includes(type)) {
//         await loop(value);
//       } else if (type === 'String') {
//         const isOssRelativePath = !/^http/.test(value);
//         target[key] = (isOssRelativePath && isOssUrl(value)) ? await signUrl(value) : value;
//       }
//     }
//     // Object.entries(target).forEach(async ([key, value]) => {
//     //   const type = getType(target);

//     //   if (['Object', 'Array'].includes(type)) {
//     //     await loop(value);
//     //   } else if (type === 'String') {
//     //     const isOssRelativePath = !/^http/.test(value);
//     //     target[key] = isOssRelativePath && isOssUrl(value) ? await signUrl(value) : value;
//     //   }
//     // });
//   };

//   await loop(obj);
// };

export const getEditParams = async (sections: Sections) => {
  const params = {
    sections: await getHandledSections(sections),
  };
  return params;
};

export const sections2editState = (sections: Sections) => {
  const editState = { } as EditState;
  sections.forEach(section => {
    editState[section.key] = section;
  });
  return editState;
};


export const fetchSections = async (params: Parameters<typeof fetchMerchantHome>[0]) => {
  try {
    const { sections } = await fetchMerchantHome(params);
    return sections;
  } catch {
    return editState2Sections(getDefaultEditState());
  }
};

const getVideoBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    let dataURL = '';
    const video = document.createElement('video');
    video.setAttribute('crossOrigin', envs.VUE_APP_IS_REMOTE && isDataPipeUrl(url) ? 'use-credentials' : 'anonymous');// 处理跨域
    video.setAttribute('src', url);
    video.setAttribute('width', '1420');
    video.setAttribute('height', '650');
    video.setAttribute('preload', 'auto');
    video.addEventListener('loadeddata', () => {
      console.log('merchant-video has loadeddata');
      const canvas = document.createElement('canvas');
      const { width } = video; // canvas的尺寸和图片一样
      const { height } = video;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d')?.drawImage(video, 0, 0, width, height); // 绘制canvas
      dataURL = canvas.toDataURL('image/jpeg'); // 转换为base64
      resolve(dataURL);
    });
  });
};


export const useVideoBg = (editState?: EditState | Ref<EditState>) => {
  const state = reactive({
    bgURL: '',
    videoBg: '',
  });
  const setVideoBg = async (value: string) => {
    const singedUrl = await signSingleUrl(value);
    const snapshotUrl = await getVideoBase64(singedUrl);
    state.bgURL = snapshotUrl;
    state.videoBg = `background-image:url('${snapshotUrl}')`;
  };
  const videoWatch = () => {
    const _editState = unref(editState);
    if (_editState) {
      watch(
        () => _editState.mainVideo.video.url,
        async value => {
          await setVideoBg(value);
        },
        {
          immediate: true,
        },
      );
    }
  };

  return {
    ...toRefs(state), videoWatch, setVideoBg,
  };
};

