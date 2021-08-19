// Function.
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, or is an `object` type and instance of `Boolean` and
 * `Object` and equal to `false`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `boolean` equal to `false`.
 * @angularpackage
 */
export const isFalse = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is false =>
  callback(
    (isBooleanType(value) && value === false) ||
    (isBooleanObject(value) && value.valueOf() === false),
    {
      ...{
        name: isFalse.name,
        value,
      },
      ...payload,
    } as Payload
  );
