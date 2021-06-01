// Function.
import { isFunction } from '../../is/lib/is-function.func';
// Type.
import { GuardFunction } from '../type/guard-function.type';
import { Func } from '../../type/func.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be a `Func` type.
 * @param value A `Func` type `value` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `Func`.
 */
export const guardFunction: GuardFunction = (value: Func, callback?: ResultCallback): value is Func =>
  isFunction(value, callback);
