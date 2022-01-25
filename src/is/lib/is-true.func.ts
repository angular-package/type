// Function.
import { isBoolean } from './is-boolean.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `boolean` type or an instance of `Boolean`(by using the `isBoolean()`) equal to `true`.
 * @var Payload The `Payload` generic type variable constrained by `object` indicates the type of optional parameter `payload` of the
 * supplied `callback` function and `payload` optional parameter of the `isTrue()` function from which it captures its value.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `boolean` type or an instance of `Boolean` that is
 * equal to `true`.
 * @angularpackage
 */
export const isTrue = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, Payload> = resultCallback,
  payload?: Payload
): value is true =>
  callback(isBoolean(value) ? value.valueOf() === true : false, value, payload);
