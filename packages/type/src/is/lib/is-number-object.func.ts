// Function.
import { errorCallback } from '../../lib/error-callback.func';
// Type.
import { IsNumberObject } from '../type/is-number-object.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type an instance of `Number` and `Object`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `errorCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `Number` instance.
 */
export const isNumberObject: IsNumberObject = (value: any, callback: ResultCallback = errorCallback): value is number =>
  callback(typeof value === 'object' && value instanceof Number === true && value instanceof Object === true);