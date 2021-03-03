import { isArray } from './is-array.func';
import { isFunction } from './is-function.func';
import { isNumber } from './is-number.func';
import { isObject } from './is-object.func';
import { isPrimitive } from './is-primitive.func';
import { isString } from './is-string.func';
import { isType } from './is-type.func';
import { Is } from '../interface/is-interface';

export const is: Is = {
  array: isArray,
  function: isFunction,
  number: isNumber,
  object: isObject,
  primitive: isPrimitive,
  string: isString,
  type: isType
};
