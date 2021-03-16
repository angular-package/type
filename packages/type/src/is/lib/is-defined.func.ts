import { IsDefined } from '../type/is-defined.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if an unknown `value` is NOT an `'undefined'` type and is not equal to `undefined`.
 * @param value An unknown `value` to check if it's NOT an `'undefined'` type and is not equal to `undefined`.
 * @returns boolean.
 */
export const isDefined: IsDefined = (value: unknown): boolean =>
  typeOf(value) !== 'undefined' &&
  typeof value !== 'undefined' &&
  value !== undefined;
