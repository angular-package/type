// Function.
import { isNumber } from '../../is/lib/is-number.func';
// Type.
import { GuardNumber } from '../type/guard-number.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be a `number`.
 * @param value A `number` type `value` to guard.
 * @param callback Optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `number`.
 */
export const guardNumber: GuardNumber = (value: number, callback?: ResultCallback): value is number =>
  isNumber(value, callback);
