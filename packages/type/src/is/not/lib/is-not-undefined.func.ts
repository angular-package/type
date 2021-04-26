// Function.
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotUndefined } from '../type/is-not-undefined.type';
/**
 * Checks if an unknown `value` is NOT an `undefined` type and NOT equal to `undefined`.
 * @param value An unknown `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is not `undefined`.
 */
export const isNotUndefined: IsNotUndefined = (value: unknown): boolean =>
  typeOf(value) !== 'undefined' &&
  typeof value !== 'undefined' &&
  value !== undefined;
