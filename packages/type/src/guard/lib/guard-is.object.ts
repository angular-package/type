import { GuardIs } from '../interface/guard-is.interface';
import { guardArray } from './guard-array.func.type';
import { guardFunction } from './guard-function.func';
import { guardNumber } from './guard-number.func';
import { guardObject } from './guard-object.func';
import { guardObjectKey } from './guard-object-key.func';
import { guardPrimitive } from './guard-primitive.func';
import { guardString } from './guard-string.func';
import { guardType } from './guard-type.func';

export const guardIs: GuardIs = {
  // TODO: add other guards etc. boolean, null, undefined
  array: guardArray,
  function: guardFunction,
  number: guardNumber,
  objectKey: guardObjectKey,
  object: guardObject,
  primitive: guardPrimitive,
  string: guardString,
  type: guardType
};
