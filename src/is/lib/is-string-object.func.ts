// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type instance of `String` and `Object`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `String` instance.
 * @angularpackage
 */
export const isStringObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is String =>
  callback(
    value instanceof Object === true &&
    value instanceof String === true &&
    typeof value === 'object',
    {
      ...{
        name: isStringObject.name,
        value,
      },
      ...payload,
    } as Payload
  );


console.log(
  isStringObject('age'),
  isStringObject(new String('age'))
);
  