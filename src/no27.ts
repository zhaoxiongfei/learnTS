// @link https://github.com/semlinker/awesome-typescript/issues/46

// 实现一个 Reverse 工具类型，用于对元组类型中元素的位置颠倒，并返回该数组。元组的第一个元素会变成最后一个，最后一个元素变成第一个。

type Reverse<
T extends Array<any>,
R extends Array<any> = []
> = T extends [infer A, ...infer B]
  ? [...Reverse<B>, A]
  : [];

type R0 = Reverse<[]> // []
type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]