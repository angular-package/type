// Function.
import { isObject } from '../../is/lib/is-object.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `object` of a generic type variable `Obj`.
 * @param value An `object` of a generic type variable `Obj`, by default of the type captured from the provided `value` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` of a generic type variable `Obj`.
 */
export const guardObject = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  callback?: ResultCallback<Obj, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  isObject(value, callback, payload);
