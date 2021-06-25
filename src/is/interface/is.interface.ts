// Import: Type.
import { IsArray } from '../type/is-array.type';
import { IsBigInt } from '../type/is-big-int.type';
import { IsBoolean } from '../type/is-boolean.type';
import { IsBooleanObject } from '../type/is-boolean-object.type';
import { IsBooleanType } from '../type/is-boolean-type.type';
import { IsClass } from '../type/is-class.type';
import { IsDate } from '../type/is-date.type';
import { IsDefined } from '../type/is-defined.type';
import { IsFalse } from '../type/is-false.type';
import { IsFunction } from '../type/is-function.type';
import { IsInstance } from '../type/is-instance.type';
import { IsKey } from '../type/is-key.type';
import { IsNot } from '../not/interface/is-not.interface';
import { IsNull } from '../type/is-null.type';
import { IsNumber } from '../type/is-number.type';
import { IsNumberBetween } from '../type/is-number-between.type';
import { IsNumberObject } from '../type/is-number-object.type';
import { IsNumberType } from '../type/is-number-type.type';
import { IsObject } from '../type/is-object.type';
import { IsObjectKey } from '../type/is-object-key.type';
import { IsObjectKeyIn } from '../type/is-object-key-in.type';
import { IsObjectKeys } from '../type/is-object-keys.type';
import { IsPrimitive } from '../type/is-primitive.type';
import { IsRegExp } from '../type/is-regexp.type';
import { IsString } from '../type/is-string.type';
import { IsStringLength } from '../type/is-string-length.type';
import { IsStringObject } from '../type/is-string-object.type';
import { IsStringType } from '../type/is-string-type.type';
import { IsSymbol } from '../type/is-symbol.type';
import { IsTrue } from '../type/is-true.type';
import { IsType } from '../type/is-type.type';
import { IsUndefined } from '../type/is-undefined.type';
/**
 * Export: Interface.
 * Object with prefixed `is` functions.
 */
export interface Is {
  array: IsArray;
  bigInt: IsBigInt;
  bigint: IsBigInt;
  boolean: IsBoolean;
  booleanObject: IsBooleanObject;
  booleanType: IsBooleanType;
  class: IsClass;
  date: IsDate; // From 4.2.0
  defined: IsDefined;
  false: IsFalse; // From `4.2.0`
  function: IsFunction;
  instance: IsInstance;
  key: IsKey;
  not: IsNot;
  null: IsNull;
  number: IsNumber;
  numberBetween: IsNumberBetween; // From `4.2.0`
  numberObject: IsNumberObject;
  numberType: IsNumberType;
  object: IsObject;
  objectKey: IsObjectKey;
  objectKeyIn: IsObjectKeyIn;
  objectKeys: IsObjectKeys;
  primitive: IsPrimitive;
  regexp: IsRegExp; // From 4.2.0
  string: IsString;
  stringLength: IsStringLength;
  stringObject: IsStringObject;
  stringType: IsStringType;
  symbol: IsSymbol;
  true: IsTrue; // From 4.2.0
  type: IsType;
  undefined: IsUndefined;
}
