// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotString } from '../type/is-not-string.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if an unknown `value` is not a `string` type and not an instance of `String`.
 * @param value An unknown `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is not a `string`.
 */
export const isNotString: IsNotString = (value: unknown, callback: ResultCallback = resultCallback): boolean =>
  callback(typeOf(value) !== 'string' && typeof value !== 'string' && value instanceof String === false, value);
