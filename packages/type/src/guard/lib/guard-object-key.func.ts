// Function.
import { isObjectKey } from '../../is/lib/is-object-key.func';
// Type.
import { GuardObjectKey } from '../type/guard-object-key.type';
import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be an `object` of a generic `Obj` type that contains the `key` property of the `Key` type.
 * @param value A generic `Obj` type `value` that contains the `key` to guard.
 * @param key A `Key` or `Key[]` type name of the property that the `value` contains.
 * @param callback An optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is an `object` of a generic `Obj` containing the `Key`.
 */
export const guardObjectKey: GuardObjectKey = <Obj extends object>(value: Obj, key: Key | Key[], callback?: ResultCallback): value is Obj =>
  isObjectKey<Obj>(value, key, callback);
