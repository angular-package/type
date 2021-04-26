import { Types } from '../../type/types.type';
import { Type } from '../../type/type.type';
export type GuardType = <T extends Type>(value: T, type: Types<T>) => value is T;
