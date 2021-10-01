// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean;
// }
// 在实现 SetOptional 工具类型之后，如果你感兴趣，可以继续实现 SetRequired 工具类型，利用它可以把指定的 keys 对应的属性变成必填的。对应的使用示例如下所示：

type Simplify<T> = {
	[k in keyof T]: T[k];
}

type SetRequired<T, K extends keyof T> = Simplify<{
	[k in K]-?: T[k];
} & Pick<T, Exclude<keyof T, K>>>

type Foo = {
	a?: number;
	b: string;
	c?: boolean;
}

type T1 = Pick<Foo, 'a'>

// 测试用例
type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
// type SomeRequired = {
// 	a?: number;
// 	b: string; // 保持不变
// 	c: boolean; // 该属性已变成必填
// }