<template>
  <div
    class="package-badge badge"
    :class="[`package-${currentPackageType}`, badgeType]"
    v-show="badgeType !== 'arrow' || currentArrowText"
    @click="handleClick"
  >
    <!-- <span v-if="badgeType === 'v'"></span> -->

    <template v-if="badgeType === 'star'">
      <i class="icon icon-star i-a-xingxing2x1" v-if="!isEnterpriseUser"></i>
      <i class="icon-v" v-else></i>
      <span>{{ $t(`package_type.package_${currentPackageType}`) }}</span>
    </template>
    <template v-if="badgeType === 'v'">
      <i class="icon-v"></i>
    </template>
    <template v-else-if="badgeType === 'arrow'">
      <span> {{ $t(`package_type.${currentArrowText}`) }}</span>
      <i class="icon i-r-you-12"></i>
    </template>
    <!-- {{ badgeType === "v" ? $t(`package_${packageType}`) : $t(`${arrowText}`) }} -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { ExperiencePackage, CertificationPackage, EnterprisePackage } from '@/models/Package';
import useGetPackageType from './use-get-package-type';

export default defineComponent({
  inheritAttrs: false,
  props: {
    packageCode: {
      type: String as PropType<keyof typeof ExperiencePackage | keyof typeof CertificationPackage | keyof typeof EnterprisePackage>,
    },
    arrowText: {
      type: String,
    },
    badgeType: {
      type: String as PropType<'v' | 'arrow' | 'star'>,
      default: 'v',
    },
  },
  setup(props, { emit }) {
    // TODO: 后面把packageType放到company中!
    const { isEnterpriseUser, currentPackageType } = useGetPackageType();
    // const isEnterpriseUser = computed(() => currentPackageType.value.includes('enterprise'));

    const currentArrowText = computed(() => {
      if (props.arrowText) {
        return props.arrowText;
      }
      if (currentPackageType.value === 'experience') {
        return 'to_certify';
      }
      if (currentPackageType.value === 'certification') {
        return 'to_upgrade';
      }
      return '';
    });
    return {
      currentPackageType,
      currentArrowText,
      isEnterpriseUser,
      handleClick() {
        console.log('click');
        emit('click');
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.package-badge {
  white-space: nowrap;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  border: 1px solid white;
  border-radius: 19px;
  // background-color: white;
  background-color: #b1bcc8;
  color: white;
  cursor: pointer;
  align-items: center;
  // margin: {
  //   left: 1px;
  //   right: 1px;
  // }

  padding-right: 0.6em;
  position: relative;
  &.arrow {
    background: linear-gradient(90deg, #14ccb0, #10b0a9);
    padding-left: 0.6em;
  }
  .icon-v {
    content: "";
    // background-color: #b3bdc9;
    background-image: url("~@/assets/img/profile/v.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 0.8em 0.65em;
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    vertical-align: top;
  }
  &.star {
    .icon-star {
      display: inline-block;
      font-size: 10px;
      // vertical-align: middle;
      line-height: 18px;
      width: 18px;
      height: 18px;
      vertical-align: top;
      margin-right: 2px;
      // position: absolute;
      // left: 2px;
      border-radius: 50%;
      text-align: center;
      // top: 0;
    }
  }
  &.v {
    padding: 0;
  }
  .i-r-you-12 {
    transform: scale(0.8);
    display: inline-block;
    margin-right: -3px;
  }
  &.arrow {
    padding-left: 0.6em;
  }
  &.arrow,
  &.v {
    background: #2878ff !important;
    &.buyer {
      background: #11b3aa !important;
    }
  }
  &.package-experience {
    // background-color: #c9d1dc;
    background: linear-gradient(to right, #c3c3c3, #898a8c);
    // &.arrow {
    //   background: #11b3aa;
    // }
    &.star i {
      background-color: #87888b;
    }
  }

  &.package-certification {
    background: linear-gradient(to right, #fdaa63, #f7903d);

    // &.arrow {
    //   background: #2878ff;
    // }
    &.star i {
      background-color: #ff8a2b;
    }
  }
  &.package-enterprise {
    background-color: #337fff;
    &.star i {
      background-color: #2d6cea;
    }
  }
  &.package-enterprise-v1 {
    background: linear-gradient(to right, #0fd0c2, #0bcac3);
    &.star i {
      background-color: #00b6ad;
    }
  }
  &.package-enterprise-v2 {
    background: linear-gradient(to right, #3383fb, #035ff1);
    &.star i {
      background-color: #005cfa;
    }
  }
  // &.package-DJ-003 {
  //   background-color: #ffa3a5;
  //   background-image: linear-gradient(90deg, #ffa3a5, #ff376a);
  // }
  &.package-enterprise-v3 {
    background: linear-gradient(to right, #efc37f, #eeaa4b);
    &.star i {
      background-color: #e89927;
    }
  }
}
</style>
