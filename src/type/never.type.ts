/**
 * A generic type `Never` that takes generic type variable `Type` constrained by a generic type variable `Not` which constraint causes its
 * change to `never`.
 */
export type Never<Not, Type> = Type extends Not ? never : Type;
