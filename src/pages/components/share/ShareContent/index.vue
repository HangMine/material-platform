<template>
  <div class="share-content-wrap">
    <ColorCardShare
      v-if="shareType === 'colorCardShare'"
      :folderId="folderId"
      :materials="materials"
      :qrcodeDataUrl="qrcodeDataUrl"
      :folderInfo="folderInfo"
    ></ColorCardShare>
    <FolderShare
      v-else-if="shareType === 'folderShare'"
      :folderId="folderId"
      :materials="materials"
      :qrcodeDataUrl="qrcodeDataUrl"
      :folderInfo="folderInfo"
    ></FolderShare>
    <MutiShare
      v-else-if="shareType === 'material' && isMuti"
      :materials="materials"
      :qrcodeDataUrl="qrcodeDataUrl"
    ></MutiShare>
    <SingleShare v-else :material="materials[0]" :qrcodeDataUrl="qrcodeDataUrl"></SingleShare>
  </div>
</template>

<script lang="ts">
import { MaterialDetail, MaterialList } from '@/models/Material';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType, onUnmounted,
} from 'vue';
import SingleShare from './SingleShare.vue';
import MutiShare from './MutiShare.vue';
import FolderShare from './FolderShare.vue';
import { isLoadedEnd } from './utils';
import ColorCardShare from './ColorCardShare.vue';


export default defineComponent({
  name: 'share-content',
  components: {
    SingleShare, MutiShare, FolderShare, ColorCardShare,
  },
  props: {
    materials: {
      type: Array as PropType<MaterialList>,
      required: true,
    },
    qrcodeDataUrl: {
      type: String,
    },
    shareType: {
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
    const isMuti = computed(() => props.materials.length > 1);
    onUnmounted(() => {
      isLoadedEnd.value = false;
    });

    return {
      isMuti,
    };
  },
});
</script>
<style lang="scss">
.share-content-wrap {
  .share-content {
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    justify-content: space-between;
    // height: 542px;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #00bfa8;
    background-position: top, bottom;

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .logo {
        color: white;
        width: 115px;
      }
      .subtitle {
        color: white;
        font-size: 12px;
        letter-spacing: 1px;
        line-height: 16px;
        font-weight: 400;
        margin-top: 2px;
        position: relative;
        &::before,
        &::after {
          content: "";
          display: block;
          width: 10px;
          height: 1px;
          background: #ffffff;
          position: absolute;
          top: 50%;
        }
        &::before {
          left: -14px;
        }
        &::after {
          right: -14px;
        }
      }
    }

    .share-main {
      padding: 10px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 2px 6px 0px rgba(12, 80, 69, 0.18);
      .detail {
        position: relative;
        padding-top: 100%;
        border-radius: 5px;
        overflow: hidden;
        .detail-img {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }
      }
    }
    .footer {
      color: white;
      .left {
        text-align: center;
        margin-right: 7px;
        h2 {
          font-weight: 600;
          font-size: 17px;
          line-height: 17px;
        }
        p {
          margin-top: 6px;
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 5px;
        }
      }
      .right {
        width: 78px;
        height: 78px;
        padding: 4px;
        border-radius: 50%;
        overflow: hidden;
        background: white;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
