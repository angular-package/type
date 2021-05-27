// Function.
import { isDefined } from '../../is/lib/is-defined.func';
// Type.
import { Defined } from '../../type/defined.type';
import { GuardDefined } from '../type/guard-defined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be defined, not `undefined`.
 * @param value A generic `Type` type from the `value` to guard.
 * @param callback An optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is defined, if `undefined` then returns `never`.
 */
export const guardDefined: GuardDefined = <Type>(value: Defined<Type>, callback?: ResultCallback): value is Defined<Type> =>
  isDefined(value, callback);
