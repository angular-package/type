// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsObject } from '../type/is-object.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` of a generic `Obj` type and `Object` instance.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is an `object`.
 */
export const isObject: IsObject = <Obj = object>(
  value: any,
  callback: ResultCallback = resultCallback
): value is Obj =>
  callback(
    typeOf(value) === 'object' &&
    typeof value === 'object' &&
    value instanceof Object === true,
    value
  );
