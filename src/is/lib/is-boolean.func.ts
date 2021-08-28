// Function.
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `boolean` type(by using `isBooleanType()`), or an instance of `Boolean`(by using `isBooleanObject()`) and the
 * obtained type from its `Object.prototype` is equal to `'boolean'`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `boolean` type or an instance of `Boolean`.
 * @angularpackage
 */
export const isBoolean = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is boolean =>
  callback(
    typeOf(value) === 'boolean' &&
    (isBooleanType(value) || isBooleanObject(value)),
    value,
    { name: isBoolean.name, ...payload } as Payload
  );
