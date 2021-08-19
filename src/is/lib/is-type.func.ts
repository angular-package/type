// Function.
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isNotNull } from '../not/lib/is-not-null.func';
import { isObject } from './is-object.func';
import { isPrimitive } from './is-primitive.func';
import { isStringType } from './is-string-type.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
/**
 * Checks if any `value` is a type of `Type` from a given `type` of the `Types`.
 * @param value The `value` of any type to check against a type of given `type` of `Types`.
 * @param type A value of `string` or `Constructor` type of the `Types` indicates against which type the provided `value` is checked.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape to handle
 * the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a type from a given `type` of the `Types`.
 * @angularpackage
 */
export const isType = <T extends Type, Payload extends object = object>(
  value: any,
  type: Types<T>,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is T => {
  if (isStringType(type)) {
    switch (type) {
      // Primitives.
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'null':
      case 'string':
      case 'symbol':
      case 'undefined': return isPrimitive(value, type, callback, payload);
      // Function.
      case 'function': return isFunction(value, callback, payload);
      // Object.
      case 'object': return isObject(value, callback, payload);
    }
  } else if (isNotNull(type)) {
    return isInstance(value, type, callback, payload);
  }
  return false;
};
