import { memoizeFunc } from "@wendellhu/memoize";

const sum = (a: number, b: number): number => {
  return a + b;
};

const memoized = memoizeFunc(sum);

memoized("hello", "world");
