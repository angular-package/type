// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `function` type, an instance of both `Function` and `Object`, and the obtained type from its `Object.prototype`
 * is equal to `'function'`. It also confirms it's a `class` by using `regexp` on the obtained string from its `Function.prototype`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `class`.
 * @angularpackage
 */
export const isClass = <Class = Function, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Class =>
  callback(
    typeOf(value) === 'function' &&
    typeof value === 'function' &&
    value instanceof Function === true &&
    value instanceof Object === true
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5))
    : false,
    value,
    { name: isClass.name, ...payload } as Payload
  );
