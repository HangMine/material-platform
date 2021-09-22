import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import { ElMessage } from 'element-plus';
import { dialog } from '@/utils/vue/dialog';
import DialogTextarea from '@/pages/components/dialog-template/Textarea.vue';
import {
  submitApply, removeFollowMerchant, addFollowMerchant,
} from '@/api/merchant';
import usePermisson from '@/utils/uses/use-permisson';
import { MerchantItem } from '@/models/Merchant';
import { useRouter } from 'vue-router';

type Props = {
  merchant: MerchantItem
};

const useMerchantItem = (props: Props) => {
  const router = useRouter();
  const state = reactive({});

  const { user } = usePermisson();
  const applyCooperation = async () => {
    const applyContent = await dialog({
      is: DialogTextarea,
    }, {
      props: {
        title: '合作申请',
      },
    }) as string;
    await submitApply({
      applicant: user.value?.id || '',
      applyContent: {
        applyContent,
      },
      approverOrgId: props.merchant.id,
      approver: props.merchant.creator,
      applyType: 1,
    });

    ElMessage.success('已发送');
  };

  const followMerchant = async () => {
    const request = props.merchant.isFollow ? removeFollowMerchant : addFollowMerchant;
    await request({ supplierId: props.merchant.id });
    ElMessage.success(props.merchant.isFollow ? '已取消关注' : '已关注');
    props.merchant.isFollow = !props.merchant.isFollow;
    props.merchant.followCount = props.merchant.isFollow ? (props.merchant.followCount + 1) : (props.merchant.followCount - 1);
  };

  const goMerchantDetail = () => {
    router.push({
      name: 'MerchantDetail',
      params: {
        merchant: JSON.stringify(props.merchant),
      },
    });
  };
  return {
    ...toRefs(state), applyCooperation, followMerchant, goMerchantDetail,
  };
};

export default useMerchantItem;
