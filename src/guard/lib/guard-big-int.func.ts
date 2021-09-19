// Function.
import { isBigInt } from '../../is/lib/is-big-int.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `bigint`.
 * @param value A `bigint` type value to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return `value` is a `boolean` indicating whether the `value` is a `bigint`.
 */
export const guardBigInt = <Payload extends object>(
  value: bigint,
  callback?: ResultCallback<bigint, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is bigint =>
  isBigInt(value, callback, payload);
