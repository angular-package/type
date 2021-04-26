import { Primitives } from '../../type/primitives.type';
import { Primitive } from '../../type/primitive.type';
export type IsPrimitive = <T extends Primitive>(value: any, type: Primitives) => value is T;

