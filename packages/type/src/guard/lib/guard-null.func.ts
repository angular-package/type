// Function.
import { isNull } from '../../is/lib/is-null.func';
// Type.
import { GuardNull } from '../type/guard-null.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be a `null`.
 * @param value A `null` type `value` to guard.
 * @param callback Optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `null`.
 */
export const guardNull: GuardNull = (value: null, callback?: ResultCallback): value is null =>
  isNull(value, callback);
