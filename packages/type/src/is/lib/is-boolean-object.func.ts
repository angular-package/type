// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsBooleanObject } from '../type/is-boolean-object.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type and instance of `Boolean` and `Object`.
 * @function `isBooleanObject`
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `Boolean` instance.
 */
export const isBooleanObject: IsBooleanObject = (value: any, callback: ResultCallback = resultCallback): value is Boolean =>
  callback(typeof value === 'object' && value instanceof Boolean === true && value instanceof Object === true, value);
