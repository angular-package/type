// Function.
import { guardObject } from './guard-object.func';
import { isKey } from '../../is/lib/is-key.func';
// Type.
import { GuardObjectKey } from '../type/guard-object-key.type';
/**
 * Guard the `value` to be an `object` of a generic `Obj` type that contains the `key` property of the `Key` type.
 * @param value A generic `Obj` type `value` that contains the `key` property to guard.
 * @param key A `Key` type name of the property that the `object` contains.
 * @returns A `boolean` indicating whether or not the `value` is an `object` of a generic `Obj` containing the `Key`.
 */
export const guardObjectKey: GuardObjectKey = <Obj, Key extends keyof Obj>(value: Obj, key: Key): value is Obj =>
  guardObject<Obj>(value) ? isKey(key) ? key in value : true : false;
