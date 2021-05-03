// Function.
import { isArray } from '../../is/lib/is-array.func';
// Type.
import { GuardArray } from '../type/guard-array.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be an `Array` of a generic `Type`.
 * @param value A generic `Type` `Array` `value` to guard.
 * @param callback Optional `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is an `Array` of a generic `Type`.
 */
export const guardArray: GuardArray = <Type>(value: Array<Type>, callback?: ResultCallback): value is Array<Type> =>
  isArray<Type>(value, callback);
