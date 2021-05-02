import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
export type GuardPrimitive = <T extends Primitive>(value: T, type: Primitives, callback?: ResultCallback) => value is T;
