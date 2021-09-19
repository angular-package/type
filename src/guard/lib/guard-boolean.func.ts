// Function.
import { isBoolean } from '../../is/lib/is-boolean.func';
// Type.
import { AnyBoolean } from '../../type/any-boolean.type';
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be `boolean` of any type.
 * @param value The value of a generic type variable `Type`, by default of the type captured from the supplied `value`, to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `boolean` type or an instance of `Boolean`.
 */
export const guardBoolean = <
  Type extends AnyBoolean,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isBoolean(value, callback, payload);
