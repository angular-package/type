// Function.
import { isArray } from './is-array.func';
import { isKey } from './is-key.func';
// Type.
import { IsObjectKeys } from '../type/is-object-keys.type';
import { Key } from '../../type/key.type';
import { isObject } from './is-object.func';
/**
 * Checks if any `value` is an `object` of a generic `Type` with some of its own specified `keys`.
 * @param value Any `value` to check if it contains some of the specified `keys`.
 * @param keys A rest parameter key of `Type` or an array of keys of `Type` to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` is an `object` with some of its own specified keys.
 */
export const isObjectKeys: IsObjectKeys = <Type = object>(
  value: any,
  ...keys: (Key | Array<Key>)[]
): value is Type =>
  isObject<Type>(value) ?
    keys.some(key =>
      isArray(key) ?
        key.every(k => isKey(k) ? ({}).hasOwnProperty.call(value, k) === true : false)
        : isKey(key) ?
          ({}).hasOwnProperty.call(value, key) === true
          : false)
    : false;
