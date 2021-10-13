// @link https://github.com/semlinker/awesome-typescript/issues/69

// 实现 ConsistsOnlyOf 工具类型，用于判断 LongString 字符串类型是否由 0 个或多个 Substring 字符串类型组成。具体的使用示例如下所示：

type ConsistsOnlyOf<LongString extends string, Substring extends string> = LongString extends ''
  ? true
  : LongString extends `${Substring}${infer B}`
    ? ConsistsOnlyOf<B, Substring>
    : false;

type C0 = ConsistsOnlyOf<'aaa', 'a'> //=> true
type C1 = ConsistsOnlyOf<'ababab', 'ab'> //=> true
type C2 = ConsistsOnlyOf<'aBa', 'a'> //=> false
type C3 = ConsistsOnlyOf<'', 'a'> //=> true