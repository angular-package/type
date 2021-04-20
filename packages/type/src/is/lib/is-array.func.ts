// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsArray } from '../type/is-array.type';
/**
 * Checks if any `value` is an `Array`, `Array` instance and `object` type.
 * @param value Any `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is an `Array`.
 */
export const isArray: IsArray = <Type>(value: any): value is Array<Type> =>
  typeOf(value) === 'array' &&
  Array.isArray(value) === true &&
  value instanceof Array === true &&
  typeof value === 'object';
