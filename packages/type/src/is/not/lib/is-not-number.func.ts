// Function.
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotNumber } from '../type/is-not-number.type';
/**
 * Checks if any `value` is NOT a `number` type and NOT an instance of `Number`.
 * @param value An unknown value to check.
 * @returns A `boolean` indicating whether or not the `value` is not a `number`.
 */
export const isNotNumber: IsNotNumber = (value: any): boolean =>
  typeOf(value) !== 'number' &&
  typeof value !== 'number' &&
  isFinite(value) === false &&
  value instanceof Number === false;
