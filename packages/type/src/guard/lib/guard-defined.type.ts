// Function.
import { isDefined } from '../../is/lib/is-defined.func';
// Type.
import { Defined } from '../../type/defined.type';
import { GuardDefined } from '../type/guard-defined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if a generic type `value` is NOT an `undefined` type and is NOT equal to `undefined`.
 * @param value A generic type `value` to check.
 * @param callback An optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is defined, if `undefined` then returns `never`.
 */
export const guardDefined: GuardDefined = <Type>(value: Type, callback?: ResultCallback): value is Defined<Type> =>
  isDefined(value, callback);
