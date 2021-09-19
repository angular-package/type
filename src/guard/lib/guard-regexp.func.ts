// Function.
import { isRegExp } from '../../is/lib/is-regexp.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `RegExp`.
 * @param value A `RegExp` type value to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return `value` is a `boolean` indicating whether the `value` is a `RegExp`.
 */
export const guardRegExp = <Payload extends object>(
  value: RegExp,
  callback?: ResultCallback<RegExp, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is RegExp =>
  isRegExp(value, callback, payload);
