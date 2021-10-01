// @link https://github.com/semlinker/awesome-typescript/issues/26
// 定义 NonEmptyArray 工具类型，用于确保数据非空数组。

type NonEmptyArray<T> = [T, ...T[]];

const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用