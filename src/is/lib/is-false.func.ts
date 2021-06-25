// Function.
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsFalse } from '../type/is-false.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, or
 * is an `object` type and instance of `Boolean` and `Object` and equal to `false`.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `boolean` equal to `false`.
 */
export const isFalse: IsFalse = (
  value: any,
  callback: ResultCallback = resultCallback
): value is false =>
  callback(
    (isBooleanType(value) && value === false)
    ||
    (isBooleanObject(value) && value.valueOf() === false),
    value
  );
