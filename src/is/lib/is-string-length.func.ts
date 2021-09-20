// Function.
import { isNumberType } from './is-number-type.func';
import { isObject } from './is-object.func';
import { isString } from './is-string.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { MinMax } from '../../interface/min-max.interface';
// Type.
import { AnyString } from '../../type/any-string.type';
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
import { StringOfLength } from '../../type/string-of-length.type';
/**
 * Checks if any value is a `string` type or an instance of `String` by using `isString()` of `length` within the specified range.
 * @param value The value of any type to check.
 * @param length An `object` of optional minimum and a maximum `length` of the given `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the minimum and maximum `length` and optional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` of length
 * within the specified range.
 * @angularpackage
 */
export const isStringLength = <
  Type extends AnyString = string,
  Min extends number = number,
  Max extends number = number,
  Payload extends object = object
>(
  value: any,
  length: MinMax<Min, Max>,
  callback: ResultCallback<
    any,
    CallbackPayload<MinMax<Min, Max> & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is StringOfLength<Min, Max, Type> =>
  callback(
    isString(value) && isObject(length)
    ? (isNumberType(length.min) && length.min >= 0
        ? value.valueOf().length >= length.min
        : true) &&
        (isNumberType(length.max) && length.max >= 0
          ? value.valueOf().length <= length.max
          : true)
    : false,
    value,
    {
      ...payload,
      min: length?.min,
      max: length?.max,
    } as Payload
  );
