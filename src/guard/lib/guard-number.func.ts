// Function.
import { isNumber } from '../../is/lib/is-number.func';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `number` of any type.
 * @param value The value of a generic type variable `Type` constrained by `AnyNumber`, by default of the type captured from the
 * provided `value`, to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `number` type or an instance of `Number`.
 */
export const guardNumber = <
  Type extends AnyNumber,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isNumber(value, callback, payload);
