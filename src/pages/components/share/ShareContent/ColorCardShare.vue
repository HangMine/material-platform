<template>
  <div class="color-card-share-content share-content scrollable-y" :style="bgStyle">
    <div class="header">
      <img class="logo" :src="require('@/assets/img/share/logo.png')" alt="" />
      <h3 class="subtitle">{{ $t("material_library") }}</h3>
    </div>
    <div class="share-main">
      <div class="info-box">
        <p class="color-card-img-box">
          <span
            class="color-card-img"
            v-for="(ele, inIndex) in showMaterials"
            :key="inIndex"
            :style="{
              backgroundColor: `rgb(${ele.r}, ${ele.g}, ${ele.b})`,
              width: `${100 / `${showMaterials.length > 5 ? 5 : showMaterials.length}`}%`,
            }"
          ></span>
        </p>
        <!-- <img :src="folderImg" /> -->
        <div class="share-title-box flex-1">
          <p class="folder-name over-text">{{ folderInfo.name }}</p>
          <p class="supplier-name over-text">
            {{ $t("share.supplier") }}：{{ userObj[folderInfo.creator]?.name || "" }}
          </p>
        </div>
      </div>
      <ul class="color-color-card-list">
        <li v-for="(ele, i) of tableList" :key="i" class="color-card">
          <div class="color-card-item material-img">
            <p
              :style="{
                backgroundColor: `rgb(${ele.r}, ${ele.g}, ${ele.b})`,

                height: '100%',
              }"
              class="el-image"
            ></p>
            <!-- <img class="el-image" :src="material.__materialImg" @load="imgLoad(material)" /> -->
          </div>
        </li>
      </ul>
    </div>
    <div class="footer flex-center">
      <div class="left">
        <h2>{{ $t("share.scan_qr_code") }}</h2>
        <p>{{ $t("share.check_more_info") }}</p>
      </div>
      <div class="right">
        <img class="qrcode" v-show="qrcodeDataUrl" :src="qrcodeDataUrl" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import {
  defineComponent, reactive, toRefs, onMounted, computed,
} from 'vue';

import {
  fetchColorList, ColorLibraryItem,
} from '@/api/materialMenu';
import useUsers from '@/utils/uses/use-users';

export default defineComponent({
  name: 'muti-share-content',
  components: {},
  props: {
    // materials: {
    //   type: Array as PropType<MaterialList>,
    //   required: true,
    // },
    qrcodeDataUrl: {
      type: String,
    },
    folderId: {
      type: String,
    },
    folderInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      tableList: [] as ColorLibraryItem[],
      showMaterials: [] as ColorLibraryItem[],
      imgLoadedEnd: {} as Obj,
      supplierName: '',
    });

    const getColorCardList = async (id: string) => {
      const params = {

        keywords: '',
        page: 1,
        size: 999,

        fields: {
          id: id as string,
          colorFamily: '',
        },
      };
      const res = await fetchColorList(params);
      state.tableList = res.records.slice(0, 9);
      state.showMaterials = state.tableList.slice(0, 5);
      console.log(state.showMaterials);
    };


    const bgStyle = {
      backgroundImage: `url(${require('@/assets/img/share/bg-top.png')}),url(${require('@/assets/img/share/bg-bottom.png')})`,
    };

    const userIds = computed(() => [props.folderInfo.creator] || []);
    const userObj = useUsers(userIds);
    onMounted(async () => {
      await getColorCardList(props.folderInfo.id);
    });
    return {
      ...toRefs(state),
      bgStyle,
      userObj,

    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.color-card-share-content {
  width: 375px;
  .header {
    padding-top: 13px;
  }
  .footer {
    padding-bottom: 7px;
  }
  .share-main {
    // height: 77%;
    min-height: 450px;
    margin: 0 15px;
    padding: 20px !important;
    .detail {
      position: relative;
      padding-top: 100%;
      border-radius: 5px;
      overflow: hidden;
    }
    .info-box {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding-bottom: 14px;
      height: 78px;
      // padding: 20px 0;

      .color-card-img-box {
        height: 64px;
        width: 75px;
        margin-right: 10px;
        border-radius: 4px;
        overflow: hidden;
      }
      .color-card-img {
        display: inline-block;
        height: 64px;
        max-width: 75px;
      }
      .share-title-box {
        overflow: hidden;
        .folder-name {
          font-size: 18px;
          font-weight: 600;
        }
        .supplier-name {
          margin-top: 10px;
          font-size: 12px;
          color: #999999;
        }
      }
    }
    .color-color-card-list {
      // padding-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      margin-left: -5px;
      margin-right: -5px;
      padding-top: 15px;
      // padding-bottom: 15px;
      .color-card {
        // position: relative;
        // padding-top: 28.5%;
        width: 95px;
        height: 95px;
        margin: 5px;
        background-size: contain;
        border-radius: 5px;
        overflow: hidden;
        // margin: 8px;
        .color-card-item {
          // position: absolute;
          width: 100%;
          height: 100%;
          // left: 0;
          // top: 0;
        }
        .material-img {
          /deep/.el-image {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        .more-materials {
          color: white;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h3 {
            font-size: 25px;
          }
        }
      }
    }
  }
}
</style>
