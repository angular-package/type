// Function.
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `number` type not an instance of `Number` and `Object` or `object` type instance of `Number` and `Object`.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `number` type or `Number` object.
 * @angularpackage
 */
export const isNumber = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is number =>
  callback(
    typeOf(value) === 'number' &&
    isFinite(value) === true &&
    (isNumberType(value) || isNumberObject(value)),
    {
      ...{
        name: isNumber.name,
        value,
      },
      ...payload,
    } as Payload
  );
