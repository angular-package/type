// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsNull } from '../type/is-null.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type and equal to `null`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is `null`.
 */
export const isNull: IsNull = (value: any, callback: ResultCallback = resultCallback): value is null =>
  callback(typeOf(value) === 'null' && typeof value === 'object' && value === null, value);
