<template>
  <div class="add-to-folder">
    <div class="main">
      <div class="dialog-title">{{ $t("folder.add_to") }}{{ title }}</div>
      <div class="main-wrap">
        <template v-if="selectList.length > 0">
          <SelectList
            :multileSelect="multileSelect"
            @change="selectChange"
            :receiveType="receiveType"
            :data="selectList"
          >
          </SelectList>
        </template>
        <template v-else>
          <div class="block-error-wrapper flex-center">
            <BlockError
              :error="{ message: `${$t('empty-page-tip.no_create_and_create', { name: `${title}` })}`, code: '404' }"
            ></BlockError>
          </div>
        </template>
      </div>
      <div class="footer">
        <p class="btn" @click="handleOpenDialog">
          <i class="i-s-tianjia-16"></i>
          <span> {{ $t("folder.new_built") }}{{ title }}</span>
        </p>

        <el-button type="primary" @click="submit()">{{ $t("folder.add") }}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, reactive, toRefs, watch, onMounted, PropType,
} from '@vue/runtime-core';
import { ElMessage } from 'element-plus';
import { dialog } from '@/utils/vue/dialog';
import {
  fetchColorCard, ColorCardItem, addToColorCard, fetchColorList, fetchMaterialBook, addToMaterialBook, MaterialBookItem, cardBelongs,
  materialBelongs,
  collectionBelongs,
} from '@/api/materialMenu';
import { fetchCollectFoldersList, collectMaterial, collectFolderItem } from '@/api/material';
import BlockError from '@/components/error/BlockError.vue';
import { t } from '@/i18n/index';
import SelectList from './SelectList.vue';
import AddFolder from './AddFolder.vue';

type selectListItem = (ColorCardItem | collectFolderItem | MaterialBookItem);

export default defineComponent({
  name: '',
  components: { SelectList, BlockError },
  props: {
    title: {
      type: String,
      default: t('folder.color_card_book'),
    },
    receiveType: {
      type: String as PropType<'MaterialBook' | 'collect' | 'ColorCard'>,
      default: 'MaterialBook',
    },
    detailId: {
      type: [String, Array] as PropType<string | string[]>,
      // required: true,
    },
    isAgain: {
      type: Number as PropType<1 | 0>,
    },
    // 收藏类型,暂时来说:如果是通过分享收藏,type传1,其它情况默认为通过公开市场收藏,type传2
    collectType: {
      type: Number as PropType<1 | 2>,
      default: 2,
    },
  },
  dialogify: {
    // noTitle: true,
    props: {
      title: '',
      width: '440px',
      closeOnClickModal: false,
      customClass: 'add-to-folder-dialog',
    },
  },
  emits: ['confirm'],
  setup(props, { emit }) {
    const state = reactive({
      pages: {
        page: 1, size: 99999,

      },
      selectId: [] as string[],
      multileSelect: 'false',
      selectList: [
      ] as selectListItem[],
      chooseList: [] as selectListItem[],
    });
    const getList = async () => {
      let res: selectListItem[] = [];
      let belongsId: string[] = [];
      switch (props.receiveType) {
        case 'ColorCard':
          {
            const detailIds = props.detailId ? [props.detailId as string] : [];
            belongsId = await cardBelongs(detailIds);
            res = await fetchColorCard('') || [];

            for (let i = 0; i < res.length; i++) {
              // const colorListRes = await fetchColorList({
              //   keywords: '',
              //   fields: {
              //     id: res[i].id,
              //     colorFamily: '',
              //   },
              //   page: 1,
              //   size: 1,
              // });
              const colorList0 = res[i].relateTop5Resps[0];
              if (colorList0) {
                res[i].bgColor = `rgba(${colorList0.r}, ${colorList0.g}, ${colorList0.b}, 1)`;
              }
            }
            res = res.filter(item => !(belongsId.includes(item.id)));
            console.log(res, 'resres');
          }
          break;
        case 'MaterialBook':
          belongsId = await materialBelongs([props.detailId as string]);
          res = await fetchMaterialBook('') || [];
          res = res.filter(item => !(belongsId.includes(item.catalogId)));
          break;
        case 'collect':
          res = await fetchCollectFoldersList('') || [];
          break;
        default:
          break;
      }
      state.selectList = res;
      console.log(state.selectList, ' state.selectList ');
      // if (props.receiveType === 'ColorCard') {
      //   res = await fetchColorCard('');
      //   state.selectList = res;
      //   // res.forEach(item => {
      //   //   const listRes = fetchColorList({
      //   //     id: item.id,
      //   //     keywords: '',
      //   //     ...state.pages,
      //   //     fields: {
      //   //     },
      //   //   });
      //   //   listRes.records.map(ele => {
      //   //     if (ele.id === props.detailId) {
      //   //       item;
      //   //     }
      //   //   });
      //   // });
      // } else if (props.receiveType === 'MaterialBook') {
      //   res = await fetchMaterialBook('');
      //   state.selectList = res;
      // }
    };
    watch(() => props.receiveType, (value) => {
      if (value === 'collect') {
        state.multileSelect = 'false';
      } else {
        state.multileSelect = 'true';
      }
    }, { immediate: true });
    const handleOpenDialog = async () => {
      console.log(888);
      await dialog({
        is: AddFolder,
        props: {
          receiveType: props.receiveType,
        },
      });
      getList();
    };
    const selectChange = (chooseList: selectListItem[]) => {
      state.chooseList = chooseList;
      state.selectId = chooseList.map((item) => (
        props.receiveType === 'collect'
          ? (item as collectFolderItem).catalogId
          : props.receiveType === 'ColorCard'
            ? (item as ColorCardItem).id
            : (item as MaterialBookItem).catalogId));
    };
    const submit = async () => {
      if (state.selectId.length <= 0) {
        ElMessage.error(`${t('folder.select_target')}${props.title}`);
        return;
      }
      const originalCIds = Array.isArray(props.detailId) ? props.detailId : [props.detailId];
      switch (props.receiveType) {
        case 'ColorCard':
          await addToColorCard({ colorCardBookId: state.selectId, colorOId: originalCIds.join(',') });
          break;
        case 'MaterialBook':
          console.log(state.chooseList, '(state.chooseList');
          if (props.isAgain === 0) {
            if (state.chooseList.find((item: selectListItem) => item.isShared === 1)) {
              ElMessage.error(t('eleMessage.no_add_to_material_book'));
              return;
            }
          }
          await addToMaterialBook({ materialBookCatalogId: state.selectId, catalogIds: originalCIds });
          console.log(111);
          break;
        case 'collect':
          await collectMaterial({ targetCatalogId: state.selectId[0], type: props.collectType, originalCIds });
          break;
        default:
          break;
      }
      await ElMessage.success(`${t('folder.add')}${props.receiveType === 'ColorCard'
        ? t('material-manage.color_card')
        : t('folder.material')} ${t('folder.reach')}${props.title} ${t('folder.success')}`);
      emit('confirm');
    };
    onMounted(async () => {
      await getList();
    });
    return {
      ...toRefs(state), handleOpenDialog, selectChange, getList, submit,
    };
  },
});
</script>
<style lang="scss">
.add-to-folder-dialog {
  position: relative;
  .el-dialog__body {
    // height: 60vh;
    overflow: auto;
    // margin-bottom: 75px;
    // padding: 0;
    padding: 10px 0 83px;
  }
}
</style>
<style lang="scss" >
.add-to-folder {
  .main {
    // position: relative;
    border-radius: 8px;
    height: 477px;
    overflow-y: auto;
    .dialog-title {
      font-size: 16px;
      position: absolute;
      top: 19px;
      left: 26px;
      background: #ffffff;
      width: 83%;
    }
  }

  .main-wrap {
    height: 100%;
    padding: 0 30px;
    .block-error-wrapper {
      height: 100%;
    }
  }
  .footer {
    padding: 20px 30px 30px;
    background: #fff;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #eeeeee;
    color: $color-primary;
    .btn {
      cursor: pointer;
      i {
        margin-right: 4px;
      }
    }
  }
}
</style>
