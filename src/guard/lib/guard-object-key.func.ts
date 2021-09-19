// Function.
import { isObjectKey } from '../../is/lib/is-object-key.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `object` of generic type variable `Obj` that contains the given `key`.
 * @param value An `object` of a generic type variable `Obj`, by default of the type captured from the provided `value` that contains the
 * given `key`.
 * @param key A key of `Obj` type as the name of the property that the given `value` contains.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is an `object` of generic type variable `Obj` that contains the
 * given `key`.
 */
export const guardObjectKey = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  key: Key,
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ key: typeof key } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  isObjectKey(value, key, callback, payload as any);
