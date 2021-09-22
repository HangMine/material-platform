import { getContextUser, getContextCompany } from '@/loaders/context';
import Company from '@/models/Company';
import {
  computed,
  reactive, toRefs,
} from 'vue';

export const checkIsSupplier = (company: Company) => {
  return company?.type === 11;
};

export const checkIsBuyer = (company: Company) => {
  return company?.type === 12;
};


const usePermisson = () => {
  const state = reactive({});

  const user = computed(() => getContextUser());
  const company = computed(() => getContextCompany());
  const isSupplier = computed(() => (company.value ? checkIsSupplier(company.value) : false));
  const isBuyer = computed(() => (company.value ? checkIsBuyer(company.value) : false));
  return {
    ...toRefs(state), isSupplier, isBuyer, user, company,
  };
};

export default usePermisson;
