import { Types } from '../../lib/types.type';
export type IsType = <Type>(value: any, type: Types<Type>) => value is Type;
