// Type.
import { IsNotDefined } from '../type/is-not-defined.type';
import { typeOf } from '../../../lib/type-of.func';

/**
 * Checks if an unknown `value` is a `'undefined'` type and is equal to `undefined`.
 * @param value An unknown `value` to check if it's an `'undefined'` type and is equal to `undefined`.
 * @returns boolean.
 */
export const isNotDefined: IsNotDefined = (value: unknown): boolean =>
  typeOf(value) === 'undefined' &&
  typeof value === 'undefined' &&
  value === undefined;
