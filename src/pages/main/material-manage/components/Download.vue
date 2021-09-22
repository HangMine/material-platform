<template>
  <div class="material-download" v-loading="loading">
    <el-radio v-model="downloadType" label="ADMF">ADMF</el-radio>
    <el-radio v-model="downloadType" label="chartlet">{{ $t("material-manage.mapping") }}</el-radio>
    <el-radio v-model="downloadType" label="4ddat">4ddat</el-radio>
    <div class="dialog-buttons">
      <el-button type="default" @click="cancel">{{ $t("public.dialog.cancel") }}</el-button>
      <el-button type="primary" @click="confirm">{{ $t("public.dialog.confirm") }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import {
  defineComponent, reactive, computed, ref, toRefs, PropType,
} from 'vue';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { MaterialListItem } from '@/models/Material';
import { getMaterialChartlet } from '@/utils/normalize-rendering-data';
import SdTable from '@/components/sd-table/index';
import openWindow from '@/utils/open-window';
import { downloadByURL, getDownloadUrl } from '@/utils/util';

type DownloadType = 'ADMF' | 'chartlet' | '4ddat';

export default defineComponent({
  name: 'material-download',
  dialogify: {
    props: {
      title: '请选择下载格式',
      width: '440px',
      'close-on-click-modal': false,
      'close-on-press-escape': false,
      'show-close': false,
    },
  },
  components: {},
  props: {
    material: {
      type: Object as PropType<MaterialListItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      downloadType: 'ADMF' as DownloadType,
      loading: false,
    });
    const fetchBlob = async (url: string) => {
      return (await axios.get<Blob>(url, { responseType: 'blob', withCredentials: true })).data;
    };
    const pack = async ({ folderName, zipFiles }: { folderName: string, zipFiles: { name: string, blob: Blob }[] }) => {
      const zip = new JSZip();
      const folder = zip.folder(folderName);
      zipFiles.forEach(zipFile => {
        folder?.file(zipFile.name, zipFile.blob);
      });
      const content = await zip.generateAsync({ type: 'blob' });
      return content;
    };
    const material2ZipFiles = async () => {
      const chartlet = await getMaterialChartlet(props.material);
      return Promise.all(Object.entries(chartlet).map(async ([key, url]) => {
        return {
          name: key,
          blob: await fetchBlob(url),
        };
      }));
    };

    const getFileInfo = () => {
      const firstRenderingInfo = props.material.renderingInfo[0];
      return firstRenderingInfo?.fileInfo || {};
    };

    const download = async () => {
      try {
        state.loading = true;
        switch (state.downloadType) {
          case 'ADMF':
            {
              const admfUrl = getFileInfo().admf;
              if (admfUrl) {
                // const blob = await fetchBlob(admfUrl);
                // FileSaver.saveAs(blob, `${props.material.name}.admf`);
                window.open(admfUrl);
              } else {
                throw new Error('admf为空');
              }
            }
            break;
          case 'chartlet':
            {
              const folderName = `${props.material.name}的贴图`;
              const zipFiles = await material2ZipFiles();
              const packFile = await pack({ folderName, zipFiles });
              FileSaver.saveAs(packFile, folderName);
            }
            break;
          case '4ddat':
            {
              const sddatUrl = getFileInfo()['4ddat'];
              if (sddatUrl) {
                // const blob = await fetchBlob(sddatUrl);
                // FileSaver.saveAs(sddatUrl, `${props.material.name}.4ddat`);
                const downloadUrl = await getDownloadUrl(sddatUrl);
                window.open(downloadUrl);
              } else {
                throw new Error('4ddat为空');
              }
            }
            break;

          default:
            break;
        }
      } finally {
        state.loading = false;
      }
    };
    const cancel = () => {
      emit('cancel');
    };
    const confirm = async () => {
      await download();
      emit('confirm');
    };
    return {
      ...toRefs(state), cancel, confirm,
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.material-download {
  .dialog-buttons {
    padding-top: 20px;
    text-align: right;
  }
}
</style>
