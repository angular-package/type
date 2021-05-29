// Function.
import { isInstance } from '../../is/lib/is-instance.func';
// Type.
import { Constructor } from '../../type/constructor.type';
import { GuardInstance } from '../type/guard-instance.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be an `object` of a generic `Obj` type and an instance of `Constructor` type.
 * @param value A generic `Obj` type `value` to be an instance of the `constructor`.
 * @param constructor A class or function that specifies the type of the `constructor`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is an `instance` of a generic `Obj`.
 */
export const guardInstance: GuardInstance =
  <Obj extends object>(value: Obj, constructor: Constructor<Obj>, callback?: ResultCallback): value is Obj =>
    isInstance<Obj>(value, constructor, callback);
