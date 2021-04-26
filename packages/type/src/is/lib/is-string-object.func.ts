// Function.
import { errorCallback } from '../../lib/error-callback.func';
// Type.
import { IsStringObject } from '../type/is-string-object.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type instance of `String` and `Object`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `errorCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `String` instance.
 */
export const isStringObject: IsStringObject = (value: any, callback: ResultCallback = errorCallback): value is string =>
  callback(value instanceof Object === true && value instanceof String === true && typeof value === 'object');