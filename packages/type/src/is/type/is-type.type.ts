import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
export type IsType = <T extends Type>(value: any, type: Types<T>) => value is T;
