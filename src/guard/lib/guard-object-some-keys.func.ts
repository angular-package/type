// Function.
import { isObjectSomeKeys } from '../../is/lib/is-object-some-keys.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `object` of a generic type variable `Obj` with its specified `keys`.
 * @param value An object of a generic type variable `Obj`, by default of the type captured from the `value` that contains some or some of
 * the groups of the given `keys`, to guard.
 * @param keys An `Array` of property names or a two-dimensional array of property names to check if the given `value` contains some of them
 * or some groups of them.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` with some or some groups of its keys from
 * a given `keys`.
 * @angularpackage
 */
export const guardObjectSomeKeys = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  keys: (keyof Obj | Array<keyof Obj>)[],
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ keys: typeof keys } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj => isObjectSomeKeys(value, keys, callback, payload as any);
