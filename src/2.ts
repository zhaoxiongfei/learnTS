function Logger<T extends (...args: any[]) => any>(func: T, arg1: number): T {
  console.log('arg1: %d', arg1);
  const wrapped = (...args: Parameters<T>) => {
    console.log("%s exec args: %o", new Date(), args);
    const res = func(...args);
    console.log("%s exec result: %o", new Date(), res);
    return res;
  };

  return wrapped as T;
}

interface Obj {
  name: string;
  Logger: typeof Logger;
}

const obj: Obj = { name: 'stone', Logger };

const sum = (a: string, b: number): number => {
  return a.charCodeAt(0) + b;
};

const logged = obj.Logger(sum, 21);
console.log(logged(process.argv[2], 4));
