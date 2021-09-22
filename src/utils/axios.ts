// Library
import originalAxios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import 'webcrypto-shim';
import envs from '@/utils/envs';
import {
  utf82u8a, base64toAb, ab2base64,
} from '_/blob-utils';
import token from './token';
import AppError from './error';
import companyUtils from './company';

// 忽略错误白名单,现在是忽略所有错误
function isIgnorePipeError(api = ''): boolean {
  return api.includes('merchant/home/get'); // 技术债+1
}

// 请求缓存store，避免某个请求在同一请求周期内重复请求
interface ReqCache {
  [propName: string]: Promise<any>
}
const reqCache: ReqCache = {};


// // 创建新的axios实例代替全局覆盖axios配置
export const axios = originalAxios.create({
  // baseURL: envs.VUE_APP_API_BASE_URL,
  // baseURL: 'http://dev.4dshoetech.local/backend/',
  // baseURL: '/xh',
  // baseURL: '/yw',
  baseURL: `//${envs.VUE_APP_API_DOMAIN}/backend/`,
  adapter: (config: any) => {
    const { adapter } = originalAxios.defaults;
    if (!adapter) {
      // 极端情况下会出现adapter为undefined的情况，浏览器环境一般不会，这里只是做保护避免ts报错
      // 详见https://github.com/axios/axios/blob/master/dist/axios.js. 跳至function getDefaultAdapter()
      return Promise.reject(new AppError({
        message: 'Browser error. Can not use XHR adapter.',
      }));
    }
    if (config.method.toLocaleLowerCase() === 'get') {
      let reqKey = config.url;
      if (config.params) {
        reqKey += `,__${JSON.stringify(config.params)}`;
      }
      if (config.headers) {
        reqKey += `,__${JSON.stringify(config.headers)}`;
      }
      // 当前请求周期有相同请求，直接返回同一个(Promise)
      if (reqCache[reqKey]) {
        return reqCache[reqKey];
      }
      const res = adapter(config);
      reqCache[reqKey] = res;
      // 请求结束后，删除缓存
      res.finally(() => {
        delete reqCache[reqKey];
      });
      return res;
    }
    return adapter(config);
  },
});


// Request interception
axios.interceptors.request.use((config) => {
  const _token = token.get();
  if (_token && config.url) {
    config.headers.token = _token;
  }
  let url = config.url ?? '';
  url = url.startsWith('/') ? url : `/${url}`;
  if (!url.includes('//')) {
    let baseUrl = config.baseURL ?? '';
    baseUrl = baseUrl.endsWith('/') ? baseUrl.substr(0, baseUrl.length - 1) : baseUrl;
    url = `${baseUrl}${url}`;
  }

  config.headers['Sdtc-App-Id'] = '200';


  // if (config.noAppId) {
  //   // delete config.headers['Sdtc-App-Id'];
  // } else {
  //   // TODO: 后面恢复APP-ID
  //   // config.headers['Sdtc-App-Id'] = envs.VUE_APP_REQUEST_APP_ID;
  //   config.headers['Sdtc-App-Id'] = '200';
  // }

  if (url.includes('/backend/')) {
    const companyId = companyUtils.get();
    if (companyId) {
      config.headers['Sdtc-Tenant-Id'] = companyId;
    }
    config.headers.groupAppId = config.headers.groupAppId || '';
  }
  return config;
}, error => Promise.reject(error));

const defaultError = { code: 500, message: 'System Error' };

function pipeAxios(data: any, response?: AxiosResponse) {
  if (data.code !== 200) {
    data = isIgnorePipeError(response?.config.url) ? AppError.Abort('Error Ignore') : new AppError(data);
  }
  if (data instanceof Error) {
    // if (data.code === 401 && global.IS_USER_UPDATED) {
    //   AppError.handler(data, true);
    // }
    // throw new AppError(data);
    return Promise.reject(new AppError(data));
  }
  return data;
}

// Response Interception
axios.interceptors.response.use(
  response => {
    if (!response.headers?.['content-type']?.includes('json')) {
      return response;
    }
    let data = response.data ?? defaultError;
    data = { ...data };
    // const skipUrl = ['user/info', '/company/get/info', '/status/upgrade',
    //   '/collect/search', '/category/child/node', '/share/relates', '/share/info'];
    // if (!skipUrl.some(url => new RegExp(url).test(response.config.url))) {
    //   data.code = 405;
    // }
    // if (response.config.url === '/authcenter/mp/uc/login/pw') {
    //   data.code = 131034;
    // }
    return pipeAxios(data);
  },
  err => {
    let response;
    if (err.response) {
      ({ response } = err);
    } else if (/timeout|Network/.test(err.message)) {
      response = { status: 408, data: { code: 408, message: '网络错误或超时' } };
    }
    response = response ?? { status: 426, data: { code: 426, message: err.message } };
    const data = typeof response.data === 'string' ? {
      message: response.data,
      code: response.status,
    } : response.data;
    return pipeAxios(data, response);
  },
);

let publicKey: AxiosPromise<any>;

async function getPublicKey() {
  return window.crypto.subtle.importKey(
    'spki',
    base64toAb((await axios.get('/authcenter/encrypt/key/public')).data),
    {
      name: 'RSA-OAEP',
      hash: 'SHA-1',
    },
    true,
    ['encrypt'],
  );
}


async function encrypt(key: any, data: any) {
  return ab2base64(await window.crypto.subtle.encrypt(
    {
      name: 'RSA-OAEP',
      // @ts-ignore
      // 兼容低版本的Edge https://www.it1352.com/681587.html
      hash: { name: 'SHA-1' },
    },
    key,
    utf82u8a((JSON.stringify(data))),
  ));
}

export const axiosEncrypt = async (config = axios.defaults) => {
  if (!window.crypto.subtle) {
    return axios(config);
  }


  publicKey = publicKey ?? getPublicKey();

  // 转换为key对象
  config.data = await encrypt(await publicKey, config.data);
  config.headers = { ...config.headers, 'content-type': 'application/ecrypted-json' };

  return axios(config);
};


export default axios;

export type DefaultResponse<T = any> = {
  code: number,
  message: string,
  data: T,
};

type CustomRequestConfig = AxiosRequestConfig & {
  noAppId: boolean
};
declare module 'axios' {
  interface AxiosInstance {
    request<T = any, R = DefaultResponse<T>>(config: CustomRequestConfig): Promise<R>;
    get<T = any, R = DefaultResponse<T>>(url: string, config?: CustomRequestConfig): Promise<R>;
    delete<T = any, R = DefaultResponse<T>>(url: string, config?: CustomRequestConfig): Promise<R>;
    head<T = any, R = DefaultResponse<T>>(url: string, config?: CustomRequestConfig): Promise<R>;
    options<T = any, R = DefaultResponse<T>>(url: string, config?: CustomRequestConfig): Promise<R>;
    post<T = any, R = DefaultResponse<T>>(url: string, data?: any, config?: CustomRequestConfig): Promise<R>;
    put<T = any, R = DefaultResponse<T>>(url: string, data?: any, config?: CustomRequestConfig): Promise<R>;
    patch<T = any, R = DefaultResponse<T>>(url: string, data?: any, config?: CustomRequestConfig): Promise<R>;
  }
}
