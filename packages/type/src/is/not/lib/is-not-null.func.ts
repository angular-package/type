// Function.
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotNull } from '../type/is-not-null.type';
/**
 * Checks if an unknown `value` is NOT a `null` type and NOT equal to `null`.
 * @param value An unknown `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is not `null`.
 */
export const isNotNull: IsNotNull = (value: unknown): boolean =>
  typeOf(value) !== 'null' &&
  value !== null;
