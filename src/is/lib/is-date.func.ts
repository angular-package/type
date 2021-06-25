// Function.
import { typeOf } from '../../lib/type-of.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsDate } from '../type/is-date.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type instance of `Date` and `Object`.
 * @param value Any `value` to check.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the value is a date.
 */
export const isDate: IsDate = (
  value: any,
  callback: ResultCallback = resultCallback
): value is Date =>
  callback(
    typeOf(value) === 'date' &&
    typeof value === 'object' &&
    value instanceof Date === true &&
    value instanceof Object === true,
    value
  );
