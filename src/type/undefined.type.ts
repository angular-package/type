// Undefined or `never` - treat types as `never` excluding `undefined`.
export type Undefined<Type> = Type extends undefined ? Type : never;
