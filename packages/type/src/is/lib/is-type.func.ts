import { IsType } from '../type/is-type.type';
import { Types } from '../../type/types.type';
import { isString } from './is-string.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isNumber } from './is-number.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
import { isObject } from './is-object.func';
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
/**
 * Checks if any `value` is a generic `Type` type constructor, `'function'`, `'object'` or primitive type.
 * Use the `guardType()` to type-guard generic `Type` type also.
 * @param value Any value to check if it's a generic `Type` type from one of the `type`.
 * @param type Generic constructor `Type`, `'function'`, `'object'` or one of the `Primitives` `'bigint'`, `'boolean'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` to check `value` type.
 */
export const isType: IsType = <Type>(value: any, type: Types<Type>): value is Type => {
  if (isString(type)) {
    switch (type) {
      case 'bigint': return isBigInt(value);
      case 'boolean': return isBoolean(value);
      case 'function': return isFunction(value);
      case 'number': return isNumber(value);
      case 'object': return isObject<Type>(value);
      case 'string': return isString(value);
      case 'symbol': return isSymbol(value);
      case 'undefined': return isUndefined(value);
    }
  }
  return type ? isInstance<Type>(value, type) : false;
};
