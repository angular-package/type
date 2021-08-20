// Function.
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
import { StringOfLength } from '../../type/string-of-length.type';
import { MinMax } from '../../interface/min-max.interface';
/**
 * Checks if any `value` is a `string` type not instance of `Object` and `String` or `object` type and instance of `String` and `Object`,
 * of a length in the specified range.
 * @param value The `value` of any type to check.
 * @param min A `number` of the minimum length of the provided `value`.
 * @param max A `number` of the maximum length of the provided `value`.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape and
 * the provided `min` and `max` length to handle the `result` and `payload` of the check before the `result` return. By default it uses
 * `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or `String` instance of length in
 * the specified range.
 * @angularpackage
 */
export const isStringLength = <
  Min extends number,
  Max extends number,
  Payload extends object
>(
  value: any,
  min: Min,
  max: Max,
  callback: ResultCallback<
    CallbackPayload & MinMax<Min, Max> & Payload
  > = resultCallback,
  payload?: Payload
): value is StringOfLength<Min, Max> =>
  callback(
    typeOf(value) === 'string' &&
    ((isStringType(value)
      ? value.length >= min && value.length <= max
      : false) ||
      (isStringObject(value)
        ? value.valueOf().length >= min && value.valueOf().length <= max
        : false)),
    {
      ...{
        name: isStringObject.name,
        min,
        max,
        value,
      },
      ...payload,
    } as CallbackPayload & MinMax<Min, Max> & Payload
  );
