// @link https://github.com/semlinker/awesome-typescript/issues/45

// 实现一个 IsNever 工具类型，判断指定的类型是否为 never 类型。具体的使用示例如下所示：
type IsNever<T> = [T] extends [never] ? true : false;

type I0 = IsNever<never> // true
type I1 = IsNever<never | string> // false
type I2 = IsNever<null> // false