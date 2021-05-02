// Function.
import { isString } from '../../is/lib/is-string.func';
// Type.
import { GuardString } from '../type/guard-string.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be a `string`.
 * @param value A `string` type `value` to guard.
 * @param callback Optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `string`.
 */
export const guardString: GuardString = (value: string, callback?: ResultCallback): value is string =>
  isString(value, callback);
