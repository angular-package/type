import { Types } from '../../type/types.type';
export type IsType = <Type>(value: any, type: Types<Type>) => value is Type;
