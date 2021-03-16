import { IsNotString } from '../type/is-not-string.type';
import { typeOf } from '../../../lib/type-of.func';
/**
 * Checks if an unknown `value` is NOT a `'string'` type and NOT an instance of `String`.
 * @param value An unknown `value` to check if it's NOT a `'string'` type and NOT an instance of `String`.
 * @returns boolean.
 */
export const isNotString: IsNotString = (value: unknown): boolean =>
  typeOf(value) !== 'string' &&
  typeof value !== 'string' &&
  value instanceof String === false;
