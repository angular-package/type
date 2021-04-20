// Function.
import { isKey } from './is-key.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsObject } from '../type/is-object.type';
import { Key } from '../../type/key.type';
/**
 * Checks if any `value` is a generic `Obj` `object` type and `Object` instance with the possibility of containing `key`.
 * @param value Any `value` to check.
 * @param key Property name to find in `value`.
 * @returns A `boolean` indicating whether or not the `value` is an `object`.
 */
export const isObject: IsObject = <Obj = object>(value: any, key?: Key): value is Obj =>
  (typeOf(value) === 'object' && typeof value === 'object' && value instanceof Object === true)
    ? isKey(key)
      ? key in value
    : true
  : false;
