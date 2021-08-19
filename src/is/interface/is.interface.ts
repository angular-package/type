// Function.
import { isArray } from '../lib/is-array.func';
import { isBigInt } from '../lib/is-big-int.func';
import { isBoolean } from '../lib/is-boolean.func';
import { isBooleanObject } from '../lib/is-boolean-object.func';
import { isBooleanType } from '../lib/is-boolean-type.func';
import { isClass } from '../lib/is-class.func';
import { isDate } from '../lib/is-date.func';
import { isDefined } from '../lib/is-defined.func';
import { isFalse } from '../lib/is-false.func';
import { isFunction } from '../lib/is-function.func';
import { isInstance } from '../lib/is-instance.func';
import { isKey } from '../lib/is-key.func';
import { isNull } from '../lib/is-null.func';
import { isNumber } from '../lib/is-number.func';
import { isNumberBetween } from '../lib/is-number-between.func';
import { isNumberObject } from '../lib/is-number-object.func';
import { isNumberType } from '../lib/is-number-type.func';
import { isObject } from '../lib/is-object.func';
import { isObjectKey } from '../lib/is-object-key.func';
import { isObjectKeyIn } from '../lib/is-object-key-in.func';
import { isObjectKeys } from '../lib/is-object-keys.func';
import { isPrimitive } from '../lib/is-primitive.func';
import { isRegExp } from '../lib/is-regexp.func';
import { isString } from '../lib/is-string.func';
import { isStringLength } from '../lib/is-string-length.func';
import { isStringObject } from '../lib/is-string-object.func';
import { isStringType } from '../lib/is-string-type.func';
import { isSymbol } from '../lib/is-symbol.func';
import { isTrue } from '../lib/is-true.func';
import { isType } from '../lib/is-type.func';
import { isUndefined } from '../lib/is-undefined.func';
// Type.
import { IsNot } from '../not/interface/is-not.interface';
/**
 * Export: Interface.
 * Object with prefixed `is` functions.
 */
export interface Is {
  /**
   * Checks if any `value` is an `Array`, `Array` instance, and `object` type.
   */
  array: typeof isArray;

  /**
   * Checks if any `value` is a `bigint` type.
   */
  bigint: typeof isBigInt;

  /**
   * Checks if any `value` is a `boolean` type not instance of `Boolean` and `Object` or `object` type instance of `Boolean` and `Object`.
   */
  boolean: typeof isBoolean;

  /**
   * Checks if any `value` is an `object` type and instance of `Boolean` and `Object`.
   */
  booleanObject: typeof isBooleanObject;

  /**
   * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, and equal to `true` or `false`.
   */
  booleanType: typeof isBooleanType;

  /**
   * Checks if any `value` is a `function` type, an instance of `Function` and `Object` as a generic variable type `Class` of `class`.
   */
  class: typeof isClass;

  /**
   * Checks if any `value` is an `object` type instance of `Date` and `Object`.
   */
  date: typeof isDate; // From 4.2.0

  /**
   * Checks if the provided `value` of a generic `Type` is not an `undefined` type and is not equal to `undefined`.
   */
  defined: typeof isDefined;

  /**
   * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, or is an `object` type and instance of `Boolean`
   * and `Object` and equal to `false`.
   */
  false: typeof isFalse; // From `4.2.0`

  /**
   * Checks if any `value` is a `function` type, an instance of `Function` and `Object`.
   */
  function: typeof isFunction;

  /**
   * Checks if any `value` is an `object` of a generic `Obj` type and an `instance` of `Constructor` type.
   */
  instance: typeof isInstance;

  /**
   * Checks if any `value` is one of the `string`, `number`, or `symbol`.
   */
  key: typeof isKey;

  /**
   *
   */
  not: IsNot;

  /**
   * Checks if any `value` is an `object` type and equal to `null`.
   */
  null: typeof isNull;

  /**
   * Checks if any `value` is a `number` type not an instance of `Number` and `Object` or `object` type instance of `Number` and `Object`.
   */
  number: typeof isNumber;

  /**
   * Checks if any `value` is a `number` type, not instance of `Object` and `Number` or `object` type and instance of `Number`
   * and `Object`, in the specified range.
   */
  numberBetween: typeof isNumberBetween; // From `4.2.0`

  /**
   * Checks if any `value` is an `object` type and instance of `Number` and `Object`.
   */
  numberObject: typeof isNumberObject;

  /**
   * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, and equal to `true` or `false`.
   */
  numberType: typeof isNumberType;

  /**
   * Checks if any `value` is an `object` of a generic `Obj` type and `Object` instance.
   */
  object: typeof isObject;

  /**
   * Checks if any `value` is an `object` with its own specified `key` of the `PropertyKey` type.
   */
  objectKey: typeof isObjectKey;

  /**
   * Checks if any `value` is an `Object` with the `key` of the `Key` type by using the `in` operator.
   */
  objectKeyIn: typeof isObjectKeyIn;

  /**
   * Checks if any `value` is an `object` of a generic `Type` with some of its keys from given `keys` of the `PropertyKey` type.
   */
  objectKeys: typeof isObjectKeys;

  /**
   * Checks if any `value` is the `Primitive` type from a given `type` of the `Primitives`.
   */
  primitive: typeof isPrimitive;

  /**
   * Checks if any `value` is a regular expression of a `RegExp` type, an instance of `Object` and `RegExp`.
   */
  regexp: typeof isRegExp; // From 4.2.0

  /**
   * Checks if any `value` is a `string` type, not instance of `Object` and `String` or `object` type and instance of `String` and `Object`.
   */
  string: typeof isString;

  /**
   * Checks if any `value` is a `string` type, not instance of `Object` and `String` or `object` type and instance of `String` and `Object`,
   * of a length in the specified range.
   */
  stringLength: typeof isStringLength;

  /**
   * Checks if any `value` is an `object` type instance of `String` and `Object`.
   */
  stringObject: typeof isStringObject;

  /**
   * Checks if any `value` is a `string` type not instance of `String` and `Object`.
   */
  stringType: typeof isStringType;

  /**
   * Checks if any `value` is a `symbol` type.
   */
  symbol: typeof isSymbol;

  /**
   * Checks if any `value` is a `boolean` type not an instance of `Boolean` and `Object`, or is an `object` type and instance of `Boolean`
   * and `Object` and equal to `true`.
   */
  true: typeof isTrue; // From 4.2.0

  /**
   * Checks if any `value` is a type of `Type` from a given `type` of the `Types`.
   */
  type: typeof isType;

  /**
   * Checks if any `value` is an `undefined` type and equal to `undefined`.
   */
  undefined: typeof isUndefined;
}
