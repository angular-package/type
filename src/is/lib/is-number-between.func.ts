// Function.
import { isNumber } from './is-number.func';
import { isNumberType } from './is-number-type.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { MinMax } from '../../interface/min-max.interface';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `number` type or an instance of `Number` by using `isNumber()` between a specified range.
 * @var Type A generic type variable `Type` constrained by `AnyNumber` by default of `number` indicates the type of the `value` via the
 * return type `value is NumberBetween<Min, Max, Type>`.
 * @var Min A generic type variable `Min` constrained by the `number` type, by default of value captured from optional `min` indicates the
 * minimum range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>`.
 * @var Max A generic type variable `Max` constrained by the `number` type, by default of value captured from optional `max` indicates the
 * maximum range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>`.
 * @var Payload The `Payload` generic type variable constrained by `object` indicates the type of optional parameter `payload` of the
 * supplied `callback` function and `payload` optional parameter of the `isDate()` function from which it captures its value.
 * @param value The value of any type to check.
 * @param min The optional **minimum** range of generic type variable `Min` for a given `value`.
 * @param max The optional **maximum** range of generic type variable `Max` for a given `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload`, with the minimum and maximum `range` and optional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
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
  min?: Min,
  max?: Max,
  callback: ResultCallback<any, MinMax<Min, Max> & Payload> = resultCallback,
  payload?: Payload
): value is NumberBetween<Min, Max, Type> =>
  callback(
    isNumber(value)
      ? (isNumberType(min) && min >= 0 ? value.valueOf() >= min : true) &&
        (isNumberType(max) && max >= 0 ? value.valueOf() <= max : true)
      : false,
    value,
    {
      ...payload,
      min,
      max,
    } as any
  );
