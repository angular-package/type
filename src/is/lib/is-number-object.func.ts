// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type and an instance of both `Number` and `Object`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of `Number`.
 * @angularpackage
 */
export const isNumberObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<Number, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Number =>
  callback(
    typeof value === 'object' &&
    value instanceof Number === true &&
    value instanceof Object === true,
    value,
    { name: isNumberObject.name, ...payload } as Payload
  );
