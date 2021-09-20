// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `number` type, or the type obtained from its `Object.prototype` equal to `'number'` or an `object` type
 * and an instance of `Number`. The value is also checked by the `Number.isFinite()` method to determine whether it's finite and is
 * validated by the `Number.isNaN()` method.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a finite number of a `number` type or an instance of
 * `Number`.
 * @angularpackage
 */
export const isNumber = <
  Type extends AnyNumber = number,
  Payload extends object = object
>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  callback(
    (typeof value === 'number' ||
    ((typeOf(value) === 'number' || typeof value === 'object') &&
      value instanceof Number)) &&
    !Number.isNaN(value.valueOf()) &&
    Number.isFinite(value.valueOf()),
    value,
    payload
  );
