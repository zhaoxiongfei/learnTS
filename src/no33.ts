// @link https://github.com/semlinker/awesome-typescript/issues/52

// 实现一个 ToNumber 工具类型，用于实现把数值字符串类型转换为数值类型。具体的使用示例如下所示：

type ToNumber<T extends string, A extends any[] = []> = `${A["length"]}` extends T
  ? A["length"]
  : ToNumber<T, [...A, '']>;

type T0 = ToNumber<"0">; // 0
type T1 = ToNumber<"10">; // 10
type T2 = ToNumber<"20">; // 20