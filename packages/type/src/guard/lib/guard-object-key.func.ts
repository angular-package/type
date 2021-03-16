import { guardObject } from './guard-object.func';
import { GuardObjectKey } from '../type/guard-object-key.type';
import { isString } from '../../is/lib/is-string.func';
/**
 * Guard the `object` to be a generic `Obj` type and to contains the `key` property.
 * Use `isObject()` function for check ONLY.
 * @param object Generic `Obj` type `value` that contains the `key` property to guard.
 * @param key Name of the property that the `object` contains.
 * @returns boolean
 */
export const guardObjectKey: GuardObjectKey = <Obj, Key extends keyof Obj>(object: Obj, key: Key): object is Obj =>
  guardObject<Obj>(object) ? isString(key) ? key in object : true : false;
