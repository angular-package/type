// Function.
import { isBigInt } from './is-big-int.func';
import { isBooleanType } from './is-boolean-type.func';
import { isNull } from './is-null.func';
import { isNumberType } from './is-number-type.func';
import { isStringType } from './is-string-type.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is the `Primitive` type from a given `type` of the `Primitives`.
 * @param value The `value` of any type to check against the `Primitive` of a given `type`.
 * @param type A value of `Primitives` type indicates against which type the provided `value` is checked.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the provided `type` of `Primitives` and additional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a type from a given `type` of the `Primitives`.
 * @angularpackage
 */
export const isPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: any,
  type: Primitives,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type => {
  switch (type) {
    case 'bigint':
      return isBigInt(value, callback, payload);
    case 'boolean':
      return isBooleanType(value, callback, payload);
    case 'number':
      return isNumberType(value, callback, payload);
    case 'null':
      return isNull(value, callback, payload);
    case 'string':
      return isStringType(value, callback, payload);
    case 'symbol':
      return isSymbol(value, callback, payload);
    case 'undefined':
      return isUndefined(value, callback, payload);
    default:
      return false;
  }
};
