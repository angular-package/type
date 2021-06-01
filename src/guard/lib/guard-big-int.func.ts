// Function.
import { isBigInt } from '../../is/lib/is-big-int.func';
// Type.
import { GuardBigInt } from '../type/guard-big-int.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be a `bigint`.
 * @param value A `bigint` type `value` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `bigint`.
 */
export const guardBigInt: GuardBigInt = (value: bigint, callback?: ResultCallback): value is bigint =>
  isBigInt(value, callback);
