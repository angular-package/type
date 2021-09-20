/**
 * A generic type `NotUndefined` that takes generic type variable `Type` constrained by `undefined` and `null` which constraint causes its
 * change to `never`.
 */
export type NotUndefined<Type> = Type extends undefined | null ? never : Type;
