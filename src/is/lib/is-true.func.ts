// Function.
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsTrue } from '../type/is-true.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, or
 * is an `object` type and instance of `Boolean` and `Object` and equal to `true`.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `boolean` equal to `true`.
 */
export const isTrue: IsTrue = (
  value: any,
  callback: ResultCallback = resultCallback
): value is true =>
  callback(
    (isBooleanType(value) && value === true)
    ||
    (isBooleanObject(value) && value.valueOf() === true),
    value
  );
