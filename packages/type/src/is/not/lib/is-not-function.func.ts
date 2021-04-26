// Function.
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotFunction } from '../type/is-not-function.type';
/**
 * Checks if an unknown `value` is NOT a `function` type and NOT an instance of `Function`.
 * @param value An unknown `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is not a `function`.
 */
export const isNotFunction: IsNotFunction = (value: unknown): boolean =>
  typeOf(value) !== 'function' &&
  typeof value !== 'function' &&
  value instanceof Function === false;
