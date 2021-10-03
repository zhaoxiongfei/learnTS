// @link https://github.com/semlinker/awesome-typescript/issues/53

// 实现一个 SmallerThan 工具类型，用于比较数值类型的大小。具体的使用示例如下所示：

type SmallerThan<
  N extends number,
  M extends number,
  A extends any[] = []
> = A["length"] extends M
  ? false
  : A["length"] extends N
    ? true
    : SmallerThan<N, M, [...A, ""]>

type S0 = SmallerThan<0, 1>; // true
type S1 = SmallerThan<2, 0>; // false
type S2 = SmallerThan<8, 10>; // true
type S3 = SmallerThan<8, 8>; // false