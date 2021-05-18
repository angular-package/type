// Function.
import { isNumber } from '../../is/lib/is-number.func';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { GuardNumber } from '../type/guard-number.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be any type of a number.
 * @param value An `AnyNumber` type `value` to guard.
 * @param callback An optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `number` type or `Number` object.
 */
export const guardNumber: GuardNumber = <N extends AnyNumber>(value: N, callback?: ResultCallback): value is N =>
  isNumber(value, callback);
