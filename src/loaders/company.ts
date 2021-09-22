import Company, { CompanyOrm } from '@/models/Company';
// import Package, { PackageOrm } from '@/models/Package';
import {
  fetchCompanyInfo, fetchCompanyPackageInfo,
  fetchCurrentVipInfo, fetchIsAdminInCurrentTenant,
  VipInfo,
  checkIsFillRequiredInfo, fetchTenantType,
} from '@/api/company';
// import { ContextOrm } from '@/models';

// 更新Company对象
export async function updateCompany(idOrData: string | Partial<Company>) {
  let _company: Partial<Company>;
  let _type: number; // 公司类型(卖家/买家), _company.type不可可靠, 获取后覆盖_company的type
  let _vipInfo: VipInfo;
  let _isAdmin: boolean;
  let _isFilled: boolean;
  if (typeof idOrData === 'string') {
    [_company, _type, _vipInfo, _isAdmin, _isFilled] = await Promise.all([
      fetchCompanyInfo(idOrData),
      fetchTenantType(),
      fetchCurrentVipInfo(),
      fetchIsAdminInCurrentTenant(),
      checkIsFillRequiredInfo(),
    ]);
  } else {
    _company = idOrData;
    [_type, _vipInfo, _isAdmin, _isFilled] = await Promise.all([
      fetchTenantType(),
      fetchCurrentVipInfo(),
      fetchIsAdminInCurrentTenant(),
      checkIsFillRequiredInfo(),
    ]);
  }
  _company.type = _type;
  _company.isAdmin = _isAdmin;
  _company.isVIP = _vipInfo.isVIP;
  _company.packageName = _vipInfo.packageName;
  _company.expireTime = _vipInfo.expireTime;
  _company.isFilled = _isFilled;
  // if (data.packageId) {
  //   data.package = {
  // packageId: data.packageId,
  // packageName: data.packageName!,
  // packageCode: data.packageCode,
  //   };
  // }
  CompanyOrm.insertOrUpdate({
    data: _company,
  });

  return _company as Company;
}

export default updateCompany;
