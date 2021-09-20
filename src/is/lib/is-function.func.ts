// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `function` type or the type obtained from its `Object.prototype` equal to `'function'` and an instance
 * of `Function`. It also denies it's a `class` by using `regexp` on the obtained string from its `Function.prototype`.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a function.
 * @angularpackage
 */
export const isFunction = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Function =>
  callback(
    typeof value === 'function' ||
    (typeOf(value) === 'function' && (value as any) instanceof Function)
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5)) ===
        false
    : false,
    value,
    payload
  );
