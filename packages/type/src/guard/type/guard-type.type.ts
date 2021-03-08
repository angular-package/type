import { Types } from '../../type/types.type';
export type GuardType = <Type>(value: Type, type: Types<Type>) => value is Type;
