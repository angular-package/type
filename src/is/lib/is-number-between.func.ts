// Function.
import { isNumber } from './is-number.func';
import { isNumberType } from './is-number-type.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `number` type or an instance of `Number`(by using `isNumber()`) between a specified range.
 * @var Type A generic type variable `Type` constrained by `AnyNumber` indicates the number type of the given `value` via the return type,
 * by default `number`.
 * @var Min A generic type variable `Min` constrained by the `number` type, by default of value captured from the supplied `min` indicates
 * the minimum range of the provided `value` via the return type and the fixed shape of optional `payload` parameter of the provided
 * `callback` function.
 * @var Max A generic type variable `Max` constrained by the `number` type, by default of value captured from the supplied `max` indicates
 * the maximum range of the provided `value` via the return type and the fixed shape of optional `payload` parameter of the provided
 * `callback` function.
 * @var Payload The `Payload` generic type variable constrained by `object` indicates the type of optional parameter `payload` of the
 * supplied `callback` function and `payload` optional parameter of the `isNumberBetween()` function from which it captures its value.
 * @param value The value of any type to check.
 * @param min The **minimum** range of generic type variable `Min` for a given `value`.
 * @param max The **maximum** range of generic type variable `Max` for a given `value`.
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
  min: Min,
  max: Max,
  callback: ResultCallback<
    any,
    { min: Min; max: Max } & Payload
  > = resultCallback,
  payload?: Payload
): value is NumberBetween<Min, Max, Type> =>
  callback(
    isNumber(value)
      ? (isNumberType(min) ? value.valueOf() >= min : false) &&
        (isNumberType(max) ? value.valueOf() <= max : false)
      : false,
    value,
    { ...payload, min, max } as any
  );
