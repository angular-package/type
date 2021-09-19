// Function.
import { isInstance } from '../../is/lib/is-instance.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { Constructor } from '../../type/constructor.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the `value` to be an instance of the given `constructor`.
 * @param value An `object` of a generic type variable `Obj`, by default of the type captured from the provided `value` to guard and to
 * check if it's an instance of a given `constructor`.
 * @param constructor A `class` or `function` that specifies the type of the `constructor`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is an instance of a given `constructor`.
 */
export const guardInstance = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  constructor: Constructor<Obj>,
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ ctor: typeof constructor } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  isInstance(value, constructor, callback, payload);
