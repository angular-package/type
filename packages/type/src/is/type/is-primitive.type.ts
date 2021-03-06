import { Primitives } from '../../lib/primitives.type';
export type IsPrimitive = <Type>(value: any, type: Primitives) => value is Type;
