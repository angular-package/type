// Function.
import { isObject } from './is-object.func';
import { isString } from './is-string.func';
// Type.
import { Constructor } from '../../type/constructor.type';
import { IsInstance } from '../type/is-instance.type';
import { isFunction } from './is-function.func';
/**
 * Checks if any `value` is an `object` of a generic `Obj` type equal to an `instance` of `Constructor` type.
 * @param value Any `value` to compare with the `instance`.
 * @param instance The name of the generic `Obj` type to create an `instance` to compare with the `value`.
 * @returns  A `boolean` indicating whether or not the `value` is an `instance`.
 */
export const isInstance: IsInstance = <Obj>(value: any, instance: Constructor<Obj>): value is Obj =>
  isObject<Obj>(value) ?
    isFunction(instance) ?
      value instanceof instance === true && isString(instance.prototype.constructor.name)
    : false
  : false;
