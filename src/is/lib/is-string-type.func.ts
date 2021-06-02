// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsStringType } from '../type/is-string-type.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `string` type not instance of `String` and `Object`.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the value is a `string` type.
 */
export const isStringType: IsStringType = (
  value: any,
  callback: ResultCallback = resultCallback
): value is string =>
  callback(
    value instanceof Object === false &&
    value instanceof String === false &&
    typeof value === 'string',
    value
  );
