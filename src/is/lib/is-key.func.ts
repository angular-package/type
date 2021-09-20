// Function.
import { isNumberType } from './is-number-type.func';
import { isStringType } from './is-string-type.func';
import { isSymbol } from './is-symbol.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is one of the `string`, `number`, or `symbol` type.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `PropertyKey`.
 * @angularpackage
 */
export const isKey = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is PropertyKey =>
  callback(
    isStringType(value) || isNumberType(value) || isSymbol(value),
    value,
    payload
  );
