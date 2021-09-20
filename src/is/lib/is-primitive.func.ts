// Function.
import { isBigInt } from './is-big-int.func';
import { isBooleanType } from './is-boolean-type.func';
import { isNull } from './is-null.func';
import { isNumberType } from './is-number-type.func';
import { isStringType } from './is-string-type.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `Primitive` type or specific type from a given `type` of the `Primitives`.
 * @param value The value` of any type to check.
 * @param type An optional value of `Primitives` type indicates against which type the provided `value` is checked.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the provided `type` of `Primitives` and additional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a type of the `Primitives`.
 * @angularpackage
 */
export const isPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: any,
  type?: Primitives,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isStringType(type)
  ? {
      bigint: isBigInt,
      boolean: isBooleanType,
      number: isNumberType,
      null: isNull,
      string: isStringType,
      symbol: isSymbol,
      undefined: isUndefined,
    }[type](value, callback, payload)
  : callback(
      isNull(value) ||
        (typeof value !== 'object' && typeof value !== 'function'),
      value,
      payload
    );
