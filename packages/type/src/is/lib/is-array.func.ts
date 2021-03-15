import { IsArray } from '../type/is-array.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is an `Array` of a generic `Type` type and `Array` instance.
 * Use the `guardArray()` function to type-guard `array` also.
 * @param value Any `value` to check if it's an `Array` of a generic type `Type` and `Array` instance.
 * @returns boolean.
 */
export const isArray: IsArray = <Type>(value: any): value is Array<Type> =>
  Array.isArray(value) === true &&
  value instanceof Array === true &&
  typeof value === 'object' &&
  typeOf(value) === 'array';
