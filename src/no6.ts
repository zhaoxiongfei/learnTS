// @link https://github.com/semlinker/awesome-typescript/issues/24
// 定义一个 NativeFlat 工具类型，支持把数组类型拍平（扁平化）。具体的使用示例如下所示：
type NaiveFlat<T extends any[]> = T extends [infer A, ...infer B]
 ? A extends any[]
  ? NaiveFlat<A> | NaiveFlat<B>
  : A | NaiveFlat<B>
 : never;

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"
// 在完成 NaiveFlat 工具类型之后，在继续实现 DeepFlat 工具类型，以支持多维数组类型：

// 测试用例
type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]]
type DeepTestResult = NaiveFlat<Deep>
// DeepTestResult: "a" | "b" | "c" | "d" | "e"