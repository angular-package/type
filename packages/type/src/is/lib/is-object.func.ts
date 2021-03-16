import { isString } from './is-string.func';
import { IsObject } from '../type/is-object.type';
import { isNotNull } from '../not/lib/is-not-null.func';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is a generic `Obj` `'object'` type and `Object` instance with the possibility of containing `key`.
 * Use the `guardObject()` function to type-guard generic object type also.
 * @param value Any `value` to check if it's a generic `'object'` type and `Object` instance.
 * @param [key] Property name to find in argument `value`.
 * @returns boolean
 */
export const isObject: IsObject = <Obj>(value: any, key?: string): value is Obj =>
  typeOf(value) === 'object' &&
  typeof value === 'object' &&
  value instanceof Object === true
    ? isString(key) === true
      ? key in value === true && (value as Obj).hasOwnProperty(key) === true
    : true
  : false;
