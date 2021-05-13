// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsBigInt } from '../type/is-big-int.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `bigint` type.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `bigint`.
 */
export const isBigInt: IsBigInt = (value: any, callback: ResultCallback = resultCallback): value is bigint =>
  callback(typeOf(value) === 'bigint' && typeof value === 'bigint', value);
