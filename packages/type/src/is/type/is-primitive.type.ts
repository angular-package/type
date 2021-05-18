import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsPrimitive = <T extends Primitive>(value: any, type: Primitives, callback?: ResultCallback) => value is T;
