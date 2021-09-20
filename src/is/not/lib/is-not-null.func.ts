// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { CallbackPayload } from '../../../type/callback-payload.type';
import { ResultCallback } from '../../../type/result-callback.type';
import { Never } from '../../../type/never.type';
/**
 * Checks if the `value` is not the type obtained from its `Object.prototype` equal to `'null'` and not equal to `null`.
 * @param value The `value` of a generic `Type`, by default of type captured from the provided `value` to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is not `null`.
 * @angularpackage
 */
export const isNotNull = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<null, Type> =>
  callback(typeOf(value) !== 'null' && value !== null, value, payload);
