// Function.
import { isDate } from '../../is/lib/is-date.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a date.
 * @param value The value of `Date` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the value is a date.
 */
export const guardDate = <Payload extends object>(
  value: Date,
  callback?: ResultCallback<Date, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Date =>
  isDate(value, callback, payload);
