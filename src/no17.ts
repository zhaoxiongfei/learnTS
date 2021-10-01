// @link https://github.com/semlinker/awesome-typescript/issues/36

// 实现一个 Includes 工具类型，用于判断指定的类型 E 是否包含在 T 数组类型中。具体的使用示例如下所示：

type IsEqual<A, B> = [A] extends [B] ? [B] extends [A] ? true : false: false;

type Includes<T extends Array<any>, E> = T extends [infer A, ...infer B]
  ? IsEqual<A, E> extends true
    ? true
    : Includes<B, E>
  : false;

type I0 = Includes<[], 1> // false
type I1 = Includes<[2, 2, 3, 1], 2> // true
type I2 = Includes<[2, 3, 3, 1], 1> // true
type I3 = Includes<[2 | 3, 3, 3, 1], 2 | 3 | 4> // false
type I4 = Includes<[2 | 3, 3, 3, 1], 2 | 3> // false
type I5 = Includes<[never, 3, 3, 1], never> // true