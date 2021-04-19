
import { GuardArray } from '../type/guard-array.type';
import { GuardFunction } from '../type/guard-function.type';
import { GuardNumber } from '../type/guard-number.type';
import { GuardObjectKey } from '../type/guard-object-key.type';
import { GuardPrimitive } from '../type/guard-primitive.type';
import { GuardString } from '../type/guard-string.type';
import { GuardType } from '../type/guard-type.type';
import { GuardObject } from '../type/guard-object.type';
import { GuardKey } from '../type/guard-key.type';

export interface GuardIs {
  array: GuardArray;
  function: GuardFunction;
  key: GuardKey;
  // TODO: Guard not
  // not: GuardNotIs;
  number: GuardNumber;
  object: GuardObject;
  objectKey: GuardObjectKey;
  primitive: GuardPrimitive;
  string: GuardString;
  type: GuardType;
}
