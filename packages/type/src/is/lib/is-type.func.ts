// Function.
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isObject } from './is-object.func';
import { isPrimitive } from './is-primitive.func';
import { isString } from './is-string.func';
// Type.
import { IsType } from '../type/is-type.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
import { isNotNull } from '../not/lib/is-not-null.func';
/**
 * Checks if any `value` is a `Type` from the `type` of the `Types` type.
 * @param value Any `value` to check if its type is from the `type`.
 * @param type A `string` or generic `Constructor` type from the `Types` to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` is a `Type` from the `type` of the `Types`.
 */
export const isType: IsType = <T extends Type>(value: any, type: Types<T>): value is T => {
  if (isString(type)) {
    switch (type) {
      // Primitives.
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'null' :
      case 'string':
      case 'symbol':
      case 'undefined': return isPrimitive(value, type);
      // Function.
      case 'function': return isFunction(value);
      // Object.
      case 'object': return isObject<T>(value);
    }
  } else if (isNotNull(type)) {
    return isInstance<T>(value, type);
  }
  return false;
};
