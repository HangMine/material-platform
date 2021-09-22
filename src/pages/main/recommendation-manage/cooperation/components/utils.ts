import { CooperationDocument } from '@/api/recommendation';
import { getRelativePathFromUrl } from '@/utils/normalize-component';
import uploadToOSS from '@/utils/oss/uploadToOSS';

export type CooperationUploadItem = {
  item: File | undefined,
  url: string,
  name: string
};

export type ApiCooperationUploadItem = CooperationDocument;

export const uploadItem2ApiUploadItem = async (uploadItem: CooperationUploadItem): Promise<ApiCooperationUploadItem> => {
  const { item, url, name } = uploadItem;
  let ossKey = url;
  if (item) {
    ossKey = await uploadToOSS(item, 'BINARY_FILE');
  } else {
    ossKey = getRelativePathFromUrl(url);
  }
  const apiUploadItem = {
    ossKey,
    docName: name,
  };
  return apiUploadItem;
};

export const apiUploadItem2UploadItem = (apiUploadItem: ApiCooperationUploadItem): CooperationUploadItem => {
  const { ossKeyUrl, ossKey, docName } = apiUploadItem;
  const uploadItem = {
    item: undefined,
    name: docName,
    url: ossKeyUrl || ossKey,
  };
  return uploadItem;
};

export const uploadList2ApiUploadList = async (uploadList: CooperationUploadItem[]) => {
  const apiUploadList = await Promise.all(uploadList.map((uploadItem, i) => {
    return uploadItem2ApiUploadItem(uploadItem);
  }));
  return apiUploadList;
};

export const apiUploadList2UploadList = (apiUploadList: ApiCooperationUploadItem[]) => {
  const uploadList = apiUploadList.map((apiUploadItem, i) => {
    return apiUploadItem2UploadItem(apiUploadItem);
  });
  return uploadList;
};
