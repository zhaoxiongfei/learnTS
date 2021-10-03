// @link https://github.com/semlinker/awesome-typescript/issues/64

// 实现一个 Permutation 工具类型，当输入一个联合类型时，返回一个包含该联合类型的全排列类型数组。具体的使用示例如下所示：

type Om<T, I> = T extends I ? never : T;
type Test<T extends any[], F, G = F> = T extends any[]
  ? F | 1 extends 1
    ? T
    : F extends any
    ? Test<[...T, F], Om<G, F>>
    : T
  : T;
type Permutation<T> = Test<[], T>;

// ["a", "b"] | ["b", "a"]
type P0 = Permutation<"a" | "b">; // ['a', 'b'] | ['b' | 'a']
// type P1 = ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"]
// | ["b", "c", "a"] | ["c", "a", "b"] | ["c", "b", "a"]
type P1 = Permutation<"a" | "b" | "c">