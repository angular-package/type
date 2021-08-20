// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { Constructor } from '../../type/constructor.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type, an instance of `Object` and an instance of the provided `constructor`.
 * @param value The `value` of any type to check against an instance of the provided `constructor`.
 * @param constructor A `class` or `function` that specifies the type of the `Constructor`.
 * @param callback A callback function of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape and the
 * provided `constructor` to handle the `result` and `payload` of the check before the `result` return. By default it uses
 * `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of a given `constructor`.
 * @angularpackage
 */
export const isInstance = <Obj, Payload extends object>(
  value: any,
  constructor: Constructor<Obj>,
  callback: ResultCallback<
    CallbackPayload & { constructor?: typeof constructor } & Payload
  > = resultCallback,
  payload?: Payload
): value is Obj =>
  callback(
    typeof value === 'object' &&
    value instanceof Object === true &&
    typeof constructor === 'function'
    ? value instanceof constructor === true
    : false,
    {
      ...{
        name: isInstance.name,
        constructor,
        value,
      },
      ...payload,
    } as CallbackPayload & { constructor?: typeof constructor } & Payload
  );
