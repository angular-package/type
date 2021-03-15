import { IsDefined } from '../type/is-defined.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if unknown `value` is NOT a `'undefined'` type.
 * @param value Any `value` to check if it's NOT an `'undefined'` type.
 * @returns boolean.
 */
export const isDefined: IsDefined = (value: unknown): boolean =>
  value !== undefined &&
  typeof value !== 'undefined' &&
  typeOf(value) !== 'undefined';
