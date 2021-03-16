// Type.
import { IsNotBoolean } from '../type/is-not-boolean.type';
import { typeOf } from '../../../lib/type-of.func';
/**
 * Checks if an unknown `value` is NOT a `'boolean'` type, NOT equal to `true` or `false` and NOT instance of `Boolean`.
 * @param value An unknown `value` to check if it's NOT a `'boolean'` type,
 * NOT equal to `true` or `false` and NOT instance of `Boolean`.
 * @returns boolean.
 */
export const isNotBoolean: IsNotBoolean = (value: unknown): boolean =>
  typeOf(value) !== 'boolean' &&
  typeof value !== 'boolean' &&
  value instanceof Boolean === false &&
  value !== true &&
  value !== false;
