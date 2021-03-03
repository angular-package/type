import { Guard } from '../interface/guard-interface';
import { guardArray } from './guard-array.func.type';
import { guardFunction } from './guard-function.func';
import { guardNumber } from './guard-number.func';
import { guardObjectKey } from './guard-object-key.func';
import { guardPrimitive } from './guard-primitive.func';
import { guardString } from './guard-string.func';
import { guardType } from './guard-type.func';

export const guard: Guard = {
  array: guardArray,
  function: guardFunction,
  number: guardNumber,
  objectKey: guardObjectKey,
  object: guardObjectKey,
  primitive: guardPrimitive,
  string: guardString,
  type: guardType
};
