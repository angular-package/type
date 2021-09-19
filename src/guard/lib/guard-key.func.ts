// Function.
import { isKey } from '../../is/lib/is-key.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be one of `string`, `number`, or `symbol` type.
 * @param value The value of `PropertyKey` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `string`, `number`, or `symbol`.
 */
export const guardKey = <Payload extends object>(
  value: PropertyKey,
  callback?: ResultCallback<PropertyKey, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is PropertyKey =>
  isKey(value, callback, payload);
