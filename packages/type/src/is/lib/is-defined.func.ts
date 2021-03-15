import { IsDefined } from '../type/is-defined.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if unknown `value` is NOT a `'undefined'` type and is not `undefined`.
 * @param value Unknown `value` to check if it's NOT an `'undefined'` type and is not `undefined`.
 * @returns boolean.
 */
export const isDefined: IsDefined = (value: unknown): boolean =>
  typeOf(value) !== 'undefined' &&
  typeof value !== 'undefined' &&
  value !== undefined;
