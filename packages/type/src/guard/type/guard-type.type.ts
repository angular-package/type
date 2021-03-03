import { Types } from '../../lib/types.type';
export type GuardType = <Type>(value: Type, type: Types<Type>) => value is Type;