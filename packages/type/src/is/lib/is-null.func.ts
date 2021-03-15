import { IsNull } from '../type/is-null.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is a `'object'` type and equal `null`.
 * @param value Any `value` to check if it's a `null` value and `'object'` type.
 * @returns boolean
 */
export const isNull: IsNull = (value: any): value is null =>
  typeOf(value) === 'null' &&
  typeof value === 'object' &&
  value === null;
