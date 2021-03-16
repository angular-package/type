import { IsNotNumber } from '../type/is-not-number.type';
import { typeOf } from '../../../lib/type-of.func';
/**
 * Checks if an unknown `value` is NOT a `'number'` type and NOT an instance of `Number`.
 * @param value An unknown value to check if it's NOT a `'number'` type, and NOT an instance of `Number`.
 * @returns boolean
 */
export const isNotNumber: IsNotNumber = (value: any): boolean =>
  typeOf(value) !== 'number' &&
  typeof value !== 'number' &&
  isFinite(value) === false &&
  value instanceof Number === false;
