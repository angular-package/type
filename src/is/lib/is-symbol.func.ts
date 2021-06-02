// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsSymbol } from '../type/is-symbol.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `symbol` type.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `symbol`.
 */
export const isSymbol: IsSymbol = (
  value: any,
  callback: ResultCallback = resultCallback
): value is symbol =>
  callback(typeOf(value) === 'symbol' && typeof value === 'symbol', value);
