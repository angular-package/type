// Function.
import { isObjectKeysIn } from '../../is/lib/is-object-keys-in.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `object` of a generic type variable `Obj` with specified keys in it(or its prototype chain).
 * @param value An object of a generic type variable `Obj`, by default of the type captured from the `value` that contains
 * (or its prototype chain) the given `keys` to guard.
 * @param keys An `Array` of property keys to check that the `value` contains(or its prototype chain).
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The `value` is a `boolean` indicating whether the `value` is an `object` with specified `keys` in it(or its prototype chain).
 */
export const guardObjectKeysIn = <
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
): value is Obj => isObjectKeysIn(value, keys, callback, payload as any);
