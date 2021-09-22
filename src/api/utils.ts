/* eslint-disable import/prefer-default-export */
import { getContextUser } from '@/loaders/context';

// 根据是否登录确定是否使用pass接口(不校验权限的接口)
export const urlWithPass = (originUrl: string) => {
  const user = getContextUser();
  return user ? originUrl : `${originUrl}/pass`;
};
