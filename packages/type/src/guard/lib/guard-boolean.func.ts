// Function.
import { isBoolean } from '../../is/lib/is-boolean.func';
// Type.
import { GuardBoolean } from '../type/guard-boolean.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be a `boolean`.
 * @param value A `boolean` type `value` to guard.
 * @param callback Optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `boolean`.
 */
export const guardBoolean: GuardBoolean = (value: boolean, callback?: ResultCallback): value is boolean =>
  isBoolean(value, callback);
