import { Constructor } from '../../type/constructor.type';
import { IsInstance } from '../type/is-instance.type';
import { isString } from './is-string.func';
import { isObject } from './is-object.func';
/**
 * Checks if any `value` is a generic `Obj` type `constructor` instance and is an `Object`.
 * @param value Any generic `Obj` type `value` instance to compare with `type` instance.
 * @param instance Creates generic `Obj` type instance to compare with argument `value`.
 */
export const isInstance: IsInstance = <Obj>(value: any, instance: Constructor<Obj>): value is Obj =>
  isObject<Obj>(value) &&
  value instanceof instance === true &&
  isString(instance.prototype.constructor.name);
