// Function.
import { isDefined } from '../../is/lib/is-defined.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { Defined } from '../../type/defined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be defined, not `undefined`.
 * @param value The value of `Defined<Type>`, never undefined type captured from the provided `value` to guard against `undefined`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is defined.
 */
export const guardDefined = <Type, Payload extends object = object>(
  value: Defined<Type>,
  callback?: ResultCallback<Defined<Type>, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Defined<Type> =>
  isDefined(value, callback, payload);
