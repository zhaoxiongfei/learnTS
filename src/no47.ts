// @link https://github.com/semlinker/awesome-typescript/issues/68

// 实现 RequireExactlyOne 工具类型，用于满足以下功能。即只能包含 age 或 gender 属性，不能同时包含这两个属性。具体的使用示例如下所示：

interface Person {
  name: string;
  age?: number;
  gender?: number;
  income?: number;
}

// 只能包含Keys中唯一的一个Key
type RequireExactlyOne<T, Keys extends keyof T, K extends keyof T = Keys> = Keys extends any
  ? Omit<T, K> & Required<Pick<T, Keys>> & Partial<Record<Exclude<K, Keys>, never>>
  : never;

type T1 = RequireExactlyOne<Person, "age" | "gender" | "income">;
const p1: T1 = {
  name: "lolo",
  age: 7,
};

const p2: T1 = {
  name: "lolo",
  gender: 1
};

const p3: T1 = {
  name: "lolo",
  income: 100
};

// Error
const p4: T1 = {
  name: "lolo",
  age: 7,
  gender: 1,
};

const p5: T1 = {
  name: "lolo",
  age: 7,
  income: 1,
};

const p6: T1 = {
  name: "lolo",
  gender: 7,
  income: 1,
};

const p7: T1 = {
  name: "lolo",
  age: 8,
  gender: 7,
  income: 1,
};

export {};