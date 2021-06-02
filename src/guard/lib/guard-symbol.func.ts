// Function.
import { isSymbol } from '../../is/lib/is-symbol.func';
// Type.
import { GuardSymbol } from '../type/guard-symbol.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be a `symbol`.
 * @param value A `symbol` type `value` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `symbol`.
 */
export const guardSymbol: GuardSymbol = (
  value: symbol,
  callback?: ResultCallback
): value is symbol => isSymbol(value, callback);
