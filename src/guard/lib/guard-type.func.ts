// Function.
import { isType } from '../../is/lib/is-type.func';
// Type.
import { GuardType } from '../type/guard-type.type';
import { ResultCallback } from '../../type/result-callback.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
/**
 * Guard the `value` to be the `Type` from a `type` of the `Types`.
 * @param value A `Type` `value`, by default of a generic `T` type detected from the `value` to guard with the `type`.
 * @param type A `string` or generic `Constructor` type from the `Types` to check the `value`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a type from the `Types`.
 */
export const guardType: GuardType = <T extends Type>(
  value: T,
  type: Types<T>,
  callback?: ResultCallback
): value is T => isType<T>(value, type, callback);

