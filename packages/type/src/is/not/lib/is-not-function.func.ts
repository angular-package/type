import { IsNotFunction } from '../type/is-not-function.type';
import { typeOf } from '../../../lib/type-of.func';
/**
 * Checks if an unknown `value` is NOT a `'function'` type and NOT an instance of `Function`.
 * @param value An unknown `value` to check if it's NOT a `'function'` type and NOT an instance of `Function`.
 * @returns boolean.
 */
export const isNotFunction: IsNotFunction = (value: unknown): boolean =>
  typeOf(value) !== 'function' &&
  typeof value !== 'function' &&
  value instanceof Function === false;
