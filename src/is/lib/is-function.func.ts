// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `function` type, an instance of `Function` and `Object`.
 * @param value The value of the captured type of `function` from the provided `value` or else any type to check.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `Function`.
 * @angularpackage
 */
export const isFunction = <Value extends any, Payload extends object = object>(
  value: Value extends Function ? Value : any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Value extends Function ? Value : Function =>
  callback(
    typeOf(value) === 'function' &&
      typeof value === 'function' &&
      value as any instanceof Function === true &&
      value as any instanceof Object === true
      ? /class/.test(Function.prototype.toString.call(value).slice(0, 5)) ===
      false
      : false,
    {
      ...{
        name: isFunction.name,
        value,
      },
      ...payload,
    } as Payload
  );
