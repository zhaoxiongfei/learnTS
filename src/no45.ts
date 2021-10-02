// @link https://github.com/semlinker/awesome-typescript/issues/66

// 实现 JsonifiedObject 工具类型，用于对 object 对象类型进行序列化操作。具体的使用示例如下所示：

type Jsonified<T extends object> = {
  [k in keyof T]: T[k] extends object
    ? "toJSON" extends keyof T[k]
      ? T[k]["toJSON"] extends (...args: any[]) => infer R
        ? R
        : never
      : T[k] extends (...args: any[]) => any
        ? never
        : Jsonified<T[k]>
    : T[k];
};

type MyObject = {
  str: "literalstring";
  fn: () => void;
  date: Date;
  customClass: MyClass;
  obj: {
    prop: "property";
    clz: MyClass;
    nested: { attr: Date };
  };
}

declare class MyClass {
  toJSON(): "MyClass";
}

/**
 * type JsonifiedMyObject = {
 *  str: "literalstring";
 *  fn: never;
 *  date: string;
 *  customClass: "MyClass";
 *  obj: JsonifiedObject<{
 *    prop: "property";
 *    clz: MyClass;
 *    nested: {
 *      attr: Date;
 *    };
 *   }>;
 * }
*/
type JsonifiedMyObject = Jsonified<MyObject>;
declare let ex: JsonifiedMyObject;
const z1: "MyClass" = ex.customClass;
const z2: string = ex.obj.nested.attr;