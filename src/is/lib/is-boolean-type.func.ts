// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsBooleanType } from '../type/is-boolean-type.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, and equal to `true` or `false`.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `boolean` type.
 */
export const isBooleanType: IsBooleanType = (
  value: any,
  callback: ResultCallback = resultCallback
): value is boolean =>
  callback(
    value instanceof Boolean === false &&
    value instanceof Object === false &&
    typeof value === 'boolean' &&
    (value === true || value === false),
    value
  );
