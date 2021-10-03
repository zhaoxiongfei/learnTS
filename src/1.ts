type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};

type OptionalKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

// 测试用例
type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"