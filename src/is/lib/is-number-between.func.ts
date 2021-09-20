// Function.
import { isNumber } from './is-number.func';
import { isNumberType } from './is-number-type.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { MinMax } from '../../interface/min-max.interface';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { CallbackPayload } from '../../type/callback-payload.type';
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `number` type or an instance of `Number` by using `isNumber()` between a specified range.
 * @param value The value of any type to check.
 * @param range An `object` of optional minimum and maximum `range` of a given `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the minimum and maximum `range` and optional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a finite number of a `number` type or an instance
 * of `Number` between a specified range.
 * @angularpackage
 */
export const isNumberBetween = <
  Type extends AnyNumber = number,
  Min extends number = number,
  Max extends number = number,
  Payload extends object = object
>(
  value: any,
  range: MinMax<Min, Max>,
  callback: ResultCallback<
    any,
    CallbackPayload<MinMax<Min, Max> & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is NumberBetween<Min, Max, Type> =>
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
      ...payload,
      min: range?.min,
      max: range?.max
    } as any
  );
