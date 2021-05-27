import { IsNotBoolean } from '../type/is-not-boolean.type';
import { IsNotNumber } from '../type/is-not-number.type';
import { IsNotUndefined } from '../type/is-not-undefined.type';
import { IsNotNull } from '../type/is-not-null.type';
import { IsNotString } from '../type/is-not-string.type';
import { IsNotFunction } from '../type/is-not-function.type';
import { IsNotDefined } from '../type/is-not-defined.type';

export interface IsNot {
  // array: IsArray;
  // bigInt: IsBigInt;
  boolean: IsNotBoolean;
  defined: IsNotDefined;
  function: IsNotFunction;
  null: IsNotNull;
  number: IsNotNumber;
  // object: IsObject;
  // primitive: IsPrimitive;
  string: IsNotString;
  // symbol: IsSymbol;
  // type: IsType;
  undefined: IsNotUndefined;
}
