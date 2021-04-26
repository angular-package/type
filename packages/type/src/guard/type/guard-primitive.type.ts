import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
export type GuardPrimitive = <T extends Primitive>(value: T, type: Primitives) => value is T;
