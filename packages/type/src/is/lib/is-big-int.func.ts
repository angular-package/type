// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsBigInt } from '../type/is-big-int.type';
/**
 * Checks if any `value` is a `bigint` type.
 * @param value Any `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is a `bigint`.
 */
export const isBigInt: IsBigInt = (value: any): value is bigint =>
  typeOf(value) === 'bigint' &&
  typeof value === 'bigint';
