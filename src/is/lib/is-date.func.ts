// Function.
import { typeOf } from '../../lib/type-of.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from 'dist/callback/interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type instance of `Date` and `Object`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a date.
 * @angularpackage
 */
export const isDate = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Date =>
  callback(
    typeOf(value) === 'date' &&
    typeof value === 'object' &&
    value instanceof Date === true &&
    value instanceof Object === true,
    {
      ...{
        name: isDate.name,
        value,
      },
      ...payload,
    } as Payload
  );
