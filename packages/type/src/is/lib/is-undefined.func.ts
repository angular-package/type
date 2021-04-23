// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsUndefined } from '../type/is-undefined.type';
/**
 * Checks if any `value` is an `undefined` type and equal to `undefined`.
 * @param value Any `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is `undefined`.
 */
export const isUndefined: IsUndefined = (value: any): value is undefined =>
  typeOf(value) === 'undefined' &&
  typeof value === 'undefined' &&
  value === undefined;
