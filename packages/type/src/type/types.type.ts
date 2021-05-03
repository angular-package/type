import { Constructor } from './constructor.type';
import { Primitives } from './primitives.type';
/**
 * Main types as `string` values.
 */
export type Types<Obj> = Constructor<Obj> | 'function' | 'object' | Primitives;
