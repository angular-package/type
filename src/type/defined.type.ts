import { Never } from './never.type';
/**
 * A generic type `Defined` that takes generic type variable `Type` constrained by `undefined` by using `Never` which constraint causes its
 * change to `never`.
 */
export type Defined<Type> = Type extends undefined ? never : Type;
