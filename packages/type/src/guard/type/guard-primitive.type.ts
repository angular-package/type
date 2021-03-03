import { Primitives } from '../../lib/primitives.type';
export type GuardPrimitive = <Type>(value: Type, type: Primitives) => value is Type;
