
import { computed, createApp } from 'vue';
import { fetchCategory } from '@/api/material';
import { getContextUser } from '@/loaders/context';
import { untilLoaded } from '@/utils/open-window';
import {
  MaterialListItem,
} from '@/models/Material';
import MultyPrintMaterialLabel from './MultyPrintMaterialLabel.vue';
import PrintTagLayoutCtor from './PrintTagLayout.vue';

export default () => {
  const user = computed(() => getContextUser());

  // 缓存类别映射对象，避免重复请求
  const cacheCategoryMap: {[id: string]: string} = {};
  // 构建材料类别文本格式
  // const formatMaterialTypeContent = (categoryList: api.Category) => {
  //   let res = '';
  //   if (categoryList?.length) {
  //     categoryList.forEach((info, index) => {
  //       if (info.name) res += `${info.name}${index === categoryList.length - 1 ? '' : '/'}`;
  //     });
  //   }
  //   return res;
  // };
  // 获取材料类别数组
  // const getBelongCategoryList = async (categoryId: string) => {
  //   if (cacheCategoryMap[categoryId]) {
  //     return cacheCategoryMap[categoryId];
  //   }
  //   cacheCategoryMap[categoryId] = await api.fetchCategoryList(categoryId);
  //   return cacheCategoryMap[categoryId];
  // };
  // 合并材料类别文本到打印数组中
  const assignMaterialTypeContent = async (_rows:MaterialListItem[]) => {
    for (let i = 0; i < _rows.length; i++) {
      const row = _rows[i];
      if (!cacheCategoryMap[row.categoryId]) {
        const categoryInfo = (await fetchCategory(row.categoryId)).data;
        cacheCategoryMap[row.categoryId] = categoryInfo?.name;
      }
      row.materialTypeContent = cacheCategoryMap[row.categoryId];
      if (!row.supplierName) {
        row.supplierName = user.value?.companyName;
      }
    }
  };

  const printMaterial = async (_rows:MaterialListItem[]) => {
    // 判断是否有剩余名额
    // await checkUserCompanyName();
    await assignMaterialTypeContent(_rows);
    const iframe = document.createElement('iframe');
    iframe.style.opacity = '0';
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    // iframe.style.width = '300pt';
    // iframe.style.height = '150pt';
    document.body.appendChild(iframe);
    const win = iframe.contentWindow!;
    await untilLoaded(win);
    const doc = iframe.contentDocument!;
    const Ctor = createApp(MultyPrintMaterialLabel, {
      materials: _rows,
      layout: PrintTagLayoutCtor,
      ellipsis: true,
      fontSize: '',
      size: {
        width: 80,
        height: 40,
      },
    });
    const div = doc.createElement('div');
    // 1pt = 0.376mm
    div.style.width = '300pt';
    doc.body.appendChild(div);
    const vm = Ctor.mount(div) as InstanceType<typeof MultyPrintMaterialLabel>;
    vm._document = doc;
    await vm.ready();
    win.print();
    setTimeout(() => {
      // document.body.removeChild(iframe);
    }, 500);
  };

  return { printMaterial };
};
