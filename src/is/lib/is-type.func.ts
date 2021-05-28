// Function.
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isNotNull } from '../not/lib/is-not-null.func';
import { isObject } from './is-object.func';
import { isPrimitive } from './is-primitive.func';
import { isStringType } from './is-string-type.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsType } from '../type/is-type.type';
import { ResultCallback } from '../../type/result-callback.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
/**
 * Checks if any `value` is the `Type` from a `type` of the `Types` type.
 * @param value Any `value` to check if its type is from the `type`.
 * @param type A `string` or generic `Constructor` type from the `Types` to check the `value`.
 * @param callback `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is the `Type` from a `type` of the `Types`.
 */
export const isType: IsType = <T extends Type>(value: any, type: Types<T>, callback: ResultCallback = resultCallback): value is T => {
  if (isStringType(type)) {
    switch (type) {
      // Primitives.
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'null' :
      case 'string':
      case 'symbol':
      case 'undefined': return isPrimitive(value, type, callback);
      // Function.
      case 'function': return isFunction(value, callback);
      // Object.
      case 'object': return isObject<T>(value);
    }
  } else if (isNotNull(type)) {
    return isInstance<T>(value, type, callback);
  }
  return false;
};
