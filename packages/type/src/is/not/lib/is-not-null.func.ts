// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotNull } from '../type/is-not-null.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if an unknown `value` is not a `null` type and not equal to `null`.
 * @param value An unknown `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is not `null`.
 */
export const isNotNull: IsNotNull = (value: unknown, callback: ResultCallback = resultCallback): boolean =>
  callback(typeOf(value) !== 'null' && value !== null);
