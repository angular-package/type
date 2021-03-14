import { isString } from './is-string.func';
import { IsObject } from '../type/is-object.type';
import { isNotNull } from '../not/lib/is-not-null.func';
/**
 * Checks if any `value` is a `Obj` generic `'object'` type and `Object` instance with a possible existing `key` in it.
 * Use the `guardObject()` function to type-guard generic object type also.
 * @param value Any `value` to check if it's a generic `'object'` type and `Object` instance.
 * @param [key] Property name to find in argument `value`.
 * @returns boolean
 */
export const isObject: IsObject = <Obj>(value: any, key?: string): value is Obj =>
  isNotNull(value) && typeof value === 'object' && value instanceof Object ?
    isString(key) ?
      key in value && (value as Obj).hasOwnProperty(key) :
    true :
  false;
