// Import: Function.
import { isArray } from './is-array.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
import { isClass } from './is-class.func';
import { isDate } from './is-date.func';
import { isDefined } from './is-defined.func';
import { isFalse } from './is-false.func';
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isKey } from './is-key.func';
import { isNull } from './is-null.func';
import { isNumber } from './is-number.func';
import { isNumberBetween } from './is-number-between.func';
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { isObject } from './is-object.func';
import { isObjectKey } from './is-object-key.func';
import { isObjectKeyIn } from './is-object-key-in.func';
import { isObjectKeys } from './is-object-keys.func';
import { isPrimitive } from './is-primitive.func';
import { isRegExp } from './is-regexp.func';
import { isString } from './is-string.func';
import { isStringLength } from './is-string-length.func';
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { isSymbol } from './is-symbol.func';
import { isType } from './is-type.func';
import { isUndefined } from './is-undefined.func';
// Import: Object.
import { isNot } from '../not/lib/is-not.object';
// Import: Interface.
import { Is } from '../interface/is.interface';
import { isTrue } from './is-true.func';
// Export: `is`.
export const is: Is = {
  array: isArray,
  bigInt: isBigInt, // deprecated
  bigint: isBigInt,
  boolean: isBoolean,
  booleanObject: isBooleanObject,
  booleanType: isBooleanType,
  class: isClass,
  date: isDate, // From `4.2.0`
  defined: isDefined,
  false: isFalse, // From `4.2.0`
  function: isFunction,
  instance: isInstance,
  key: isKey,
  not: isNot,
  null: isNull,
  number: isNumber,
  numberBetween: isNumberBetween, // From `4.2.0`
  numberObject: isNumberObject,
  numberType: isNumberType,
  object: isObject,
  objectKey: isObjectKey,
  objectKeyIn: isObjectKeyIn,
  objectKeys: isObjectKeys,
  primitive: isPrimitive,
  regexp: isRegExp, // From `4.2.0`
  string: isString,
  stringLength: isStringLength, // From `4.2.0`
  stringObject: isStringObject,
  stringType: isStringType,
  symbol: isSymbol,
  true: isTrue, // From `4.2.0`
  type: isType,
  undefined: isUndefined
};
