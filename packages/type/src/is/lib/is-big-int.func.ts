import { IsBigInt } from '../type/is-big-int.type';
/**
 * Checks if any `value` is a `'bigint'` type.
 * @param value Any `value` to check if it's a `'bigint'` type.
 * @returns boolean
 */
export const isBigInt: IsBigInt = (value: any): value is bigint => typeof value === 'bigint';
