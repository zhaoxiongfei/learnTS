function Exec<
  MainFn extends (...args: ReturnType<BeforeFn>) => any,
  BeforeFn extends (...args: Args) => any[],
  AfterFn extends (
    main: ReturnType<MainFn>,
    ...args: ReturnType<BeforeFn>
  ) => any,
  Args extends any[]
>(
  Main: MainFn,
  Before: BeforeFn,
  After: AfterFn,
  _args: Args
): ReturnType<MainFn> {
  const args = Before(..._args);
  type BeforeReturnType = ReturnType<BeforeFn>;
  const main = Main(...(args as BeforeReturnType));
  After(main, ...(args as BeforeReturnType));

  return main;
}

interface Cnf {
  cnf: string;
}
interface Deps {}
type Gender = 'male' | 'female' | 'unknown';
interface Profile {
  name: string;
  gender: Gender;
}

const Main = (cnf: Cnf, deps: Deps, gender: Gender): Profile => {
  console.log('main', cnf, deps, gender);

  return {
    name: 'redstone',
    gender: gender,
  };
};

const Before = (cnf: Cnf, deps: Deps): [Cnf, Deps, Gender] => {
  console.log('before', cnf, deps);
  return [cnf, deps, 'male'];
};

const After = (profile: Profile, cnf: Cnf, deps: Deps): void => {
  console.log('after', profile, cnf, deps);
};

const args: [Cnf, Deps] = [{ cnf: 'xxx' }, {}];

const profile = Exec(Main, Before, After, args);

console.log('module inited name is %s', profile.name);

const fn = (a: number, b: string, c: Gender) {
  return [a, b, c];
}
