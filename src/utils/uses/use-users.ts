import { getUsersObjByIds, UserObj } from '@/loaders/account';
import {
  watch,
  onMounted,
  reactive, Ref, ref, toRefs, unref,
} from 'vue';


const useUsers = (refUserIds: Ref<string[]>) => {
  const userObj = ref<UserObj>({});
  watch(refUserIds, async () => {
    console.log(888, ref(refUserIds));
    if (!unref(refUserIds).filter(Boolean).length) return;
    userObj.value = (await getUsersObjByIds(refUserIds.value)).data || {};
    // @ts-ignore
  }, { immediate: true });
  return userObj;
};

export default useUsers;
