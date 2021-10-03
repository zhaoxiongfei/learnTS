// @link https://github.com/semlinker/awesome-typescript/issues/55

// 实现一个 Filter 工具类型，用于根据类型变量 F 的值进行类型过滤。具体的使用示例如下所示：

type Filter<T extends any[], F, R extends any[] = []> = T extends [infer A, ...infer B]
  ? [A] extends [F]
    ? Filter<B, F, [...R, A]>
    : Filter<B, F, R>
  : R;

type F0 = Filter<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
type F1 = Filter<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
type F2 = Filter<[0, true, any, "abao"], string>; // [any, "abao"]
type F3 = Filter<[never, number | string, any, "abao"], string>; // [never, any, "abao"]

type T1 = [never] extends [string] ? true : false;