// Function.
import { isInstance } from '../../is/lib/is-instance.func';
// Type.
import { Constructor } from '../../type/constructor.type';
import { GuardInstance } from '../type/guard-instance.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to guard the `value` to be an `object` of a generic `Obj` type equal to an `instance`.
 * @param value An `Obj` type `value` to compare with the `instance`.
 * @param instance A generic `Obj` `Constructor` type to create an `instance` to compare with the `value`.
 * @param callback Optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `symbol`.
 */
export const guardInstance: GuardInstance = <Obj>(value: Obj, instance: Constructor<Obj>, callback?: ResultCallback): value is Obj =>
  isInstance<Obj>(value, instance, callback);
