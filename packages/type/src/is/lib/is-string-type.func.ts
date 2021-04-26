// Function.
import { errorCallback } from '../../lib/error-callback.func';
// Type.
import { IsStringType } from '../type/is-string-type.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `string` type not instance of `String` and `Object`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `errorCallback`.
 * @returns A `boolean` indicating whether or not the value is a `string`.
 */
export const isStringType: IsStringType = (value: any, callback: ResultCallback = errorCallback): value is string =>
  callback(value instanceof Object === false && value instanceof String === false && typeof value === 'string');