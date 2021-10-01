/**
  第二题
  本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。
  @link https://github.com/semlinker/awesome-typescript/issues/20
*/

function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number): string | number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // error as b can be number | string
  }
  throw Error('has error, a and b must be same type');
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok