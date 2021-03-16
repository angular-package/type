import { IsNot } from '../interface/is-not.interface';
import { isNotBoolean } from './is-not-boolean.func';
import { isNotNumber } from './is-not-number.func';
import { isNotUndefined } from './is-not-undefined.func';
import { isNotNull } from './is-not-null.func';
import { isNotString } from './is-not-string.func';
import { isNotFunction } from './is-not-function.func';
import { isNotDefined } from './is-not-defined.func';

export const isNot: Partial<IsNot> = {
  // TODO array: isArray,
  // TODO bigInt: isBigInt,
  boolean: isNotBoolean,
  defined: isNotDefined,
  function: isNotFunction,
  null: isNotNull,
  number: isNotNumber,
  // TODO object: isObject,
  // TODO primitive: isPrimitive,
  string: isNotString,
  // TODO symbol: isSymbol,
  // TODO type: isType,
  undefined: isNotUndefined
};
