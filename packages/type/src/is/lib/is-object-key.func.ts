// Function.
import { isArray } from './is-array.func';
import { isKey } from './is-key.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsObjectKey } from '../type/is-object-key.type';
import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` with its own specified `key` of the `Key` type.
 * @param value Any `value` to check if it contains a specified `key`.
 * @param key A `Key` type or an array of `Key` type to check the `value`.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is an `object` with its own specified keys.
 */
export const isObjectKey: IsObjectKey = <Type = object>(
  value: any,
  key: Key | Key[],
  callback: ResultCallback = resultCallback
): value is Type =>
  callback(
    isObject<Type>(value) ?
      isArray(key) ?
        key.every(k => isKey(k) ? ({}).hasOwnProperty.call(value, k) === true : false)
      : isKey(key) ?
          ({}).hasOwnProperty.call(value, key)
        : false
    : false,
    value
  );
