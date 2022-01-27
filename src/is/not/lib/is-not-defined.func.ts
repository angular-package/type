// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { ResultCallback } from '../../../type/result-callback.type';
import { Undefined } from '../../../type/undefined.type';
/**
 * Checks if the `value` is not the type obtained from its object class equal to `'undefined'`, not an `undefined` type and is not equal
 * to `undefined`.
 * @var Type A generic type variable `Type` indicates the captured type of the given `value` via the return type
 * `value is Undefined<Type>` and the `value` parameter of the provided `callback` function `ResultCallback` type.
 * @var Payload The `Payload` generic type variable constrained by `object` indicates the type of optional parameter `payload` of the
 * supplied `callback` function and `payload` optional parameter of the `isNotDefined()` function from which it captures its value.
 * @param value The `value` of a generic type variable `Type`, by default of the type captured from the provided `value` to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is not defined.
 * @angularpackage
 */
export const isNotDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, Payload> = resultCallback,
  payload?: Payload
): value is Undefined<Type> =>
  callback(
    typeOf(value) === 'undefined' &&
    typeof value === 'undefined' &&
    value === undefined,
    value,
    payload
  );
