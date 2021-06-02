// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsNumberType } from '../type/is-number-type.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, and equal to `true` or `false`.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `number` type.
 */
export const isNumberType: IsNumberType = (
  value: any,
  callback: ResultCallback = resultCallback
): value is number =>
  callback(
    value instanceof Number === false &&
    value instanceof Object === false &&
    typeof value === 'number',
    value
  );
