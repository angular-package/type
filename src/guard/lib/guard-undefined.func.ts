// Function.
import { isUndefined } from '../../is/lib/is-undefined.func';
// Type.
import { GuardUndefined } from '../type/guard-undefined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be `undefined`.
 * @param value A `undefined` type `value` to guard.
 * @param callback Optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is `undefined`.
 */
export const guardUndefined: GuardUndefined = (value: undefined, callback?: ResultCallback): value is undefined =>
  isUndefined(value, callback);
