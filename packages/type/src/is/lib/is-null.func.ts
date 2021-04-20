// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsNull } from '../type/is-null.type';
/**
 * Checks if any `value` is an `object` type and equal to `null`.
 * @param value Any `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is `null`.
 */
export const isNull: IsNull = (value: any): value is null =>
  typeOf(value) === 'null' &&
  typeof value === 'object' &&
  value === null;
