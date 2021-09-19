// Function.
import { isArray } from '../../is/lib/is-array.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `array` of a generic type variable `Type`.
 * @param value An `array` of a generic type variable `Type`, implicitly of the type captured from the supplied `value`, to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return `value` is a `boolean` indicating whether the `value` is an `array` of a generic type variable `Type`.
 */
export const guardArray = <Type, Payload extends object = object>(
  value: Array<Type>,
  callback?: ResultCallback<Array<Type>, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Array<Type> =>
  isArray(value, callback, payload);
