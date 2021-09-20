/**
 * A generic type `Undefined` that takes generic type variable `Type` constrained by `undefined` causes other types than `undefined` its
 * change to `never`.
 */
export type Undefined<Type> = Type extends undefined ? Type : never;
