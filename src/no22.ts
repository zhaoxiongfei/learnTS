// @link https://github.com/semlinker/awesome-typescript/issues/41

import { Key } from "readline";

// 实现一个 RequireAtLeastOne 工具类型，它将创建至少含有一个给定 Keys 的类型，其余的 Keys 保持原样。具体的使用示例如下所示：

type Responder = {
  text?: () => string;
  json?: () => string;
  secure?: boolean;
};

type RequireAtLeastOne<
   ObjectType,
   KeysType extends keyof ObjectType = keyof ObjectType,
> = KeysType extends any
  ? Omit<ObjectType, KeysType> & Required<Pick<ObjectType, KeysType>>
  : never;

// 表示当前类型至少包含 'text' 或 'json' 键
type T1 = RequireAtLeastOne<Responder, 'text' | 'json'>;
const responder: T1 = {
   json: () => '{"message": "ok"}',
   secure: true
};

