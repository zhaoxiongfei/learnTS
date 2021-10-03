// @link https://github.com/semlinker/awesome-typescript/issues/57

// 实现一个 Flat 工具类型，支持把数组类型拍平（扁平化）。具体的使用示例如下所示：

type Flat<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flat<First>, ...Flat<Rest>]
    : [First, ...Flat<Rest>]
  : [];

type F0 = Flat<[]> // []
type F1 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
type F2 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]