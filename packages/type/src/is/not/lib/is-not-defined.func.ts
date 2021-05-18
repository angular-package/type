// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotDefined } from '../type/is-not-defined.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if an unknown `value` is an `undefined` type and is equal to `undefined`.
 * @param value An unknown `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is not defined.
 */
export const isNotDefined: IsNotDefined = (value: unknown, callback: ResultCallback = resultCallback): boolean =>
  callback(typeOf(value) === 'undefined' && typeof value === 'undefined' && value === undefined, value);
