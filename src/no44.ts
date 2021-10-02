// @link https://github.com/semlinker/awesome-typescript/issues/65

// 实现 Unpacked 工具类型，用于对类型执行 “拆箱” 操作。具体的使用示例如下所示：

type Types = string | number | symbol;
type Unpacked<T> = T extends Types
  ? T
  : T extends (...arg: any) => infer R
    ? R
    : T extends Array<infer A>
      ? A
      : T extends Promise<infer P>
        ? P
        : never;

type T00 = Unpacked<string>;  // string
type T01 = Unpacked<string[]>;  // string
type T02 = Unpacked<() => string>;  // string
type T03 = Unpacked<Promise<string>>;  // string
type T04 = Unpacked<Unpacked<Promise<string>[]>>;  // string
type T05 = Unpacked<any>;  // any
type T06 = Unpacked<never>;  // never
type T07 = Unpacked<() => void>;  // void