function extend<T extends object, U extends object>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (let id in first) {
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }

  return result;
}

type T1 = { a: string };
type T2 = { b: number };
const t1 = <T1>{ a: "hello" };
const t2 = { b: 42 } as T2
const x = extend(t1, t2);

export {}
