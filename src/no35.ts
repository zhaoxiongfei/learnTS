// @link https://github.com/semlinker/awesome-typescript/issues/54

// 实现一个 Add 工具类型，用于实现对数值类型对应的数值进行加法运算。具体的使用示例如下所示：

type Add<T, R, A1 extends any[] = [], A2 extends any[] = [], AT extends any[] = []> = A1["length"] extends T
  ? A2["length"] extends R
    ? AT["length"]
    : Add<T, R, A1, [...A2, ""], [...AT, ""]>
  : Add<T, R, [...A1, ""], A2, [...AT, ""]>

type A0 = Add<5, 5>; // 10
type A1 = Add<8, 20> // 28
type A2 = Add<10, 30>; // 40