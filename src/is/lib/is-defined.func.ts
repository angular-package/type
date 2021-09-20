// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { Defined } from '../../type/defined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is not an `undefined` type and is not equal to `undefined`.
 * @param value The value of a generic type variable `Type`, by default of type captured from the provided `value`, to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is defined, not `undefined`.
 * @angularpackage
 */
export const isDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Defined<Type> =>
  callback(typeof value !== 'undefined' && value !== undefined, value, payload);
