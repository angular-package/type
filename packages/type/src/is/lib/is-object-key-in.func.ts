// Function.
import { isArray } from './is-array.func';
import { isKey } from './is-key.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsObjectKeyIn } from '../type/is-object-key-in.type';
import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `Object` with the `key` of the `Key` type by using the `in` operator.
 * @param value Any `value` to check if it contains a specified `key`.
 * @param key A `Key` type or an array of `Key` type to check in the `value`.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is an `object` with the keys.
 */
export const isObjectKeyIn: IsObjectKeyIn = <Type extends object>(
  value: any,
  key: Key | Key[],
  callback: ResultCallback = resultCallback
): value is Type =>
  callback(
    isObject<Type>(value) ?
      isArray(key) ?
        key.every(k => isKey(k) ? k in value : false)
      : isKey(key) ?
          key in value
        : false
    : false,
    value
  );
