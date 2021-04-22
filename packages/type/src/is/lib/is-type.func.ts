// Function.
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isNumber } from './is-number.func';
import { isObject } from './is-object.func';
import { isPrimitive } from './is-primitive.func';
import { isString } from './is-string.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
// Type.
import { IsType } from '../type/is-type.type';
import { Types } from '../../type/types.type';
import { isNotNull } from '../not/lib/is-not-null.func';
/**
 * Checks if any `value` is a generic `Type` from the `Types`.
 * @param value Any `value` to check if its type is from the `type`.
 * @param type One type from the `Types` to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` is a type from the `Types`.
 */
export const isType: IsType = <Type>(value: any, type: Types<Type>): value is Type => {
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
      case 'object': return isObject<Type>(value);
    }
  } else if (isNotNull(type)) {
    return isInstance<Type>(value, type);
  }
  return false;
};
