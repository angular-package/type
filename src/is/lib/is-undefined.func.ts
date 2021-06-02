// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsUndefined } from '../type/is-undefined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `undefined` type and equal to `undefined`.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is `undefined`.
 */
export const isUndefined: IsUndefined = (
  value: any,
  callback: ResultCallback = resultCallback
): value is undefined =>
  callback(
    typeOf(value) === 'undefined' &&
    typeof value === 'undefined' &&
    value === undefined,
    value
  );
