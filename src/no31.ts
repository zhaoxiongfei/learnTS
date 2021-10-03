// @link https://github.com/semlinker/awesome-typescript/issues/50

// 实现一个 Repeat 工具类型，用于根据类型变量 C 的值，重复 T 类型并以元组的形式返回新的类型。具体的使用示例如下所示：

type Repeat<T, C extends number, A extends any[] = []> = A["length"] extends C
  ? A
  : Repeat<T, C, [...A, T]>;

type R0 = Repeat<0, 0>; // []
type R1 = Repeat<1, 1>; // [1]
type R2 = Repeat<number, 2>; // [number, number]
type R3 = Repeat<number | string, 3>; // [number | string, number | string, number | string]
type R4 = Repeat<never, 2>; // [never, never]
type R5 = Repeat<any, 2>; // [any, any]
type R6 = Repeat<unknown, 2>; // [unknown, unknown]