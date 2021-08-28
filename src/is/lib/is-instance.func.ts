// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { Constructor } from '../../type/constructor.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type, an instance of `Object` and an instance of the provided `constructor`.
 * @param value The `value` of any type to check against an instance of the provided `constructor`.
 * @param constructor A `class` or `function` that specifies the type of the `Constructor`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the provided `constructor` and optional properties from the provided
 * `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of a given `constructor`.
 * @angularpackage
 */
export const isInstance = <Obj, Payload extends object>(
  value: any,
  constructor: Constructor<Obj>,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ constructor?: typeof constructor } & Payload>
): value is Obj =>
  callback(
    typeof value === 'object' &&
    value instanceof Object === true &&
    typeof constructor === 'function'
    ? value instanceof constructor === true
    : false,
    value,
    { name: isInstance.name, constructor, ...payload } as any
  );
