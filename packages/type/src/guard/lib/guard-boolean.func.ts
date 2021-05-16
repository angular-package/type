// Function.
import { isBoolean } from '../../is/lib/is-boolean.func';
// Type.
import { AnyBoolean } from '../../type/any-boolean.type';
import { GuardBoolean } from '../type/guard-boolean.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be any type of a boolean.
 * @param value An `AnyBoolean` type `value` to guard.
 * @param callback An optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `boolean` type or `Boolean` object.
 */
export const guardBoolean: GuardBoolean = <B extends AnyBoolean>(value: B, callback?: ResultCallback): value is B =>
  isBoolean(value, callback);
