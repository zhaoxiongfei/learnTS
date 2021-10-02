// @link https://github.com/semlinker/awesome-typescript/issues/38

// 实现一个 OptionalKeys 工具类型，用来获取对象类型中声明的可选属性。具体的使用示例如下所示：

type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};

type Person1 = {
  id: string;
  name: string;
  age: number;
  from?: string | number;
  speak?: never;
};

// 解法一: 在 迭代 [k in keyof T] 的时候，通过Pick构造只有当前一个属性的类型，和该类型都是可选类型的去做相等比较，相等，则说明该属性是可选属性
// 最后有一点不明白不知从何处引入了 undefined ，利用 NonNullable 去掉
type IsEqual<T, U> = [T] extends [U] ? [U] extends [T] ? true : false : false;

type OptionalKeys<T> = NonNullable<{
  [k in keyof T]: IsEqual<Pick<T, k>, Partial<Pick<T, k>>> extends true ? k : never;
}[keyof T]>

// 解法二: 直接在迭代 k in keyof T 中括号内利用 as extends做判断
type OptionalKeysII<T> = keyof {
  [k in keyof T as Partial<T>[k] extends T[k] ? k : never]: true
}

// Why? error
type OptionalKeysIII<T, Ot = Partial<T>> = keyof {
  [k in keyof T as Ot[k] extends T[k] ? k : never]: true
}

type Optional<T, Ot = Partial<T>> = Ot;

type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"
type PersonOptionalKeys1 = OptionalKeysII<Person1> // "from" | "speak"