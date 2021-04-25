// Function.
import { isArray } from './is-array.func';
import { isKey } from './is-key.func';
import { isObject } from './is-object.func';
// Type.
import { IsObjectKey } from '../type/is-object-key.type';
import { Key } from '../../type/key.type';
/**
 * Checks if any `object` has its own specified keys of the `Key` type.
 * @param object Any `object` to check if it contains a specified `key`.
 * @param key `Key` type or an array of `Key` type to check.
 * @returns A `boolean` indicating whether or not the `object` has its own specified keys.
 */
export const isObjectKey: IsObjectKey = <Type = object>(object: any, key: Key | Key[]): object is Type =>
  isObject<Type>(object) ?
    isArray(key) ?
      key.every(k => isKey(k) ? ({}).hasOwnProperty.call(object, k) === true : false)
    : isKey(key) ?
        ({}).hasOwnProperty.call(object, key)
      : false
  : false;
