// @link https://github.com/semlinker/awesome-typescript/issues/29
// 实现一个 IsEqual 工具类型，用于比较两个类型是否相等。具体的使用示例如下所示：

type IsEqual<A, B> = [A] extends [B] ? [B] extends [A] ? true : false: false;

// 测试用例
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }> // true
type E2 = IsEqual<[1], []>; // false
type E3 = IsEqual<never, never>; // true
type E4 = IsEqual<1 | 2, 2 | 1>; // true
type E5 = IsEqual<any, any>; // true