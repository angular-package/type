import { IsNotNull } from '../type/is-not-null.type';
import { typeOf } from '../../../lib/type-of.func';
/**
 * Checks if an unknown `value` is NOT a `'null'` type and NOT equal to `null`.
 * @param value An unknown `value` to check if it's NOT a `'null'` type and NOT equal to `null`.
 * @returns boolean
 */
export const isNotNull: IsNotNull = (value: unknown): boolean =>
  typeOf(value) !== 'null' &&
  value !== null;
