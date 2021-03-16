import { IsSymbol } from '../type/is-symbol.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is a `'symbol'` type.
 * Use the`guardSymbol()` function to type-guard `symbol`  also.
 * @param value Any `value` to check if it's a `'symbol'` type.
 * @returns boolean.
 */
export const isSymbol: IsSymbol = (value: any): value is symbol =>
  typeOf(value) === 'symbol' &&
  typeof value === 'symbol';
