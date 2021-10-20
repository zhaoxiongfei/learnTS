class Foo {
  foo = 123;
  common = "123";
}

class Bar {
  bar = 123;
  common = "123";
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  }
  // else {  else 也是正确的。ts可以推断 else 是非 if 的分支
  if (arg instanceof Bar) {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff(new Foo());
doStuff(new Bar());

interface A {
  x: number;
}

interface B {
  y: string;
}

function doStuff2(q: A | B) {
  if ("x" in q) {
    console.log(q.x);
    // q: A
  } else {
    console.log(q.y);
    // q: B
  }
}

// 用户自己定义的类型保护！
function isFoo(arg: Foo | Bar): arg is Foo {
  return (arg as Foo).foo !== undefined;
}

const foo: Foo = {
  foo: 20,
  common: "hello"
};
const t1 = isFoo(foo);

type T1 = {
  name: Date;
};

const key = "name";
type T2 = T1[key]; // Error
type T3 = T1["name"]; // ok

export {};
