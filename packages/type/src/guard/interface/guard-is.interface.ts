import { GuardArray } from '../type/guard-array.type';
import { GuardBigInt } from '../type/guard-big-int.type';
import { GuardBoolean } from '../type/guard-boolean.type';
import { GuardFunction } from '../type/guard-function.type';
import { GuardKey } from '../type/guard-key.type';
import { GuardNumber } from '../type/guard-number.type';
import { GuardObject } from '../type/guard-object.type';
import { GuardObjectKey } from '../type/guard-object-key.type';
import { GuardPrimitive } from '../type/guard-primitive.type';
import { GuardString } from '../type/guard-string.type';
import { GuardType } from '../type/guard-type.type';
import { GuardInstance } from '../type/guard-instance.type';
import { GuardNull } from '../type/guard-null.type';
import { GuardSymbol } from '../type/guard-symbol.type';
import { GuardUndefined } from '../type/guard-undefined.type';

export interface GuardIs {
  array: GuardArray;
  bigint: GuardBigInt;
  boolean: GuardBoolean;
  function: GuardFunction;
  instance: GuardInstance;
  key: GuardKey;
  null: GuardNull;
  number: GuardNumber;
  object: GuardObject;
  objectKey: GuardObjectKey;
  primitive: GuardPrimitive;
  string: GuardString;
  symbol: GuardSymbol;
  type: GuardType;
  undefined: GuardUndefined;
}
