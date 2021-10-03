// @link https://github.com/semlinker/awesome-typescript/issues/62

// 实现 Replace 工具类型，用于实现字符串类型的替换操作。具体的使用示例如下所示：

type Replace<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer H}${From}${infer T}` ? `${H}${To}${T}` : S;

type R0 = Replace<"", "", "">; // ''
type R1 = Replace<"foobar", "bar", "foo">; // "foofoo"
type R2 = Replace<"foobarbar", "bar", "foo">; // "foofoobar"
// 此外，继续实现 ReplaceAll 工具类型，用于实现替换所有满足条件的子串。具体的使用示例如下所示：

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer H}${From}${infer T}`
  ? `${ReplaceAll<H, From, To>}${To}${ReplaceAll<T, From, To>}`
  : S;

type R0 = ReplaceAll<"", "", "">; // ''
type R1 = ReplaceAll<"barfoo", "bar", "foo">; // "foofoo"
type R2 = ReplaceAll<"foobarbar", "bar", "foo">; // "foofoofoo"
type R3 = ReplaceAll<"foobarfoobar", "ob", "b">; // "fobarfobar"
