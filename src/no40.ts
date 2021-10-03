// @link https://github.com/semlinker/awesome-typescript/issues/60

// 实现 AnyOf 工具类型，只要数组中任意元素的类型非 Falsy 类型、 {} 类型或 [] 类型，则返回 true，否则返回 false。如果数组为空的话，则返回 false。具体的使用示例如下所示：

type NotEmptyObject<T> = T extends {} ? ({} extends T ? false : true) : true;
type Flasy = 0 | "" | false | [];
type AnyOf<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [First] extends [Flasy]
    ? AnyOf<Rest>
    : NotEmptyObject<First>
  : false;

type A0 = AnyOf<[]>; // false
type A1 = AnyOf<[0, '', false, [], {}]> // false
type A2 = AnyOf<[1, "", false, [], {}]> // true
type A3 = AnyOf<[0, "" | 2, false, [], {}]> // true