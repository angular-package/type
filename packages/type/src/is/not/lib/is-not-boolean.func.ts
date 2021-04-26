// Function.
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotBoolean } from '../type/is-not-boolean.type';
/**
 * Checks if an unknown `value` is NOT a `boolean` type, NOT equal to `true` or `false` and NOT instance of `Boolean`.
 * @param value An unknown `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is not `boolean`.
 */
export const isNotBoolean: IsNotBoolean = (value: unknown): boolean =>
  typeOf(value) !== 'boolean' &&
  typeof value !== 'boolean' &&
  value instanceof Boolean === false &&
  value !== true &&
  value !== false;
