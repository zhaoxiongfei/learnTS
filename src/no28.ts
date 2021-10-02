// @link https://github.com/semlinker/awesome-typescript/issues/47

// 实现一个 Split 工具类型，根据给定的分隔符（Delimiter）对包含分隔符的字符串进行切割。可用于定义 String.prototype.split 方法的返回值类型。具体的使用示例如下所示：

type Item = 'semlinker,lolo,kakuqo';

type Split<
	S extends string,
	Delimiter extends string,
> = S extends `${infer A}${Delimiter}${infer B}`
  ? [A, ...Split<B, Delimiter>]
  : [S];

type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]