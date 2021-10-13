// @link https://github.com/semlinker/awesome-typescript/issues/40
// 实现一个 Merge 工具类型，用于把两个类型合并成一个新的类型。第二种类型（SecondType）的 Keys 将会覆盖第一种类型（FirstType）的 Keys。具体的使用示例如下所示：

type Foo = {
   a: number;
   b: string;
};

type Bar = {
   b: number;
};

type Simplify<T> = { [k in keyof T]: T[k]; }
type Merge<FirstType, SecondType> = Simplify<Omit<FirstType, keyof SecondType> & SecondType>;

type T1 = Merge<Foo, Bar>
const ab: Merge<Foo, Bar> = { a: 1, b: 2 };

export {}