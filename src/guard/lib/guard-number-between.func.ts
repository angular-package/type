// Function.
import { isNumberBetween } from '../../is/lib/is-number-between.func';
// Interface.
import { MinMax } from '../../interface/min-max.interface';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { CallbackPayload } from '../../type/callback-payload.type';
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be `number` between the specified range.
 * @param value The value of a generic type variable `Type` constrained by `AnyNumber`, by default of the type captured from the
 * provided `value`, to guard.
 * @param range An `object` of optional minimum and maximum `range` of the provided `value`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `number` type or an instance of `Number` between the
 * specified range.
 */
export const guardNumberBetween = <
  Type extends AnyNumber,
  Min extends number,
  Max extends number,
  Payload extends object = object
>(
  value: Type,
  range: MinMax<Min, Max>,
  callback?: ResultCallback<Type, CallbackPayload<MinMax<Min, Max> & Payload>>,
  payload?: CallbackPayload<Payload>
): value is NumberBetween<Min, Max, Type> =>
  isNumberBetween(value, range, callback, payload);
