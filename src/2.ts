function Logger<T extends (...args: any) => any>(func: T): T {
  const wrapped = function (...args: Parameters<T>) {
    const res = func(...args);
    return res;
  };

  return wrapped as T;
}

const sum = (a: number, b: number): number => {
  return a + b;
};

const logged = Logger(sum);
logged(3, 4);
