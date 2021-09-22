// import { ExperiencePackage, CertificationPackage, EnterprisePackage } from '@/models/Package';
// import { ref, computed } from 'vue';

// export default (packageCode: keyof typeof ExperiencePackage | keyof typeof CertificationPackage | keyof typeof EnterprisePackage | '') => {
//   const packageType = computed(() => {
//     if (!packageCode) {
//       return 'experience';
//     }
//     const enterpriseLevelName = EnterprisePackage[packageCode as keyof typeof EnterprisePackage];
//     // console.log(ExperiencePackage, CertificationPackage, EnterprisePackage, enterpriseLevelName);
//     if (typeof enterpriseLevelName !== 'undefined') {
//       // const _class = enterpriseLevelName.slice(-1);
//       return `enterprise-v${enterpriseLevelName}`;
//     }
//     if (typeof CertificationPackage[packageCode as keyof typeof CertificationPackage] !== 'undefined') {
//       return 'certification';
//     }
//     if (typeof ExperiencePackage[packageCode as keyof typeof ExperiencePackage] !== 'undefined') {
//       return 'experience';
//     }
//     return 'experience';
//   });
//   return {
//     packageType,
//   };
// };

import { ExperiencePackage, CertificationPackage, EnterprisePackage } from '@/models/Package';
import { ref, computed } from 'vue';
import { getContextCompany } from '@/loaders/context';
import usePermisson from '@/utils/uses/use-permisson';

const sortAccordingKeywordList = ['体验', '认证', '基础', '标准', '旗舰'];
const codeList = ['experience', 'certification', 'enterprise-v1', 'enterprise-v2', 'enterprise-v3'];

export default (packageCode?: keyof typeof ExperiencePackage | keyof typeof CertificationPackage | keyof typeof EnterprisePackage) => {
  // if (!packageCode) {
  //   const company = computed(() => getContextCompany());
  //   packageCode = company.value!.package.code;
  // }

  const company = computed(() => getContextCompany());
  const { isBuyer, isSupplier } = usePermisson();

  const getPackageType = (_packageCode?: keyof typeof ExperiencePackage | keyof typeof CertificationPackage | keyof typeof EnterprisePackage) => {
    if (!_packageCode) {
      return 'experience';
    }
    const enterpriseLevelName = EnterprisePackage[_packageCode as keyof typeof EnterprisePackage];
    // console.log(ExperiencePackage, CertificationPackage, EnterprisePackage, enterpriseLevelName);
    if (typeof enterpriseLevelName !== 'undefined') {
      // const _class = enterpriseLevelName.slice(-1);
      return `enterprise-v${enterpriseLevelName}`;
    }
    if (typeof CertificationPackage[_packageCode as keyof typeof CertificationPackage] !== 'undefined') {
      return 'certification';
    }
    if (typeof ExperiencePackage[_packageCode as keyof typeof ExperiencePackage] !== 'undefined') {
      return 'experience';
    }
    return 'experience';
  };

  const packageType = getPackageType(packageCode);
  const currentPackageType = computed(() => getPackageType(company.value?.package.code));
  const currentPackageIndex = computed(() => codeList.indexOf(currentPackageType.value || 'experience'));
  const isEnterpriseUser = computed(() => currentPackageType.value.includes('enterprise'));

  const isUpgradable = computed(() => {
    if (isBuyer.value) {
      return currentPackageType.value === 'experience';
    }
    return !isEnterpriseUser.value;
  });

  return {
    packageType,
    currentPackageType,
    currentPackageIndex,
    getPackageType,
    isEnterpriseUser,
    isUpgradable,
    currentPackageCnName: sortAccordingKeywordList[codeList.indexOf(currentPackageType.value)],
  };
};

