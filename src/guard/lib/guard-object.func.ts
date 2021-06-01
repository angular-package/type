// Function.
import { isObject } from '../../is/lib/is-object.func';
// Type.
import { GuardObject } from '../type/guard-object.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be an `object` of a generic `Obj` type.
 * @param value An `object` of a generic `Obj` type, by default of type detected from the `value` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is an `object` of a generic `Obj`.
 */
export const guardObject: GuardObject = <Obj extends object>(value: Obj, callback?: ResultCallback): value is Obj =>
  isObject<Obj>(value, callback);
