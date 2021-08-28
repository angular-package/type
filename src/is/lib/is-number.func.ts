// Function.
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `number` type(by using `isNumberType()`), or an instance of `Number`(by using `isNumberObject()`) and the
 * obtained type from its `Object.prototype` is equal to `'number'`. The value is also checked by the `isFinite()` function that determines
 * whether a supplied number is finite.
 * @param value The `value` of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a finite number of a `number` type or an instance of
 * `Number`.
 * @angularpackage
 */
export const isNumber = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is number =>
  callback(
    typeOf(value) === 'number' &&
    isFinite(value) === true &&
    (isNumberType(value) || isNumberObject(value)),
    value,
    { name: isNumber.name, ...payload } as Payload
  );
