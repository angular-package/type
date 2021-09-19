// Function.
import { isTrue } from '../../is/lib/is-true.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be `true`.
 * @param value The value of `true` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `boolean` type or an instance of `Boolean` equal to `true`.
 */
export const guardTrue = <Payload extends object>(
  value: true,
  callback?: ResultCallback<true, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is true =>
  isTrue(value, callback, payload);
