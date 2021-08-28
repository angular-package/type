// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `number` type and it's not an instance of both `Number` and `Object`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `number` type.
 * @angularpackage
 */
export const isNumberType = <Payload extends object>(
  value: any,
  callback: ResultCallback<number, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is number =>
  callback(
    value instanceof Number === false &&
    value instanceof Object === false &&
    typeof value === 'number',
    value,
    { name: isNumberType.name, ...payload } as Payload
  );
