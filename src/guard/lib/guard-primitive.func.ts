// Function.
import { isPrimitive } from '../../is/lib/is-primitive.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be the `Primitive` type or the given `type` of the `Primitives`.
 * @param value The value of a generic type variable `Type` constrained by the `Primitive`, by default of the type captured from the
 * provided `value` to guard.
 * @param type An optional specific type of `Primitives` to check the given value.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is the `Primitive` type or the given `type`.
 */
export const guardPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: Type,
  type?: Primitives,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isPrimitive(value, type, callback, payload);
