// Function.
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `string` type not instance of `Object` and `String` or `object` type and instance of `String` and `Object`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or `String` object.
 * @angularpackage
 */
export const isString = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is string =>
  callback(
    typeOf(value) === 'string' &&
    (isStringType(value) || isStringObject(value)),
    {
      ...{
        name: isString.name,
        value,
      },
      ...payload,
    } as Payload
  );
