// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsNumberObject } from '../type/is-number-object.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type and instance of `Number` and `Object`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `Number` instance.
 */
export const isNumberObject: IsNumberObject = (value: any, callback: ResultCallback = resultCallback): value is Number =>
  callback(typeof value === 'object' && value instanceof Number === true && value instanceof Object === true, value);
