import { Primitives } from '../../type/primitives.type';
export type GuardPrimitive = <Type>(value: Type, type: Primitives) => value is Type;
