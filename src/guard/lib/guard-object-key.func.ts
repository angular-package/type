// Function.
import { isObjectKey } from '../../is/lib/is-object-key.func';
// Type.
import { GuardObjectKey } from '../type/guard-object-key.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be an `object` of a generic `Obj` type that contains the `key`.
 * @param value An `object` of a generic `Obj` type that contains the `key`, by default of type detected from the `value` - to guard.
 * @param key A key of `Obj` or an array of keys of `Obj` type as the name of the property that the `value` contains.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is an `object` of a generic `Obj` containing the `key`.
 */
export const guardObjectKey: GuardObjectKey = <Obj extends object>(
  value: Obj,
  key: keyof Obj | (keyof Obj)[],
  callback?: ResultCallback
): value is Obj => isObjectKey<Obj>(value, key, callback);
