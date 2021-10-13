interface RES<T> {
  name: T
}

type fn1 = <T, K>(arg: T) => RES<K>

const ff: fn1 = <T, K>() => {
  return {
      name: '',
  } as unknown as RES<K>
}

const a = ff<string, number>('redstone');
const b = ff<number, string>(20);