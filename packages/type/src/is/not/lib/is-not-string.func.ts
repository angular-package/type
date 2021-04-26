// Function.
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotString } from '../type/is-not-string.type';
/**
 * Checks if an unknown `value` is NOT a `string` type and NOT an instance of `String`.
 * @param value An unknown `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is not a `string`.
 */
export const isNotString: IsNotString = (value: unknown): boolean =>
  typeOf(value) !== 'string' &&
  typeof value !== 'string' &&
  value instanceof String === false;
