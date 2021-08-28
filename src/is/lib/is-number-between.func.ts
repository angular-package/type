// Function.
import { isNumber } from './is-number.func';
import { isNumberType } from './is-number-type.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
import { MinMax } from '../../interface/min-max.interface';
// Type.
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `number` type or an instance of `Number`(by using `isNumber()`) within the specified range.
 * @param value The `value` of any type to check.
 * @param range An `object` of optional minimum and maximum `range` of the provided `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the minimum and maximum `range` and optional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a finite number of a `number` type or an instance
 * of `Number` within the specified range.
 * @angularpackage
 */
export const isNumberBetween = <
  Payload extends object,
  Min extends number,
  Max extends number
>(
  value: any,
  range: MinMax<Min, Max>,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<MinMax<Min, Max> & Payload>
): value is NumberBetween<Min, Max> =>
  callback(
    isNumber(value) && isObject(range)
    ? (isNumberType(range.min) && range.min >= 0
      ? value.valueOf() >= range.min
      : true) &&
    (isNumberType(range.max) && range.max >= 0
      ? value.valueOf() <= range.max
      : true)
    : false,
    value,
    {
      name: isNumberBetween.name,
      min: range?.min,
      max: range?.max,
      ...payload,
    } as any
  );
