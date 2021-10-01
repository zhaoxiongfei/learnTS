// @link https://github.com/semlinker/awesome-typescript/issues/21
// 在 掌握 TS 这些工具类型，让你开发事半功倍 这篇文章中，阿宝哥介绍了 TS 内置的工具类型：Partial<T>，它的作用是将某个类型里的属性全部变为可选项 ?。
// 那么如何定义一个 SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的？对应的使用示例如下所示：
type Simplify<T> = {
	[k in keyof T]: T[k];
}

type SetOptional<T, K extends keyof T> = Simplify<{
  [k in K]?: T[k];
} & Pick<T, Exclude<keyof T, K>>>

type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
