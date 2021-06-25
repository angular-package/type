/**
 * A type from the provided generic `Type` variable, constrained with the `undefined` which causes other types its change to `never`.
 */
export type Undefined<Type> = Type extends undefined ? Type : never;
