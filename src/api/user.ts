/* eslint-disable import/prefer-default-export */
import { User } from '@/models/User';
import { fetchUserInfo, fetchBelongCompaniesList } from '@/api/account';
import extract from '@4dst-saas/public-utils/dist/extract';
import { dialog } from '@/utils/vue/dialog';
import RoleSelector from '@/pages/login/main/Role.vue';
import { Company } from '../models/Company';
// export async function getUserInfo(): Promise<User> {
//   const [user, { type, name }, status] = await Promise.all([
//     fetchUserInfo(), fetchUserCompany(), fetchUserAuditStatus(),
//   ]);
//   // statue枚举值：1=待补充，2=已补充待提交，3=已提交待审核，4=已审核
//   return {
//     ...user, type, companyName: name, ...{ status },
//   };
// }


export async function getUserInfo(): Promise<User> {
  let [userInfo, companies] = await Promise.all([
    fetchUserInfo(), fetchBelongCompaniesList(),
  ]);
  // 个人中心改版前注册的账户, relate接口获取到的为空, 此时需进行初始化
  if (!companies || (Array.isArray(companies) && companies.length === 0)) {
    await dialog({
      is: RoleSelector,
      props: {
        type: 'initialize',
      },
    }, {
      props: {
        customClass: 'role-selector-dialog',
        title: '账户初始化',
        width: '400px',
        closeOnClickModal: false,
      },
    });
    companies = await fetchBelongCompaniesList();
  }

  // let company: Company | undefined;
  // const personalCompany = {
  //   // TODO: 后面恢复id
  //   id: userInfo.companyId,
  //   package: userInfo.packageInfo,
  //   // ...extract(userInfo, ['auditStatus', 'businessType']),
  // } as Company;

  // if (userInfo.companyId) {
  //   company = companies.find(item => {
  //     const is = item.id === personalCompany.id;
  //     if (is) {
  //       Object.assign(item, personalCompany);
  //     }
  //     return is;
  //   }) as Company;
  //   console.warn(company);
  // }
  // if (!company) {
  //   companies.push(personalCompany);
  // }
  // if (company) {
  //   company.leadingProduct = company.leadingProduct ? (company.leadingProduct as string).split(',') : [];
  // }
  return {
    ...extract(userInfo, ['id', 'mobile', 'headImg', 'phone', 'name', 'mail', 'account', 'companyId', 'status']),
    // ...userInfo,
    companies,
    // company,
  };
}
