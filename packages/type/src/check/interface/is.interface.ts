import { IsArray } from '../type/is-array.type';
import { IsFunction } from '../type/is-function.type';
import { IsNumber } from '../type/is-number.type';
import { IsObject } from '../type/is-object.type';
import { IsPrimitive } from '../type/is-primitive.type';
import { IsString } from '../type/is-string.type';
import { IsType } from '../type/is-type.type';
import { IsUndefined } from '../type/is-undefined.type';
import { IsBoolean } from '../type/is-boolean.type';

export interface Is {
  array: IsArray;
  boolean: IsBoolean;
  function: IsFunction;
  number: IsNumber;
  object: IsObject;
  primitive: IsPrimitive;
  string: IsString;
  type: IsType;
  undefined: IsUndefined;
}
