import { IsPrimitive } from '../type/is-primitive.type';
import { Primitives } from '../../type/primitives.type';
import { isString } from './is-string.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isNumber } from './is-number.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
/**
 * Checks if any `value` is a generic type from one of the `Primitives`.
 * Use the `guardPrimitive()` function to type-guard generic type also.
 * @param value Any `value` to check if it's a generic type from the argument `type`.
 * @param type One of the `Primitives` `'bigint'`, `'boolean'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` type to check `value`.
 */
export const isPrimitive: IsPrimitive = <Type>(value: any, type: Primitives): value is Type => {
  if (isString(type)) {
    switch (type) {
      case 'bigint': return isBigInt(value);
      case 'boolean': return isBoolean(value);
      case 'number': return isNumber(value);
      case 'string': return isString(value);
      case 'symbol': return isSymbol(value);
      case 'undefined': return isUndefined(value);
    }
  }
};
