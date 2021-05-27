// Function.
import { isArray } from './is-array.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
import { isClass } from './is-class.func';
import { isDefined } from './is-defined.func';
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isKey } from './is-key.func';
import { isNull } from './is-null.func';
import { isNumber } from './is-number.func';
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { isObject } from './is-object.func';
import { isObjectKey } from './is-object-key.func';
import { isObjectKeyIn } from './is-object-key-in.func';
import { isObjectKeys } from './is-object-keys.func';
import { isPrimitive } from './is-primitive.func';
import { isString } from './is-string.func';
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { isSymbol } from './is-symbol.func';
import { isType } from './is-type.func';
import { isUndefined } from './is-undefined.func';
// Object.
import { isNot } from '../not/lib/is-not.object';
// Interface.
import { Is } from '../interface/is.interface';
// `is`.
export const is: Is = {
  array: isArray,
  bigInt: isBigInt, // deprecated
  bigint: isBigInt,
  boolean: isBoolean,
  booleanObject: isBooleanObject,
  booleanType: isBooleanType,
  class: isClass,
  defined: isDefined,
  function: isFunction,
  instance: isInstance,
  key: isKey,
  not: isNot,
  null: isNull,
  number: isNumber,
  numberObject: isNumberObject,
  numberType: isNumberType,
  object: isObject,
  objectKey: isObjectKey,
  objectKeyIn: isObjectKeyIn,
  objectKeys: isObjectKeys,
  primitive: isPrimitive,
  string: isString,
  stringObject: isStringObject,
  stringType: isStringType,
  symbol: isSymbol,
  type: isType,
  undefined: isUndefined
};
