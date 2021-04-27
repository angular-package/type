// Function.
import { errorCallback } from '../../lib/error-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsDefined } from '../type/is-defined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if an unknown `value` is NOT an `undefined` type and is NOT equal to `undefined`.
 * @param value An `unknown` `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `errorCallback`.
 * @returns A `boolean` indicating whether or not the `value` is defined, not `undefined`.
 */
export const isDefined: IsDefined = (value: unknown, callback: ResultCallback = errorCallback): boolean =>
  callback(typeOf(value) !== 'undefined' && typeof value !== 'undefined' && value !== undefined);
