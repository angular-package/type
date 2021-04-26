// Function.
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isNull } from './is-null.func';
import { isNumber } from './is-number.func';
import { isString } from './is-string.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
// Type.
import { IsPrimitive } from '../type/is-primitive.type';
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
/**
 * Checks if any `value` is a `Primitive` type from the `type` of the `Primitives` type.
 * @param value Any `value` to check if it's a `Primitive` from the `type`.
 * @param type A `string` name of the `type` from the `Primitives` to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` is a `type` from the `Primitives`.
 */
export const isPrimitive: IsPrimitive = <T extends Primitive>(value: any, type: Primitives): value is T => {
  if (isString(type)) {
    switch (type) {
      case 'bigint': return isBigInt(value);
      case 'boolean': return isBoolean(value);
      case 'number': return isNumber(value);
      case 'null': return isNull(value);
      case 'string': return isString(value);
      case 'symbol': return isSymbol(value);
      case 'undefined': return isUndefined(value);
    }
  }
  return false;
};
