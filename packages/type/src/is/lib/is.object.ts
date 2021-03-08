// Functions.
import { isArray } from './is-array.func';
import { isFunction } from './is-function.func';
import { isNumber } from './is-number.func';
import { isObject } from './is-object.func';
import { isPrimitive } from './is-primitive.func';
import { isString } from './is-string.func';
import { isType } from './is-type.func';
import { isUndefined } from './is-undefined.func';
import { isBoolean } from './is-boolean.func';
import { isBigInt } from './is-big-int.func';
import { isSymbol } from './is-symbol.func';
// Interface.
import { Is } from '../interface/is.interface';
import { isNull } from './is-null.func';

export const is: Partial<Is> = {
  array: isArray,
  bigInt: isBigInt,
  boolean: isBoolean,
  function: isFunction,
  null: isNull,
  number: isNumber,
  object: isObject,
  primitive: isPrimitive,
  string: isString,
  symbol: isSymbol,
  type: isType,
  undefined: isUndefined
};
