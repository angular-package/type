import { IsUndefined } from '../type/is-undefined.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is an `'undefined'` type and equal `undefined`.
 * @param value Any `value` to check if it's an `'undefined'` type and equal `undefined`.
 * @returns boolean.
 */
export const isUndefined: IsUndefined = (value: any): value is undefined =>
  value === undefined &&
  typeof value === 'undefined' &&
  typeOf(value) === 'undefined';
