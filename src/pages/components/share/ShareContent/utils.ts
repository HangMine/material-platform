/* eslint-disable import/prefer-default-export */
import { MaterialList, MaterialListItem } from '@/models/Material';
import onCreated from '@/utils/vue/onCreated';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, onMounted, watch, Ref,
} from 'vue';
import { getMaterialImgWithBase64 } from '../../material/utils';

// 分享内容里的资源是否已经加载完成
export const isLoadedEnd = ref(false);

export const useMaterialImgWithBase64 = (refMateial: Ref<MaterialListItem>) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const materialImg = ref(require('@/assets/img/public/render-empty.png'));
  onCreated(async () => {
    materialImg.value = await getMaterialImgWithBase64(refMateial.value) || require('@/assets/img/public/render-empty.png');
  });
  return materialImg;
};

export const useMutiMaterialImgWithBase64 = (refMateials: Ref<MaterialList>) => {
  const showMaterials = ref(refMateials.value.map(item => ({
    ...item,
    __materialImg: require('@/assets/img/public/render-empty.png'),
  })));
  onCreated(async () => {
    showMaterials.value.forEach(async item => {
      item.__materialImg = await getMaterialImgWithBase64(item) || require('@/assets/img/public/render-empty.png');
    });
  });
  return showMaterials;
};
