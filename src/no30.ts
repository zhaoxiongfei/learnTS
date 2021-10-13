// @link https://github.com/semlinker/awesome-typescript/issues/49

// 完善 Chainable 类型的定义，使得 TS 能成功推断出 result 变量的类型。调用 option 方法之后会不断扩展当前对象的类型，使得调用 get 方法后能获取正确的类型。

type ITypes = string | number | symbol;

type Chainable<T = {}> = {
  option<K extends ITypes, V extends any>(k: K, v: V): Chainable<T & Record<K, V>>;
  get(): T;
};

function Chainable<T extends {}>(init?: T) {
  const data: any = init || {};

  const me: Chainable<T> = {
    option(k, v) {
      data[k] = v;
      return me as Chainable<T & Record<typeof k, typeof v>>;
    },

    get() {
      return data;
    }
  };

  return me;
}

let config = Chainable();
const data: [[string, number], [string, string], [string, { value: string }]] = [
  ["age", 8],
  ["name", "lolo"],
  ["address", { value: "XiaMen" }]
];


const result = Chainable()
  .option("age", 8)
  .option("name", "lolo")
  .option("address", { value: "XiaMen" })
  .get();

console.log(result);

type ResultType = typeof result;
const t: ResultType = {
  age: 9,
  name: "hello",
  address: {
    value: "Huizhou"
  }
};
console.log(t);
// 期望 ResultType 的类型是：
// {
//   age: number
//   name: string
//   address: {
//     value: string
//   }
// }
