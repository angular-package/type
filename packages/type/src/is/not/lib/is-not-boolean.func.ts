// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotBoolean } from '../type/is-not-boolean.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if an unknown `value` is NOT a `boolean` type, NOT equal to `true` or `false` and NOT instance of `Boolean`.
 * @param value An unknown `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is not `boolean`.
 */
export const isNotBoolean: IsNotBoolean = (value: unknown, callback: ResultCallback = resultCallback): boolean =>
  callback(
    typeOf(value) !== 'boolean' &&
    typeof value !== 'boolean' &&
    value instanceof Boolean === false &&
    value !== true &&
    value !== false
  );
