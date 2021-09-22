import qs from 'query-string';
import tokenUtils from '@/utils/token';
import { ElMessage } from 'element-plus';
import { isMobilePreview } from '@/router/utils/mobile';

export const isMini = () => {
  return window.navigator.userAgent.includes('miniProgram');
};


export const getMiniToken = () => {
  const { query } = qs.parseUrl(window.location.href);
  const { MINI_TOKEN } = query;
  return MINI_TOKEN as string;
};

export const miniInit = () => {
  if (isMini() && isMobilePreview()) {
    const miniToken = getMiniToken();
    if (miniToken) tokenUtils.set(miniToken);
    document.title = '3D渲染';
  }
};

export const getCatalogIdFromURL = () => {
  const { query } = qs.parseUrl(window.location.href);
  const { catalogId } = query;
  return catalogId;
};
