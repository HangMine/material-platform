/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* 字段映射 */

import {
  fetchFieldList, fetchFirstCategoryList, fetchSecondCategoryList, ApiField,
} from '@/api/dataManage';
import { onUnmounted, ref } from 'vue';
import tokenUtils from '@/utils/token';
import i18n from '@/i18n';
import { getAllFormItems } from '@/pages/components/material/components/MaterialForm/utils';
import onCreated from './vue/onCreated';

const getInitMap = () => {
  const categoryItem = {
    key: 'categoryId',
    title: '材料类目',
  };
  return [categoryItem, ...getAllFormItems()].reduce((obj, formItem) => {
    obj[formItem.key] = {
      sourceName: formItem.title,
    } as ApiField;
    return obj;
  }, {} as Record<string, ApiField>);
};


class FieldMap {
  defaultParams = {
    page: 1,
    size: 99999,
    fields: {},
  };
  isTranslate = false; // 是否开启翻译,默认不翻译
  isFetched = false; // 是否已经fetch过的标识,因为有initMap,不能通过map的length判断
  map = ref<Record<string, ApiField>>(getInitMap());
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleCallback?: (isToggle: boolean) => void = undefined;
  async init() {
    tokenUtils.watch((currentToken?: string) => {
      if (currentToken) this.init();
    });
    // 有map之后除非主动调fetch方法，否则不调接口
    if (!tokenUtils.get() || this.isFetched) return;
    await this.fetch();
    this.isFetched = true;
  }
  list2map(list: ApiField[]) {
    const list2map = () => {
      const map = list.reduce((obj, listItem) => {
        obj[listItem.sourceId] = listItem;
        return obj;
      }, {} as Obj);
      return map;
    };
    // 如果接口没有及时更新,仍显示前端的定义
    this.map.value = {
      ...this.map.value,
      ...list2map(),
    };
  }
  async fetch() {
    const fieldsList = (await fetchFieldList(this.defaultParams)).records;
    this.list2map(fieldsList);
  }
  getWithKey(key: string) {
    const apiField = this.map.value[key];
    const source = apiField?.sourceName || '';

    if (!apiField) return source;
    const alias = (apiField.status === 1 && this.isTranslate) ? apiField.alias : '';
    const i18nTitle = i18n.t(`material.fields.${key}`);
    const title = alias || i18nTitle || source;

    return title;
  }
  translateList(list: Obj[], translateKey = 'key', translateTitle = 'title') {
    list.forEach(item => {
      item[`origin_${translateTitle}`] = item.title;
      item[translateTitle] = this.getWithKey(item[translateKey]) || item[translateTitle];
    });
    return list;
  }
  toggle(isTranslate: boolean) {
    this.isTranslate = isTranslate === undefined ? !this.isTranslate : isTranslate;
    this.map.value = { ...this.map.value }; // 触发双向绑定
    if (typeof this.toggleCallback === 'function') this.toggleCallback(this.isTranslate);
  }
  onToggle(callback: (isToggle: boolean) => void) {
    this.toggleCallback = callback;
  }
  useToggle() {
    onCreated(async () => {
      // 默认不编译,开启编译的时候再走Init
      await this.init();
      this.toggle(true);
    });
    onUnmounted(() => {
      this.toggle(false);
    });
  }
}


export default new FieldMap();
