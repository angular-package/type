import { IsArray } from '../type/is-array.type';
import { IsFunction } from '../type/is-function.type';
import { IsNumber } from '../type/is-number.type';
import { IsObject } from '../type/is-object.type';
import { IsPrimitive } from '../type/is-primitive.type';
import { IsString } from '../type/is-string.type';
import { IsType } from '../type/is-type.type';
import { IsUndefined } from '../type/is-undefined.type';
import { IsBoolean } from '../type/is-boolean.type';
import { IsBigInt } from '../type/is-big-int.type';
import { IsSymbol } from '../type/is-symbol.type';

export interface Is {
  array: IsArray;
  bigInt: IsBigInt;
  boolean: IsBoolean;
  function: IsFunction;
  number: IsNumber;
  object: IsObject;
  primitive: IsPrimitive;
  symbol: IsSymbol;
  string: IsString;
  type: IsType;
  undefined: IsUndefined;
}
