// Function.
import { isString } from '../../is/lib/is-string.func';
// Type.
import { AnyString } from '../../type/any-string.type';
import { GuardString } from '../type/guard-string.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be any type of a string.
 * @param value An `AnyString` type `value`, by default of a generic `S` type detected from the `value` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `string` type or `String` object.
 */
export const guardString: GuardString = <S extends AnyString>(value: S, callback?: ResultCallback): value is S =>
  isString(value, callback);
