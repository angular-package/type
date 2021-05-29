// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotFunction } from '../type/is-not-function.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if an unknown `value` is not a `function` type and not an instance of `Function`.
 * @param value An unknown `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is not a `function`.
 */
export const isNotFunction: IsNotFunction = (value: unknown, callback: ResultCallback = resultCallback): boolean =>
  callback(typeOf(value) !== 'function' && typeof value !== 'function' && value instanceof Function === false, value);
