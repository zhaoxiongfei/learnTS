// @link https://github.com/semlinker/awesome-typescript/issues/30

// 实现一个 Head 工具类型，用于获取数组类型的第一个类型。具体的使用示例如下所示：

// 解法1 根据数组形状来获取
// type Head<T extends Array<any>> = T extends [infer F, ...infer Rest] ? F : never;
// 解法2 确保数组不为空的之后，直接通过索引0获取
type Head<T extends Array<any>> = T["length"] extends 0 ? never : T[0];

// 测试用例
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3