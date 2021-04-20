// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsDefined } from '../type/is-defined.type';
/**
 * Checks if an unknown `value` is NOT an `undefined` type and is NOT equal to `undefined`.
 * @param value An unknown `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is defined.
 */
export const isDefined: IsDefined = (value: unknown): boolean =>
  typeOf(value) !== 'undefined' &&
  typeof value !== 'undefined' &&
  value !== undefined;
