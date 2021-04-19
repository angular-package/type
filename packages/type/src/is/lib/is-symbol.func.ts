// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsSymbol } from '../type/is-symbol.type';
/**
 * Checks if any `value` is a `'symbol'` type.
 * @param value Any `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is a `symbol`.
 */
export const isSymbol: IsSymbol = (value: any): value is symbol =>
  typeOf(value) === 'symbol' &&
  typeof value === 'symbol';
