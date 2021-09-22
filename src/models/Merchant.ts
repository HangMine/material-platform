
export interface MerchantItem {
  id: string,
  logo: string
  name: string
  resourceCount: number,
  followCount: number,
  creator: string,
  isFollow: boolean,
  isCooperation: boolean,
  industry: string,
  materialList: {
    img: string,
    materialName: string,
    materialNumber: string
  }[]
}

export type MerchantList = MerchantItem[];
