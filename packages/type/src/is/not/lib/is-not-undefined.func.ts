import { IsNotUndefined } from '../type/is-not-undefined.type';
import { typeOf } from '../../../lib/type-of.func';
/**
 * Checks if an unknown `value` is NOT an `'undefined'` type and NOT equal to `undefined`.
 * @param value An Unknown `value` to check if it's NOT an `'undefined'` type and NOT equal to `undefined`.
 * @returns boolean.
 */
export const isNotUndefined: IsNotUndefined = (value: unknown): boolean =>
  typeOf(value) !== 'undefined' &&
  typeof value !== 'undefined' &&
  value !== undefined;
