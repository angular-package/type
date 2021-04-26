// Function.
import { isArray } from './is-array.func';
import { isKey } from './is-key.func';
import { isObject } from './is-object.func';
// Type.
import { IsObjectKey } from '../type/is-object-key.type';
import { Key } from '../../type/key.type';
/**
 * Checks if any `value` is an `object` with its own specified keys of the `Key` type.
 * @param value Any `value` to check if it contains a specified `key`.
 * @param key A `Key` type or an array of `Key` type to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` has its own specified keys.
 */
export const isObjectKey: IsObjectKey = <Type extends object>(value: any, key: Key | Key[]): value is Type =>
  isObject<Type>(value) ?
    isArray(key) ?
      key.every(k => isKey(k) ? ({}).hasOwnProperty.call(value, k) === true : false)
    : isKey(key) ?
        ({}).hasOwnProperty.call(value, key)
      : false
  : false;
