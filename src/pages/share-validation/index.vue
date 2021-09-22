<template>
  <div class="share-validation flex-1 flex-center" :style="viewStyle">
    <Header v-if="showHeader"></Header>
    <div class="layout">
      <Sidebar v-if="showSidebar"></Sidebar>
      <div class="share-validation-content">
        <!-- <img class="logo-img" src="@/assets/img/share/share-validation-logo.png" /> -->
        <div class="info-box">
          <UserInfo class="info-con" :userContext="shareUserInfo" />
          <el-form class="form-box" :model="formData" size="small" ref="formVm">
            <p>{{ $t("share.input_visit_password") }}</p>
            <div class="input-box">
              <Password
                prop="code"
                class="pwd"
                v-model="formData.code"
                :placeholder="$t('share.visit_password')"
                :rules="formRules"
                :maxlength="4"
              ></Password>
              <el-button class="btn" type="primary" @click="confirm">{{ $t("share.visit") }}</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, ref, computed,
} from 'vue';
import Password from '@/pages/login/components/inputs/Password.vue';
import { validateForm } from '@/utils/validators/validate-form';
import { ElForm } from 'element-plus';
// import UserInfo from '../../components/layout/Header/components/UserInfo';
import validator from '@/utils/validators/rules-validation';
import { useRoute, useRouter } from 'vue-router';
import * as api from '@/api/share';
import AppError from '@/utils/error';
import onCreated from '@/utils/vue/onCreated';
import UserInfo from '@/pages/components/Header/components/UserInfo';
import { t } from '@/i18n/index';
import usePermisson from '@/utils/uses/use-permisson';

export default defineComponent({
  name: 'share-validation',
  fullscreen: true,
  components: {
    UserInfo,
    Password,
  },
  setup() {
    const viewStyle = {
      backgroundImage: `url(${require('@/assets/img/share/share-validation-bg.png')})`,
    };
    const formVm = ref<typeof ElForm>();
    const { query: { shareId, shareLinkType } } = useRoute();
    const router = useRouter();
    const { user, isSupplier, isBuyer } = usePermisson();
    const showHeader = computed(() => !!user.value);
    const showSidebar = computed(() => !!(user.value && isSupplier.value));

    const formRules = [
      validator.requirement('blur'),
      validator.charFixedLength(4),
    ];
    const state = reactive({
      formData: {
        code: '',
      },
      shareUserInfo: {} as { headImg?: String, name?: String, account?: String },
    });

    const getShareInfo = async () => {
      const shareInfo = await api.fetchShareConfig(shareId as string);
      state.shareUserInfo = {
        name: shareInfo.data.creatorName || '',
        headImg: shareInfo.data.creatorIcon || '',
      };
    };

    const confirm = async () => {
      await validateForm(formVm.value!);
      const { data: isValid } = await api.checkShareCode({ id: shareId, code: state.formData.code });
      if (isValid) {
        console.log(shareLinkType, 'shareLinkTypeshareLinkTypeshareLinkType');
        router.replace({ path: 'share', query: { shareId, valid: true, shareLinkType } });
      } else {
        throw new AppError(t('share.visit_password_error'));
      }
    };

    onCreated(async () => { await getShareInfo(); });

    return {
      ...toRefs(state),
      showHeader,
      showSidebar,
      viewStyle,
      formVm,
      formRules,
      confirm,
    };
  },

});

</script>
<style lang="scss" scoped>
.share-validation {
  background-color: #edf0f2;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%, 100%;
  flex-direction: column;
  // .logo-img {
  //   width: 150px;
  //   margin: 196px 0 60px;
  // }
  .layout {
    display: flex;
    flex: 1;
    .share-validation-content {
      display: flex;
      align-items: center;
      .info-box {
        width: 382px;
        background: url("~@/assets/img/public/logo-bar.png") no-repeat top left;
        background-size: contain;
        background-color: #fff;
        border-radius: 4px;
        padding-top: 44px;
        .info-con {
          padding: 24px 30px;
        }
        .form-box {
          border-top: 1px solid #eee;
          padding: 20px 30px;
          .input-box {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            /deep/ .pwd {
              width: 250px;
            }
            .btn {
              height: 32px;
              border-radius: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
