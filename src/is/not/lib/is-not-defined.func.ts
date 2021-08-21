// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../../type/result-callback.type';
import { Undefined } from '../../../type/undefined.type';
/**
 * Checks if the `value` of a generic `Type` is an `undefined` type and is equal to `undefined`.
 * @param value The `value` of a generic `Type`, by default of type captured from the provided `value` to check.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is not defined.
 * @angularpackage
 */
export const isNotDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Undefined<Type> =>
  callback(
    typeOf(value) === 'undefined' &&
    typeof value === 'undefined' &&
    value === undefined,
    {
      ...{ name: isNotDefined.name, value },
      ...payload,
    } as Payload
  );
