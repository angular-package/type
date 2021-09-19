// Function.
import { isObjectKeys } from '../../is/lib/is-object-keys.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `object` of a generic type variable `Obj` with its specified `keys`.
 * @param value An object of a generic type variable `Obj`, by default of the type captured from the `value` that contains the given `keys`
 * to guard.
 * @param keys An `Array` of property keys to check that the `value` contains.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The `value` is a `boolean` indicating whether the `value` is an `object` with its specified `keys`.
 */
export const guardObjectKeys = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  keys: Key[],
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ keys: typeof keys } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj => isObjectKeys(value, keys, callback, payload as any);
