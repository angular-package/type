// Function.
import { guardArray } from './guard-array.func';
import { guardBigInt } from './guard-big-int.func';
import { guardBoolean } from './guard-boolean.func';
import { guardFunction } from './guard-function.func';
import { guardInstance } from './guard-instance.func';
import { guardKey } from './guard-key.func';
import { guardNull } from './guard-null.func';
import { guardNumber } from './guard-number.func';
import { guardObject } from './guard-object.func';
import { guardObjectKey } from './guard-object-key.func';
import { guardPrimitive } from './guard-primitive.func';
import { guardString } from './guard-string.func';
import { guardSymbol } from './guard-symbol.func';
import { guardType } from './guard-type.func';
import { guardUndefined } from './guard-undefined.func';
// Interface.
import { GuardIs } from '../interface/guard-is.interface';
// `guardIs`.
export const guardIs: GuardIs = {
  array: guardArray,
  bigint: guardBigInt,
  boolean: guardBoolean,
  function: guardFunction,
  instance: guardInstance,
  key: guardKey,
  number: guardNumber,
  null: guardNull,
  object: guardObject,
  objectKey: guardObjectKey,
  primitive: guardPrimitive,
  string: guardString,
  symbol: guardSymbol,
  type: guardType,
  undefined: guardUndefined
};
