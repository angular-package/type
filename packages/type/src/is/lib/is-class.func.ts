import { Constructor } from '../../type/constructor.type';
import { IsClass } from '../type/is-class.type';
/**
 * Checks if any `value` is a generic `Obj` type instance by comparing with `type` argument.
 * @param value Any generic type value instance to compare with `type` instance.
 * @param type Creates new instance `Obj` type to compare with argument `value`.
 */
export const isClass: IsClass = <Obj>(value: any, type: Constructor<Obj>): value is Obj => value instanceof type;
