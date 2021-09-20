// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is of the type obtained from its `Object.prototype` equal to `'boolean'` or an `object` type, and an instance of
 * `Boolean` that is equal to `true` or `false`.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of `Boolean`.
 * @angularpackage
 */
export const isBooleanObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Boolean =>
  callback(
    (typeOf(value) === 'boolean' || typeof value === 'object') &&
    value instanceof Boolean &&
    (value.valueOf() === true || value.valueOf() === false),
    value,
    payload
  );
