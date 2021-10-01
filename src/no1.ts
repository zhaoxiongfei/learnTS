/* @link https://github.com/semlinker/awesome-typescript/issues/19 */
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    ...u, // 缺少这一样的话，返回的类型是 User，而非 T，T 是 User 的子类型，约束条件更多，子类可以赋值给父类，反过来不行
    id: u.id,
    kind: 'customer'
  };
}
