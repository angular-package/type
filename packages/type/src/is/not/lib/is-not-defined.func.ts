// Function.
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotDefined } from '../type/is-not-defined.type';
/**
 * Checks if an unknown `value` is a `undefined` type and is equal to `undefined`.
 * @param value An unknown `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is not defined.
 */
export const isNotDefined: IsNotDefined = (value: unknown): boolean =>
  typeOf(value) === 'undefined' &&
  typeof value === 'undefined' &&
  value === undefined;
