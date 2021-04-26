// Function.
import { isFunction } from '../../is/lib/is-function.func';
// Type.
import { GuardFunction } from '../type/guard-function.type';
import { Func } from '../../type/func.type';
/**
 * Guard the `value` to be a `Func` type.
 * @param value Type `Func` `value` to guard.
 * @returns A `boolean` indicating whether or not the `value` is a `Func` type.
 */
export const guardFunction: GuardFunction = (value: Func): value is Func => isFunction(value);
