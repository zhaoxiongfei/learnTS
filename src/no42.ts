// @link https://github.com/semlinker/awesome-typescript/issues/63

// 实现 IndexOf 工具类型，用于获取数组类型中指定项的索引值。若不存在的话，则返回 -1 字面量类型。具体的使用示例如下所示：

type IsEqual<T, U> = [T] extends [U] ? [U] extends [T] ? true : false : false;
type IndexOf<A extends any[], Item, F extends any[] = []> = A extends [infer H, ...infer T]
  ? IsEqual<H, Item> extends true
    ? F["length"]
    : IndexOf<T, Item, [...F, H]>
  : -1;

type Arr = [1, 2, 3, 4, 5];
type I0 = IndexOf<Arr, 0>; // -1
type I1 = IndexOf<Arr, 1>; // 0
type I2 = IndexOf<Arr, 3>; // 2
type I3 = IndexOf<[1, 3 | 7], 3>; // -1
type I4 = IndexOf<[never, 3 | 7], 3>; // -1