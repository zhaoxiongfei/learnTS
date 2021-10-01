// @link https://github.com/semlinker/awesome-typescript/issues/28

// 实现一个 Trim 工具类型，用于对字符串字面量类型进行去空格处理。具体的使用示例如下所示：
type TrimLeft<T extends string> = T extends ` ${infer A}` ? TrimLeft<A> : T;
type TrimRight<T extends string> = T extends `${infer A} ` ? TrimRight<A> : T;

type Trim<V extends string> = TrimLeft<TrimRight<V>>;

// 测试用例
type T1 = Trim<' semlinker '>
type T2 = Trim<' semlinker              '>
type T3 = Trim<'             semlinker              '>
//=> 'semlinker'