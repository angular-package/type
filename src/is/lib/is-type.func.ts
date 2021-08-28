// Function.
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isNotNull } from '../not/lib/is-not-null.func';
import { isObject } from './is-object.func';
import { isPrimitive } from './is-primitive.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
/**
 * Checks if any `value` is a type of `Type` from a given `type` of the `Types`.
 * @param value The `value` of any type to check against a type of given `type` of `Types`.
 * @param type A value of `string` or `Constructor` type of the `Types` indicates against which type the provided `value` is checked.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape with the provided `type` and optional properties from the provided
 * `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a type from a given `type`.
 * @angularpackage
 */
export const isType = <T extends Type, Payload extends object = object>(
  value: any,
  type: Types<T>,
  callback: ResultCallback<T, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is T => {
  switch (type) {
    // Primitives.
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'null':
    case 'string':
    case 'symbol':
    case 'undefined':
      return isPrimitive(value, type, callback, payload);
    // Function.
    case 'function':
      return isFunction(value, callback, payload);
    // Object.
    case 'object':
      return isObject(value, callback, payload);
    default:
      return isNotNull(type) ? isInstance(value, type, callback, payload as any) : false;
  }
};
