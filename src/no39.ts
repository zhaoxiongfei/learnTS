// @link https://github.com/semlinker/awesome-typescript/issues/59

// 实现 IsAny 工具类型，用于判断类型 T 是否为 any 类型。具体的使用示例如下所示：

type IsAny<T> = 0 extends 1 & T ? true : false;

type I0 = IsAny<never> // false
type I1 = IsAny<unknown> // false
type I2 = IsAny<any> // true

type T1 = number & any;