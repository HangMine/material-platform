
type Obj = Record<string | number, any>;
type GetArrayItem<T> = T extends Array<infer I> ? I : T;
type AsyncReturnType<T> = ReturnType<T> extends Promise<infer P> ? P : ReturnType<T>;
type TableParams<OutObj extends Obj = {}, Fields extends Obj = {}> = {
  page: number,
  size: number
  keywords?: string,
  sortType?: string | number,
  sort?: 1 | 2, // 正序|倒序
  fields?: Fields,
} & OutObj;
type TableData<T = Obj> = {
  total: number,
  current: number,
  size: number,
  records: T[]
};
type valueof<T> = T[keyof T];

declare module '*.json' {
  const value: any;
  export default value;
}
