import { IsArray } from '../type/is-array.type';
import { IsBoolean } from '../type/is-boolean.type';
import { IsBigInt } from '../type/is-big-int.type';
import { IsDefined } from '../type/is-defined.type';
import { IsFunction } from '../type/is-function.type';
import { IsNot } from '../not/interface/is-not.interface';
import { IsNull } from '../type/is-null.type';
import { IsNumber } from '../type/is-number.type';
import { IsObject } from '../type/is-object.type';
import { IsPrimitive } from '../type/is-primitive.type';
import { IsString } from '../type/is-string.type';
import { IsSymbol } from '../type/is-symbol.type';
import { IsType } from '../type/is-type.type';
import { IsUndefined } from '../type/is-undefined.type';
import { IsInstance } from '../type/is-instance.type';

export interface Is {
  array: IsArray;
  bigInt: IsBigInt;
  boolean: IsBoolean;
  defined: IsDefined;
  function: IsFunction;
  instance: IsInstance;
  not: IsNot;
  null: IsNull;
  number: IsNumber;
  object: IsObject;
  primitive: IsPrimitive;
  string: IsString;
  symbol: IsSymbol;
  type: IsType;
  undefined: IsUndefined;
}
