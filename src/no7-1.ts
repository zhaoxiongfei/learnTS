// @link https://github.com/semlinker/awesome-typescript/issues/25
// 使用类型别名定义一个 EmptyObject 类型，使得该类型只允许空对象赋值：

type EmptyObject = {
  [k in string | number | symbol]: never;
}

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = { // 将出现编译错误
  prop: "TS"
}
// 在通过 EmptyObject 类型的测试用例检测后，
// 我们来更改以下 takeSomeTypeOnly 函数的类型定义
// 让它的参数只允许严格SomeType类型的值。具体的使用示例如下所示：

type SomeType =  {
  prop: string
}

type OnlyTKeys<T, U extends T, K = keyof T> = {
  [k in keyof U]: k extends K ? U[k]: never;
}
// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly<T extends SomeType>(x: OnlyTKeys<SomeType, T>) { return x }

// 测试用例：
const x = { prop: 'a' };
takeSomeTypeOnly(x) // 可以正常调用

const y = { prop: 'a', addditionalProp: 'x' };
takeSomeTypeOnly(y) // 将出现编译错误