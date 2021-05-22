// Function.
import { isObjectKey } from '../../is/lib/is-object-key.func';
// Type.
import { GuardObjectKey } from '../type/guard-object-key.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be an `object` of a generic `Obj` type that contains the `key`.
 * @param value A generic `Obj` type `value` that contains the `key` to guard.
 * @param key A key of `Obj` or an array key of `Obj` type as the name of the property that the `value` contains.
 * @param callback An optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is an `object` of a generic `Obj` containing the `key`.
 */
export const guardObjectKey: GuardObjectKey =
  <Obj = object>(value: Obj, key: keyof Obj | (keyof Obj)[], callback?: ResultCallback): value is Obj =>
    isObjectKey<Obj>(value, key, callback);
