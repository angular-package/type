// Function.
import { isClass } from '../../is/lib/is-class.func';
// Type.
import { GuardClass } from '../type/guard-class.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be a generic `Class` type of `class`.
 * @param value A `Function` type `value`, by default of a generic `Class` type detected from the `value` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a generic `class`.
 */
// tslint:disable-next-line: ban-types
export const guardClass: GuardClass = <Class extends Function>(
  value: Class,
  callback?: ResultCallback
): value is Class => isClass<Class>(value, callback);
