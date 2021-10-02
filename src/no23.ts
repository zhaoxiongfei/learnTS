// @link https://github.com/semlinker/awesome-typescript/issues/42

// 实现一个 RemoveIndexSignature 工具类型，用于移除已有类型中的索引签名。具体的使用示例如下所示：

interface Foo {
  [key: string]: any;
  [key: number]: any;
  [key: symbol]: any;
  bar(): void;
}

type RemoveIndexSignature<T> = {
  [k in keyof T as (string extends k ? never : number extends k ? never : symbol extends k ? never : k)]: T[k];
}

type FooWithOnlyBar = RemoveIndexSignature<Foo>; //{ bar: () => void; }