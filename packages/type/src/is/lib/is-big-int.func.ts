import { IsBigInt } from '../type/is-big-int.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is a `'bigint'` type.
 * @param value Any `value` to check if it's a `'bigint'` type.
 * @returns boolean
 */
export const isBigInt: IsBigInt = (value: any): value is bigint =>
  typeOf(value) === 'bigint' &&
  typeof value === 'bigint';
