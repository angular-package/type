// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `function` type, an instance of both `Function` and `Object`, and the obtained type from its
 * `Object.prototype` is equal to `'function'`. It also denies it's a `class` by using `regexp` on the obtained string from its
 * `Function.prototype`.
 * @param value The value of the captured type of `function` from the provided `value` or else any type, to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a function.
 * @angularpackage
 */
export const isFunction = <Type extends any, Payload extends object = object>(
  value: Type extends Function ? Type : any,
  callback: ResultCallback<
    Type extends Function ? Type : Function,
    typeof payload
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type extends Function ? Type : Function =>
  callback(
    typeOf(value) === 'function' &&
    typeof value === 'function' &&
    (value as any) instanceof Function === true &&
    (value as any) instanceof Object === true
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5)) ===
    false
    : false,
    value,
    { name: isFunction.name, ...payload } as Payload
  );
