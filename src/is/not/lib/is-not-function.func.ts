// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../../interface/callback-payload.interface';
// Type.
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if the `value` of a generic `Type` is not a `function` type and not an instance of `Function`.
 * @param value The `value` of a generic `Type`, by default of type captured from the provided `value` to check.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is not a `function`.
 * @angularpackage
 */
export const isNotFunction = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Never<Function, Type> =>
  callback(
    typeOf(value) !== 'function' &&
    typeof value !== 'function' &&
    value instanceof Function === false,
    {
      ...{ name: isNotFunction.name, value },
      ...payload,
    } as Payload
  );
