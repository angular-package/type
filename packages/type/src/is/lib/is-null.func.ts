import { IsNull } from '../type/is-null.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is an `'object'` type and equal to `null`.
 * @param value Any `value` to check if it's a `null` value and an `'object'` type.
 * @returns boolean
 */
export const isNull: IsNull = (value: any): value is null =>
  typeOf(value) === 'null' &&
  typeof value === 'object' &&
  value === null;
