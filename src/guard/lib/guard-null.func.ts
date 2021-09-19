// Function.
import { isNull } from '../../is/lib/is-null.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be `null`.
 * @param value The value of `null` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is `null`.
 */
export const guardNull = <Payload extends object>(
  value: null,
  callback?: ResultCallback<null, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is null =>
  isNull(value, callback, payload);
