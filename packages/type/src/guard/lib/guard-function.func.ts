import { GuardFunction } from '../type/guard-function.type';
import { isFunction } from '../../is/lib/is-function.func';
import { Func } from '../../type/func.type';
/**
 * Guard the `func` value to be a `Func` type.
 * @param func `Func` type value to guard.
 * @returns boolean.
 */
export const guardFunction: GuardFunction = (func: Func): func is Func => isFunction(func);
