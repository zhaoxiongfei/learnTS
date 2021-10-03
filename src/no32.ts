// @link https://github.com/semlinker/awesome-typescript/issues/51

// 实现一个 RepeatString 工具类型，用于根据类型变量 C 的值，重复 T 类型并以字符串的形式返回新的类型。具体的使用示例如下所示：
type RepeatString<T extends string, C extends number, A extends any[] = [], R extends string = ""> = A["length"] extends C
  ? R
  : RepeatString<T, C, [...A, ''], `${R}${T}`;

type S0 = RepeatString<"a", 0>; // ''
type S1 = RepeatString<"a", 2>; // 'aa'
type S2 = RepeatString<"ab", 3>; // 'ababab'