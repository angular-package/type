// Function.
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isNull } from './is-null.func';
import { isNumber } from './is-number.func';
import { isString } from './is-string.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsPrimitive } from '../type/is-primitive.type';
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is the `Primitive` type from a `type` of the `Primitives` type.
 * @param value Any `value` to check if it's a `Primitive` from the `type`.
 * @param type A `string` type from the `Primitives` to check the `value`.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `type` from the `Primitives`.
 */
export const isPrimitive: IsPrimitive = <T extends Primitive>(
  value: any,
  type: Primitives,
  callback: ResultCallback = resultCallback
): value is T => {
  if (isString(type)) {
    switch (type) {
      case 'bigint': return isBigInt(value, callback);
      case 'boolean': return isBoolean(value, callback);
      case 'number': return isNumber(value, callback);
      case 'null': return isNull(value, callback);
      case 'string': return isString(value, callback);
      case 'symbol': return isSymbol(value, callback);
      case 'undefined': return isUndefined(value, callback);
    }
  }
  return false;
};
