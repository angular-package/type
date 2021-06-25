// Function.
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsStringLength } from '../type/is-string-length.type';
import { ResultCallback } from '../../type/result-callback.type';
import { StringOfLength } from '../../type/string-of-length.type';
/**
 * Checks if any `value` is a `string` type, not instance of `Object` and `String` or `object` type and instance of `String` and `Object`,
 * of a length in the specified range.
 * @param value Any `value` to check.
 * @param min A `number` of the minimum length of the provided `value`.
 * @param max A `number` of the maximum length of the provided `value`.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `string` type or `String` instance of length in the specified range.
 */
export const isStringLength: IsStringLength = <
  Min extends number,
  Max extends number
>(
  value: any,
  min: Min,
  max: Max,
  callback: ResultCallback = resultCallback
): value is StringOfLength<Min, Max> =>
  callback(
    typeOf(value) === 'string' &&
      ((isStringType(value)
        ? value.length >= min && value.length <= max
        : false) ||
        (isStringObject(value)
          ? value.valueOf().length >= min && value.valueOf().length <= max
          : false)),
    value
  );
