// Function.
import { isUndefined } from '../../is/lib/is-undefined.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be `undefined`.
 * @param value The value of an `undefined` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is `undefined`.
 */
export const guardUndefined = <Payload extends object>(
  value: undefined,
  callback?: ResultCallback<undefined, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is undefined =>
  isUndefined(value, callback, payload);
