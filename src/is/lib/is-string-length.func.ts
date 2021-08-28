// Function.
import { isNumberType } from './is-number-type.func';
import { isObject } from './is-object.func';
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
import { MinMax } from '../../interface/min-max.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
import { StringOfLength } from '../../type/string-of-length.type';
import { isString } from './is-string.func';
/**
 * Checks if any `value` is a `string` type or an instance of `String`(by using `isString()`) of a `length` within the specified range.
 * @param value The `value` of any type to check.
 * @param length An `object` of optional minimum and maximum `length` of the provided `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the minimum and maximum `length` and optional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` of length
 * within the specified range.
 * @angularpackage
 */
export const isStringLength = <
  Min extends number,
  Max extends number,
  Payload extends object
>(
  value: any,
  length: MinMax<Min, Max>,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<MinMax<Min, Max> & Payload>
): value is StringOfLength<Min, Max> =>
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
      name: isStringLength.name,
      min: length?.min,
      max: length?.max,
      ...payload,
    } as Payload
  );
