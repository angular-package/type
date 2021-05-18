// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotUndefined } from '../type/is-not-undefined.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if an unknown `value` is NOT an `undefined` type and NOT equal to `undefined`.
 * @param value An unknown `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is not `undefined`.
 */
export const isNotUndefined: IsNotUndefined = (value: unknown, callback: ResultCallback = resultCallback): boolean =>
  callback(typeOf(value) !== 'undefined' && typeof value !== 'undefined' && value !== undefined, value);
