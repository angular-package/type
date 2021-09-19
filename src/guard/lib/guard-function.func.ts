// Function.
import { isFunction } from '../../is/lib/is-function.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `Function`.
 * @param value The `function` of a generic type variable `Type`, by default of the type captured from the provided `value`, to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `Function`.
 */
export const guardFunction = <Type extends Function, Payload extends object>(
  value: Type,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isFunction(value, callback, payload);
