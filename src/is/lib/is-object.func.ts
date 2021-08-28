// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type, an instance of `Object` and the obtained type from its `Object.prototype` is equal to
 * `'object'`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object`.
 * @angularpackage
 */
export const isObject = <Obj = object, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(
    typeOf(value) === 'object' &&
    typeof value === 'object' &&
    value instanceof Object === true,
    value,
    { name: isObject.name, ...payload } as Payload
  );
