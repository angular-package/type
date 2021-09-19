// Function.
import { isClass } from '../../is/lib/is-class.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `class` of generic type variable `Class`.
 * @param value The `class` of a generic type variable `Class`, by default of the type captured from the provided `value` parameter, to
 * guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `class` of a generic type variable `Class`.
 */
export const guardClass = <
  Class extends Function,
  Payload extends object = object
>(
  value: Class,
  callback?: ResultCallback<Class, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Class =>
  isClass(value, callback, payload);
