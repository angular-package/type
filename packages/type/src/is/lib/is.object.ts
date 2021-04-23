// Function.
import { isArray } from './is-array.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isDefined } from './is-defined.func';
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isKey } from './is-key.func';
import { isNull } from './is-null.func';
import { isNumber } from './is-number.func';
import { isObject } from './is-object.func';
import { isObjectKey } from './is-object-key.func';
import { isPrimitive } from './is-primitive.func';
import { isString } from './is-string.func';
import { isSymbol } from './is-symbol.func';
import { isType } from './is-type.func';
import { isUndefined } from './is-undefined.func';
// Object.
import { isNot } from '../not/lib/is-not.object';
// Interface.
import { Is } from '../interface/is.interface';

export const is: Is = {
  array: isArray,
  bigint: isBigInt,
  bigInt: isBigInt, // deprecated
  boolean: isBoolean,
  defined: isDefined,
  function: isFunction,
  instance: isInstance,
  key: isKey,
  not: isNot,
  null: isNull,
  number: isNumber,
  object: isObject,
  objectKey: isObjectKey,
  primitive: isPrimitive,
  string: isString,
  symbol: isSymbol,
  type: isType,
  undefined: isUndefined
};
