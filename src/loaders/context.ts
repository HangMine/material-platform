import { User } from '@/models/User';
// import { Context as ContextOrm, User as UserOrm } from '@/store/orms';
import {
  CompanyOrm, ContextOrm, PermissionOrm, UserOrm,
} from '@/models/index';

import tokenUtils from '@/utils/token';
import { isAuthError } from '@/utils/error-handler';
import axios, { axiosEncrypt } from '@/utils/axios';
import envs from '@/utils/envs';
import originalAxios from 'axios';
import { getUserInfo } from '@/api/user';
import companyUtils from '@/utils/companyUtils';
import { fetchPipeResourceAuth } from '@/api/auth';
import { fetchFieldList, fetchFirstCategoryList, fetchSecondCategoryList } from '@/api/dataManage';
import useResourceUsage from '@/utils/uses/use-resource-usage';
import { fetchCategoryByLevel } from '@/api/material';
import { updateOperationPermissions } from './permission';
import { updateCompany } from './company';

// 通过token获取用户ID
export function getContextUserId() {
  const token = tokenUtils.get();
  if (!token) return undefined;
  const id = tokenUtils.get()?.split(':')[0];
  return id || undefined;
}

// 通过用户ID get User对象
export function getContextUser(): User | null {
  const id = getContextUserId();
  if (!id) {
    return null;
  }
  const contextUser = UserOrm.query().whereId(id).first();
  return contextUser;
}

// 获取公司信息
export function getContextCompany() {
  // console.log(ContextOrm.query().whereId(1));
  return ContextOrm.query().whereId(1).with('company').first()?.company;
}

// set User对象
export async function setContextUser(user: User | Partial<User> | null): Promise<void> {
  await ContextOrm.insertOrUpdate({
    data: {
      _userId: user?.id,
      id: 1,
      user,
    },
  });
}

export async function updateContextCompany(id?: string): Promise<Company> {
  id = id ?? companyUtils.get();
  const computedId = id ?? getContextUser()?.companyId;
  if (computedId) {
    await updateCompany(computedId);
  }
  /* pongDataPipes的作用: 上报当前网络信息，然后让元数据中心在处理api的时候就近返回不同管道的静态资源.
    按公司走的，所以需要上传companyId.
    材料平台的资源都是面向公众的，没有私有资源, 所以不需要调这个 */

  // if (!pongDataPipesTimer) {
  //   // eslint-disable-next-line no-use-before-define
  //   pongDataPipesTimer = setInterval(() => pongDataPipes(computedId), 60000);
  // }
  // originalAxios.get(`//${envs.VUE_APP_API_DOMAIN}/metaData/storageService/getResourceAuth`, {
  //   withCredentials: true,
  //   headers: {
  //     token: tokenUtils.get(),
  //   },
  // });
}


// 更新User对象
export async function updateContextUser(user?: User | Partial<User> | null) {
  let computedUser: User | Partial<User>;

  if (user === undefined) {
    computedUser = await getUserInfo();
  } else {
    const id: string | undefined = user?.id;
    // 如果没有id,则判断为局部修改,此时需调用getContextUserId获取id
    computedUser = id ? user! : { ...user, id: getContextUserId() };
  }

  const companyId = companyUtils.get();
  const companies = computedUser?.companies ?? [];
  let company = null as unknown;
  if (!companyId) {
    // 找到第一个企业租户
    const firstRelatedCompany = companies.find(_company => !_company.isPersonalCom);
    if (firstRelatedCompany) {
      company = firstRelatedCompany;
      companyUtils.set(firstRelatedCompany.id);
    }
  } else {
    company = companies.find(item => {
      return item.id === companyId;
    });
  }
  // 如果找不到企业租户时,取第一个租户
  if (!company) {
    [company] = companies;
    companyUtils.set(companies[0].id);
  }

  // 将updateContextCompany提前到ContextOrm.insertOrUpdate之前,避免提前插入数据导致context.company.package为空而报错
  await updateContextCompany();

  await ContextOrm.insertOrUpdate({
    data: {
      id: 1,
      user: computedUser,
      company,
    },
  });
  // await setContextUser(computedUser);
  await updateOperationPermissions();
}

const pongDataPipesTimer: number | null = null;
const workspaceMsgCenterUninit: Function | null = null;

// 获取别名+分类相关接口,统一在updateContext获取了,后面需要再修改
const fetchAllAlias = async () => {
  await Promise.all([fetchFirstCategoryList(), fetchSecondCategoryList(), fetchFieldList(), fetchCategoryByLevel()]);
};

const { getResourceTotalCount } = useResourceUsage();

// 获取当前context
export async function updateContext() {
  const results = await Promise.allSettled([
    updateContextUser(),
    fetchPipeResourceAuth(),
  ]);
  // 在获取用户信息之后才获取
  await fetchAllAlias();
  const error = (results.find(result => 'reason' in result) as PromiseRejectedResult | undefined)?.reason;
  if (error) {
    if (isAuthError(error)) {
      await setContextUser(null);
    } else {
      throw error;
    }
  }
  await getResourceTotalCount();
}

// // 移除公司信息（登出）
export function removeCompany() {
  companyUtils.remove();

  if (pongDataPipesTimer) {
    clearInterval(pongDataPipesTimer);
  }
  const currentCompany = CompanyOrm.query().first();
  if (currentCompany) {
    currentCompany.$delete();
  }
}

export async function clearContext() {
  setContextUser(null);
  if (pongDataPipesTimer) {
    clearInterval(pongDataPipesTimer);
  }
  PermissionOrm.deleteAll();
  removeCompany();
  workspaceMsgCenterUninit && workspaceMsgCenterUninit();
}

export async function logout() {
  clearContext();
  tokenUtils.remove();
}
