// Function.
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
import { MinMax } from '../../interface/min-max.interface';
// Type.
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `number` type not an instance of `Object` and `Number` or `object` type instance of `Number` and `Object`,
 * in the specified range.
 * @param value The `value` of any type to check.
 * @param min A `number` of the minimum range of the provided `value`.
 * @param max A `number` of the maximum range of the provided `value`.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape and the
 * provided `min` and `max` range to handle the `result` and `payload` of the check before the `result` return. By default it uses
 * `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns A `boolean` indicating whether the provided `value` is a `number` type or `Number` instance in the specified range.
 * @angularpackage
 */
export const isNumberBetween = <
  Payload extends object,
  Min extends number,
  Max extends number
>(
  value: any,
  min: Min,
  max: Max,
  callback: ResultCallback<
    CallbackPayload & Payload & MinMax<Min, Max>
  > = resultCallback,
  payload?: Payload
): value is NumberBetween<Min, Max> =>
  callback(
    typeOf(value) === 'number' &&
      ((isNumberType(value) ? value >= min && value <= max : false) ||
        (isNumberObject(value)
          ? value.valueOf() >= min && value.valueOf() <= max
          : false)),
    {
      ...{
        name: isNumberBetween.name,
        min,
        max,
        value,
      },
      ...payload,
    } as CallbackPayload & Payload & MinMax<Min, Max>
  );
